import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList } from 'react-native';
import { JobsDataTypes } from '../../services/useJobs';
import {
  dateFormatter,
  iconFormatter,
  tagFormatter,
  titleFormatter,
} from '../../utils/formatters';
import { Loading } from '../common';
import {
  BadgesList,
  BadgesListItem,
  BadgesListItemIcon,
  BadgesListItemTitle,
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
    <BadgesListItem>
      <BadgesListItemIcon
        isEmpty={iconFormatter(tagFormatter(item.name)) === ''}
      >
        {iconFormatter(tagFormatter(item.name))}
      </BadgesListItemIcon>
      <BadgesListItemTitle>{tagFormatter(item.name)}</BadgesListItemTitle>
    </BadgesListItem>
  );

  const renderItem = ({ item }: { item: JobsDataTypes }) => (
    <ListItem
      onPress={() =>
        navigate('Details', {
          data: item,
        })
      }
    >
      <ListItemTitle>{titleFormatter(item?.title)}</ListItemTitle>

      <BadgesList>
        <FlatList
          data={item.labels}
          renderItem={renderItemBadge}
          keyExtractor={badge => badge.name}
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
