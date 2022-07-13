const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const port = process.env.PORT || 4000;

const app = express();

app.use(cors());

app.use(
  '/',
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development' || true,
  })
);

app.listen(port, console.log(`Server running on port ${port}`));
