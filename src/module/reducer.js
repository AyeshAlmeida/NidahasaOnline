import { combineReducers } from 'redux'
import songPage from './songPage/reducer'

const reducer = combineReducers({
  songPage
});
// const reducer = function (state = 0, action) {
//   switch (action.type) {
//     case "INCREMENT":
//       return state + 1;
//     case "DECREMENT":
//       return state - 1;
//     default:
//       return state;
//   }
// };



export default combineReducers({
  songPage,
})