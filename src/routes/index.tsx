import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from './app.routes';
import { JobsDataTypes } from '../services/useJobs';

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      Details: {
        data: JobsDataTypes;
      };
    }
  }
}

export type ParamList = {
  Details: {
    data: JobsDataTypes;
  };
};

export function Routes() {
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  );
}
