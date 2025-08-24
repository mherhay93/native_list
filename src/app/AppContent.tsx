import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from './App.style.ts';
import RootNavigation from './navigators';

function AppContent() {
  const safeAreaInsets = useSafeAreaInsets();

  return (
    <View
      style={{
        paddingTop: safeAreaInsets.top,
        paddingLeft: safeAreaInsets.left,
        paddingRight: safeAreaInsets.right,
        paddingBottom: safeAreaInsets.bottom,
        ...styles.container,
      }}
    >
      <RootNavigation />
    </View>
  );
}

export default AppContent;
