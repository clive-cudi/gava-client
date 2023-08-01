import { api } from './axios.config';

export function Queries() {
  const getAllUsers = async () => {
    return (await api.get(`/users/read/all`)).data;
  };

  const getSingleUser = async ({ phone }) => {
    return (await api.get(`/users/read/single/${phone}`)).data;
  };

  const getAllBusinesses = async () => {
    return (await api.get(`/bz/read/all`)).data;
  };

  const getSingleBusiness = async ({ code }) => {
    return (await api.get(`/bz/read/code/${code}`)).data;
  };

  const getAllPayments = async () => {
    return (await api.get(`/payment/read/all`)).data;
  };

  const validatePaymentWithCode = async ({ business_code }) => {
    return (await api.get(`/payment/validate/bcode?id=${business_code ?? ''}`)).data;
  };
  return {
    getAllUsers,
    getSingleUser,
    getAllBusinesses,
    getAllPayments,
    getSingleBusiness,
    validatePaymentWithCode
  };
}
