const express = require('express');
const redis = require('redis');
const axios = require('axios');

const PORT = process.env.PORT || 5000;
const REDIS_PORT = process.env.PORT || 6379;

const client = redis.createClient(REDIS_PORT);

const app = express();

// Get images from request

async function getImages(req, res, next) {
  try {
    console.log('Fetching Data');

    const { name } = req.params;

    const response = await axios.get(`https://images-api.nasa.gov/search?q=${name}&media_type=image`);

    // Set data to Redis
    client.setex(name, 3600, JSON.stringify(response.data));

    res.status(200).send({
      data: response.data
    });

  } catch (error) {
    res.status(500);
  }
}

// Cache middleware
function cache(req, res, next) {
  const { name } = req.params; 

  client.get(name, (err, data) => {
    if (err) throw err; 
    if (data !== null) {
      res.status(200).send({
        data: JSON.parse(data)
      });
    } else {
      next();
    }
  })
}

app.get('/api/images/:name', cache, getImages);

app.listen(5000, () => {
  console.log(`App listening on port http://127.0.0.1:${PORT}`);
});
