function sucess(data, message) {
    return {
        sucess: true, data, message
    }
}
function errorHendeler(message) {
    return {
        sucess: false, message
    }
}
module.exports = { sucess, errorHendeler };

