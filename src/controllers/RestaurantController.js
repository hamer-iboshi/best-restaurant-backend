const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

const config = {
    headers: {
        'Accept': 'application/json',
        'user-key': process.env.API_KEY
    }
};

module.exports = {
    
    async listCategories(req, res){
        let response = await axios.get('https://developers.zomato.com/api/v2.1/categories',config);
        res.json(response.data);
    },
    
};