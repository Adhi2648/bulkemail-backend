const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const db = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://adhi1:Shishi2648@cluster0.ipjzefl.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Connected to database...");
  } catch (error) {
    console.log("Error: ", error);
  }
};

module.exports = db;
