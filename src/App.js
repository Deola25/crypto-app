import React, { Component } from 'react';
import TopTen from './components/TopTen'
import './App.css';

export default class App extends Component {
  state = {
    topteninfo:[]
	};
  // REACT_APP_COINRAKING_API_KEY
	componentDidMount() {
    this.topFiveList()
	}

  topFiveList() {
    const cryptourl = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=%20'%2014d%2C24h%2C7d%2C30d%2C1h%20'%20`;
		fetch(cryptourl)
			.then((response) => {
				return response.json();
			})
			.then((parsedResponse) => {
				this.setState({
					topteninfo: parsedResponse
				}, () => {
					console.log(this.state.topteninfo)
				})
			})
			.catch((error) => {
				console.log('error:', error);
			})
  }

  render() {
    return (
      <main>
          <div>
              <nav className="navbar fixed-top navbar-light bg-light">
                  <div className="container-fluid">
                      <a className="navbar-brand" href="#">
                        <img src="https://cdn-icons.flaticon.com/png/512/4825/premium/4825555.png?token=exp=1636226166~hmac=0893e474e5bdef6d86497f3c3fd6f399" alt="" width="25" height="25" className="d-inline-block align-text-top" /> 
                        <span className= "appname">COIN LOOK UP </span>
                      </a>

                      <form className="d-flex">
                          <input className="form-control me-2" type="search" />
                          <button className="btn btn-outline-primary" type="submit">Search</button>
                      </form>
                  </div>
              </nav>
          <div className="toptencoinlist">
            <TopTen topteninfo= {this.state.topteninfo} />
          </div>   

              
          </div>
			</main>
    );
  }
}