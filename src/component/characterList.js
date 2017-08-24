import React,{ Component } from 'react' ;
import {connect} from 'react-redux' ;
// import { bindActionCreators } from 'redux' ;

import {addCharacterById} from '../actions' ;

class CharacterList extends Component {

    render(){
        // console.log('this.props' , this.props)  ;//for map
          //console.log('this.props' , this.props)  ;//for dispatch
        return(
            <div>
                <h4>Characters</h4>
                <ul className='list-group' >
                    {
                        this.props.characters.map( character => {
                            return(
                                <li className='list-group-item' key={character.id} >
                                   <div className='list-item' > {character.name} </div>
                                   <div className='list-item right-button' onClick={ () => this.props.addCharacterById(character.id) } >
                                       +
                                   </div>
                                </li>
                            )
                        })
                    }
                </ul>  
            </div>
        )
    }
}

function mapStateToProps(state){
    // console.log('state' , state) ;
    return {
        characters : state.characters
    } ;
}

// function mapDispatchToProps(dispatch){
//     return bindActionCreators({
//         addCharacterById
//     },dispatch)
// }
// export default connect( mapStateToProps , mapDispatchToProps )(CharacterList);
//   another way
export default connect( mapStateToProps , {addCharacterById} )(CharacterList);