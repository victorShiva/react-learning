import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Coffee from './Chai.jsx'

function MilkSake(){
  return (
      <h2>Milk Sake is Ready</h2>
  )
}
// ReactDOM.createRoot(document.getElementById('root')).render(
//     MilkSake()
// )

// const reactElement={
//   type:'a',
//   props: {
//       href: 'https://google.com',
//       target:'_blank'
//   },
//   children: 'click me visite google'
// }

//     anotherElement conversion with react with a specific object
const anotherElement = (
  <a href='https://google.com' target='_blank'>visit Google</a>
)


// create element used to React library's method (create.element)
const reactElement = React.createElement(
  'a',
  {'href':'https://google.com','target':'_blank'},
  'click me to visite google'
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  {reactElement}
  {anotherElement}
  </>
)

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <>
//     <App />
//     <Coffee/>
//     <MilkSake/>
//     {anotherElement}
//   </>
// )
