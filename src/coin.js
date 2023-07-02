import React from "react";

import classes from './coin.module.css';


const coin = ({image,name,current_price,price_change_percentage_24h,market_cap,symbol}) => {
    return (
        <div className={classes.coinContainer}>
            <div className={classes.coinRow}>
                <div className={classes.coin}>
                    <img src={image} alt="Crypto" />
                    <h1>{name}</h1>
                    <p className={classes.coinSymbol}>{symbol}</p>
                </div>
                <div className={classes.coinData}>
                    <p className={classes.coinPrice}>Rs.{current_price}</p>

                    {price_change_percentage_24h<0 ? 
                    (<p className={classes.red}>{price_change_percentage_24h.toFixed(2)}%</p>)
                    :
                    (<p className={classes.green}>{price_change_percentage_24h.toFixed(2)}%</p>)
                    }
                    <p className={classes.coinMarketCap}>Market Cap: Rs.{market_cap.toLocaleString()}</p>
                </div>
            </div>
        </div>
    )
}

export default coin;