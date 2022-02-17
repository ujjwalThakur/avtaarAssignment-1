import React, { useState, useEffect } from "react"
import './Filter.css'

const Filter = ({ 
    labelText, multiselect, options, open, checked,
    nested, onSelect = () => { }, onToggleFilter , onFilterChange, reference}) => {

    const initialState = nested ? { option: '', subOption: [] } : []
    
    const [selected, setSelected] =  useState(initialState)

    useEffect(() => {
        setSelected(checked)
    }, [open])

    const onApplyFilter = () => {
        if(nested)
            onFilterChange({option: selected.option, subOption:[...selected.subOption]})
        else if(multiselect)
            onFilterChange([...selected])
        else
            onFilterChange([...selected])
        onToggleFilter()
    }
    
    const onSingleSelect = event => {
        setSelected([event.target.value])
    }

    const onMultiSelect = event => {
        const value = event.target.value
        setSelected((prevState)=> prevState.includes(value) ?
                prevState.filter((item)=>item!=value) : [...prevState, value])
    }

    const onNestedOptionSelect = event => {
        setSelected({
            option: event.target.value,
            subOption: []
        })
    }

    const onNestedSubOptionSelect = event => {
        const value = event.target.value
        setSelected(prevState=>{
            const subOption = prevState.subOption
            return {
                ...prevState,
                subOption: subOption.includes(value) ? 
                    subOption.filter((item)=>item!=value) : [...subOption, value]
            }
        })
    }

    const onClear = () => {
        setSelected(initialState)
    }

    

    return <div className='filter'>
        <div className="label" onClick={onToggleFilter}>
            <div className="label-text">{labelText}</div>
            <div className={`arrow ${open ? 'up' : 'down'} `}></div>
        </div>

        {
            <div className={`filter-modal ${!open ? 'hidden' : ''}`}>
            <div className="filter-modal-border-box">
                <div className="options">
                {
                    nested && Object.keys(options).map((key)=>{
                        return <div className="option">
                            
                            <label>
                                <input
                                    type='radio'
                                    value={key}
                                    name={labelText}
                                    checked={selected.option == key}
                                    onChange={onNestedOptionSelect} />
                                {key}
                            </label>
                            {
                                options[key].map((subOption)=>{
                                    return <div className='sub-option'>
                                        <label>
                                            <input
                                                type='checkbox'
                                                value={subOption}
                                                name={key}
                                                checked={selected.option == key && selected.subOption.includes(subOption)}
                                                onChange={onNestedSubOptionSelect} 
                                                disabled={selected.option != key}
                                                />
                                            {subOption}
                                        </label>
                                    </div>
                                })
                            }
                        </div>
                    })
                }

                {
                    !nested && options.map(option => {
                        return <div className='option'>
                            <input 
                                type={multiselect ? 'checkbox' : 'radio'} 
                                value={option} 
                                name={labelText} 
                                onChange={multiselect ? onMultiSelect : onSingleSelect} 
                                checked={selected.includes(option)}
                                />
                            <label for={labelText}>{option}</label>
                        </div>
                    })
                }
                </div>

                <hr />
                
                <div className="btn-container">
                    <button className="clear-btn" onClick={onClear}>Clear</button>
                    <button className="apply-btn" onClick={onApplyFilter}>Apply</button>
                </div>
            </div>
            </div>
        }

    </div>
}

export default Filter