import type { ComponentProps } from 'react';
import type { ImageProps } from 'react-native';
import { Image, TouchableOpacity } from 'react-native';
import { styles } from './IconButton.style';

interface IIconButtonProps extends ComponentProps<typeof TouchableOpacity> {
  icon: ImageProps;
}

const IconButton = ({ icon, ...rest }: IIconButtonProps) => {
  return (
    <TouchableOpacity {...rest}>
      <Image source={icon} style={styles.container} />
    </TouchableOpacity>
  );
};

export default IconButton;
