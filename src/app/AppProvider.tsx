import type { PropsWithChildren } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import store from '../redux/store.ts';

const AppProvider = ({ children }: PropsWithChildren) => {
    return (
      <SafeAreaProvider>
        <Provider store={store}>{children}</Provider>
      </SafeAreaProvider>
    );
};

export default AppProvider;
