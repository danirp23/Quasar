const TopsecretController = require('./topsecretController').TopsecretController;

/**
 * Handler for Topsecret
 * @param {*} event
 */
async function TopsecretHandler(event, context) {
    let topsecretController = new TopsecretController();
    await topsecretController.initialize();

    let response = null;

    response = await topsecretController.getTopsecret(event, context);

    return response;
}

module.exports.TopsecretHandler = TopsecretHandler;
