import React, { useState, useCallback } from 'react'
import { Provider, useSelector, useDispatch } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import textsReducer, { TTexts, checkedComponent1, checkedComponent2 } from './textsSlice'
import './App.scss'

const store = configureStore({ reducer: textsReducer })

const App = () => {
  console.log('rendering App')

  return (
    <div className="App" >
      <Provider store={store}>
        <div>App Component</div>
        <WrapperComponent />      
      </Provider>
    </div>
  )
}

const WrapperComponent = React.memo(() => {
  return (
      <div className="wrapper">
        <div className="wrapper-text">Wrapper Component using React.memo</div>
        <Component1 />
        <Component2 />
        <Component3 />
      </div>
  )
})

const Component1 = () => {
  const component1 = useSelector((state: TTexts) => state.component1)
  const dispatch = useDispatch()

  console.log('rendering Component1')

  return (
    <div className="component1">
      {component1}
      <button onClick={() => dispatch(checkedComponent1())}>Checked</button>
    </div>
  )
}

const Component2 = () => {
  const component2 = useSelector((state: TTexts) => state.component2)
  const dispatch = useDispatch()

  console.log('rendering Component2')
  return (
    <div className="component2">
      {component2}
      <button onClick={() => dispatch(checkedComponent2())}>Checked</button>
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
