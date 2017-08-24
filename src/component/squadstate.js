import React,{Component} from 'react' ;
import { connect } from 'react-redux' ;

class SquadState extends Component{
  strenght(){
      let strenght = 0 ;
      this.props.heroes.forEach( hero => strenght += hero.strength )
      return strenght ;
  }

  intelligence(){
      let intelligence = 0 ;
      this.props.heroes.forEach( hero => intelligence += hero.intelligence );
      return intelligence ;
  }
  
  
  speed(){
    let speed = 0 ;
    this.props.heroes.forEach( hero => speed += hero.speed );
    return speed ;
}

    render(){
        return(
            <div>
                <h4>Squad Stats</h4>
                <ul className='list-group' >
                    <li className = 'list-group-item' >
                        <b>Overall Strenght: </b>{this.strenght()}
                    </li>
                    <li className = 'list-group-item' >
                        <b>Overall intelligence: </b>{this.intelligence()}
                    </li>
                    <li className = 'list-group-item' >
                        <b>Overall Speed: </b>{this.speed()}
                    </li>
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        heroes : state.heroes 
    }
}

export default connect( mapStateToProps, null )(SquadState) ;