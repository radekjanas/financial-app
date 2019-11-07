import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addTransactionAction, removeTransactionAction, getTransactionsAction} from '../actions/actions';
import mapStateToProps from '../store/mapStateToProps';
import TransactionList from '../TransactionList/TransactionList';
import HighestTransaction from '../HighestTransaction/HighestTransaction';

class Transactions extends Component {
    constructor(props) {
        super(props);
        this.idCounter = 0;
        this.namePattern = /^.{3,}$/;       // Pattern to test input-transaction-name value
        this.valuePattern = /^(\d+)(\.\d+)?$/;       // Pattern to test input-transaction-value value
        this.addTransaction = this.addTransaction.bind(this);
        this.removeTransaction = this.removeTransaction.bind(this);
    }

    addTransaction(e) {
        e.preventDefault();

        const filledName = this._nameInput.value;
        const filledValue = this._valueInput.value;
        const validName = this.namePattern.test(filledName);
        const validValue = this.valuePattern.test(filledValue);
        const valid = validName && validValue;

        if (valid) {
            if (this._transactionErrorMsg.classList.contains('add-transaction__info--show')) {
                this._transactionErrorMsg.classList.remove('add-transaction__info--show');
            }

            this.idCounter++;

            const transaction = [{
                id: this.idCounter,
                name: this._nameInput.value,
                value: this._valueInput.value
            }];

            this.props.addTransaction(transaction);

            this._valueInput.value = '';
            this._nameInput.value = '';
        } else {
            if (!this._transactionErrorMsg.classList.contains('add-transaction__info--show')) {
                this._transactionErrorMsg.classList.add('add-transaction__info--show');
            }

            if (!this._submit.classList.contains('add-transaction__submit--error')) {
                this._submit.classList.add('add-transaction__submit--error');
                this._submit.setAttribute('disabled', true);        // Preventing from clicking submit before previous animation on button ends

                setTimeout(function() {     // Unblocking possibility to click submit (animation on button is finished)
                    this._submit.classList.remove('add-transaction__submit--error');
                    this._submit.removeAttribute('disabled');
                }.bind(this), 300);
            }
        }
    }

    removeTransaction(e) {
        this.props.removeTransaction(Number(e.currentTarget.parentNode.id));
    }

    render() {
        const transactions = this.props.transactions;
        const currency = this.props.currency;

        return(
            <section className="transactions-container">
                <div className="add-transaction">
                    <p className="add-transaction__title">Dodaj transakcję</p>
                    <form className="add-transaction__form" onSubmit={this.addTransaction}>
                        <label className="add-transaction__label" htmlFor="transaction-name">Nazwa: <input className="add-transaction__input add-transaction__input--name" id="transaction-name" type="text" ref={el => this._nameInput = el} /></label>
                        <label className="add-transaction__label" htmlFor="transaction-value">Wartość (EUR): <input className="add-transaction__input add-transaction__input--value" id="transaction-value" type="text" ref={el => this._valueInput = el} /></label>
                        <input className="add-transaction__submit" type="submit" value="Dodaj" ref={el => this._submit = el} />
                    </form>
                    <p className="add-transaction__info" ref={el => this._transactionErrorMsg = el}>Nazwa transakcji musi mieć przynajmniej 3 znaki, wartość (EUR) nie powinna zawierać innych znaków niż cyfry i jedna kropka (wraz z częścią ułamkową liczby)</p>
                </div>
                <TransactionList list={transactions} currency={currency} clickHandler={this.removeTransaction} />
                <HighestTransaction data={transactions} currency={currency} />
            </section>
        );
    }
}

const mapDispatchToProps_AddTransaction = dispatch => ({
    addTransaction: transaction => dispatch(addTransactionAction(transaction)),
    removeTransaction: id => dispatch(removeTransactionAction(id)),
    getTransactions: () => dispatch(getTransactionsAction())
});

const ConnectedTransactions = connect(
    mapStateToProps,
    mapDispatchToProps_AddTransaction
)(Transactions); 

export default ConnectedTransactions;