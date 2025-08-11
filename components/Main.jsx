/* eslint-disable prettier/prettier */
import { useEffect, useState } from "react";
import { getPopularMovies } from "../lib/tbdm";
import { View, FlatList, ActivityIndicator } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AnimatedMovieCard} from "./MovieCard";
import { Logo } from "./Logo";

export function Main() {

  const [movies, setMovies] = useState([]);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    getPopularMovies().then((movies) => {
      setMovies(movies);
    });
  }, []);

  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom}}>
        <View style={{ marginBottom: 20 }}>
          <Logo width={100} height={40} />
        </View>
        {movies.length === 0 ?(
            <ActivityIndicator />
        ) : (
            <FlatList
                data={movies}
                keyExtractor={(movie)=> movie.id}
                renderItem={({ item, index }) => (<AnimatedMovieCard movie={item} index={index}/>
                )}
            />
        )}
    </View>
  );
}
