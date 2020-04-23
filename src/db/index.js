const mongoose = require('mongoose');

module.exports.func = func = () => {
  try {
    mongoose.connect(
      process.env.MONGO_DB_URL,
      { useNewUrlParser: true },
      { useFindAndModify: false }
      // { useUnifiedTopology: true },
      // { useMongoClient: true }
    );
  } catch (error) {
    console.log(error);
  }
};
