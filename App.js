import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { getPopularMovies } from './lib/tbdm';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {

  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getPopularMovies().then((movies) => {
      setMovies(movies);
    });
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      {movies.map((movie) => (
        <View key={movie.id} style={styles.card}>
          <Image source={{ uri: movie.image }} style={styles.image} />
          <Text style={ styles.title }>{movie.title}</Text>
          <Text style={ styles.description }>{movie.description}</Text>
          <Text style={ styles.score }>{movie.score}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card:{
    marginBottom: 10,
  },
  image: {
    width: 107,
    height: 147,
    borderRadius: 10,
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    color: '#eee',
    fontSize: 14,
    marginBottom: 10,
  },
  score: {
    color: 'green',
    fontSize: 20,
    fontWeight: 'bold',
    margintop: 10,
  },
});
