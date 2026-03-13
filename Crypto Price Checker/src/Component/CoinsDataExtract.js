import React from "react";
function CryptoData() {
    const [data, setData] = React.useState(null);
    React.useEffect(() => {
        // Define the API endpoint
        const apiUrl = 'https://coingecko.p.rapidapi.com/simple/price?ids=%3CREQUIRED%3E&vs_currencies=%3CREQUIRED%3E';

        // Make the API request
        fetch(apiUrl)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((apiData) => {
                setData(apiData);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);
}

export default CryptoData;