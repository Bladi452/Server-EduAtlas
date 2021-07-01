const LocalStrategy = require('passport-local').Strategy;
import passport from 'passport';
import { async } from 'regenerator-runtime';

import { connect } from "../database";
import helpers from './helpers';

const db = await connect()

passport.use('local.singin', new LocalStrategy({
    usernameField: 'usermame',
    passwordField: 'password',
}, async (req, username, password, donde) =>{
    const rows = await db.query('SELECT * FROM usuario WHERE matricula = ?', [username]);
if(rows.length > 0){
    const user = rows[0];
    const validPassword = await helpers.matchPassword(passport, user.password)
}

}


))