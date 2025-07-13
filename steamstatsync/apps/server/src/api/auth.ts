import express from 'express';
import passport from 'passport';

const router = express.Router();

// Start Steam login
router.get('/steam', passport.authenticate('steam'));

// Steam login callback
router.get('/steam/return', 
  passport.authenticate('steam', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('/dashboard'); // or your frontend route
  }
);

// Logout
router.get('/logout', (req, res) => {
  req.logout(() => {
    res.redirect('/');
  });
});

export default router;
