import React, {Component} from 'react';
import {connect} from 'react-redux';
import {changeCurrencyAction} from '../actions/actions';

class Currency extends Component {
    constructor(props) {
        super(props);
        this.pattern = /^(\d+)(\.\d+)?$/;        // Pattern to test input-currency value
        this.changeCurrency = this.changeCurrency.bind(this);
    }

    changeCurrency(e) {
        const filledCurrency = e.target.value;
        const valid = this.pattern.test(filledCurrency);

        if (valid) {
            if (this._currencyErrorMsg.classList.contains('currency__info--show')) {
                this._currencyErrorMsg.classList.remove('currency__info--show');
            }
            this.props.changeCurrency(filledCurrency);
        } else {
            if (!this._currencyErrorMsg.classList.contains('currency__info--show')) {
                this._currencyErrorMsg.classList.add('currency__info--show');
            }
        }
    }

    render() {
        return(
            <section className="currency">
                <p className="currency__title">Wprowadź kurs waluty</p>
                <label className="currency__label" htmlFor="currency__label">1 EUR = <input className="currency__input" id="currency" type="text" onChange={this.changeCurrency} /> PLN</label>
                <p className="currency__info" ref={el => this._currencyErrorMsg = el}>
                    Wartość kursu nie powinna zawierać innych znaków niż cyfry i jedna kropka (wraz z częścią ułamkową liczby)
                </p>
            </section>
        );
    }
}

const mapDispatchToProps_Currency = dispatch => ({
    changeCurrency: currency => dispatch(changeCurrencyAction(currency))
});  

const ConnectedCurrency = connect(
    null,
    mapDispatchToProps_Currency
)(Currency);

export default ConnectedCurrency;