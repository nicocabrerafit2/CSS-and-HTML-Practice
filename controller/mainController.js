const express = require("express");

const controller = {
  register: (req, res) => {
    res.render("register");
  },
  login: (req, res) => {
    res.render("login");
  },
  home: (req, res) => {
    res.render("home");
  },
};

module.exports = controller;
