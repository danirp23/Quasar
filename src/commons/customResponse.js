/**
 * @param {*} response
 */

let getDate = () => {
    let date = new Date();
    return date.toJSON();
};
const INTERNAL_ERROR = {
    statusCode: 500,
    status: {
        code: "QUA500",
        message: "Internal Error in the service",
        detail: "",
        date: getDate()
    }
};

const INTERNAL_ERROR_DATA = {
    statusCode: 400,
    status: {
        code: "QUA501",
        message: "Please send valid data",
        date: getDate()
    }
};

const SUCCESS = {
    statusCode: 200,
    status: {
        code: "QUA200",
        message: "SUCCESS",
        date: getDate()
    },
    body: {
        status: "Good"
    }
};

module.exports = {
    getDate,
    INTERNAL_ERROR,
    INTERNAL_ERROR_DATA,
    SUCCESS
};