import React from 'react';

class CoinSearch extends React.Component {
    state = {
        coinName: '',
    }

    handleChange = e => {
        this.setState({
            coinName: e.target.value
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.coininfoapi(this.state.coinName);
        this.setState({
            coinName: ''
        })
    }

    render() {
        
        return (
            <div class="h-100 row align-items-center">
            <div className= "searchFormReturn">
                <div className= "searchFormImage">
                    {/* <img src= "https://i.postimg.cc/dQWpmybG/1883187-removebg-preview.png" alt="" width="100" height="100"/> */}
                </div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        onChange={this.handleChange}
                        value={this.state.coinName}
                    />
                <button className="btn btn-outline-warning" type="submit">Search</button>
                </form>
            </div>
            </div>
        );
    }
}

export default CoinSearch;