exports.error_msg = function(code, msg) {
    return {
        error: {
            code: code,
            errorMessage: msg
        },
        data: {

        }
    }
};

exports.success_msg = function(msg,data) {
    return {
        error: {
            code: 0,
            errorMessage: '',
            userMessage : msg || ''
        },
        data:data
    }
};
