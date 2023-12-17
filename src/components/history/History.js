import React from 'react'
import { useGlobalContext } from '../context/globalContext';
import "./his.css"
function History() {
    const { transactionHistory } = useGlobalContext();

    const [...history] = transactionHistory();

    return (
        <div className='hisContainer'>
            <h2>Recent History</h2>
            {history.map((item) => {
                const { _id, title, amount, type } = item;
                return (
                    <div key={_id} className="history-item">
                        <p style={{ color: type === 'expense' ? 'red' : 'green'}}>
                            {title}
                        </p>
                        <p style={{ color: type === 'expense' ? 'red' : 'green' }}>
                            {type === 'expense' ? `-${amount <= 0 ? 0 : amount}` : `+${amount <= 0 ? 0 : amount}`}
                        </p>
                    </div>
                );
            })}
        </div>
    );
}




export default History