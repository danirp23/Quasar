const { MessageService } = require('./messageService');

let {
    SUCCESS,
    INTERNAL_ERROR,
    INTERNAL_ERROR_DATA,
} = require('../commons/customResponse');

class MessageController {

    /**
     * Initialize global objects
     */
    constructor() {
        this.messageService = new MessageService();
    }

    async initialize() {
        await this.messageService.initialize();
    }

    /**
     * Retrives Message
     * @param {*} event
     * @param {*} context
     */
    async getMessage(event, context) {
        let response = {};
        let status = {};
        try {
            if (!(event.body) || !(event.body.satellites))
                throw INTERNAL_ERROR_DATA;
            let message = await this.messageService.getMessage(event, context);
            status = SUCCESS;
            status.body = message;
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

module.exports.MessageController = MessageController;
