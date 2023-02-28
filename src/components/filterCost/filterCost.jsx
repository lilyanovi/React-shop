import React, { useState } from 'react'; 
import './filterCost.scss'; 
 
 
export function FilterCost(props) { 
    const [min, setMin] = useState(0); 
    const [max, setMax] = useState(5000); 
    function changeMin(event) { 
        setMin(event.target.value); 
 
    } 
    function changeMax(event) { 
        setMax(event.target.value); 
    } 
 
 
    return ( 
        <> 
            <div className='filterBox'> 
                <h5>Сортировать по цене</h5> 
                <div className='boxForm'> 
                    <div className='inputsBox'> 
                        <input type="number" step={100} id='minCost' defaultValue={min} onChange={changeMin} className='inputFilter min' /> 
                        <input type="number" step={100} id='maxCost' defaultValue={max} onChange={changeMax} className='inputFilter max' /> 
                    </div> 
                    <button onClick={() => props.watchChange(min, max)} className='submit' >Применить</button> 
                </div> 
 
            </div> 
        </> 
    ) 
} 
 