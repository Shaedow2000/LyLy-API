import wrapper from "../middlewares/asyncWrapper.js";

const register = wrapper( async ( req, res ) => {} );

const login = wrapper( async ( req, res ) => {} );

const deleteAccount = wrapper( async ( req, res ) => {} );

export {
    register,
    login,
    deleteAccount
}
