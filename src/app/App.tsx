import { StatusBar, useColorScheme } from 'react-native';
import AppContent from './AppContent.tsx';
import AppProvider from './AppProvider.tsx';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <AppProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </AppProvider>
  );
}

export default App;
