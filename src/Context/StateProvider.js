import React, { createContext, useContext, useReducer } from 'react';

// the base, context or suite for the data
export const StateContext = createContext();

// the means by which the data is passed to the components: hoc
// the reducer is the piece of code that processes the actions on the data
export const StateProvider = ({ reducer, initialState, children }) =>
    (
        <StateContext.Provider
            value={useReducer(reducer, initialState)}
        >
            {children}
        </StateContext.Provider>

    );
;

// the 'tool' available to access the data
export const useStateValue = () => useContext(StateContext);