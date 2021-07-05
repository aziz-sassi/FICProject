const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const axios = require('axios')
require('dotenv').config()
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public')));


const port = process.env.PORT || 3001;
app.use(express.urlencoded({ extended: false }));
app.use(express.json());





app.get('/products/:productId/styles', (req, res) => {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/${req.params.productId}/styles`, {
    headers : {
      Authorization : process.env.GITHUB_TOKEN
    },

  }).then((response) => {
    res.send(response.data)
  }).catch((err) => {
    console.log(err)
  });
});




app.get(`/products`, (req, res) => {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products`, {
    headers: {
      Authorization: process.env.GITHUB_TOKEN
    },
  })
  .then((response) => {
    res.send(response.data)
    console.log(response.data,"chkara7omsssssss")
  })
  .catch((error) => {
    console.error(error)
  })
})

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
