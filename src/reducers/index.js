import { combineReducers } from 'redux';
import contacts from './contacts'
import actions from './actions'
import meetings from "./meetings"
import notes from "./notes"

const rootReducer = combineReducers({
    contacts,
    actions,
    meetings,
    notes
});
export default rootReducer;
