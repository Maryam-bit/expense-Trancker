import React, { useContext } from 'react';
import { Transaction } from './Transaction';
import { GlobalContext } from '../context/GlobalState';




//========================°°°°°°°°°°°°°°°°°°°°°°°============================
//========================°°°°°°°°°°°°°°°°°°°°°°°============================
//                           Transaction list
//========================°°°°°°°°°°°°°°°°°°°°°°°============================



export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h2 className="history">History</h2>

      <ul className="list">
        {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
      </ul>

    </>
  )
}
