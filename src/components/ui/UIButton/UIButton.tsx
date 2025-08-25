import type { ComponentProps } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { UIText } from '../index.ts';
import { styles } from './UIButon.style.ts';

interface IUIButtonProps extends ComponentProps<typeof TouchableOpacity> {
  customStyles?: StyleProp<ViewStyle>;
  name: string;
}

const UIButton = ({ customStyles, name, ...rest }: IUIButtonProps) => {
  return (
    <TouchableOpacity style={[styles.container, customStyles]} {...rest}>
      <UIText style={styles.text}>{name}</UIText>
    </TouchableOpacity>
  );
};

export default UIButton;
