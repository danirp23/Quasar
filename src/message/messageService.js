const { count } = require("console");
let endMessage = "El Mensaje no pudo ser decifrado";

class MessageService {
    constructor() {
    }

    async initialize() {
    }

    /**
     * Retrives Message CAMBIAR
     * @param {*} event
     * @param {*} context
     */
    async getMessage(event, context) {
        let sato = event.body.satellites[2].message;
        let sky = event.body.satellites[1].message;
        let kenobi = event.body.satellites[0].message;

        this.lengthMenssage([kenobi.length, kenobi], [sato.length, sato], [sky.length, sky]);
        return endMessage.replace(/,/g, ' ');
    }

    lengthMenssage(x, y, z) {
        if (x[0] >= y[0] && x[0] >= z[0]) {
            endMessage = this.compar(x[1], y[1], z[1]);
            return endMessage;
        } else
            this.lengthMenssage(y, z, x);
    }


    compar(mayor, array2, array3) {
        let result = [];
        for (let i in mayor) {
            if (mayor[i] !== "")
                if (result[result.length - 1] !== mayor[i] && result[result.length - 2] !== mayor[i])
                    result.push(mayor[i]);
            if (array2[i] && array2[i] !== "")
                if (result[result.length - 1] !== array2[i] && result[result.length - 2] !== array2[i])
                    result.push(array2[i]);
            if (array3[i] && array3[i] !== "")
                if (result[result.length - 1] !== array3[i] && result[result.length - 2] !== array3[i])
                    result.push(array3[i]);
        }
        return result.toString();
    }
}

exports.MessageService = MessageService;
