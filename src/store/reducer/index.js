import { combineReducers } from 'redux';
import LibraryReducer from './library/library';
import StageReducer from './stage/stage';

export default combineReducers({
    libraryState: LibraryReducer,
    stageState: StageReducer
});
