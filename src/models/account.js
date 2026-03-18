import * as mongoose from "mongoose";

const AccountSchema = new mongoose.Schema( {
    username: {
        type: String,
        required: [ true, 'A username is required.' ]
    },
    email: {
        type: String,
        required: [ true, 'An e-mail is required.' ],
        unique: [ true, 'This e-mail is already in use.' ]
    },
    password: {
        type: String,
        required: [ true, 'A password is required.' ],
        minLength: [ 6, 'Password should contain at least 6 characters or more.' ]
    }
} );

const AccountModel = mongoose.model( 'Account', AccountSchema );

export default AccountModel;
