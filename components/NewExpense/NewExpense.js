import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) =>{
    const onSaveExpenseDataHandler = (enternedExpsenseData) =>{
        const expenseData = {
            ...enternedExpsenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
    }

    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler}></ExpenseForm>
        </div>
    )
};

export default NewExpense;