//this is our root reducer
//its an index for all the happy little reducers we will make
//think of them as happy accidents just like this course
import {combineReducers} from 'redux';
import createAdminReducer from './adminReducer'
import homeReducer from './homeReducer'
import vacancyFilterReducer from './filterReducers/vacancyFilterReducer'
//add your reducers here please use camelcale 
//ffs use camelcase
export default combineReducers({
    createAdmin : createAdminReducer,
    home : homeReducer,
    vacancay : vacancyFilterReducer
});