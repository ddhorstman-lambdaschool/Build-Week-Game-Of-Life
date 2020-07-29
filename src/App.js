import React from "react";
import Header from "./components/Header";
import AlgorithmInfo from "./components/AlgorithmInfo";
import GameOfLife from "./components/GameOfLife";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers";

const store = createStore(rootReducer);

function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <Header />
        <GameOfLife />
        <AlgorithmInfo />
      </Provider>
    </div>
  );
}

export default App;
