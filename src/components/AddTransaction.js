import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';




//========================°°°°°°°°°°°°°°°°°°°°°°°============================
//                            Add transaction
//========================°°°°°°°°°°°°°°°°°°°°°°°============================


export const AddTransaction = () => {
  // states
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  // useContext
  const { addTransaction } = useContext(GlobalContext);

  // onSubmit
  const onSubmit = e => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }
    addTransaction(newTransaction);
    setAmount("")
    setText("")
  }


  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
          <label htmlFor="amount">Amount <br /> </label>
          <input type="number" placeholder="enter ammount" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
          <button className="btn">Add Transaction</button>
        </div>
      </form>
    </>
  )
}
