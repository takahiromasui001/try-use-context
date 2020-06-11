import React, { createContext, useState, useContext, useCallback } from 'react'
import './App.scss'

type TTextsContext = {
  text: string
  setText: React.Dispatch<React.SetStateAction<string>>
}

const TextContext1 = createContext({} as TTextsContext)
const TextContext2 = createContext({} as TTextsContext)

const App = () => {
  console.log('rendering App')

  return (
    <div className="App">
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
  const [text1, setText1] = useState('Component1(use Context)')
  const [text2, setText2] = useState('Component2(use Context)')

  return (
    <TextContext1.Provider value={{ text: text1, setText: setText1 }}>
      <TextContext2.Provider value={{ text: text2, setText: setText2 }}>
        {props.children}
      </TextContext2.Provider>
    </TextContext1.Provider>
  )
}

const Component1 = () => {
  const { text, setText } = useContext(TextContext1)

  console.log('rendering Component1')

  return (
    <div className="component1">
      {text}
      <button onClick={() => setText('checked(use Context)')}>Checked</button>
    </div>
  )
}

const Component2 = () => {
  const { text, setText } = useContext(TextContext2)

  console.log('rendering Component2')
  return (
    <div className="component2">
      {text}
      <button onClick={() => setText('checked(use Context)')}>Checked</button>
    </div>
  )
}

const Component3 = () => {
  const [text, setText] = useState({
    component3: 'Component3(use LocalState)'
  })

  const onClick = useCallback(
    () => setText({ component3: 'checked(use LocalState)' }),
    [setText]
  )

  console.log('rendering Component3')
  return (
    <div className="component3">
      {text.component3}
      <button onClick={onClick}>Checked</button>
    </div>
  )
}

export default App
