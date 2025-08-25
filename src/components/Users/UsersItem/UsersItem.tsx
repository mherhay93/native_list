import { Image, Text, TouchableOpacity, View } from 'react-native';
import type { IUsersItemProps } from '../types';
import { styles } from './UsersItem.style.ts';

const UsersItem = ({ name, img, email, phone }: IUsersItemProps) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image style={styles.image} source={{ uri: img }} />
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.text}>{email}</Text>
        <Text style={styles.text}>{phone}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default UsersItem;
