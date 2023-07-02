import classes from './App.module.css';
import Coin from './coin';
import axios from 'axios';
import React,{useEffect, useState} from 'react'; 

function App() {
  const [coins,setCoins] = useState([])
  const [search,setSearch] = useState('')
  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en')
    .then(response => {
      setCoins(response.data)
      // console.log(response.data)
    })
    .catch(error => console.log(error))
  },[])

const handleChange = e => {
  setSearch(e.target.value)
}

const filteredCoin = coins.filter(
  coin => coin.name.toLowerCase()
.includes(search.toString().toLowerCase())
)

  return (
    <div className={classes.coinApp}>
      <h1 className={classes.heading}>CryptoInfo</h1>
      <div className={classes.coinSearch}>
        <form action={filteredCoin}>
          <input type='text' className={classes.coinInput} placeholder='Enter the coin name' onChange={handleChange}/>
        </form>
      </div>
      {filteredCoin.map(coin=>{
        return(
          <Coin
          key={coin.id}
          name={coin.name}
          image={coin.image}
          symbol={coin.symbol}
          market_cap={coin.market_cap}
          current_price={coin.current_price}
          price_change_percentage_24h={coin.price_change_percentage_24h}
          />
        );
      })}
    </div>
  );
}

export default App;
