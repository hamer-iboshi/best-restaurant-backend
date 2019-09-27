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
    
    async index(req, res){
        res.send('Aplication build to get informations about restaurants from Zomato API');
    },

    async listCategories(req, res){
        let response = await axios.get('https://developers.zomato.com/api/v2.1/categories',config);
        let categories = [];
        response.data.categories.forEach(element => {
            let category = {};
            category[element.categories.id] = element.categories.name;
            categories.push(category);
        });
        return res.json({categories: categories});
    },

    async bestNearRestaurants(req, res){
        var address = {};
        if (req.query.place == null) {
            return res.send("You must specify a place! Like best_near?place=New York City")
        }
        await geocoder.geocode(req.query.place).then( function(response) {
            address = response[0];
        }).catch( function(err){
            return res.json({ error: err});
        });
        let config_zomato = config;
        config_zomato.params = { lat: address.latitude, lon: address.longitude };
        let response = await axios.get('https://developers.zomato.com/api/v2.1/geocode',config_zomato);
        return res.json(response.data);
    },
};