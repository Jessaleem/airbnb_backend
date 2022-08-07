const connectDB = require('./database');
const Space = require('./models/spaces');


connectDB()
  .then (async () => {
    const createSpace = await Space.create({})

    console.log(createSpace)
  })
