import { ReactComponent as Cross } from './assets/Cross.svg'
import './FilterTag.css'


const FilterTag = ({ text, onRemove}) => {

    return <div className='filtertag' >
        <div className='filtertag-text'>{text}</div>
        <div className='filtertag-cross' onClick={()=>onRemove(text)}><Cross /></div>
    </div>
}

export default FilterTag