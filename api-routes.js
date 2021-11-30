let router = require('express').Router();
let contactController = require('./contactController');

router.get('/', (req, res) => {
    res.json({
        'status': 'success',
        'msg': 'Api is working on this tab',
    });
});

router.route('/contacts').get(contactController.index).post(contactController.new);

router.route('/contacts/:contact_id')
    .get(contactController.view)
    .patch(contactController.update)
    .put(contactController.update)
    .delete(contactController.delete);

module.exports = router;