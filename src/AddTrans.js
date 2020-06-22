import React, {useState, useContext} from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './App.css';
import { LogContext } from './GlobalContext';

function AddTransaction() {
    let [newDesc, setDesc] = useState("");
    let [newAmount, setAmount] = useState(0);
    let { addLog } = useContext(LogContext);
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(newDesc, newAmount)
        addLog({
            desc: newDesc,
            amount: Number(newAmount)
        })
    }
    return (
        <div>
            <h3 style={{ textAlign:"center" }}>Add Transaction</h3>
            <form onSubmit={handleSubmit}> 
                <TextField id="outlined-basic" type="text" onChange={(ev) => setDesc(ev.target.value)} label="Description" variant="outlined" margin="normal" size="small" fullWidth={true} required={true} />
                <TextField id="outlined-basic" type="number"  onChange={(ev) => setAmount(ev.target.value)} label="Amount" variant="outlined" margin="normal" size="small" fullWidth={true} required={true} />
                <Button type="submit" variant="contained" className="buttonCenter buttonHover">Add Transaction</Button>
            </form>
        </div>
    );
}

export default AddTransaction; 