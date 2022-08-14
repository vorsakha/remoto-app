import { RouteProp, useRoute } from '@react-navigation/native';
import React from 'react';
import { Text } from 'react-native';
import { Layout } from '../components';
import { ParamList } from '../routes';

function Details() {
  const { params } = useRoute<RouteProp<ParamList, 'Details'>>();

  const { data } = params;

  console.log(data);
  return (
    <Layout title="Detalhes">
      <Text>Details</Text>
    </Layout>
  );
}

export default Details;
