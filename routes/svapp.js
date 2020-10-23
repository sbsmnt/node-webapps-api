const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const mockData = require('../mock/svapp');

// auth
router.post('/login', auth.userLogin ,(req, res, next) => {
    if (res.locals.error) {
        res.status(400).json({error: res.locals.error});
        return;
    } 
    res.status(200).json(res.user);
});

router.post('/islogged', auth.jwtAuth ,(req, res, next) => {
    if (res.locals.error) {
        res.status(401).json({error: res.locals.error});
        return;
    } 
    res.status(200).json(req.user);
});

router.post('/register', auth.userRegister, (req, res, next) => {
    if (res.locals.error) {
        res.status(400).json({error: res.locals.error});
        return;
    } 
    // console.log(res.locals.isReg);
    res.status(201).send(req.body);
});

router.get('/user', (req, res, next) => {
    const mockUser = mockData.user;
    res.send(mockUser);
});


// Partners
router.get('/partners', auth.jwtAuth, (req, res, next) => {
    if (res.locals.error) {
        res.status(401).json({error: res.locals.error});
        return;
    } 
    const mockPartners = mockData.partnersData;
    res.send(mockPartners);
});

// Top
router.get('/top-all', auth.jwtAuth, (req, res, next) => {
    const mockTopAll = {
        alltime: mockData.topAllTime,
        month: mockData.topMonth,
        local: mockData.topLocal,
    };
    res.send(mockTopAll);
});

router.get('/top-all-time', (req, res, next) => {
    const mockTop = mockData.topAllTime;
    res.send(mockTop);
});

router.get('/top-month', (req, res, next) => {
    const mockTop = mockData.topMonth;
    res.send(mockTop);
});

router.get('/top-local', (req, res, next) => {
    const mockTop = mockData.topLocal;
    res.send(mockTop);
});

// Pages
router.get('/partner-pages', auth.jwtAuth, (req, res, next) => {
    if (res.locals.error) {
        res.status(401).json({error: res.locals.error});
        return;
    } 
    const mockPages = mockData.partnerPages;
    res.send(mockPages);
});

router.post('/partner-pages', auth.jwtAuth, (req, res, next) => {
    if (res.locals.error) {
        res.status(401).json({error: res.locals.error});
        return;
    } 
    const body = req.body;
    const mockCreatePage = {
        uid: "7",
        name: "Client Name",
        url: "client-name",
        qr_code: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=ClientName",
        active: "1"
    }
    res.send(mockCreatePage);
});


module.exports = router;