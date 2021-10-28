import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

const TransactionHistory = ({ transactions} ) => {
  return (
    <table classname={s.transactionHistory}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    {transactions.map(transaction => (
      <tr key={transaction.id}>
      <td>{transaction.type}</td>
      <td>{transaction.amount}</td>
      <td>{transaction.type}</td>
    </tr>
    ))}
        
  </tbody>
</table>
  );
};

TransactionHistory.propTypes = {
transactions:PropTypes.array.isRequired,
};

export default TransactionHistory;