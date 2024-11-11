"use client";

import { useEffect, useState } from 'react';

function Home() {

  const [price, setprice] = useState<any>([]);
  
  const coins = [
    'BTC', 
    'ETH', 
    'LTC', 
    'XRP', 
    'BCH', 
    'ADA', 
    'SOL', 
    'DOT', 
    'AVAX', 
    'DOGE', 
    'MATIC', 
    'BNB', 
    'LINK', 
    'XLM', 
    'TRX', 
    'FIL', 
    'SHIB', 
    'LUNA', 
    'FTM', 
    'ALGO', 
    'VET', 
    'NEO', 
    'EOS', 
    'ZRX', 
    'KSM', 
    'YFI', 
    'UNI', 
    'SAND', 
    'AAVE', 
    'CRV', 
    'MKR', 
    'GRT', 
    'COMP', 
    'STMX', 
    'ZEC', 
    'XMR', 
    'BAT', 
    'CRO', 
    'EGLD', 
    'KAVA', 
    'HNT', 
    'OXT', 
    'LRC', 
    'FIL', 
    'ICX', 
    'QTUM', 
    'REN', 
    'STPT'
];


  useEffect(() => {


    async function cruncyData() {

        const responses = await Promise.all(

          coins.map((currency) =>

            fetch(`https://rest.coinapi.io/v1/exchangerate/${currency}/USD`, {

              headers: { 'X-CoinAPI-Key': 'f89e5fb2-af01-4db6-9918-535c68e489c4' },

            }).then((response) => response.json())
          )
        );
        
        const fetchedprice = responses.map((response, i) => ({
          currency: coins[i],
          rate: response.rate,
        }));

        setprice(fetchedprice);
      } 

    cruncyData();


  }, []);

  return (

    <div className="w-full h-[100vh] flex justify-center text-black items-center">
      <div className="w-full h-[600px] text-center p-[30px] overflow-scroll">
        <h1 className="text-[35px] mt-3">Real-Time Crypto price</h1>
        
        { 
          price.map((crypto: any) => (
            <div key={crypto.currency} className="flex justify-between mt-4">
              <div className="text-[20px]">{'1 ' + crypto.currency}</div>
              <div className="text-[20px]">{'$ ' + crypto.rate.toFixed(2)}</div>
            </div>
          ))
        }
      </div>
    </div>
  );
}


export default Home
