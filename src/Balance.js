import React, {useContext} from 'react';
import { LogContext } from './GlobalContext';

function Balance() {
    let {logs} = useContext(LogContext);
    const getIncome = () => {
        let income = 0;
        for (var i = 0; i < logs.length; i++) {
            if (logs[i].amount > 0)
                income = income + logs[i].amount
        }
        return income;
    }

    const getExpense = () => {
        let expense = 0;
        for (var i = 0; i < logs.length; i++) {
            if (logs[i].amount < 0)
                expense += logs[i].amount
        }
        return expense;
    }
    return (
        <h1><span style={{ fontSize:'16px'}}>Your Balance</span><br/>${getIncome()+getExpense()}</h1>
    );
}

export default Balance; 