import React, { Component } from 'react'
import { useEffect,useState } from 'react';

const App = () => {

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '87407b036amshc2e3c92bcd9dfc7p11b8afjsn9aaed489847d',
            'X-RapidAPI-Host': 'skyscanner44.p.rapidapi.com'
        }
    };
    
    fetch('https://skyscanner44.p.rapidapi.com/search-rentacar?pickupId=95673383&pickupDate=2022-11-06&pickupTime=10%3A00&returnDate=2022-11-11&returnTime=10%3A00&currency=EUR', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}
// class App extends Component {
//     render() {
        
//     }
// }

export default App; 
