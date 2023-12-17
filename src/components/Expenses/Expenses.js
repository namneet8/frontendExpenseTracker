import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../context/globalContext';

import IncomeItem from '../IncomeItem/IncomeItem';
import ExpenseForm from './ExpenseForm';

function Expenses() {
    const {addIncome,expenses, getExpenses, deleteExpense, totalExpenses} = useGlobalContext()

    useEffect(() =>{
        getExpenses()
    }, [])
    return (
        <ExpenseStyled>
           <div className='form'>
            <div className='container'>
                <h1>Expenses</h1>
                <h2 className="total-income">Total Expense: <span>${totalExpenses()}</span></h2>
                <div className="income-content">
                    <div className="form-container">
                        <ExpenseForm />
                    </div>
                    <div className="incomes">
                        {expenses.map((income) => {
                            const {_id, title, amount, date, category, description, type} = income;
                            console.log(income)
                            return <IncomeItem
                                key={_id}
                                id={_id} 
                                title={title} 
                                description={description} 
                                amount={amount} 
                                date={date} 
                                type={type}
                                category={category} 
                                indicatorColor="green"
                                deleteItem={deleteExpense}
                            />
                        })}
                    </div>
                </div>
                </div>
                </div>
            
        </ExpenseStyled>
    )
}

const ExpenseStyled = styled.div`
.form{
    padding:60px;
    
}
.container{
    background-color: salmon;
    padding:20px;
}

    display: flex;
    flex-direction:column;
    overflow: auto;
    .total-income{
        display: flex;
        
        justify-content: center;
        align-items: center;
        background: #FCF6F9;
        border: 2px solid #FFFFFF;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        border-radius: 20px;
        padding: 0.5rem;
        margin: 1rem 0;
        font-size: 1rem;
        gap: .3rem;
        span{
            font-size: 1.5rem;
            font-weight: 800;
            color: var(--color-green);
        }
    }
    .income-content{
        display: flex;
        width:100%;
        gap: 0.5rem;
        .incomes{
            flex: 1;
            
        }
    }
`;

export default Expenses