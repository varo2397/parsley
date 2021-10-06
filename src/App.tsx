import React from 'react';
import './App.css';
import {Navigator} from 'routes'
import DateAdapter from '@mui/lab/AdapterLuxon';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import {GeneralInformationProvider} from './state/generalInformation'

function App() {
  return (
    <LocalizationProvider dateAdapter={DateAdapter}>
      <GeneralInformationProvider>
        <Navigator />
      </GeneralInformationProvider>
    </LocalizationProvider>
  );
}

export default App;
