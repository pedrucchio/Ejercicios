// const { request, response } = require("express")
const Joi = require("joi")


// type Planet = {
//     id: number,
//     name: string,
//   };

//   type Planets = Planet[];

const planetasSchema = Joi.object({
  id: Joi.number().required(),
  name: Joi.string().required()
})

  let planetas = [
    {
      id: 1,
      name: "Earth",
    },
    {
      id: 2,
      name: "Mars",
    },
  ];

  const getAll = (req, res) =>{
    res.status(200).json(planetas)
   }

  const getOneById =(req, res) => {
    //console.log(req.params.id);
    const id = req.params.id
    const planet = planetas.find(planet => planet.id === Number(id))
    res.status(200).json(planet)
}

  const create =(req, res) => {
    const newName = req.body.name
    const length = planetas.length + 1
    const nuevoplaneta = {
      id: length,
      name: newName
    }

    const validation = planetasSchema.validate(nuevoplaneta)
    if (validation.error) {
      return res.status(400).json({
        msg: validation.error.message
      })
    }
    
    // planetas.push({
    //     id: length,
    //     name: newName
    // })

    planetas = [...planetas, nuevoplaneta];
    res.status(201).json({msj: "Success", data: planetas})
}

  const updateById =(req, res) => {
    const { id } = req.params;
    const newName = req.body.name
    // const planet= planetas.find(planet => planet.id === Number(id));
    // planet.name = req.body.name;

    planetas = planetas.map((planeta) => {
      if(planeta.id == id) {
        console.log(planeta);
        return {...planeta, name: newName}
      }
      return planeta
    })
    res.status(200).json({
        msg: "Success",
        data: planetas
    })
}

  const deleteById =(req, res) => {
    const { id } = req.params;
    planetas = planetas.filter(planet => planet.id !== Number(id))
    res.status(200).json({
        msg: "Sucess",
        data: planetas
    })
}

module.exports = {
    getAll, getOneById, create, updateById, deleteById
}