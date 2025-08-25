import { useRoute } from '@react-navigation/native';
import { Image, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserByEmail } from '../../../redux/users/selectors';
import { usersReducers } from '../../../redux/users/slice';
import { EditableText, UIText } from '../../ui';
import { TUserDetailsRouteProp } from '../types';
import { styles } from './UserDetails.style';

const { setUserInUsers } = usersReducers;

const UserDetails = () => {
  const { params } = useRoute<TUserDetailsRouteProp>();
  const { email } = params ?? {
    email: '',
  };
  const user = useSelector(selectUserByEmail(email));
  const dispatch = useDispatch();
  
  const imgSource = user.picture.large
      ? { uri: user.picture.large }
      : require('../../../assets/icons/UserIcon.png');
  
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
      <Image source={imgSource} style={styles.image} />
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
