import express from 'express';
import session from 'express-session';
import passport from 'passport';
import './config/passport'; // import steam strategy config
import authRoutes from './api/auth';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(session({
  secret: 'steam-secret',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/api/auth', authRoutes);

app.get('/', (_, res) => res.send('SteamStatSync Backend Running'));

app.listen(5000, () => {
  console.log('Server started on http://localhost:5000');
});
