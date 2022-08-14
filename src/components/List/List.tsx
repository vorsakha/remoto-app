import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList } from 'react-native';
import { JobsDataTypes } from '../../services/useJobs';
import { dateFormatter } from '../../utils/formatters';
import { Badge, Loading } from '../common';
import {
  BadgesList,
  ListContainer,
  ListItem,
  ListItemDate,
  ListItemTitle,
} from './styles';

interface ListProps {
  refetch: () => void;
  data: JobsDataTypes[] | null;
  loading: boolean;
}

function List({ data, refetch, loading }: ListProps) {
  const { navigate } = useNavigation();

  const keyExtractor = (item: JobsDataTypes) => String(item.id);

  const renderItemBadge = ({ item }: { item: { name: string } }) => (
    <Badge name={item.name} />
  );

  const renderItem = ({ item }: { item: JobsDataTypes }) => (
    <ListItem
      onPress={() =>
        navigate('Details', {
          data: item,
        })
      }
    >
      <ListItemTitle limit>{item?.title}</ListItemTitle>

      <BadgesList>
        <FlatList
          data={item.labels}
          renderItem={renderItemBadge}
          keyExtractor={badge => String(badge.name)}
          horizontal
        />
      </BadgesList>

      <ListItemDate>⏱️ {dateFormatter(item?.created_at).fromNow}</ListItemDate>
    </ListItem>
  );

  return loading ? (
    <Loading />
  ) : (
    <ListContainer>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        onEndReached={refetch}
        onEndReachedThreshold={0.5}
      />
    </ListContainer>
  );
}

export default List;
