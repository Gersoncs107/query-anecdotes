import { createContext, useReducer, useContext } from 'react'

const CounterContext = createContext()

const nottificationReducer = (state, action) => {
  switch (action.type) {
    case 'SET':
      return action.payload
    case 'CLEAR':
      return null
    default:
      return state
  }
}

export const CounterContextProvider = (children) => {
    const [notification, dispatch] = useReducer(nottificationReducer, null)

    return (
      <CounterContext.Provider value={[notification, dispatch]}>
        {children}
      </CounterContext.Provider>
    )
}

export default CounterContext