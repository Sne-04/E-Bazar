// import express from 'express';
// import { createUser,fetchUser} from '../controller/user.js';



// const router = express.Router();

// router.post('/',createUser);
// router.get('/',fetchUser);

// export default router;


import express from 'express';
const router = express.Router();

// Render login page
router.get('/login', (req, res) => {
    res.render('login');
});

// Render signup page
router.get('/signup', (req, res) => {
    res.render('signup');
});

export default router;

