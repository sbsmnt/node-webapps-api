const fetch = require("node-fetch");

const getPeople = (req, res, next) => {
    fetch('https://swapi.dev/api/people')
    .then(resp => resp.json())
    .then(data => {
        res.locals.people = {
            count: data.count,
            results: data.results
        };
        next();
    })
    .catch(err => { 
        res.locals.error = err;
        next();
    });
}

const getPlanets = (req, res, next) => {
    fetch('https://swapi.dev/api/planets/')
    .then(resp => resp.json())
    .then(data => {
        res.locals.planets = {
            count: data.count,
            results: data.results
        };
        next();
    })
    .catch(err => { 
        res.locals.error = err;
        next();
    });
}

module.exports = {
    getPeople,
    getPlanets
};

