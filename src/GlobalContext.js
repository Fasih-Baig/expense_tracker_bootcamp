import React, { createContext, useReducer} from 'react';
import LogReducer from './LogReducer';

const initialLogs = [
    { amount: 500 , desc: 'Cash'},
    { amount: -200 , desc: 'Cofee'},
    { amount: 100 , desc: 'Call'}
]

export const LogContext = createContext(initialLogs);

export const LogProvider = ({children}) => {
    let [state, dispatch] = useReducer(LogReducer, initialLogs);

    function addLog(logsObj) {
        dispatch({
            type: "Add_Log",
            payload: {
                desc: logsObj.desc,
                amount: logsObj.amount
            }
        })
    }
    function deleteLog(index) {
        dispatch({
          type: 'Delete_Log',
          payload: index
        });
    }
    return(
        <LogContext.Provider value={{
            logs: state,
            addLog,
            deleteLog
        }}>
            {children}
        </LogContext.Provider>
    )
}