const { combineReducers, createStore } = require('redux')
import { UPDATE_MOVIE } from '../actions'

const DEFAULT_STATE = { movies: [] }

const merge = (prev, next) => Object.assign({}, prev, next)

const moviesReducer = (state=[], action) => {
  if (action.type === UPDATE_MOVIE) {
    return merge(state, action.payload)
  }
}

const reducers = combineReducers({
  movie: moviesReducer
})

export default reducers

