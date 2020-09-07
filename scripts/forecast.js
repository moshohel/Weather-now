// api key from accu weather
const key = '1lVmy5meSp8KAg4FdXCy5M601nGhOGc5';

// get weather infomation
const getWeather = async (id) => {

    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;

    const response = await fetch(base + query);
    const data = await response.json();

    //console.log(data);
    return data[0];

};

// get city information
const getCity = async (city) => {

    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();

    //console.log(data[0]);

    return data[0];
};

// getCity('DHAKA').then(data => {
//     console.log(`Dhaka key : ${data.Key}`);
//     return getWeather(data.Key);
// }).then(data => {
//     console.log(`Dhaka weather is today : ${data.WeatherText}`);
// }).catch(err => console.log(err));

