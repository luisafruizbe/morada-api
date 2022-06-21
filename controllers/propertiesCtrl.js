const { allProperties, property } = require('../services/propertyService')

const all = (req, res) => {
    try {

        const { statusHttp, response } = allProperties();
        res.status(statusHttp).json(response);

    } catch (error){
        res.status(500).send(error);
    }
};

const getProperty = (req, res) => {
    try {
        res.status(200).json('OK');

    } catch (error){
        res.status(500).send(error);
    }
};



module.exports = {
    all,
    getProperty
}