const LocationController = require('./locationController').LocationController;

/**
 * Handler for location
 * @param {*} event
 */
async function LocationHandler(event, context) {
    let locationController = new LocationController();
    await locationController.initialize();

    let response = null;

    response = await locationController.getLocation(event, context);

    return response;
}

module.exports.LocationHandler = LocationHandler;
