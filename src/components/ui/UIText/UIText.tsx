import type { PropsWithChildren } from 'react';
import type { TextProps } from 'react-native';
import { Text } from 'react-native';
import { styles } from './UIText.style';

interface IUITextProps extends TextProps {
  children?: PropsWithChildren<string>;
}

const UIText = ({ children, ...rest }: IUITextProps) => {
  return (
    <Text style={styles.text} {...rest}>
      {children}
    </Text>
  );
};

export default UIText;
