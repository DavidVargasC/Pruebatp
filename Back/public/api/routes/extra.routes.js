const router = require('express').Router();
const extraController = require('../controllers/extra.controller');

router.get('/', extraController.getExtra);
router.post('/save', extraController.save);

module.exports = router;