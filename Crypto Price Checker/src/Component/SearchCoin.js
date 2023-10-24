import React from 'react'
import './Styles/SearchCoin.css'


const SearchCoin = () => {
    const [ImgLink, SetImgLink] = React.useState('https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400');
    const [CoinName,SetCoinName] = React.useState('Bitcoin');
    const [CurrChange,SetCurrChange] = React.useState('12.1935');
    const [CurrPrice,SetCurrPrice] = React.useState('34453');
    const [Tsupply,SetTsupply] = React.useState('21000000.0');
    const [Volume,SetVolume] = React.useState('47992720175');
    
    let jsonData = null;
    // ye function coin ka data ko fetch krega
    const FetchCoinData = async(coin) => {
        try {
            const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${coin}`);
            if(!response.ok)
            {
                throw new Error('Failed to Fetch data');
            }
            jsonData = await response.json();
            SetImgLink(jsonData[0].image);
            SetCoinName(jsonData[0].name);
            SetCurrChange(jsonData[0].price_change_percentage_24h);
            SetTsupply(jsonData[0].total_supply);
            SetVolume(jsonData[0].total_volume);

        } catch (error) {
        
        }
    }

    // jb bhi mai search bar mein search button click krunga tb ye api call krega
    const HandleSearch = () =>{
        const coin = document.getElementById('TypeData').value;
        if(coin !== '')
        {
            FetchCoinData(coin);
        }
        else{
            document.getElementById('TypeData').value = "Give Valid Coin Name"
        }
    }

    return (
        <div className='container Search-Section py-5'>
            <p className="Search-Tagline">Search Coin</p>

            {/* Search Bar  */}
            <div className="row Search-Row px-3">
                <div className="col-lg-11 col-md-10 col-sm-12 px-1 SearchBar my-1">
                    <input id='TypeData' class="form-control mr-sm-2" type="search" placeholder="Enter Coin" aria-label="Search" />
                </div>
                <div className="col-lg-1  col-md-2 col-sm-12 px-0 my-1">
                    <button class="Search-Button Search-Btn btn btn-outline-success my-2 my-sm-0" type="submit" onClick={() => {HandleSearch()}}>Search</button>
                </div>
            </div>

            <div className="row white mb-2 mt-5">
                <div className="col-3">Currency</div>
                <div className="col-2">24H Change</div>
                <div className="col-3">Market Cap</div>
                <div className="col-2">T-Supply</div>
                <div className="col-2">24H Volume</div>
            </div>

            <div className="row white Market-Data my-3">
                <div className="col-3 d-flex flex-row">
                <img className='mr-3' src={ImgLink} style={{ width: '3vmax' }} alt="" />
                    <span className='d-flex align-items-center'> ${CoinName}</span>
                </div>
                <div className="col-2"> ${CurrChange}%</div>
                <div className="col-3">$93,967,200.89</div>
                <div className="col-2">${Tsupply}</div>
                <div className="col-2">${Volume}</div>
            </div>
        </div>
    )
}

export default SearchCoin;