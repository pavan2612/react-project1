
import './ExpenseFilter.css'


const ExpenseFilter = (props) => {

    const yearHandler = (event) => {
       props.onchangeyear(event.target.value)
}

return(
    <div className='expenses-filter'>
        <div className="expenses-filter__control">
            <label>Filter by year</label>
            <select value={props.year} onChange={yearHandler}>
                <option value='2018'>2018</option>
                <option value='2019'>2019</option>
                <option value='2020'>2020</option>
                <option value='2021'>2021</option>
            </select>
        </div>
    </div>
    )
}

export default ExpenseFilter