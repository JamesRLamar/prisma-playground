# prisma-playground

## Follow along by creating your own initial setup
- https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-postgres

## Init Database Setup
### WARNING: Do not run the following unless you want to start over and delete everything within your database schema
- Run `npm run reset` to delete all tables and records in your database to start clean
### If your database already has your schema loaded you can run the following
- Run `npm run pull`, this will introspect your database and create your Prisma schema if it does not already exist
- Run `npm run generate`, this will only generate your Prisma client if your Prisma schema and database are already setup

## Init Start
Once your database and schema are set up you can run the `index.ts` file with the following:
- Run `npm sun start`
- You can run each tutorial by changing directory to that folder and the above commands will work with that context
- So `cd playground-examples/1-tutorial` and the run `npm run reset`, this will reset the database to match the schema within that tutorial project
- However, to start the project you will need to run `ts-node index.ts` within that folder