import { useState } from 'react';
import { Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { request } from '../../../helpers/axios.ts';
import { usersReducers } from '../../../redux/users/slice.ts';
import { DEFAULT_USERS_RESULTS } from '../helpers/constants.ts';

const { setUsers } = usersReducers;

export const useUsersQuery = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  function fetchData() {
    request({
      params: { results: DEFAULT_USERS_RESULTS },
      method: 'GET',
    })
      .then(res => {
        dispatch(setUsers(res.data.results));
      })
      .catch(err => {
        Alert.alert(err?.message);
      })
      .finally(() => setLoading(false));
  }

  return { loading, fetchData };
};
