const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');

const UiUpdate = (data) => {
    const cityData = data.cityData;
    const weather = data.weather;

    console.log(data.cityData);
    console.log(data.weather);

    details.innerHTML = `
    <h5 class="my-3">${cityData.LocalizedName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
        <span>temp</span>
        <span>&deg;C</span>
    </div>
    `;

    //  remove the d-none class
    if (card.classList.contains('d-none')) {
        card.classList.remove('d-none');
    }

};

const updateCity = async city => {
    //console.log(city);
    const cityData = await getCity(city);
    const weather = await getWeather(cityData.Key);

    // return {
    //     cityData: cityData,
    //     weather: weather
    // }

    // Object Shorthand Notation
    // object key and value name same
    return { cityData, weather };

};

cityForm.addEventListener('submit', e => {
    e.preventDefault();

    // get city value
    const city = cityForm.city.value.trim();
    cityForm.reset();


    updateCity(city)
        .then(data => {
            UiUpdate(data);
        }).catch(err => {
            console.log(err);
        });

});