import { createSlice } from '@reduxjs/toolkit'

export type TTitles = {
  component1: string,
  component2: string
}

const titlesSlice = createSlice({
  name: 'titles',
  initialState: {
    component1: 'Component1(use Context)',
    component2: 'Component2(use Context)',
  },
  reducers: {
    checkedComponent1(state: TTitles) {
      state.component1 = 'checked(use Redux)'
    },
    checkedComponent2(state: TTitles) {
      state.component2 = 'checked(use Redux)'
    },
  }
})

export const { checkedComponent1, checkedComponent2 } = titlesSlice.actions

export default titlesSlice.reducer
