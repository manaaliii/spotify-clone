import React, { createContext, useContext, useReducer } from "react";


export const DataLayerContext = createContext();

//childern is the app component(component which is wrapped in datalayer)
export const DataLayer = ({initialState, reducer, children}) => (
    <DataLayerContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </DataLayerContext.Provider>
);

export const useDataLayerValue = () => useContext(DataLayerContext);