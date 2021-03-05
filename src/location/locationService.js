let satellites = {
    Kenobi: [-500, -200],
    Skywalker: [100, -100],
    Sato: [500, 100]
}


class LocationService {
    constructor() {
    }

    async initialize() {
    }

    /**
     * Retrives Location
     * @param {*} event
     * @param {*} context
     */
    async getLocation(event, context) {
        let sato = [];
        let sky = [];
        let kenobi = [];
        //Calculo de las cordenadas de la nave
        sato[0] = satellites.Sato[0] + event.body.satellites.sato[0];
        sato[1] = satellites.Sato[1] + event.body.satellites.sato[1];

        sky[0] = satellites.Skywalker[0] + event.body.satellites.skywalker[0];
        sky[1] = satellites.Skywalker[1] + event.body.satellites.skywalker[1];

        kenobi[0] = satellites.Kenobi[0] + event.body.satellites.kenobi[0];
        kenobi[1] = satellites.Kenobi[1] + event.body.satellites.kenobi[1];

        //comparando respuestas de cordenadas
        let location = this.average(sato[0], sato[1], sky[0], sky[1], kenobi[0], kenobi[1]);

        return { location: location, message: "Ubicacion aproximada" };
    }

    average(x1, y1, x2, y2, x3, y3) {
        let x = x1 + x2 + x3;
        x = x / 3;
        let y = y1 + y2 + y3;
        y = y / 3;
        return [x.toFixed(2), y.toFixed(2)];
    }

    compare(sato,) {

    }
}

exports.LocationService = LocationService;
