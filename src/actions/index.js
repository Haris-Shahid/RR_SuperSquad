export const Add_CHARACTER = 'ADD_CHARACTER' ;
export const Remove_CHARACTER = 'REMOVE_CHARACTER' ;


export function addCharacterById (id){
    const action = {
        type : Add_CHARACTER ,
        id
    }
    return action ;
}


export function removeCharacterById (id){
    const action = {
        type : Remove_CHARACTER ,
        id
    }
    return action ;
}