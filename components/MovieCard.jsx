/* eslint-disable prettier/prettier */
import { useEffect, useRef } from "react";
import { StyleSheet, Text, View, Image, Animated } from "react-native";

export function MovieCard({ movie }) {
  return (
    <View key={movie.id} style={styles.card}>
      <Image source={{ uri: movie.image }} style={styles.image} />
      <Text style={styles.title}>{movie.title}</Text>
      <Text style={styles.score}>{movie.score}</Text>
      <Text style={styles.description}>{movie.description}</Text>
    </View>
    )
}

export function AnimatedMovieCard({ movie, index}) {
  const opacity = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      delay: index * 100,
      useNativeDriver: false,
    }).start();
  }, [index, opacity]);
  return (
    <Animated.View style={{ opacity }}>
      <MovieCard movie={movie} />
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  card:{
    marginBottom: 42,
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
    marginTop: 10,
    marginBottom: 5,
  },
  description: {
    color: '#eee',
    fontSize: 14,
    marginBottom: 10,
  },
  score: {
    color: 'green',
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});