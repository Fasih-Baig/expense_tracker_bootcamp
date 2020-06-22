import React, { useContext } from 'react';
import './App.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import { LogContext } from './GlobalContext';

function TransactionLog() {
    let {logs} = useContext(LogContext);
    console.log(logs)
    // function handleDelete(id) {
    //     console.log(id);
    // }
    return (
        <div>
            <h3 className="centerText">Transaction Log</h3><hr />
            <List component="nav">
                {logs.map((logsObj, index) => {
                    return(
                        <ListItem button divider key={index}>
                            <ListItemText primary={logsObj.desc} />
                            <ListItemText primary={logsObj.amount} style={{ textAlign: 'right', marginRight: '2px' }} />
                            <IconButton aria-label="Delete Item" component="span">
                                <DeleteIcon fontSize="small" className="deleteButton" onClick={console.log("Clicked")} style={{ color: 'grey' }} />
                            </IconButton>
                        </ListItem>
                    )
                })}
            </List>
        </div>
    );
}

export default TransactionLog;