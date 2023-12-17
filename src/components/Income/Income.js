import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../context/globalContext';

import Form from '../Form/Form';
import IncomeItem from '../IncomeItem/IncomeItem';

function Income() {
    const {incomes, getIncomes, deleteIncome, totalIncome} = useGlobalContext()

    useEffect(() =>{
        getIncomes()
    })
    return (
        <IncomeStyled>
             <div className='form'>
            <div className='container'>
            
                <h1>Income</h1>
                <h2 className="total-income">Total Income: <span>${totalIncome()}</span></h2>
                <div className="income-content">
                    <div className="form-container">
                        <Form />
                    </div>
                    <div className="incomes">
                        {incomes.map((income) => {
                            const {_id, title, amount, date, category, description, type} = income;
                            return <IncomeItem
                                key={_id}
                                id={_id} 
                                title={title} 
                                description={description} 
                                amount={amount} 
                                date={date} 
                                type={type}
                                category={category} 
                                indicatorColor="var(--color-green)"
                                deleteItem={deleteIncome}
                            />
                        })}
                    </div>
                </div>
                </div>
                </div>
           
        </IncomeStyled>
    )
}

const IncomeStyled = styled.div`
  
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
        padding: 0.3rem;
        margin: 0.5rem 0;
        font-size: 1rem;
        gap: .5rem;
        span{
            font-size: 1.5rem;
            font-weight: 800;
            color: var(--color-green);
        }
    }
    
    .income-content{
        display: flex;
        gap: 0.5rem;
        .incomes{
            flex: 1;
        }
    }
`;

export default Income