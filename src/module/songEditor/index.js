import { connect } from 'react-redux';
import { Actions } from '../Actions';
import EditSongPageView from './view';
import { HOME_SCREEN } from '../Constants';
import { saveSong } from '../../repository/songRepo';

const mapStateToProps = state => ({
  song: state.songEditor.get('song'),
  title: state.songEditor.get('title'),
});

const mapDispatchToProps = dispatch => ({
  onGoHomePressed: () => {
    Actions.global.navigateTo(HOME_SCREEN);
    dispatch(Actions.songList.reloadTitles());
  },
  onLyricsEdit: chord => dispatch(Actions.songEditor.onLyricsEdit(chord)),
  onTitleEdit: chord => dispatch(Actions.songEditor.onTitleEdit(chord)),
  onSaveSong: (title, song) => {
    saveSong(window.db, title, song);
    Actions.global.navigateTo(HOME_SCREEN);
    dispatch(Actions.songList.navigateToSongList());
  },
});

const component = connect(mapStateToProps, mapDispatchToProps)(EditSongPageView);

export default component;
