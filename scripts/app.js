const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');


const UiUpdate = (data) => {

    // const cityData = data.cityData;
    // const weather = data.weather;

    // destructure properties of object
    const { cityData, weather } = data;
    console.log(data);
    // update details template
    details.innerHTML = `
    <h5 class="my-3">${cityData.LocalizedName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
        <span>${weather.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
    </div>
    `;

    // update the night/day & icon image
    const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src', iconSrc);

    // let timeSrc = null;
    // if (weather.IsDayTime) {
    //     timeSrc = 'img/day.svg';
    // } else {
    //     timeSrc = 'img/night.svg';
    // }

    // Ternary Operator
    let timeSrc = weather.IsDayTime ? timeSrc = 'img/day.svg' : timeSrc = 'img/night.svg';
    if (weather.IsDayTime) {
        timeSrc = 'img/day.svg';
    } else {
        timeSrc = 'img/night.svg';
    }

    time.setAttribute('src', timeSrc);

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