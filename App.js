import React from "react";
import ReactDOM from "react-dom/client"
import GlobalStyles from "./components/GlobalStyles";
import { Header } from "./components/Header";
import Body from "./components/Body";



function App() {
    return (
        <>
        <GlobalStyles />
<Header />
<Body />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)