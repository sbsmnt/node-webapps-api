const auth = require('../middleware/auth');

describe('Auth middleware', () => {
    it('should be Defined', () => {
        expect(auth.userLogin).toBeDefined();
        expect(auth.userRegister).toBeDefined();
        expect(auth.jwtAuth).toBeDefined();
    });
});