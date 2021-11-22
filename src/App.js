import React, { Component } from 'react';
import { Switch, Route, NavLink, Redirect } from 'react-router-dom';
// import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import TopTen from './pages/TopTen'
import CoinSearch from './pages/CoinSearch';
import Home from './pages/Home';
import Login from './pages/Login';
import './App.css';

export default class App extends Component {
  state = {
    topteninfo:[],
    coininfo:''
	};

	componentDidMount() {
    this.topTenList();
	}

  searchCoinData = (coin) => {
    // const coin2 = coin.replace(" ","%20");
		const searchcryptourl = `https://api.coingecko.com/api/v3/coins/${coin}`;
		fetch(searchcryptourl)
			.then((response) => {
				return response.json();
			})
			.then((parsedResponse) => {
				this.setState({
					coininfo: parsedResponse
				}, () => {
				})
			})
			.catch((error) => {
				console.log('error:', error);
			})
	}

  topTenList() {
    const toptencryptourl = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=%20'%2014d%2C24h%2C7d%2C30d%2C1h%20'%20`;
		fetch(toptencryptourl)
			.then((response) => {
				return response.json();
			})
			.then((parsedResponse) => {
				this.setState({
					topteninfo: parsedResponse
				}, () => {
				})
			})
			.catch((error) => {
				console.log('error:', error);
			})
  }

  render() {

    return (

          <div>
            <header>
                <nav className="navbar navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                          <img src="https://i.postimg.cc/dQWpmybG/1883187-removebg-preview.png" alt="" width="25" height="25" className="d-inline-block align-text-top" /> 
                          <NavLink exact to='/' className= "appname">COIN LOOKUP</NavLink>
                        </a>
                        this.state.user ? (
                
                      <div className="navis">
                      <NavLink className="navi2" exact to='/search'>Search</NavLink>
                      <NavLink className="navi" exact to='/topten'>Top Ten</NavLink>
                      </div> 
                    </div>
                    
                </nav>
            </header>
              <main>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/topten'>
              <TopTen topteninfo= {this.state.topteninfo} />
            </Route>
            <Route exact path='/search'>

              <CoinSearch coininfoapi= {this.searchCoinData} />

              <div className="searchpageresult">
              {this.state.coininfo ?
    <>
        <img src={this.state.coininfo.image.large} alt="" width="50" height="50"/>
        <div className= "resultCoinName"> <strong> {this.state.coininfo.name} </strong></div>
        
        {/* <div> <strong>{this.state.coininfo.symbol} </strong></div> */}
        
        <div> <span>Price: </span><strong>${this.state.coininfo.market_data.current_price.usd.toLocaleString()}</strong> </div>
        <div> <span>24 PCT Change: </span><strong>{this.state.coininfo.market_data.price_change_percentage_24h_in_currency.usd.toFixed(2) + '%' }</strong> </div>
        <div> <span>All Time High: </span><strong>${this.state.coininfo.market_data.ath.usd.toLocaleString()}</strong> </div>
        <div> <span>Market Capitalization: </span><strong>${this.state.coininfo.market_data.market_cap.usd.toLocaleString()}</strong> </div>
        <div> <span>Total Volume: </span><strong>{this.state.coininfo.market_data.total_volume.usd.toLocaleString()}</strong> </div>  
    </>
    : null
}
              
              
              </div>

            </Route>   

          </Switch>
              
          
			</main>
      </div>
    );
  }
}