const ExpenseDate = (props) =>{
    const month = props.date.toLocaleString('eu-US', {month: 'long'});
    const day = props.date.toLocaleString('eu-US', {day: '2-digit'});
    const year = props.date.getFullYear();
    return (
        <div>
            <div>{month}</div>
            <div>{day}</div>
            <div>{year}</div>
        </div>
    )
}
export default ExpenseDate