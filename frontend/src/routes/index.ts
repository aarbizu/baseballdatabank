import * as express from 'express'; // eslint-disable-line no-unused-vars
import * as api from './api';

export const register = ( app: express.Application ) => {
  // define a route handler for the default home page
  app.get( '/', ( req: any, res ) => {
    res.render( 'index' );
  } );

  app.get( '/query', ( req: any, res ) => {
    res.render( 'query' );
  } );

  api.register( app );
};
