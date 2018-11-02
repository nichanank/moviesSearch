import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Button } from 'react-native';
import InlineImage from '../InlineImage'

export default class ViewMovieScreen extends React.Component {
  static navigationOptions = ({navigation}) => ({
      headerTitle: 'Movie Details',
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#1a1b1c'
      },
  })
  state = {
    title: '',
    year: '',
    genre: '',
    runtime: '',
    plot: '',
  }
  componentDidMount() {
    this.loadDetails()
  }

  handleAddToFavorites = () => {
    console.log('hi')
  }

  loadDetails = async () => {
    try {
      const response = await fetch('http://www.omdbapi.com/?apikey=335d81a6&i=' + this.props.navigation.getParam('imdbID'))
      const results = await response.json()
      this.setState({
        title: results.Title,
        year: results.Year,
        runtime: results.Runtime,
        released: results.Released,
        rated: results.Rated,
        genre: results.Genre,
        plot: results.Plot,
        cast: results.Actors,
      })
    } catch (err) {
      console.log(err)
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Image style={styles.poster} source={{uri: this.props.navigation.getParam('Poster')}} />
          <Text style={styles.title}>
            {this.props.navigation.getParam('Title')}
           ({this.props.navigation.getParam('Year')})
          </Text>
        </View>
        <ScrollView style={styles.detailsContainer}>
          <Text style={styles.details}>Rated: {this.state.rated}</Text>
          <Text style={styles.details}>Released: {this.state.released}</Text>
          <Text style={styles.details}>Runtime: {this.state.runtime}</Text>
          <Text style={styles.details}>Genre: {this.state.genre}</Text>
          <Text style={styles.details}>Cast: {this.state.cast}</Text>
          <Text style={styles.details}>Synopsis: {this.state.plot}</Text>
        </ScrollView>
        <Button title='Add to Favorites' onPress={() => this.handleAddToFavorites()} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    paddingVertical: 10,
  },
  poster: {
    width: 100,
    height: 150,
    alignSelf: 'center'
  },
  detailsContainer: {
    flex: 1,
  },
  details: {
    padding: 10,
    fontSize: 14,
  }
});
