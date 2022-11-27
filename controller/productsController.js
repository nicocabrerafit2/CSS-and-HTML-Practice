const express = require("express");
const fs = require("fs");

//ruta a la dataBase de los productos
const productsFilePath = path.join(__dirname, "../data/productsDataBase.json");
//lectura de la dataBase de los productos (se convierte el archivo json con parse)
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const controller = {
  // formulario para agregar/editar producto
  productAddEdit: (req, res) => {
    res.render("productAddEdit");
  },
  // código para almacenamiento de productos
  store: (req, res) => {
    if (req.file != undefined) {
      let image = req.file.filename;
    } else {
      image = "default-image.png";
    }
    let newProduct = {
      id: products[products.length - 1].id + 1,
      ...req.body,
      image,
    };
    products.push(newProduct);
    fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "));
    res.redirect("/");
  },
};

module.exports = controller;
