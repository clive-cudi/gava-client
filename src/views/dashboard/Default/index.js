import { useMemo } from 'react';
import { BusinessesTable } from './BusinessesTable';
import { Typography, Box } from '@mui/material';
import { Queries } from 'utils/queries';
import { useMutation, useQuery } from 'react-query';
import { useEffect, useState } from 'react';
import { useSearch } from 'hooks/useSearch';
import { useLoading } from 'hooks/useLoading';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
  // eslint-disable
  const [businessData, setBusinessData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const { getAllBusinesses, getAllPayments, getSingleBusiness, validatePaymentWithCode } = Queries();
  const { data: all_businesses, isLoading: all_businesses_loading } = useQuery({
    queryKey: ['all_businesses'],
    queryFn: getAllPayments
  });
  const { startLoading, stopLoading } = useLoading();
  const { search, deregisterCurrentEvent } = useSearch();
  const getBusinessByID = useMutation({
    mutationKey: ['business_by_id'],
    mutationFn: validatePaymentWithCode,
    onMutate: () => {
      console.log(`fetching`);
      startLoading();
    },
    onSuccess: ({ data }) => {
      console.log('done');
      console.log(data);
      setSearchData(data);
    },
    onError: (e) => {
      console.log(e);
    },
    onSettled: ({ data }) => {
      console.log(`settled`);
      console.log(data);
      stopLoading();
    }
  });

  useEffect(() => {
    if (all_businesses && !all_businesses_loading) {
      setBusinessData(all_businesses?.users ?? []);
    }
  }, [all_businesses_loading]);

  useEffect(() => {
    if (search.evSubscription === 'submit') {
      // GET for search
      console.log(`submitting: ${search.value}`);

      deregisterCurrentEvent(search.evSubscription);
      getBusinessByID.mutate({ business_code: search.value });
    }
  }, [search.evSubscription]);

  return (
    <Box>
      {searchData?.length ? (
        <>
          <Box
            sx={{
              padding: '10px 0px 10px 0px'
            }}
          >
            <Typography variant={'h2'}>Search Results</Typography>
          </Box>
          <BusinessesTable business_data={searchData} />
        </>
      ) : (
        <Typography
          sx={{
            textDecoration: 'italic',
            textAlign: 'center'
          }}
        >
          No search data
        </Typography>
      )}
      <Box
        sx={{
          padding: '10px 0px 10px 0px'
        }}
      >
        <Typography variant={'h2'}>Businesses</Typography>
      </Box>
      <BusinessesTable business_data={businessData} />;
    </Box>
  );
};

export default Dashboard;
