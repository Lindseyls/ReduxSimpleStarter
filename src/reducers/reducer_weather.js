import { FETCH_WEATHER } from '../actions/index'

export default function(state = [], action) {
  // console.log('Action receivced', action);

  switch (action.type) {
  case FETCH_WEATHER:
    // One way of adding the new state data to the exisint state, which is an array
    // return state.concat([action.playload.data]);
    // Second way of doing the same thing is this...
    // ES6 syntax that helps us compact all the arrays into one giant big array
    return [ action.payload.data, ...state ];
  }
  return state;
}
