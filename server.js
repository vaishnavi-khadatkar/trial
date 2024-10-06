require("dotenv").config();
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));


// Connect to the database once
mongoose.connect(process.env.DATABASE, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log("Database connection error:", err);
  });

  // Define the schemas and models
const dataSchema1 = new mongoose.Schema({
    name : { type: String, required: true },
    age: { type: String, required: true },
    parent: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
  });
  
  const Data1 = mongoose.model("Data1", dataSchema1);

  const dataSchema2 = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    state: { type: String, required: true },
    city: { type: String, required: true },
    
  });
  
  const Data2 = mongoose.model("Data2", dataSchema2);
  
  // Handle form submissions
  app.post('/server', (req, res) => {
    const { name, age, parent, email, phone, address } = req.body;
    const newData1 = new Data1({
      name: name,
      age: age,
      parent: parent,
      email: email,
      phone: phone,
      address: address,
    });
  
    newData1.save()
      .then(() => {
        res.redirect('/admission');
      })
      .catch(err => {
        console.error("Error:", err);
        res.status(500).send("An error occurred while saving the data.");
      });
  });
  
  app.post('/franchise-server', (req, res) => {
    const { name, email, phone, state, city} = req.body;
    const newData2 = new Data2({
      name: name,
      email: email,
      phone: phone,
      state: state,
      city: city,
    
      
    });
  
    newData2.save()
      .then(() => {
        res.redirect('/franchise');
      })
      .catch(err => {
        console.error("Error:", err);
        res.status(500).send("An error occurred while saving the data.");
      });
  });

  // Serve HTML files
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "home.html"));
  });

  app.get("/aboutus", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "about us.html"));
  });

  app.get("/admission", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "admission.html"));
  });

  app.get("/contact", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "contact.html"));
  });

  app.get("/franchise", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "franchise.html"));
  });

  app.get("/gallery", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "gallery.html"));
  });

  const PORT = process.env.PORT || 5;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

