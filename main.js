// server listening point:
const app = require('./server');

const port = process.env.PORT || 3000; // this can be very useful if you deploy to Heroku!
app.listen(port, function () {
  console.log(`Serving up moves on port ${port}`);
});
