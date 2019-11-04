const axios = require('axios');

const getClima = async (lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=20f5b76fbe2a9e20a8c63951da5692d0&units=metric`);

    return resp.data.main.temp
}

module.exports = {
    getClima
}
