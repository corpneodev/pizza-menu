import React from "react";
import ReactDOM from "react-dom/client";
import {Header} from "./Header"
import Practice from "./Practice/Practice";

function App() {
    return <h1>Hello World!!!!
        <Header></Header>
        <Practice></Practice>
    </h1>
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);