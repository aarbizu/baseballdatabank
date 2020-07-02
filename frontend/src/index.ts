import dotenv from 'dotenv';
import express from 'express';
import path from 'path';
import * as routes from './routes';

// initialize configuration
dotenv.config();

// retrieve settings from the environment
const port = process.env.SERVER_PORT;
const app = express();

// Configure Express to parse incoming JSON data
app.use( express.json() );

// Configure Express to use EJS
app.set( 'views', path.join( __dirname, 'views' ) );
app.set( 'view engine', 'ejs' );

app.use( express.static( path.join( __dirname, 'public' ) ) );

routes.register( app );

// start the express server
app.listen(port, () => {
  console.log(`Started server on ${port}`);
});
