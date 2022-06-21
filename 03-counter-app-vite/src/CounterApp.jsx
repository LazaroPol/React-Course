import {useState} from 'react';
import PropTypes from 'prop-types'

export const CounterApp = ({ value }) => {      // <= Functional Component

    
        const [counter, setCounter] = useState(value);
        
        
        const handleAdd = () => {                   
            // console.log(event) 
            setCounter((c)=> c + 1);               
        }                       
        const restNum = () =>{
            setCounter((c)=> c -1);
        }
        const resetNum = () =>{
            setCounter(value)
        } 
  

    return (
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>
            <button onClick={ handleAdd }>+1</button>
            <button onClick={ restNum }>-1</button>
            <button onClick={ resetNum }>Reset</button>
        </>
    )
}

CounterApp.propTypes = {

    value: PropTypes.number.isRequired

}
//  { } =  expresion de JS
//Si la funcion no tiene relación con el componente es mejor dejarla apartada arriba
//El setCounter obliga a cambiar el estado anterior
//Si el estado del componente varia, entonces se vuele a ejecutar el component