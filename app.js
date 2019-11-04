const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

lugar.getLugarLatLng(argv.direccion)
    .then(resp_lugar => {
        clima.getClima(resp_lugar.lat, resp_lugar.lng)
            .then(resp_clima => {
                console.log(`El clima de "${argv.direccion}" es de ${resp_clima}`);
            })
            .catch(err => console.error(err))
    })
    .catch(err => console.error(err));
