import React, {useContext} from 'react';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import './App.css';
import { LogContext } from './GlobalContext';

function IncomeExpence() {
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
        <div>
            <Grid container alignItems="center" justify="space-around" className="incExpShadow">
                <h2><span style={{ fontSize:'14px', color:'green'}}>Income</span> <br />${getIncome()}</h2>
                <Divider orientation="vertical" flexItem variant="middle"/>
                <h2><span style={{ fontSize:'14px', color:'red'}}>Expense</span><br />${getExpense()}</h2>
            </Grid>
        </div>
    );
}

export default IncomeExpence; 