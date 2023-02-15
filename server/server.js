const express = require('express');
const cors = require('cors');
const { v4 } = require('uuid');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// fake database
let todos = [
  {
    _id: v4(),
    title: 'Example Task',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    status: 'Incomplete',
  },
];

app.get('/api/v1/todos', (req, res) => {
  return res.status(200).json({ todos });
});

app.get('/api/v1/todos/:id', (req, res) => {
  const todo = todos.find((todo) => todo._id == req.params.id);
  return res.status(200).json({ todo });
});

app.post('/api/v1/todos', (req, res) => {
  const todo = {
    _id: v4(),
    title: req.body.todo.title,
    description: req.body.todo.description,
    status: 'Incomplete',
  };
  todos.push(todo);
  return res.status(201).json({ todo });
});

app.delete('/api/v1/todos/:id', (req, res) => {
  todos = todos.filter((todo) => todo._id != req.params.id);
  return res.status(200).json({});
});

app.put('/api/v1/todos/:id', (req, res) => {
  const todo = todos.find((todo) => todo._id == req.params.id);
  todo.status = req.body.todo.status;
  return res.status(200).json({ todo });
});

app.all('*', (req, res) => {
  return res.status(404).json({
    errors: [
      {
        status: '404',
        source: { pointer: req.originalUrl },
        detail: 'Page not found.',
      },
    ],
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}.`);
});
