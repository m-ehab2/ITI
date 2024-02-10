const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");

const app = express();
const port = 4000;

const schema = buildSchema(`
  enum TodoState {
    To_Do
    Doing
    Done
  }
  
  type Todo {
    id: ID!
    title: String!
    description: String!
    state: TodoState!
  }
  
  type Query {
    todos: [Todo!]!
    todo(id: ID!): Todo
  }
 
  type Mutation {
    createTodo(title: String!, description: String!): Todo
    updateTodoState(id: ID!, state: TodoState!): Todo
    deleteTodo(id: ID!): Todo
  }
`);

let todos = [{
    "id": "1707566642295",
    "title": "My First Todo",
    "description": "This is the description of my First todo",
    "state": "To_Do"
  },{
    "id": "1707566642275",
    "title": "My Secod Todo",
    "description": "This is the description of my Second todo",
    "state": "To_Do"
  }];

const resolvers = {
  todos: () => todos,
  todo: ({ id }) => todos.find(todo => todo.id === id),
  createTodo: ( input ) => {
    const newTodo = {
      id: String(Date.now()),
      title:input.title,
      description:input.description,
      state: 'To_Do',
    };
    console.log(newTodo);
    todos.push(newTodo);
    return newTodo;
  },
  
  updateTodoState: ({ id, state }) => {
    const todoIndex = todos.findIndex(todo => todo.id === id);
    if (todoIndex !== -1) {
      todos[todoIndex].state = state;
      return todos[todoIndex];
    }
    return null;
  },
  deleteTodo: ({ id }) => {
    const todoIndex = todos.findIndex(todo => todo.id === id);
    console.log(todoIndex);
    if (todoIndex !== -1) {
      const deletedTodo = todos.splice(todoIndex, 1)[0];
      return deletedTodo;
    }
    return null;
  },
};

app.use(
  "/graphql",
  graphqlHTTP({ schema, rootValue: resolvers, graphiql: true })
);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
