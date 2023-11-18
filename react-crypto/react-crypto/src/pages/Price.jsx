import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Price() {
    // make a variable to store our api key
    const apiKey = "692BA8D6-CEC1-4EC3-8AC5-C1B827C48372";
    // get the currency symbol from the url
    // these two lines get the params object from the url (address bar), 
    // and then we save into a variable called symbol for us to use later
    const params = useParams();
    // console.log(params);
    const symbol = params.symbol;
    // use the apiKey and symbol variables to make our url
    const url = `http://rest.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`;

    // state to hold the coin data
    const [coin, setCoin] = useState("null");

    // function to fetch coin data
    const getCoin = async () => {
        try {
            console.log(url)
            const response = await fetch(url);
            const data = await response.json();
            setCoin(data);
        } catch (e) {
            console.error(e);
        }
    }

    // useEffect to run getCoin when component mounts
    useEffect(() => {
        getCoin();
    }, []);

    // loaded function shows up when the data has been fetched
    const loaded = () => {
        return (
            <div>
                <h1>
                    {coin.asset_id_base}/{coin.asset_id_quote}
                </h1>
                <h2>{coin.rate}</h2>
            </div>
        )
    }

    // function for when data doesn't exist yet
    const loading = () => {
        return <h1>Loading...</h1>
    }

    // if coin has data - so if coin is not null

  return (
    coin && coin.rate ? loaded() : loading()
  )
}

export default Price