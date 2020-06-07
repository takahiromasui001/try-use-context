import { createSlice } from '@reduxjs/toolkit'

export type TTexts = {
  component1: string,
  component2: string
}

const textsSlice = createSlice({
  name: 'texts',
  initialState: {
    component1: 'Component1(use Context)',
    component2: 'Component2(use Context)',
  },
  reducers: {
    checkedComponent1(state: TTexts) {
      state.component1 = 'checked(use Redux)'
    },
    checkedComponent2(state: TTexts) {
      state.component2 = 'checked(use Redux)'
    },
  }
})

export const { checkedComponent1, checkedComponent2 } = textsSlice.actions

export default textsSlice.reducer
