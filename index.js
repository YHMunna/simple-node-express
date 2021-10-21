const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.port || 5000;
// const handler = (req, res) => {
//   res.send("hello from me");
// };

app.get("/", (req, res) => {
  res.send("Hello ! bro");
});

// app.get("/users", (req, res) => {
//   res.send("Hello ! users");
// });

const users = [
  { id: 0, name: "Leanne Graham", email: "Sincere@april.biz", phone: "018" },
  { id: 1, name: "xyz Graham", email: "xyz@april.biz", phone: "018" },
  { id: 2, name: "abc Graham", email: "abc@april.biz", phone: "018" },
  { id: 3, name: "urmy Graham", email: "urmy @april.biz", phone: "018" },
  { id: 4, name: "hey Graham", email: "hey@april.biz", phone: "018" },
];

//multiple user
app.get("/users", (req, res) => {
  //use quary
  const search = req.query.search;
  if (search) {
    const searchResult = users.filter((user) =>
      user.name.toLowerCase().includes(search)
    );
    res.send(searchResult);
  } else {
    res.send(users);
  }
});

//post data
app.post("/users", (req, res) => {
  const newUser = req.body;
  newUser.id = users.length;
  users.push(newUser);
  console.log("hitting", req.body);
  // res.send(JSON.stringify(newUser));
  res.json(newUser);
});
//signle user
app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users[id];
  res.send(user);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
//install node mon
