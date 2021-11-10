import React from 'react';

class CoinSearch extends React.Component {
    state = {
        coinName: [],
    }

    handleChange = e => {
        this.setState({
            coinName: e.target.value
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.searchCoinData(this.state.coinName);
        this.setState({
            coinName: ''
        })
    }

    render() {
        return (
            <div className= "searchformstuff">
                <div className= "searchelements">
                    <div className='panel panel-default homepage'>
                        <div className='hmpagecoin'>
                            <img src="https://cdn-icons.flaticon.com/png/512/4825/premium/4825555.png?token=exp=1636226166~hmac=0893e474e5bdef6d86497f3c3fd6f399" alt="" width="100" height="100" className="d-inline-block align-text-top" />
                            <h1 className='hmpagecoinText'>COINLOOK UP</h1>             
                        </div>
                    {/* <form className="d-flex">
                        <input className="form-control me-2" type="search" />
                        <button className="btn btn-outline-primary" type="submit">Search</button>
                    </form> */}
                    </div>
                </div>

                <form className= "formsubmit" onSubmit={this.handleSubmit}>
                <input
                    onChange={this.handleChange}
                    value={this.state.coinName}
                />
                <button className="btn btn-outline-primary" type="submit">Search</button>
                </form>
            </div>
        );
    }
}

export default CoinSearch;