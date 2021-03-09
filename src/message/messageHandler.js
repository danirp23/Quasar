const MessageController = require('./messageController').MessageController;

/**
 * Handler for Message
 * @param {*} event
 */
async function MessageHandler(event, context) {
    let messageController = new MessageController();
    await messageController.initialize();

    let response = null;

    response = await messageController.getMessage(event, context);

    return response;
}

module.exports.MessageHandler = MessageHandler;
