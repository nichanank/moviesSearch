import { createStore } from 'redux'
import reducer from './reducer'

const moviesStore = createStore(reducer, DEFAULT_STATE)

export default moviesStore


