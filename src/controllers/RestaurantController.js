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
        res.json({categories: categories});
    },

    async bestNearRestaurants(req, res){
        var address = {};
        await geocoder.geocode(req.query.place).then( function(response) {
            address = response[0];
        }).catch( function(err){
            res.json({ error: err});
        });
        let config_zomato = config;
        config_zomato.params = { lat: address.latitude, lon: address.longitude };
        let response = await axios.get('https://developers.zomato.com/api/v2.1/geocode',config_zomato);
        res.json(response.data);
    },
};