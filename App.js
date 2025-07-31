import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { getPopularMovies } from './lib/tbdm';
import { StyleSheet,View} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';  
import { Main } from './components/Main';

export default function App() {

  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getPopularMovies().then((movies) => {
      setMovies(movies);
    });
  }, []);

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <StatusBar style="light" />
        <Main />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
});
