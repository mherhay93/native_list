import { useNavigation } from '@react-navigation/native';
import { Image, TouchableOpacity, View } from 'react-native';
import { IUserDetailsQuery } from '../../../types/navigationStacks.ts';
import { UIText } from '../../ui';
import type { IUsersItemProps } from '../types';
import { styles } from './UsersItem.style.ts';

const UsersItem = ({ img, name, email, phone }: IUsersItemProps) => {
  const navigation = useNavigation<{
    navigate: (routeName: 'UserDetails', { email }: IUserDetailsQuery) => void;
  }>();
  const handlePress = () => {
    navigation.navigate('UserDetails', { email });
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <Image style={styles.image} source={{ uri: img }} />
      <View>
        <UIText style={styles.name}>{name}</UIText>
        <UIText>{email}</UIText>
        <UIText>{phone}</UIText>
      </View>
    </TouchableOpacity>
  );
};

export default UsersItem;
