const mapStateToProps = state => ({
    currency: state.currency,
    transactions: state.transactions
});

export default mapStateToProps;