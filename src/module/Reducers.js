import { combineReducers } from 'redux';
import songPage from './songPage/reducer';
import songList from './songList/reducer';
import songEditor from './songEditor/reducer';
import tabView from './tabView/reducer';

export default combineReducers({
  songPage,
  songList,
  songEditor,
  tabView,
});
