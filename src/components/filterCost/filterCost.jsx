import React, { useState } from 'react';
import './filterCost.scss';


export function FilterCost(props) {
    const [min, setMin] = useState('');
    const [max, setMax] = useState('');
    const [value, setVal] = useState('');
    const [filter, setFilter] = useState(false);
    function changeMin(event) {
        if (+event.target.value >= max) {
            setMin(+event.target.value);
            setMax(+event.target.value);
        } else {
            setMin(+event.target.value)
        }
    }
    function changeMax(event) {
        if (+event.target.value <= min) {
            setMax(+event.target.value);
            setMin(+event.target.value)
        } else {
            setMax(+event.target.value);
        }
    }
    function resetFilter() {
        setMin("");
        setMax("");
        setVal("");
        props.watchChange("", "", "")
    }

    function sortImpressions(event) {
        setVal(event.target.value);
    }

    return (
        <>
            <div className="filterWrapper">
                {filter ? <div className='filterBox'>
                    <h5 className='filters' onClick={() => setFilter(false)}>Сортировать по цене &#9650;</h5>
                    <div className='boxForm'>
                        <div className='radioBox'>
                            <label htmlFor="radioDown">
                                <input id="radioDown" className='radio' type="radio" name="radio" value="1"
                                    checked={value === '1' ? true : false}
                                    onChange={sortImpressions}
                                />
                                <span className='prefix'> Сначала дешевые </span>
                            </label>
                            <label htmlFor="radioUp" >
                                <input id="radioUp" type="radio" className='radio' name="radio" value="2"
                                    checked={value === '2' ? true : false}
                                    onChange={sortImpressions} />
                                <span className='prefix'> Сначала догорие </span>
                            </label>
                        </div>
                        <div className='inputsBox'>
                            <span className='prefix'> от </span>
                            <input type="number" step={100} id='minCost' min="0" value={min} onChange={changeMin} className='inputFilter min' />
                            <span className='prefix'> до </span>
                            <input type="number" step={100} id='maxCost' min="0" value={max} onChange={changeMax} className='inputFilter max' />
                            <span className='prefix'> &emsp;  &ensp;</span><button onClick={() => props.watchChange(min, max, value)} className='submit' >Применить</button>
                            <span className='prefix'> &emsp; &ensp;</span>  <button onClick={resetFilter} className='submit' >Сбросить</button>
                        </div>
                    </div>

                </div> : <h5 className='filters' onClick={() => setFilter(true)}>Фильтры &#9660;</h5>}


            </div>

        </>
    )
}