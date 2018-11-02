import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import InlineImage from './InlineImage'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  row: {
    padding: 10,
    backgroundColor: '#E0E0E0',
    margin: 5,
    borderWidth: 1,
    borderRadius: 10,
  },
  results: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  poster: {
    width: 50,
    height: 70,
  }
})

const Row = props => (
  <TouchableOpacity style={styles.row}
    onPress={() => props.onSelectMovie(props)}>
    <Text style={styles.results}>
      <InlineImage style={styles.poster} source={{uri: props.Poster}} />
      {props.Title} ({props.Year})
    </Text>
  </TouchableOpacity>
)

Row.propTypes = {
  title: PropTypes.string,
  year: PropTypes.string,
}

export default Row
