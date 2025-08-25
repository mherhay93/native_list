import type { ComponentProps } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { UIText } from '../index';
import { styles } from './UIButon.style';

interface IUIButtonProps extends ComponentProps<typeof TouchableOpacity> {
  customStyles?: StyleProp<ViewStyle>;
  name: string;
}

const UIButton = ({
  customStyles,
  disabled,
  name,
  ...rest
}: IUIButtonProps) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[styles.container, customStyles, disabled && styles.disabled]}
      {...rest}
    >
      <UIText style={styles.text}>{name}</UIText>
    </TouchableOpacity>
  );
};

export default UIButton;
