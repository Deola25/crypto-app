import React from 'react';

export default function Home(props) {
    return (
        
        <div className='panel panel-default homepage'>
            <div className='hmpagecoin'>
                <img src="https://cdn-icons.flaticon.com/png/512/4825/premium/4825555.png?token=exp=1636226166~hmac=0893e474e5bdef6d86497f3c3fd6f399" alt="" width="100" height="100" className="d-inline-block align-text-top" />
                <div className='hmpagecoinText'>COINLOOK UP</div>             
            </div>
            <form className="d-flex">
                          <input className="form-control me-2" type="search" />
                          <button className="btn btn-outline-primary" type="submit">Search</button>
                      </form>
        </div>

        
    )
}