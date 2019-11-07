import React from 'react';

function TransactionList(props) {
    const list = props.list;
    const currency = props.currency;
    const sum = Object.values(list).reduce((total, {value}) => total + Number(value), 0);       // Sum of transactions values

    return(
        <div className="transaction-list">
            <ul className="transaction-list__list">
                {<li className="transaction-list__summary">
                    <span className="transaction-list__summary-count">
                        Liczba transakcji:&nbsp;<span className="value">{list.length}</span>
                    </span>
                    <span className="transaction-list__summary-sum">
                        SUMA:&nbsp;<span className="value">{sum.toFixed(2)}</span>&nbsp;EUR (<span className="value">{(sum * currency).toFixed(2)}</span> PLN)
                    </span>
                </li>}
                {list.length !== 0 && list.map(function(el, nr) {
                    return (
                        <li key={nr} id={el.id} className="transaction-list__element">
                            <span className="transaction-list__element-container">
                                <span className="transaction-list__element-id">{el.id}.</span>
                                <span className="transaction-list__element-name value">{el.name}</span>
                                <span className="transaction-list__element-value"><span className="value">{Number(el.value).toFixed(2)}</span>&nbsp;EUR (<span className="value">{Number(el.value * currency).toFixed(2)}</span>&nbsp;PLN)</span>
                            </span>
                            <span className="transaction-list__element-delete" onClick={props.clickHandler}><i className="fa fa-times"></i></span>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}  

export default TransactionList;