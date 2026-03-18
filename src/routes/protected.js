import express from "express";

const router = express.Router();

router.route( '/tasks' )
    .get( ( req, res, next ) => {} )
    .post( ( req, res, next ) => {} );

router.route( '/task/:title' )
    .get( ( req, res, next ) => {} )
    .patch( ( req, res, next ) => {} )
    .delete( ( req, res, next ) => {} );

export default router;
