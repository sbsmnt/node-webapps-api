const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const swApiData = require('../middleware/star-wars');


router.get('/', function(req, res, next) {
    res.send('star wars API');
});

router.get('/people', swApiData.getPeople, function(req, res, next) {
    if (res.locals.error) {
        res.send(`Error: ${res.locals.error}`);
    }
    const peopleData = res.locals.people ? res.locals.people : {};
    res.send(peopleData);
});

router.get('/planets', swApiData.getPlanets, function(req, res, next) {
    if (res.locals.error) {
        res.send(`Error: ${res.locals.error}`);    
    }
    
    const planetsData = res.locals.planets ? res.locals.planets : {};
    res.send(planetsData);
});

module.exports = router;