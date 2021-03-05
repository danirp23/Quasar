/**
 * @param {*} response
 */
const responseToString = (response) => {
    return JSON.stringify(response)
};

const INTERNAL_ERROR = {
    statusCode: 500,
    status: {
        code: "QUA505",
        message: "Internal Error in the service",
        identifier: null,
        date: null
    }
};

const SUCCESS = {
    statusCode: 200,
    status: {
        code: "QUA200",
        message: "SUCCESS",
        identifier: null,
        date: null
    },
    body: {
        status: "Good"
    }
};

module.exports = {
    responseToString,
    INTERNAL_ERROR,
    SUCCESS
};