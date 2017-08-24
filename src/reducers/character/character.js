import character_json from '../../data/characters.json' ;
import { createCharacter } from './helper' ; 
import { Add_CHARACTER , Remove_CHARACTER } from '../../actions' ;

export default function characters ( state = character_json , action ){
    switch(action.type){
        case Add_CHARACTER :
          let characters = state.filter( item => item.id !== action.id ) ;
          return characters ;
        case Remove_CHARACTER :
         characters = [ ...state , createCharacter(action.id)]
         return characters ;
        default:
        return state ;
    }
}
