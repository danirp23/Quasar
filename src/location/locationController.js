const { LocationService } = require('./locationService');

let {
    SUCCESS,
    INTERNAL_ERROR,
    INTERNAL_ERROR_DATA 
} = require('../commons/customResponse');

class LocationController {

    /**
     * Initialize global objects
     */
    constructor() {
        this.locationService = new LocationService();
    }

    async initialize() {
        await this.locationService.initialize();
    }

    /**
     * Retrives Location
     * @param {*} event
     * @param {*} context
     */
    async getLocation(event, context) {
        let response = {};
        let status = {};
        try {
            if (!(event.body) || !(event.body.satellites))
                throw INTERNAL_ERROR_DATA;
            let location = await this.locationService.getLocation(event, context);
            status = SUCCESS;
            status.body = location;
            response = status;
            console.debug("Success", response);
        } catch (error) {
            if (error.status && error.status.code) {
                console.error("Error:", error);
                return error;
            }
            INTERNAL_ERROR.status.detail = error.message;
            status = INTERNAL_ERROR;
            response = status;
            console.error("Error:", response);
        }
        return response;
    }
}

module.exports.LocationController = LocationController;
