import React from 'react';
import './App.css';
import {Navigator} from 'routes'
import DateAdapter from '@mui/lab/AdapterLuxon';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import {GeneralInformationProvider} from './state/generalInformation'
import {ConditionsProvider} from './state/conditions'

function App() {
  return (
    <LocalizationProvider dateAdapter={DateAdapter}>
      <GeneralInformationProvider>
        <ConditionsProvider>
          <Navigator />
        </ConditionsProvider>
      </GeneralInformationProvider>
    </LocalizationProvider>
  );
}

export default App;
