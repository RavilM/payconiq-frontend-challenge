import React, { FC, SyntheticEvent, useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import { TabContext, TabList } from '@mui/lab';
import { Box, Tab } from '@mui/material';
import './styles.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import { pathMapper, routeMapper } from '../../pages/routes';

export const HeadContainer: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [value, setValue] = useState(pathMapper[location.pathname]);

  useEffect(() => {
    setValue(pathMapper[location.pathname]);
  }, [location]);

  const handleChange = (_: SyntheticEvent, newValue: string) => {
    setValue(newValue);
    // @ts-ignore
    navigate(routeMapper[newValue]);
  };

  return (
    <AppBar color="transparent" elevation={0} position="static">
      <TabContext value={value}>
        <Box
          className="app-container-box"
          sx={{ borderBottom: 1, borderColor: 'divider' }}
        >
          <Box className="logo-container">
            <Typography variant="h6">Currency</Typography>
            <Typography variant="h6">Exchange</Typography>
          </Box>
          <TabList
            aria-label="Tabs"
            className="app-bar-tab-list"
            onChange={handleChange}
          >
            <Tab label="Currency Converter" value="currency-converter" />
            <Tab label="Conversion History" value="conversion-history" />
          </TabList>
          <Button variant="text">LOGOUT</Button>
        </Box>
      </TabContext>
    </AppBar>
  );
};
