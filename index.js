const { config } = require('dotenv');
const express = require('express');
const app = express();
const path = require("path");
require('dotenv').config();
const mysql = require("mysql");
const cors = require("cors");

app.use(express.json());
app.use(cors());

if(process.env.NODE_ENV != 'development'){

    app.use(express.static(path.join(__dirname,'front/build')))
    
    app.get('*',(req,res)=>{
        res.sendFile(path.join(__dirname,'front/build/index.html', function(error){
            if(error){
                res.status(500).send(error)
            }
        }))
    })
    
}

app.listen(3000, ()=>{
    console.log('running');
});

app.post("/search",(req,res)=>{
    const name = req.body;
    let idestabelecimento = name.name;

    let mysql = "SELECT * from estabelecimento WHERE nome LIKE '%"+idestabelecimento+"%' ORDER BY nome";
    db.query(mysql,(err,result)=>{
        if (err) {
            console.log(err);

          } else {
              res.send(result);

            
          }
    })
})



const db = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "bd_filando",
});

app.use(express.json());
app.use(cors());


app.post("/login",(req,res)=>{
    let logar = req.body;
    let username = logar.username;
    let password = logar.password;

    let mysql = "SELECT * from user WHERE username LIKE '"+username+"' AND userpass LIKE '"+password+"'";
    db.query(mysql,(err,result)=>{
        if (err) {
            console.log(err);
          } else {
              res.send(result);       
          }
    })
});


app.post("/mod",(req,res)=>{
    const estab = req.body;
    let modestab = req.body.idestabelecimento;
    let mysql = "SELECT * from estabelecimento WHERE idestabelecimento LIKE '"+modestab+"' ORDER BY nome";
    db.query(mysql,(err,result)=>{
        if (err) {
            console.log(err);
          } else {
              res.send(result);       
          }
    })
});

app.put("/changestatus",(req,res)=>{
    const estab = req.body;
    const newstatus = estab.newstatus;
    const idestabchange = estab.estabchange.idestabelecimento;
    let mysql = "UPDATE `bd_filando`.`estabelecimento` SET `status` = '"+newstatus+"' WHERE (`idestabelecimento` = '"+idestabchange+"')";
    db.query(mysql,(err,result)=>{
        if (err) {
            console.log(err);
          } else {
              res.send(result);
        
          }
    })
});


app.post("/admin",(req,res)=>{
    let mysql = "SELECT * from estabelecimento";
    db.query(mysql,(err,result)=>{
        if (err) {
            console.log(err);
          } else {
              res.send(result);         
          }
    })
});


app.put("/changestatusadmin",(req,res)=>{
    const estabadm = req.body;
    const newstatusadm = estabadm.newstatusadm;
    const idestabchangeadm = estabadm.estabchangeadm;
    let mysql = "UPDATE `bd_filando`.`estabelecimento` SET `status` = '"+newstatusadm+"' WHERE (`idestabelecimento` = '"+idestabchangeadm+"')";
    db.query(mysql,(err,result)=>{
        if (err) {
            console.log(err);
          } else {
              res.send(result);
        
          }
    })
});

app.post("/register",(req,res)=>{
    let register = req.body;
    let usernameregister = register.username;
    let passwordregister = register.password;

    let mysql = "INSERT INTO `bd_filando`.`user` (`username`, `userpass`, `usertype`) VALUES ('"+usernameregister+"', '"+passwordregister+"', 'moderator');";
    db.query(mysql,(err,result)=>{
        if (err) {
            console.log(err);
          } else {
              res.send(result);         
          }
    })
});

app.post("/registerestab",(req,res)=>{
    let register = req.body;
    let nameregister = register.nameestab;
    let localregister = register.localestab;
    let typeregister = register.typeestab;
    let imageregister = register.imageestab;

    let mysql = "INSERT INTO `bd_filando`.`preestabelecimento` (`prenome`, `prelocal`, `pretipo`, `preimage`) VALUES ('"+nameregister+"', '"+localregister+"', '"+typeregister+"', '"+imageregister+"');";
    db.query(mysql,(err,result)=>{
        if (err) {
            console.log(err);
          } else {
              res.send(result);         
          }
    })
});


app.post("/newsestab",(req,res)=>{
    let mysql = "SELECT * from preestabelecimento;";
    db.query(mysql,(err,result)=>{
        if (err) {
            console.log(err);
          } else {
              res.send(result);     
          }
    })
});

app.post("/newsestab",(req,res)=>{
    let mysql = "SELECT * from preestabelecimento;";
    db.query(mysql,(err,result)=>{
        if (err) {
            console.log(err);
          } else {
              res.send(result);     
          }
    })
});


app.post("/acceptnewsestab",(req,res)=>{
    let idnewestab = req.body.newestabid;
    let mysql = "SELECT * from preestabelecimento WHERE (`idpreestabelecimento` = '"+idnewestab+"');";
    db.query(mysql,(err,result)=>{
        if (err) {
            console.log(err);
          } else { 
            let mysql2 = "INSERT INTO `bd_filando`.`estabelecimento` (`nome`, `local`, `tipo`, `imagem`) VALUES ('"+result[0].prenome+"', '"+result[0].prelocal+"', '"+result[0].pretipo+"', '"+result[0].preimage+"');";
            db.query(mysql2,(err,result)=>{
                if (err) {
            console.log(err);
                } else {
              res.send(result);   
                }
    })    
          }
    })
});

app.put("/denynewsestab",(req,res)=>{
    let idnewestab = req.body.newestabid;
    let mysql = "DELETE FROM `bd_filando`.`preestabelecimento` WHERE (`idpreestabelecimento` = '"+idnewestab+"');";
    db.query(mysql,(err,result)=>{
        if (err) {
            console.log(err);
          } else {
              res.send(result);    
          }
    })
});





//UPDATE `bd_filando`.`estabelecimento` SET `status` = '{newstatus}' WHERE (`idestabelecimento` = '{aqui}');

// app.post("/register", (req, res) => {
//   const { name } = req.body;
//   const { cost } = req.body;
//   const { category } = req.body;

//   let mysql = "INSERT INTO games ( name, cost, category) VALUES (?, ?, ?)";
//   db.query(mysql, [name, cost, category], (err, result) => {
//     res.send(result);
//   });
// });

// app.post("/search", (req, res) => {
//   const { name } = req.body;
//   const { cost } = req.body;
//   const { category } = req.body;

//   let mysql =
//     "SELECT * from games WHERE name = ? AND cost = ? AND category = ?";
//   db.query(mysql, [name, cost, category], (err, result) => {
//     if (err) res.send(err);
//     res.send(result);
//   });
// });

// app.get("/getCards", (req, res) => {
//   let mysql = "SELECT * FROM games";
//   db.query(mysql, (err, result) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.send(result);
//     }
//   });
// });

// app.put("/edit", (req, res) => {
//   const { id } = req.body;
//   const { name } = req.body;
//   const { cost } = req.body;
//   const { category } = req.body;
//   let mysql = "UPDATE games SET name = ?, cost = ?, category = ? WHERE id = ?";
//   db.query(mysql, [name, cost, category, id], (err, result) => {
//     if (err) {
//       res.send(err);
//     } else {
//       res.send(result);
//     }
//   });
// });

// app.delete("/delete/:id", (req, res) => {
//   const { id } = req.params;
//   let mysql = "DELETE FROM games WHERE id = ?";
//   db.query(mysql, id, (err, result) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.send(result);
//     }
//   });
// });


