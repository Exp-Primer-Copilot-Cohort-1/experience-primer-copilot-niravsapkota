// Create web server
// Use the express module
const express = require('express');
// Use the body-parser module
const bodyParser = require('body-parser');
// Use the mongoose module
const mongoose = require('mongoose');
// Create a new express server
const app = express();
// Use the body-parser module
app.use(bodyParser.json());
// Connect to MongoDB
mongoose.connect('mongodb://localhost/comments');
// Create a new schema
const Schema = mongoose.Schema;
const CommentSchema = new Schema({
