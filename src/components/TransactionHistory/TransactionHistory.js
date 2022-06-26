import PropTypes from "prop-types";

import { TableTransaction,TransactionRow,Values,ValuesText } from 'components/TransactionHistory/TransactionHistory.styled';


const TransactionHistory = ({ transactions }) => {
    return (
        <TableTransaction>
            <thead>
                <TransactionRow>
                    <Values>Type</Values>
                    <Values>Amount</Values>
                    <Values>Currency</Values>
                </TransactionRow>
            </thead>

            <tbody>
                {transactions.map(({ id, type, amount, currency }) => {
                    return (
                        <TransactionRow key={id}>
                            <ValuesText>{type}</ValuesText>
                            <ValuesText>{amount}</ValuesText>
                            <ValuesText>{currency}</ValuesText>
                        </TransactionRow>
                    );
                })}
            </tbody>
        </TableTransaction>
    );
};

TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    ),
};

export default TransactionHistory;