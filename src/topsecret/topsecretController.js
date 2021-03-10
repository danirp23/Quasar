const { LocationService } = require('../location/locationService');
const { MessageService } = require('../message/messageService');

let {
    SUCCESS_TOPSECRET,
    INTERNAL_ERROR,
    INTERNAL_ERROR_DATA,
} = require('../commons/customResponse');

class TopsecretController {

    /**
     * Initialize global objects
     */
    constructor() {
        this.locationService = new LocationService();
        this.messageService = new MessageService();
    }

    async initialize() {
        await this.locationService.initialize();
        await this.messageService.initialize();
    }

    /**
     * Retrives Topsecret
     * @param {*} event
     * @param {*} context
     */
    async getTopsecret(event, context) {
        let response = {};
        let status = {};
        try {
            if (!(event.body))
                throw INTERNAL_ERROR_DATA;
            let topsecretLocation = await this.locationService.getLocation(event, context);
            let topsecretMessage = await this.messageService.getMessage(event, context);
            status = SUCCESS_TOPSECRET;
            status.body.position = topsecretLocation;
            status.body.message = topsecretMessage;
            response = status;
            console.debug("Success", response);
        } catch (error) {
            if (error.status && error.status.code) {
                console.error("Error:", error);
                return error;
            }
            INTERNAL_ERROR.status.detail = error.topsecret;
            status = INTERNAL_ERROR;
            response = status;
            console.error("Error:", response);
        }
        return response;
    }
}

module.exports.TopsecretController = TopsecretController;
