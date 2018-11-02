//action types
export const UPDATE_MOVIE = 'UPDATE_MOVIE'
export const DEFAULT_STATE = {movies: []}

//action creators
export const addMovie = (newMovie) => ({
  type: UPDATE_MOVIE,
  payload: newMovie
})