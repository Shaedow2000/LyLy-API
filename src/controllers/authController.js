import wrapper from "../middlewares/asyncWrapper.js";
import AccountModel from "../models/account.js";

const register = wrapper( async ( req, res ) => {
    const data = req.body;

    const newAccount = new AccountModel( data );
    await newAccount.save();

    return res.status( 201 ).json( {
        'status': 201,
        'message': 'Account created successfully!',
        'account': data
    } );
} );

const login = wrapper( async ( req, res ) => {} );

const deleteAccount = wrapper( async ( req, res ) => {} );

export {
    register,
    login,
    deleteAccount
}
