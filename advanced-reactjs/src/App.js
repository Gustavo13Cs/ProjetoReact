import React, {useState} from 'react'
import Button from './Component/Button'
import Calc from './Component/Calc'
  

function App () {

  const [value, setValue] = useState(0)
  const [min, setMin] = useState(0)
  const [max, setMax] = useState(30)

  const handleCLick = () => {
    setMin(10)
  }

  const handleCalc = () => {
    setValue(min + max)
  }

  return (
    <div>
        <Button  onClick={handleCLick}>
           Adicionar Carrinho
        </Button>
        <div>
          <h1>Valor Calculado: {value}</h1>
          <Calc
          min= {min}
          max= {max}
          onChange= {handleCalc}
          />
        </div>
    </div>
  )
}


export default App
