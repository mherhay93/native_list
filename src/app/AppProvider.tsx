import type { PropsWithChildren } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const AppProvider = ({ children }: PropsWithChildren) => {
  return <SafeAreaProvider>{children}</SafeAreaProvider>;
};

export default AppProvider;
