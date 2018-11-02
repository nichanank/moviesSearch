import React from 'react';
import { StyleSheet, Button, Text, View, TextInput, StatusBar } from 'react-native';
import MoviesList from '../MoviesList'

export default class SearchScreen extends React.Component {
  static navigationOptions = ({navigation}) => ({
      headerTitle: 'Movie Browser',
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#1a1b1c'
      },
  })
  state = {
    movies: null,
    title: '',
    isFormValid: false,
    page: 1,
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.title != prevState.title) {
      this.validateForm()
    }
  }
  handleMovieSearch = async () => {
    try {
      const response = await fetch('http://www.omdbapi.com/?apikey=335d81a6&s=' + this.state.title)
      const results = await response.json()
      this.setState({movies: results.Search})
    } catch (err) {
      console.log(err)
    }
  }

  loadMoreResults = async () => {
    try {
      console.log('getting here')
      const response = await fetch('http://www.omdbapi.com/?apikey=335d81a6&s=' + this.state.title + '&page=' + this.state.page)
      const results = await response.json()
      console.log(this.state.movies)
      this.setState({
        movies: [...results.Search],
        page: this.state.page + 1
      })
    } catch (err) {
      console.log(err)
    }
  }

  handleSelectMovie = movie => {
    this.props.navigation.push('ViewMovie', movie);
  };

  validateForm = () => {
    (this.state.title.length > 0 && this.state.title.length <= 50) ? this.setState({isFormValid: true}) : this.setState({isFormValid: false})
  }

  handleTextChange = title => {
    if (title.length < 50) {
        this.setState({title})
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle='light-content'/>
        <View style={styles.movieSearch}>
          <TextInput
            placeholder='e.g. The Godfather'
            onChangeText={this.handleTextChange}
            value={this.state.title}
          />
        </View>
        <Button title="Search" onPress={this.handleMovieSearch} />
        <View style={styles.resultsContainer}>
          <MoviesList movies={this.state.movies} onSelectMovie={this.handleSelectMovie} onEndReached={this.loadMoreResults} />
        </ View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#fff',
  },
  movieSearch: {
    borderColor: 'black',
    borderWidth: 0.5,
    borderRadius: 200,
    padding: 10,
    margin: 20,
  },
  resultsContainer: {
    flex: 1,
    justifyContent: 'center',
    margin: 20,
    padding: 10,
  }
});
