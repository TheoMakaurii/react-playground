import React from 'react';
import Split from './composition/Split';
import './App.css';
import Tooltip from './composition/Tooltip';
import TheDate from './composition/state/TheDate';
import Counter from './composition/state/Counter';
import HelloWorld from './composition/state-drills/helloWorld';
import Bomb from './composition/state-drills/bomb';
import RussianRoulette from './composition/state-drills/russianRoulette'

// make 2 tooltips here and another inside the App directly
const firstTooltip = (
  <Tooltip message='tooltip message'>
   ipsum
  </Tooltip>
)
const secondTooltip = (
  <Tooltip message='another tooltip message'>
    officiis
  </Tooltip>
)

function App() {
  return (
    <main className='App'>
      <Split className='left' flexBasis='2'>
        This is the content for the left Split. <br />
        {/* make another tooltip directly inside the App */}
        <Tooltip message='one more tooltip message'>
          Necessitatibus?
        </Tooltip>
      </Split>
      <Split className='right'>
        This is the content for the right Split.
      </Split>
      <div className= "State-Prac">
      <TheDate/>
      </div>
      <div className= "State-Prac">
      <Counter count={123}/>
      </div>
      <div className="Drill">
        <HelloWorld />
      </div>
      <div className="Bomb">
        <Bomb />
      </div>
      <div className = "Gun">
        <RussianRoulette bulletInChamber={6} />
      </div>
    </main>
  )
}

export default App