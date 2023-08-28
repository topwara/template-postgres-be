# Template Postgres Backend

## Tools

1. TypeScript
2. Express
3. GraphQL
4. Prisma
5. Postgresql
6. Docker

<img src="https://res.cloudinary.com/practicaldev/image/fetch/s--Xn7rKgvt--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/xc0cexf181iaha0ar7wr.jpg" width="90%"></img>

## Folder Structure

- `__tests__`
  - `configs` : The configs folder is used to organize configuration files in **tests**.
  - `integrations` : Test Flow User Acceptance Test(UAT).
  - `queries` : Keep query schema for call gql
  - `units` : Test Case Function in folder `src/utils/*.ts`. Ignore file `dyanamoDb.ts, http.ts, interface.ts`.
  - `utils`
- `prisma`
  - `migrations` : The folder where the database's change files are stored.
  - `seeder` : The folder where the mock files are stored.
- `src`
  - `configs` : The configs folder is used to organize configuration files.
  - `controllers` : We will put the handlers of our routes.
  - `graphql` : Everything related to routing GraphQL.
  - `graphqlSchema`
    - `resolvers` : Responsible for populating the data for a single field in your schema.
    - `typedefs` : Schema to describe the shape of your available data.
  - `libs`
  - `middleware` : Middleware functions are functions that have access to the request object (req), the response object (res).
  - `routes` : Everything related to routing.
  - `utils`
    - `dyanamoDb.ts` : Function for call database.
    - `http.ts` : Function generate response to client.
    - `interface.ts` : Contain interface in app.
    - `others.ts` : Reusable function. Must test all function.
    - `*.ts` : Specific function. Must test all function.
- `.env` : Keep KEY_AWS and SECRET_KEY_AWS for deploy to aws.
- `docker-compose.yml`
- `serverless.ts`
