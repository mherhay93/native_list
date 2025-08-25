import { Image, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserByEmail } from '../../../redux/users/selectors.ts';
import { usersReducers } from '../../../redux/users/slice.ts';
import { EditableText, UIText } from '../../ui';
import type { IUserDetailsProps } from '../types';
import { styles } from './UserDetails.style.ts';

const { setUserInUsers } = usersReducers;

const UserDetails = ({ route }: IUserDetailsProps) => {
  const { email } = route?.params ?? {
    email: '',
  };
  const user = useSelector(selectUserByEmail(email));
  const dispatch = useDispatch();
  const handleSave = (key: string, value: string) => {
    if (user) {
      dispatch(setUserInUsers({ ...user, [key]: value }));
    }
  };

  if (!user) {
    return <UIText>No Data</UIText>;
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: user.picture.large }} style={styles.image} />
      <UIText
        style={styles.name}
      >{`${user.name.first} ${user.name.last}`}</UIText>
      <EditableText text={user.phone} onSave={handleSave} />
      <UIText>{user.email}</UIText>
      <UIText>{user.gender}</UIText>
      <UIText>{user.nat}</UIText>
    </View>
  );
};

export default UserDetails;
