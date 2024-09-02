const router = require('express').Router();

router.post('/register', (req, res) => {
    res.send('Register success');
});
router.post('/login', (req, res) => {
    res.send('login success');
});

module.exports = router;    