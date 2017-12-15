import { combineReducers } from 'redux';
import contacts from './contacts'
import actions from './actions'
import meetings from "./meetings"
import notes from "./notes"
import { reducer as formReducer } from 'redux-form';


const rootReducer = combineReducers({
    contacts,
    actions,
    meetings,
    notes,
    form: formReducer
});
export default rootReducer;
