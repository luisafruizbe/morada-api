const responseOk = require('../utils/responseOk');
const responseError = require('../utils/responseError');

const allProperties = () => {
   
    return responseOk({ nombre : "casa laureles"});

};

const property = (req, res) => {
   
    try
    {
        const property = req.body;
    } catch (error){
        res.status(500).send(error);
    }

    return responseOk({ nombre : "casa laureles"});

};

module.exports = {
    allProperties,
    property
}