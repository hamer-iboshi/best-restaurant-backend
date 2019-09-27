const axios = require('axios');
const dotenv = require('dotenv');
const NodeGeocoder = require('node-geocoder');
dotenv.config();

const config = {
    headers: {
        'Accept': 'application/json',
        'user-key': process.env.API_KEY
    },
    params: {}
};

const geocoder_options = {
    provider: 'here',
    appId: process.env.HERE_APP_ID,
    appCode: process.env.HERE_API_KEY,
    production: false,
}

var geocoder = NodeGeocoder(geocoder_options);

module.exports = {
    
    async listCategories(req, res){
        let response = await axios.get('https://developers.zomato.com/api/v2.1/categories',config);
        let categories = [];
        response.data.categories.forEach(element => {
            let category = {};
            category[element.categories.id] = element.categories.name;
            categories.push(category);
        });
        res.json(categories);
    },

    async bestNearRestaurants(req, res){
        console.log(req.body);
        address = await geocoder.geocode('New York City');
        let config_zomato = config;
        config_zomato.params = { lat: address[0].latitude, lon: address[0].longitude };
        let response = await axios.get('https://developers.zomato.com/api/v2.1/geocode',config);
        console.log(response.data,config_zomato);
        res.json(response.data);
    },
};