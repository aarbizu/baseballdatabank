import * as express from 'express'; // eslint-disable-line no-unused-vars
import pgPromise from 'pg-promise';

export const register = ( app: express.Application ) => {
  const port = parseInt( process.env.PGPORT || '5432', 10 );
  const config = {
    database: process.env.PGDATABASE || 'stats',
    host: process.env.PGHOST || 'localhost',
    port,
    user: process.env.PGUSER || 'postgres',
  };

  const pgp = pgPromise();
  const db = pgp( config );

  app.get('/api/baseball/people', async ( req: any, res ) => {
    try {
      const players = await db.any(
          `SELECT
            namegiven || ' ' || namelast as name,
            bats,
            throws,
            debut,
            retroid,
            bbrefid
            FROM people
            LIMIT 10`,
      );
      return res.json( players );
    } catch ( err ) {
      console.error(err);
      res.json( {error: err.message || err});
    }
  });
};
