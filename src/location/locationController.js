const {LocationService} = require('./locationService');

let {
    SUCCESS,
    INTERNAL_ERROR,
    responseToString } = require('../commons/customResponse');

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
            let location = await this.locationService.getLocation(event, context);
            status = SUCCESS;
            status.body = location;
            response = status;
        } catch (error) {
            if(error.status && error.status.code){
                throw responseToString(err);
            }
            status = INTERNAL_ERROR;
            response = status;
            throw responseToString(response);
        }
        return response;
    }
}

module.exports.LocationController = LocationController;
