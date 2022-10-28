import { combineReducers } from 'redux';
import bankReducer from '../../components/bank/bankSlice';


export default combineReducers({
    banks: bankReducer,
});
