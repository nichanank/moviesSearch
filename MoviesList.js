import React from 'react'
import { FlatList, StyleSheet } from 'react-native'
import Row from './Row'
import { PropTypes } from 'prop-types'

const MoviesList = props => (
  <FlatList
    renderItem={({item}) => <Row {...item} onSelectMovie={props.onSelectMovie} />}
    data={props.movies}
    keyExtractor={(item, index) => index.toString()}
    onEndReached={props.loadMoreResults}
    />
)

MoviesList.propTypes = {
    renderItem: PropTypes.func,
    movies: PropTypes.array,
}

const styles = StyleSheet.create({
  MoviesList: {
    justifyContent: 'space-between',
    alignItems: 'stretch',
  }
})

export default MoviesList
