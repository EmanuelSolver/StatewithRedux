import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import { UIContextProvider } from './context/todoContext/Context.jsx'
import store from "./redux/store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      {/* <UIContextProvider > */}
      <Provider store={store}>
        <App />
      </Provider>
      {/* </UIContextProvider> */}
  </React.StrictMode>,
)
