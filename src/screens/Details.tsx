import { RouteProp, useRoute } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import { ParamList } from '../routes';

function Details() {
  const { params } = useRoute<RouteProp<ParamList, 'Details'>>();

  const { data } = params;

  console.log(data);
  return (
    <View>
      <Text>Details</Text>
    </View>
  );
}

export default Details;
