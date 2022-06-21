const express = require('express');
const router = express.Router();
const { all, getProperty } = require('../controllers/propertiesCtrl')

router.get('/', all);
router.get('/id', getProperty);
/*router.post('/',addProperty);
router.delete('/',deleteProperty);
router.put('/', updateProperty);
*/

module.exports = router;