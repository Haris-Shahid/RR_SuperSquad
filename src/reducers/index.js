import { combineReducers } from 'redux' ;
import characters from './character/character'; 
import heroes from './character/hero'; 

const rootReducer = combineReducers({
    characters,
    heroes 
})

export default rootReducer ;
