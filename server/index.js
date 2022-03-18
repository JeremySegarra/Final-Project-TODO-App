const express = require("express");

const { MongoClient, ServerApiVersion } = require("mongodb");

const uri =
  "mongodb+srv://jeremysegarra:noyrHG9sVC7bPjNz@cluster0.kcrn1.mongodb.net/Messanger-App?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

const app = express();
const port = 3001;

app.use(express.json());

app
  .get("/", (req, res) => {
    res.send("You are on the homepage");
  })
  .get("/about", (req, res) => {
    res.send("You are on the about page");
  })
  .get("/contact", (req, res) => {
    res.send({
      email: "plotkin@newpaltz.edu",
      phone: "123-456-7890",
      twitter: "@jerpaltz",
      instagram: "@jerpaltz",
    });
  })
  .post("/signup", (req, res) => {
    const payload = req.body;
    console.log(payload);
    const { firstname, lastname, username, email, password } = payload;

    if (firstname === "") {
      res.status(400).send({
        error: true,
        message: "firstname was empty",
      });
      return;
    }
    if (lastname === "") {
    }
    if (username === "") {
    }
    if (email === "") {
    }
    if (password === "") {
    }

    client.connect((err) => {
      const collection = client.db("Messanger-App").collection("Users");

      const data = {
        firstname: firstname,
        lastname: lastname,
        username: username,
        email: email,
        password,
      };

      collection.insertOne(data);
      // perform actions on the collection object
    });

    res.status(200).send(payload);
  });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

//for package.json "^4.17.3" carrot means get me the latest "~4.17.3" tilda means get me all the patches "4.17.3" means get me exact version
