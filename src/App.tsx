import React from 'react';
import './App.css';
import {Navigator} from 'routes'
import DateAdapter from '@mui/lab/AdapterLuxon';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

function App() {
  return (
    <LocalizationProvider dateAdapter={DateAdapter}>
      <Navigator />
    </LocalizationProvider>
  );
}

export default App;
