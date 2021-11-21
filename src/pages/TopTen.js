import React from 'react';

const TopTen = props => {
    const cryptoInfo= props.topteninfo.map(coin => {
        const {symbol,image,name,current_price,ath,price_change_percentage_24h}= coin
        const uurl= {name}
        return (
            <div className="coinlevel1">
            <div className= "coinlevel2">
                        
                    <div key={symbol}>
                        <a href= {!"https://www.coingecko.com/en/coins/" + uurl}>
                            <p className="coin_image"><img src={image} alt={symbol} width="28" height="28"/></p>
                            <p className="coin_name">{name}</p>
                            <p className="coin_price">{current_price.toLocaleString()}</p>
                            <p className="coin_ath"> {ath.toLocaleString()}</p>
                            {price_change_percentage_24h < 0 ? (
                                <p className="red_change">
                                {price_change_percentage_24h.toFixed(2)}%
                                </p>
                                ) : (
                                    <p className= "green_change">
                                      {price_change_percentage_24h.toFixed(2)}%
                                    </p>
                                    )
                            }
                        </a>
                    </div>
            </div>
            </div>
        );
    });

    return (
            <div className="toptencoinlist">
                        {cryptoInfo} 
            </div>
    );

}

export default TopTen;

// import React, { Component} from 'react';

// const TopTen = props => {
//     const cryptoInfo= props.topteninfo.map(coin => {
//         const {image,name,current_price,ath}= coin
//         return (
//             <tr key={name}>
//                 <td><img src={image} alt='' width="30" height="30"/></td>
//                 <td>{name}</td>
//                 <td>{current_price.toLocaleString()}</td>
//                 <td>{ath.toLocaleString()}</td>
//             </tr>
//         )
//     })

// const TopTenHeader = props => {
//     const header = Object.keys(props.topteninfo[0])
//     return header.map((key, index) => {
//         return <th key={index}>{key.toUpperCase()}</th>
//     })
// }



//     return (
//         <div>
//             <table className= 'toptenTable'>
//                 <tbody>
//                     <tr>{TopTenHeader}</tr>
//                     {cryptoInfo}
//                 </tbody>
//             </table>
//         </div>
//     );

// }

// export default TopTen;