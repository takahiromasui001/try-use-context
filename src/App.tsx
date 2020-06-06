import React from 'react'
import './App.scss'

const App = () => {
  return (
    <div className="App" >
      <Component1 />
      <Component2 />
      <Component3 />
    </div>
  )
}

const Component1 = () => {
  return (
    <div className="component1"></div>
  )
}

const Component2 = () => {
  return (
    <div className="component2"></div>
  )
}

const Component3 = () => {
  return (
    <div className="component3"></div>
  )
}

export default App;
