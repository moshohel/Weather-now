const cityForm = document.querySelector('form');

const updateCity = async city => {
    //console.log(city);
    const cityData = await getCity(city);
    const weather = await getWeather(cityData.Key);

    return {
        cityData: cityData,
        weather: weather
    }

};

cityForm.addEventListener('submit', e => {
    e.preventDefault();

    // get city value
    const city = cityForm.city.value.trim();
    cityForm.reset();

    // update the ui
    updateCity(city).then(data => {
        console.log(data);
    }).catch(err => {
        console.log(err);
    });

});