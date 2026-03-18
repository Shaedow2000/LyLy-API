import express from "express";

const publicRouter = express.Router;

publicRouter.route( '/login' )
    .get( ( req, res, next ) => {} );

publicRouter.route( '/register' )
    .post( ( req, res, next ) => {} );

export default publicRouter;
