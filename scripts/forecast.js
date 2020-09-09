// class based solution
class ApiCall {
    constructor() {
        this.key = '1lVmy5meSp8KAg4FdXCy5M601nGhOGc5';
        this.weatherUrl = 'http://dataservice.accuweather.com/currentconditions/v1/';
        this.cityUrl = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    }
    async updateCity(city) {
        const cityData = await this.getCity(city);
        const weather = await this.getWeather(cityData.Key);
        return { cityData, weather };
    }
    async getCity(city) {
        const query = `?apikey=${this.key}&q=${city}`;
        const response = await fetch(this.cityUrl + query);
        const data = await response.json();
        return data[0];
    }
    async getWeather(id) {
        const query = `${id}?apikey=${this.key}`;
        const response = await fetch(this.weatherUrl + query);
        const data = await response.json();
        return data[0];
    }
};



// just function based solution
// api key from accu weather
// const key = '1lVmy5meSp8KAg4FdXCy5M601nGhOGc5';

// get weather infomation
// const getWeather = async (id) => {

//     // const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
//     const query = `${id}?apikey=${key}`;

//     const response = await fetch(base + query);
//     const data = await response.json();

//     //console.log(data);
//     return data[0];

// };

// get city information
// const getCity = async (city) => {

//     // const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
//     const query = `?apikey=${key}&q=${city}`;

//     const response = await fetch(base + query);
//     const data = await response.json();

//     //console.log(data[0]);

//     return data[0];
// };

// getCity('DHAKA').then(data => {
//     console.log(`Dhaka key : ${data.Key}`);
//     return getWeather(data.Key);
// }).then(data => {
//     console.log(`Dhaka weather is today : ${data.WeatherText}`);
// }).catch(err => console.log(err));

