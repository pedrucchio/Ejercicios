const secondController = {
    getPlanetByName: (req, res) => {
        //console.log(req.params.id);
        const id = req.params.id
        const planet = planetas.find(planet => planet.id === Number(id))
        res.status(200).json(planet)
    },
    deleteAllPlanets: (req, res) => {
        res.send("All planets deleted")
    }
}

module.exports = secondController