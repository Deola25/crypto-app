import React, { Component} from 'react';

const TopTen = props => {
    const cryptoInfo= props.topteninfo.map(coin => {
        const {image,name,current_price,ath}= coin
        return (
            <tr key={name}>
                <td><img src={image} alt='' width="30" height="30"/></td>
                <td>{name}</td>
                <td>{current_price.toLocaleString()}</td>
                <td>{ath.toLocaleString()}</td>
            </tr>
        )
    })

const TopTenHeader = props => {
    const header = Object.keys(props.topteninfo[0])
    return header.map((key, index) => {
        return <th key={index}>{key.toUpperCase()}</th>
    })
}



    return (
        <div>
            <table className= 'toptenTable'>
                <tbody>
                    <tr>{TopTenHeader}</tr>
                    {cryptoInfo}
                </tbody>
            </table>
        </div>
    );

}

export default TopTen;