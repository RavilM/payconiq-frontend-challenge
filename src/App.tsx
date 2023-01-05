import React, { FC, memo } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CurrencyConverterPage } from './pages/CurrencyConverterPage';
import { ConversionHistoryPage } from './pages/ConversionHistoryPage';
import { HeadContainer } from './containers/HeadContainer';

const theme = createTheme({
  palette: {
    primary: {
      main: '#009688',
    },
    text: {
      primary: '#404040',
      secondary: '#404040',
    },
  },
  typography: (palette) => ({
    allVariants: { color: palette.text.primary },
  }),
});

export const App: FC = memo(() => {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <HeadContainer />
          <Routes>
            <Route element={<CurrencyConverterPage />} path="/" />
            <Route
              element={<ConversionHistoryPage />}
              path="conversion-history"
            />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
});
