import React, { createContext, useState, useContext, useCallback } from 'react'
import './App.scss'

type TTexts = {
  component1: string,
  component2: string
}

type TTextsContext = {
  texts: TTexts,
  setTexts: React.Dispatch<React.SetStateAction<TTexts>>
}

const initialValue = {
  component1: 'Component1(use Context)',
  component2: 'Component2(use Context)',
}

const TextsContext = createContext({} as TTextsContext)

const App = () => {
  console.log('rendering App')

  return (
    <div className="App" >
      <div className="app-text">App Component</div>
      <AppProvider>
          <Component1 />
          <Component2 />
          <Component3 />
      </AppProvider>
    </div>
  )
}

const AppProvider = (props: { children: React.ReactNode }) => {
  const [texts, setTexts] = useState(initialValue)

  return (
    <TextsContext.Provider value={{ texts, setTexts }}>
      {props.children}
    </TextsContext.Provider>
  )
}

const Component1 = () => {
  const { texts, setTexts } = useContext(TextsContext)

  console.log('rendering Component1')

  return (
    <div className="component1">
      {texts.component1}
      <button onClick={() => setTexts({ ...texts, component1: 'checked(use Context)' })}>Checked</button>
    </div>
  )
}

const Component2 = () => {
  const { texts, setTexts } = useContext(TextsContext)

  console.log('rendering Component2')
  return (
    <div className="component2">
      {texts.component2}
      <button onClick={() => setTexts({ ...texts, component2: 'checked(use Context)' })}>Checked</button>
    </div>
  )
}

const Component3 = () => {
  const [text, setText] = useState({ component3: 'Component3(use LocalState)'})

  const onClick = useCallback(() => setText({ component3: 'checked(use LocalState)' }), [setText])

  console.log('rendering Component3')
  return (
    <div className="component3">
      {text.component3}
      <button onClick={onClick}>Checked</button>
    </div>
  )
}

export default App;
