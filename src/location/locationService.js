let x1 = -500;
let y1 = -200;
let x2 = 100;
let y2 = -100;
let x3 = 500;
let y3 = 100;

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
        let distance1 = event.body.satellites[0].distance;
        let distance2 = event.body.satellites[1].distance;
        let distance3 = event.body.satellites[2].distance;

        console.log(`Sat distance calculate 1:${distance1.toFixed(2)} 2:${distance2.toFixed(2)} 3:${distance3.toFixed(2)}`);

        let x12 = x1*x1;
        let y12 = y1*y1;
        let x22 = x2*x2;
        let y22 = y2*y2;
        let x32 = x3*x3;
        let y32 = y3*y3;
        let d12 = distance1*distance1;
        let d22 = distance2*distance2;
        let d32 = distance3*distance3;

        //Calculo de las cordenadas de la nave
        let a = ((d12-d22+x22+y22-x12-y12)/(2*(y2-y1)));
        let b = (x2-x1)/(y2-y1);
        let c = ((d22-d32+x32+y32-x22-y22)/2);

        let x = (c-(a*(y3-y2)))/((x3-x2)-(b*(y3-y2)));
        let y = a-(x*b);

        console.log(`Ship coords calculate [${x.toFixed(2)},${y.toFixed(2)}]`);

        //comparando respuestas de cordenadas
        let location = {x: x.toFixed(2), y:y.toFixed(2)};

        return location;
    }

/*  average(X, Y, distance1, distance2, distance3) {
        let d1 = Math.sqrt(((X-x3)*(X-x3)) + ((Y-y3)*(Y-y3)));
        let d2 = Math.sqrt(((X-x2)*(X-x2)) + ((Y-y2)*(Y-y2)));
        let d3 = Math.sqrt(((X-x1)*(X-x1)) + ((Y-y1)*(Y-y1)));

        console.log(`Sat distance 1:${d1.toFixed(2)} 2:${d2.toFixed(2)} 3:${d3.toFixed(2)}`);

        if(Math.ceil(d1) === Math.ceil(distance1) && Math.ceil(d2) === Math.ceil(distance2) && Math.ceil(d3) === Math.ceil(distance3)){
            return {x: X.toFixed(2), y:Y.toFixed(2)};
        }
        return 404;
        
    } */

}

exports.LocationService = LocationService;
