import React, { createContext, useState, useContext, useCallback } from 'react'
import './App.scss'

type TTitles = {
  component1: string,
  component2: string
}

type TTitlesContext = {
  titles: TTitles,
  setTitles: React.Dispatch<React.SetStateAction<TTitles>>
}

const initialValue = {
  component1: 'LightGreen Component(use Context)',
  component2: 'LightBlue Component(use Context)',
}

const TitlesContext = createContext({} as TTitlesContext)

const App = () => {
  const [titles, setTitles] = useState(initialValue)
  console.log('rendering App')

  return (
    <TitlesContext.Provider value={{ titles, setTitles }}>
      
      <div className="App" >
        <Component1 />
        <Component2 />
        <Component3 />
      </div>
    </TitlesContext.Provider>
  )
}

const Component1 = () => {
  const { titles, setTitles } = useContext(TitlesContext)

  console.log('rendering LightGreen Component')

  return (
    <>
      <div className="component1">
        {titles.component1}
        <button onClick={() => setTitles({ ...titles, component1: 'checked(use Context)' })}>Checked</button>
      </div>
    </>
  )
}

const Component2 = () => {
  const { titles, setTitles } = useContext(TitlesContext)

  console.log('rendering LightBlue Component')
  return (
    <div className="component2">
      {titles.component2}
      <button onClick={() => setTitles({ ...titles, component2: 'checked(use Context)' })}>Checked</button>
    </div>
  )
}

const Component3 = () => {
  const [title, setTitle] = useState({ component3: 'LightYellow Component(use LocalState)'})

  const onClick = useCallback(() => setTitle({ component3: 'checked(use LocalState)' }), [setTitle])

  console.log('rendering LightYellow Component')
  return (
    <div className="component3">
      {title.component3}
      <button onClick={onClick}>Checked</button>
    </div>
  )
}

export default App;
