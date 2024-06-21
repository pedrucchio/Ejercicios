// const { request, response } = require("express")
const Joi = require("joi");
const pgPromise = require("pg-promise");
const jwt = require("jsonwebtoken")
const dotenv = require("dotenv")
dotenv.config();
const passport = require("passport")




const db = pgPromise()("postgres://postgres:1234@localhost:5432/postgres");
// db.connect().then(response =>{
//   console.log(response);
// });


// type Planet = {
//     id: number,
//     name: string,
//   };

//   type Planets = Planet[];

const planetasSchema = Joi.object({
  id: Joi.number().required(),
  name: Joi.string().required()
})

  // let planetas = [
  //   {
  //     id: 1,
  //     name: "Earth",
  //   },
  //   {
  //     id: 2,
  //     name: "Mars",
  //   },
  // ];

  const setupDb = async () => {
    await db.none(`
      DROP TABLE IF EXISTS planets;
      CREATE TABLE planets
      (
      id SERIAL PRIMARY KEY,
      name varchar(20) NOT NULL,
      image TEXT);`)
    await db.none(`
      DROP TABLE IF EXISTS users;
      CREATE TABLE users (
        id SERIAL NOT NULL PRIMARY KEY,
        username TEXT NOT NULL,
        password TEXT NOT NULL,
        token TEXT
      );`)
    await db.none(`
      INSERT INTO planets (name) VALUES ('Earth');
      INSERT INTO planets (name) VALUES ('Mars');
      INSERT INTO planets (name) VALUES ('Jupiter');
      INSERT INTO users (username,password) VALUES ('Pedro','1234');`)
    const planets = await db.many(`SELECT * FROM planets`)
    console.log(planets);
  } 

  // setupDb();

  const getAll = async (req, res) =>{
    const planetas = await db.many(`SELECT * FROM planets`)
    res.status(200).json(planetas)
   }

  const getOneById =async (req, res) => {
    //console.log(req.params.id);
    const id = req.params.id
    // const planet = planetas.find(planet => planet.id === Number(id))
    const planet = await db.one(`SELECT * FROM planets WHERE id=${id};`)
    res.status(200).json(planet)
}

  const create = async (req, res) => {
    const newName = req.body.name
    // const length = planetas.length + 1
    // const nuevoplaneta = {
    //   id: length,
    //   name: newName
    // }

    // const validation = planetasSchema.validate(nuevoplaneta)
    // if (validation.error) {
    //   return res.status(400).json({
    //     msg: validation.error.message
    //   })
    // }
    
    // planetas.push({
    //     id: length,
    //     name: newName
    // })
    await db.none(`INSERT INTO planets (name) VALUES ('${newName}');`)

    // planetas = [...planetas, nuevoplaneta];
    res.status(201).json({msj: "Success", data: newName})
}

  const updateById =async (req, res) => {
    const { id } = req.params;
    const newName = req.body.name
    

    await db.none(`UPDATE planets SET name='$2' WHERE id=$1`,[id,newName])
    res.status(200).json({
        msg: "Success",
        data: newName
    })
}

  const deleteById =async (req, res) => {
    const { id } = req.params;
    const planets = await db.one(`SELECT * FROM planets WHERE id=$1;`[id])
    // planetas = planetas.filter(planet => planet.id !== Number(id))
    await db.none(`DELETE FROM planets WHERE id=$1`,[id]);
    res.status(200).json({
        msg: "Sucess",
        data: planets
    })
}

  const uploadImage = async (req,res) => {
    const { id } = req.params;
    console.log(req);
    const imagen = req.file.path;
    await db.none(`UPDATE planets SET image=$1 WHERE id=$2`,[imagen,id])
    res.status(200).send("OK");
  }

  const logIn = async (req, res) =>{
    const { username,password} = req.body;
    const user = await db.one(`SELECT * FROM users WHERE username=$1`,username);
    
    if (user && user.password === password) {
      const payload = {
        id: user.id,
        username,
      }
      const {SECRET} = process.env;
      const token = jwt.sign(payload,SECRET)

      await db.none(`UPDATE users SET token=$2 WHERE id=$1`,[user.id,token])

      res.status(200).json({ id: user.id,username,token });
    } else {
      res.status(400).json({msg:"Username or password incorrect"})
    }
   }

   const signUp = async (req, res) =>{
    const { username,password} = req.body;
    const user = await db.oneOrNone(`SELECT * FROM users WHERE username=$1`,username);

    if (user) {
      res.status(409).json({msg:"Username is already in use."})
    } else {
      const { id } = await db.one(`INSERT INTO users (username,password) VALUES ($1,$2) RETURNING id`,[username,password])

      res.status(201).json({id,msg:"User Created Successfully"})
    }
   }

   const logOut = async (req, res) =>{
    const user = req.user;
    await db.none(`UPDATE users SET token=$2 WHERE id=$1`,[user?.id,null])
    res.status(200).json({msg:"Logout successfull"})
   }

module.exports = {
    db,getAll, getOneById, create, updateById, deleteById,uploadImage,logIn,signUp,logOut
}