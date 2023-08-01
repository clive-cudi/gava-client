import { useSelector } from 'react-redux';

import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

// routing
import Routes from 'routes';

// defaultTheme
import themes from 'themes';

// project imports
import NavigationScroll from 'layout/NavigationScroll';
import { QueryClient, QueryClientProvider } from 'react-query';
import { SearchCtxProvider } from 'context/SearchCtx';
import { LoadingCtxProvider } from 'context/LoadingCtx';

// ==============================|| APP ||============================== //

const App = () => {
  const customization = useSelector((state) => state.customization);
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <SearchCtxProvider>
        <LoadingCtxProvider>
          <StyledEngineProvider injectFirst>
            <ThemeProvider theme={themes(customization)}>
              <CssBaseline />
              <NavigationScroll>
                <Routes />
              </NavigationScroll>
            </ThemeProvider>
          </StyledEngineProvider>
        </LoadingCtxProvider>
      </SearchCtxProvider>
    </QueryClientProvider>
  );
};

export default App;
