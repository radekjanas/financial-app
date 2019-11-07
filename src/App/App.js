import React, {Component} from 'react';
import Currency from '../Currency/Currency';
import Transactions from '../Transactions/Transactions';

class App extends Component {
    render() {
        return (
            <>
                <h1 className="app-title">financial-app</h1>
                <Currency />
                <Transactions />
            </>
        );
    }
}

export default App;