const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

const clienteRoutes = require('./rotas/clienteRoutes');
const produtoRoutes = require('./rotas/produtoRoutes');
const pedidoRoutes = require('./rotas/pedidoRoutes');
const database = require('./database');

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use(clienteRoutes);
app.use(produtoRoutes);
app.use(pedidoRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
