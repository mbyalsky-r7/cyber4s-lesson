exports.genericResponse = function (handler, error) {
    const responseJson = {
        success: false,
        data: null,
    };

    return async function (req, res) {
        try {
            responseJson.data = await handler(req, res);
            responseJson.success = true;
        } catch (err) {
            responseJson.data = error || err.message;
            responseJson.success = false
        }
        return res.json(responseJson)
    }
}

exports.camelize = function camelize(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index = 0) => {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
}
