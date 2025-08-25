import { useState } from 'react';
import { Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { request } from '../../../helpers/axios';
import { usersReducers } from '../../../redux/users/slice';
import { makeEntities } from '../helpers';
import { DEFAULT_USERS_RESULTS } from '../helpers/constants';

const { setUsers, setUsersEntities, setUI } = usersReducers;

export const useUsersQuery = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  function fetchData() {
    request({
      params: { results: DEFAULT_USERS_RESULTS },
      method: 'GET',
    })
      .then(res => {
        const entities = makeEntities(res.data.results);
        dispatch(setUsersEntities(entities));
        dispatch(setUsers(res.data.results));
        dispatch(setUI({ fetched: true }));
      })
      .catch(err => {
        Alert.alert(err?.message);
      })
      .finally(() => setLoading(false));
  }

  return { loading, fetchData };
};
