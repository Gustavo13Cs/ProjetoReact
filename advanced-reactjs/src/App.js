import React, {useRef, useEffect} from 'react'
  

function App () {

  const inputRef = useRef()
  const count = useRef(1)
  

  const handleClick = () => {
    inputRef.current.focus()
    console.log('input.current', inputRef.current)
  }

  // o valor passa , mais n atualiza a pagina , mais ele e mudado 
  useEffect (() => {
    setTimeout (() => {
      console.log('passou aqui')
      count.current = 300
    }, 3000)
  })

  return (
    <>
     <h1>Valor de count:{count.current}</h1>
      Foco: <input ref={inputRef}/>
      <br/>
      <button onClick={handleClick}>Focar</button>
    </>
  )
}


export default App
