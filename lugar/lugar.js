const axios = require('axios');

const getLugarLatLng = async (direccion) => {
    const encodeUrl = encodeURI(direccion);
    
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: {
            'X-RapidAPI-Key': '912c31e97dmshaa3eb6cb156e938p1795e3jsn0633e834af23'
        }
    });
    
    const resp = await instance.get();

    if (resp.data.Results.length === 0)
        throw new Error(`No hay resultados para "${direccion}"`);


    const data = resp.data.Results[0];

    return {
        direccion: data.name,
        lat: data.lat,
        lng: data.lon
    }
}

module.exports = {
    getLugarLatLng
}
