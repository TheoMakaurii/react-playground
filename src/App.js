import React from 'react';
// import Split from './composition/Split';
import './App.css';
// import Tooltip from './composition/Tooltip';
import TheDate from './composition/state/TheDate';
import Counter from './composition/state/Counter';
import HelloWorld from './composition/state-drills/helloWorld';
import Bomb from './composition/state-drills/bomb';
import RussianRoulette from './composition/state-drills/russianRoulette';
import Tabs from './composition/state/Tabs'


// make 2 tooltips here and another inside the App directly
// const firstTooltip = (
//   <Tooltip message='tooltip message'>
//    ipsum
//   </Tooltip>
// )
// const secondTooltip = (
//   <Tooltip message='another tooltip message'>
//     officiis
//   </Tooltip>
// )
const tabsProp = [
  { name: 'first tab',
    content: 'twinkle, twinkle' },
  { name: 'second tab',
    content: 'little star' },
  { name: 'third tab',
    content: 'how I wonder' },
  { name: 'fourth tab',
    content: 'what you are' },
  { name: 'fifth tab',
    content: 'up above the world so high' },
  { name: 'sixth tab',
    content: 'like a diamond in the sky' },
  { name: 'seventh tab',
    content: 'twinkle, twinkle' },
  { name: 'eigth tab',
    content: 'little star' },
  { name: 'ninth tab',
    content: 'how I wonder' },
  { name: 'tenth tab',
    content: 'what you are...' },
];

function App() {
  return (
    <main className='App'>

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
      <div className="Tabs">
      <Tabs tabs={tabsProp} />
      </div>
        
    </main>
  )
}

export default App

