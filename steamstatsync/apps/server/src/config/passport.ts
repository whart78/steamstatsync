import passport from 'passport';
import { Strategy as SteamStrategy } from 'passport-steam';

passport.serializeUser((user: any, done) => {
  done(null, user);
});

passport.deserializeUser((obj: any, done) => {
  done(null, obj);
});

passport.use(new SteamStrategy({
  returnURL: 'http://localhost:5000/api/auth/steam/return',
  realm: 'http://localhost:5000/',
  apiKey: process.env.STEAM_API_KEY!,
}, (identifier, profile, done) => {
  profile.identifier = identifier;
  return done(null, profile);
}));
