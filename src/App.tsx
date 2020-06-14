import React, { createContext, useState, useContext, useCallback } from 'react'
import './App.scss'

const TextContext1 = createContext(
  {} as {
    text1: string
    setText1: React.Dispatch<React.SetStateAction<string>>
  }
)
const TextContext2 = createContext(
  {} as {
    text2: string
    setText2: React.Dispatch<React.SetStateAction<string>>
  }
)

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

const TextProvider1 = (props: { children: React.ReactNode }) => {
  const [text1, setText1] = useState('Component1(use Context)')

  return (
    <TextContext1.Provider value={{ text1, setText1 }}>
      {props.children}
    </TextContext1.Provider>
  )
}

const TextProvider2 = (props: { children: React.ReactNode }) => {
  const [text2, setText2] = useState('Component1(use Context)')

  return (
    <TextContext2.Provider value={{ text2, setText2 }}>
      {props.children}
    </TextContext2.Provider>
  )
}

const AppProvider = (props: { children: React.ReactNode }) => {
  return (
    <TextProvider1>
      <TextProvider2>{props.children}</TextProvider2>
    </TextProvider1>
  )
}

const Component1 = () => {
  const { text1, setText1 } = useContext(TextContext1)

  console.log('rendering Component1')

  return (
    <div className="component1">
      {text1}
      <button onClick={() => setText1('checked(use Context)')}>Checked</button>
    </div>
  )
}

const Component2 = () => {
  const { text2, setText2 } = useContext(TextContext2)

  console.log('rendering Component2')
  return (
    <div className="component2">
      {text2}
      <button onClick={() => setText2('checked(use Context)')}>Checked</button>
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
