const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mockData = require('../mock/svapp');

const jwtSecret = process.env.JWT_SECRET;

const userLogin = (req, res, next) => {
    const user = req.body ? req.body.user : '';
    const pass = req.body ? req.body.password : '';

    const userExist = checkUser(user);
    if (!userExist) {
        res.locals.error = 'User not found!';
        next();
        return;
    } 

    comparePw(pass, userExist.password).then(compared =>{
        if (!compared) {
            res.locals.error = 'Incorrect Password';
            next();
            return;
        }
        const token = jwt.sign({user: userExist.username}, jwtSecret, {expiresIn: '1h'});
        res.locals.isLogged = compared;
        const userData = getUser(user);
        userData.token = token
        res.user = userData;
        next();
    });
};

const userRegister = (req, res, next) => {
    const user = req.body ? req.body.user : '';
    const pass = req.body ? req.body.password : '';
    
    if (checkUser(user)) {
        res.locals.error = 'Username is not available. Please choose another one';
        next();
        return;
    }

    const pwStatus = checkPass(pass);
    if (pwStatus !== 'checked') {
        res.locals.error = pwStatus;
        next();
        return;
    }

    bcrypt.hash(pass, 7)
    .then((hash) => {
        saveUser(user, hash);
        res.locals.isReg = true;
        next();
    })
    .catch(err => {
        console.log(err);
        res.locals.error = 'Error saving user';
        next();
    });
};

const getUser = (username) => {
    return mockData.userData.find(u => u.user.name === username);
}

function checkUser(username) {
    return mockData.userList.find(element => element.username === username);
}

function checkPass(pass) {
    if (pass.length < 1) return 'Password can not be empty';
    if (pass.length < 3) 
        return 'Please define a password longer than 3 characters.';

    return 'checked';
}

async function comparePw(pass, userHash) {
    const compare = await bcrypt.compare(pass, userHash);
    return compare ? true : false;
}

function saveUser(user, hash) {
    // store user in DB - Not this time though, only for demo purposes
    console.log('hash', hash);
    console.log('user', user);
    return true;
}


const jwtAuth = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];
        jwt.verify(token, jwtSecret, (err, user) => {
            if (err) res.locals.error = err.message;
            req.user = user;
            next();
        });
    }
}

module.exports = {
    userLogin,
    userRegister,
    jwtAuth
};