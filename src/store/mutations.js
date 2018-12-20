import * as types from './mutation-types'

export default {
  [types.AUTH_LOGIN] (state, payload) {
    throw new Error('AUTH_LOGIN mutation should be implemented')
  },

  [types.FETCH_ALL_TASKLIST] (state, payload) {
    throw new Error('FETCH_ALL_TASKLIST mutatation should be implemented')
  },

  [types.UPDATE_TASK] (state, payload) {
    throw new Error('UPDATE_TASK mutation should be implemented')
  },

  [types.REMOVE_TASK] (state, payload) {
    throw new Error('REMOVE_TASK mutation should be implement')
  },

  [types.AUTH_LOGOUT] (state) {
    throw new Error('AUTH_LOGOUT mutation should be implement')
  }
}
