const express = require('express');
const { Client } = require('pg');
const moment = require('moment-timezone');
const cors = require('cors');
const app = express();
const port = 3000;

const timezone = 'Asia/Kolkata';
const local = moment.utc();
const connection = new Client({
  connectionString: 'postgres://root:J0UqbqGH5JGGBUcwIVnNwSat3civEEPa@dpg-cgqgnmm4dad5es0nv26g-a.oregon-postgres.render.com/dbnotes', // Or specify the connection string directly
  ssl: {
    rejectUnauthorized: false,
  },
});
connection.connect();


app.use(express.json());
app.use(cors({
  origin: ["http://localhost:3001","https://chitramandir.360solutionprovider.com"]
}));

app.get('/', (req, res) => {
  let data = {};
  connection.query(`SELECT * FROM paintingcategory;`,(error, results) => {
    data['category'] = results.rows;
    connection.query(`SELECT * FROM paintingdata;`,(error, results) => {
      data['recommended'] = results.rows;
      connection.query(`SELECT * FROM paintingdata where popular = true;`,(error, results) => {
        data['popular'] = results.rows;
        res.status(200).json(data)
      });
    });
  });
  
});

// This is a user api where user store when user login using google
app.post('/user',(request,responce)=>{
  let email = request.body.email;
  let name = request.body.name;
  let image = request.body.image;
  connection.query(`Insert into paintinguser values('${email}','${name}','${image}');`,(error, results) => {
    if (error && error.code == 23505){
      connection.query(`Update paintinguser set name = '${name}',imageurl = '${image}' where email = '${email}';`,(error, results) => {
        responce.status(200).json({"message":'Data updated'})
      });
      return;
    }
    responce.status(200).json({"message":'Data Added'})
  });
})

// This is a api to get all message corresponding to the coming email
app.post('/chat',(request,responce)=>{
  let email = request.body.email;
  connection.query(`SELECT * FROM paintinguser JOIN paintingchat ON paintinguser.email = paintingchat.email WHERE paintingchat.email = '${email}';
  `,(error, results) => {
    responce.status(200).json({"data":results.rows})
  });
})

// This is a api to get all message corresponding to the coming email
app.post('/chat/add',(request,responce)=>{
  let message = request.body.message;
  let time = local.format();
  let email = request.body.paintinguser;
  let type = request.body.type;
  connection.query(`insert into paintingchat (message,time,email,type) values('${message}','${time}','${email}','${type}');`,(error, results) => {
    console.log("Message added by",email);
    addBotChat(email)
    connection.query(`SELECT * FROM paintinguser JOIN paintingchat ON paintinguser.email = paintingchat.email WHERE paintingchat.email = '${email}';
  `,(error, results) => {
    responce.status(200).json({"data":results.rows})
    });
  });
})

function addBotChat(email){
  let time = local.format();
  connection.query(`insert into paintingchat (message,time,email,type) values('Currently Bot cant answer your Questions.It will coming soon.Thank You','${time}','${email}','bot');`,(error, results) => {
    console.log("Message added by bot");
  });
}


// This is for port Listening
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
