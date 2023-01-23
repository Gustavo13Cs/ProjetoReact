import React,{Fragment} from 'react'

const store = ["","",""]

function Column () {
  return (
    <>
     <td>Tenis</td>
     <td>Roupa</td>
    </>
  )
}

function App () {

  const renderColumbs = (element, key) => (
    <Fragment key={`Column=${key}`}>
      <Column/>
    </Fragment>
  )
  return (
    <table>
      {store.map(renderColumbs)}
    </table>
  )
}

export default App
