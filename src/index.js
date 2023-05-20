import React from "react";
import ReactDOM from "react-dom";
import NewContextProvider from "./sections/NewContext"
import "./index.css"
import App from "./App.js"

export const NewContext = React.createContext()

ReactDOM.render(
	<React.StrictMode>
        <NewContextProvider>
            <App />
        </NewContextProvider>
	</React.StrictMode>
, document.getElementById("root"))