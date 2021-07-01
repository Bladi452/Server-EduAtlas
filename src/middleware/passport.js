const LocalStrategy = require('passport-local').Strategy;
import passport from 'passport';
import { async } from 'regenerator-runtime';

import { connect } from "../database";
import helpers from './helpers';

const db = await connect()

passport.use('local.signin', new LocalStrategy({
    usernameField: 'usermame',
    passwordField: 'password',
}, async (req, username, password, done) =>{
    const rows = await db.query('SELECT * FROM usuario WHERE matricula = ?', [username]);
if(rows.length > 0){
    const user = rows[0];
    const validPassword = await helpers.matchPassword(passport, user.password)
    if (validPassword) {
        done(null, user)
    } else {
        done(null, false)
    }
    }else{
        return done(null, false)
    }
}));

passport.use('local.signup', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
},async (req, username, password, done) =>{
    
    const {fullname} = req.body;
    let newUser = {
        fullname,
        username,
        password
    };
    newUser.password = await helpers.encryptPassword(password);

    const resultado =await db.query('INSERT INTO usuario SET ?', newUser);
    newUser.id = resultado.insertid;
    return done(null, newUser);
}))

passport.deserializeUser(async (id, done)=>{
    const rows = await db.query('SELECT * FROM usuario WHERE id = ?', [id])
})