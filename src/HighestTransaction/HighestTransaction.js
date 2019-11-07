import React from 'react';

function HighestTransaction(props) {
    if (props.data.length !== 0) {
        // Using JSON methods to avoid sorting transactions from store (props.data contains references to objects)
        const sortedTable = JSON.parse(JSON.stringify(props.data)).sort(function(a, b) {
            return Number(b.value) - Number(a.value);
        });

        return(
            <div className="highest-transaction">
                <div className="highest-transaction__box">
                    <p className="highest-transaction__box-value">Najwyższa wartość: 
                        <span className="highest-transaction__value">
                            <span className="value">{sortedTable && Number(sortedTable[0].value).toFixed(2)}</span> EUR (<span className="value">{sortedTable && (Number(sortedTable[0].value) * Number(props.currency)).toFixed(2)}</span> PLN)
                        </span>
                    </p>
                    <p className="highest-transaction__box-name">Transakcja: 
                        <span className="highest-transaction__name value">{sortedTable && sortedTable[0].name}</span>
                    </p>
                </div>
            </div>
        );
    } else {
        return null;
    }
}  

export default HighestTransaction;