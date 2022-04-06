const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost:27017/test', {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

const goalSchema = new mongoose.Schema({
    page: String,
    name: String,
    status: String,
    date: String,
  });

//Create a virtual parameter for the schema called id
goalSchema.virtual('id')
  .get(function() {
    return this._id.toHexString();
});

//Ensure that when documents are serialized into JSON objects that virtual properties are included
goalSchema.set('toJSON', {
    virtuals: true
});

const Goal = mongoose.model('Goal', goalSchema);

//Getting the goals
app.get('/api/goals', async (req, res) => {
    try {
      let goals = await Goal.find();
      res.send(goals);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
});

//Creating the goals
app.post('/api/goals', async (req, res) => {
    const goal = new Goal({
    page: req.body.page,
    name: req.body.name,
    status: req.body.status,
    date: req.body.date,
  });
  try {
    await goal.save();
    res.send({goal:goal});
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

//delete tickets with the ID
app.delete('/api/goals/:id', async (req, res) => {
    try {
      await Goal.deleteOne({
        _id: req.params.id
      });
      res.sendStatus(200);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
  }
});

app.put('/api/goals/:id', async (req, res) => {
  try {
    let goal = await Goal.findOne({_id: req.params.id});
    goal.page = req.body.page,
    goal.name = req.body.name;
    goal.status = req.body.status;
    goal.date = req.body.date;
    goal.save();
    res.send(goal);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});


app.listen(3000, () => console.log('Server listening on port 3000!'));