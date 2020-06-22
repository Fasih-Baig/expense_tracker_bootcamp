import React from 'react';
import Header from './Header';
import Balance from './Balance';
import IncomeExpence from './Inc_Exp';
import AddTransaction from './AddTrans';
import TransactionLog from './TransactionLog';

function Tracker() {
    return (
        <div>
            <Header />
            <Balance />
            <IncomeExpence />
            <TransactionLog />
            <AddTransaction />
        </div>
    );
}

export default Tracker;  