const passport = require("passport");
const passportJWT = require("passport-jwt");
const { db } = require("./contollers/mainController");

const { SECRET } = process.env;

const JwtStrategy = passportJWT.Strategy;
const ExtractJwt = passportJWT.ExtractJwt;

passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: SECRET,
    },
    async (jwtPayload, done) => {
      try {
        const user = await db.oneOrNone("SELECT * FROM users WHERE id = $1", jwtPayload.id);
        if (user) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      } catch (error) {
        return done(error, false);
      }
    }
  )
);

module.exports = passport;