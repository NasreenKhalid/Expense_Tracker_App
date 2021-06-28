import React,{useState, useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'


function AddTransaction() {
    const [text,setText] = useState('')
    const [amount,setAmount] = useState(null)

    const {addTransaction} = useContext(GlobalContext)

const onSubmit =(e)=>{
    e.preventDefault();

    const newTransaction = {
        id: Math.floor(Math.random() * 10000000),
        text,
        amount: +amount //parse the amount into a number
    }

    addTransaction(newTransaction)
    setText('')
    setAmount(0)
}
    return (
        <div>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text: </label>
                <input type="text" placeholder="Enter text.." value={text}
                onChange={(e) => setText(e.target.value)}/>
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount: </label>
                <input type="number" 
                placeholder="Enter amount..negative for expense and positive for income"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}/>
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </div>
    )
}

export default AddTransaction
