import React, { createContext, useContext, useReducer } from "react";

interface Action {
  type: ActionKind;
  payload: any;
}

export interface AppContextInterface {
  net: string;
  activeProjectData: any;
  projectData: any;
}

const initialState: AppContextInterface = {
  net: "testnet",
  activeProjectData: [],
  projectData: [],
};

export enum ActionKind {
  setNet,
  setActiveProjectData,
  setProjectData,
}

const StoreContext = createContext<{
  state: AppContextInterface;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const reducer = (state: AppContextInterface, action: Action) => {
  switch (action.type) {
    case ActionKind.setNet:
      return { ...state, net: action.payload };
    case ActionKind.setActiveProjectData:
      return { ...state, activeProjectData: action.payload };
    case ActionKind.setProjectData:
      return { ...state, projectData: action.payload };
    default:
      return state;
  }
};

export const StoreProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);

export const useWallet = () => {
  const { state, dispatch } = useStore();
  return state.activeProjectData;
};
