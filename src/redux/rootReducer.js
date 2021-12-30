import { combineReducers } from 'redux';
import counterReducer from './Counter/counter.reducer';
import photosReducer from './Gallery/gallery.reducer';
const rootReducer = combineReducers({
    counter: counterReducer,
    photos: photosReducer,
});
export default rootReducer;