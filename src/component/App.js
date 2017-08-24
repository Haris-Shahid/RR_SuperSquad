import React from 'react' ;
import CharacterList from './characterList' ;
import HeroList from './herolist' ;
import SquadState from './squadstate' ;

import '../styles/index.css' ;

class App extends React.Component {
    render(){
        return(
            <div className='App' >
                <h2>Super Squad</h2>
              <div className='col-md-4' >  <CharacterList /> </div>
              <div className='col-md-4' >  <HeroList /> </div>
              <div className='col-md-4' > <SquadState /> </div>
            </div>
        )
    }
}

export default App ;