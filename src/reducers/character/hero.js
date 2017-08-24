
import { createCharacter } from './helper' ;
import { Add_CHARACTER , Remove_CHARACTER } from '../../actions' ;

export default function heroes( state = [] , action ){
    switch(action.type){
        case Add_CHARACTER :
            let heroes = [...state , createCharacter(action.id) ] ;
            return heroes ;
        case Remove_CHARACTER :
            heroes = state.filter( item => item.id !== action.id ) ;
           return heroes ;
        default :
         return state ;
    }
}


