import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function Myadd(){
    return(
        <div>
            <i>This is My Additional Function</i>
        </div>  
    )
}
const globl="my name is shiva";
// ReactDOM.createRoot(document.getElementById('root')).render(
//     Myadd()
// )


ReactDOM.createRoot(document.getElementById('root')).render(
    <>
    {globl}
    <App/>
    <Myadd/>
    </>
)
