import React, { useState, useEffect } from 'react';
import './Styles/Market.css';

const Market = () => {
    const [coinData, setCoinData] = useState([]);
    const coins = ['bitcoin', 'litecoin', 'dogecoin', 'cardano', 'ethereum'];

    useEffect(() => {
        const fetchDataForCoins = async () => {
            const newCoinData = [];

            for (const coin of coins) {
                try {
                    const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${coin}`);
                    if (!response.ok) {
                        throw new Error('Failed to fetch data');
                    }
                    const jsonData = await response.json();

                    newCoinData.push({
                        image: jsonData[0].image,
                        name: jsonData[0].name,
                        priceChange: jsonData[0].price_change_percentage_24h,
                        totalSupply: jsonData[0].total_supply,
                        totalVolume: jsonData[0].total_volume,
                    });
                } catch (error) {
                    console.error('Error fetching data for', coin, error);
                }
            }

            setCoinData(newCoinData);
        };

        if (coinData.length === 0) {
            fetchDataForCoins();
        }
    }, [coinData, coins]);

    return (
        <div className="container-fluid Market-Section py-5">
            <div className="container d-flex flex-column">
                <p className="Market-Tagline">Market</p>
                <h2 className="white">Current Market</h2>

                <div className="row white my-2">
                    <div className="col-3">Currency</div>
                    <div className="col-2">24H Change</div>
                    <div className="col-3">Market Cap</div>
                    <div className="col-2">T-Supply</div>
                    <div className="col-2">24H Volume</div>
                </div>

                {coinData.map((data, index) => (
                    <div className="row white Market-Data my-3" key={index}>
                        <div className="col-3 d-flex flex-row">
                            <img className="mr-3" src={data.image} style={{ width: '3vmax' }} alt="" />
                            <span className="d-flex align-items-center">{data.name}</span>
                        </div>
                        <div className="col-2">{data.priceChange}%</div>
                        <div className="col-3">$93,967,200.89</div>
                        <div className="col-2">{data.totalSupply}</div>
                        <div className="col-2">{data.totalVolume}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Market;
