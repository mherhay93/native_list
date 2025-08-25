import { StatusBar, useColorScheme } from 'react-native';
import AppContent from './AppContent';
import AppProvider from './AppProvider';

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
