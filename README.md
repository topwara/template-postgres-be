# 🙏 Template Postgres Backend

<br>
  <div align="center"> 
    <img img src="https://i.ibb.co/PMbfT8z/teamplate-postgres-be-cover.png" width="70%">
  </div>
<br>

## About The Project

### Built With

- TypeScript
- Express JS
- GraphQL
- Prisma
- Postgresql
- Docker

### Folder Structure

- `prisma`
  - `migrations` : The folder where the database's change files are stored.
  - `seeder` : The folder where the mock files are stored.
- `src`
  - `configs` : The configs folder is used to organize configuration files.
  - `middleware` : The folder where to stored HTTP Authentication access.
  - `prisma` : The folder where to stored Prisma services.
  - `utils` : HTTP and GraphQL response and other.
  - `v1`
    - `controllers` : We will put the handlers of our routes.
    - `graphql` : Everything related to routing GraphQL.
    - `graphqlAdminSchema`
      - `resolvers` : Responsible for populating the data for a single field in your schema.
      - `typedefs` : Schema to describe the shape of your available data.
    - `graphqlNonAuthSchema`
      - `resolvers` : Responsible for populating the data for a single field in your schema.
      - `typedefs` : Schema to describe the shape of your available data.
    - `graphqlSchema`
      - `resolvers` : Responsible for populating the data for a single field in your schema.
      - `typedefs` : Schema to describe the shape of your available data.
  - `utils`
    - `others.ts` : Reusable function. Must test all function.
    - `userAuthentication` : User function.
    - `*.ts` : Specific function. Must test all function.
  - `index.ts` : 📌 Important file to start with nodemon.
- `.env` : Keep secret key for use in Project.
- `docker-compose.yml` : Important file to use 'Docker command' to create Container

<br>

## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Installation

_Below is an example ( STEP-BY-STEP ) of how you can installing and setting up your Template._

1. Clone the repo

```sh
  git clone https://github.com/____________.git
```

2. Open Folder - Project

```sh
  create file (.env) and copy all default value from (.env.example).
  then change value

```

3. Open ubuntu command line and promp

```sh
  your_ubuntu_cli:~$ docker compose up
```

4. On Docker Desktop program

```sh
  You will see

    📦 template-postgres-be    (Running 2/2)
     |  🗃 postgres-backend     (Running)        3000:3000
     |  🗃 postgres-database    (Running)        5432:5432

  That mean everything is work perfectly
```

5. Open any programs can Connect to database like ~ `🐻DBeawer`

```sh
    🔧 Connection setting (follow .env)
     |  Host: localhost
     |  Post: 5432
     |  Database: postgres
     |  Username: postgres
     |  Password: postgres

    And connect status should be (ℹ Connected)
```

5. Sudo docker bash into container below

```sh
  your_ubuntu_cli:~$ sudo docker exec -it postgres-backend bash

```

6. Update Database and Table , Check in ~ `🐻DBeawer`

```sh
  root@:/workdir# npm run prisma:all
```

7. Insert mock value into Database to Start

```sh
  root@:/workdir# npm run prisma:seed
```

8. Check an items insert into 2 Databse

9. 🚀 Start develop

<br>

## Usage

Now this _teamplate-postgres-be_ can only use in `localhost` , _Not supported Deploy to any services now._

<br>

## Contact

If you have any question or suggestion , Please contact.

<br>

## Acknowledgements

- [template-aws-be](https://github.com/datability-th/template-aws-be) : By P'Nuk at Datability
- [GraphQL Microservice Setup with Apollo Server, Codegen, Prisma, Typescript, and PostgreSQL](https://www.youtube.com/watch?v=K8k0fXnDAnA) : By Leo Roese
