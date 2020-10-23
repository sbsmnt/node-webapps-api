const starWars = require('../middleware/star-wars');

describe('Star Wars', () => {
    it('should be Defined', () => {
        expect(starWars.getPeople).toBeDefined();
        expect(starWars.getPlanets).toBeDefined();
    });
});
