let players= ["Tina","Jorge","Julien"]

function luckyDraw(player) {
    return new Promise((resolve, reject) => {
      const win = Boolean(Math.round(Math.random()));
  
      process.nextTick(() => {
        if (win) {
          resolve(`${player} won a prize in the draw!`);
        } else {
          reject(new Error(`${player} lost the draw.`));
        }
      });
    });
  }

  function getResults() {
    let currentResult
    players.forEach(async (player) => {
    try {
      currentResult =  await luckyDraw(player)
        console.log(currentResult);

    } catch(error) {
        console.error(error)
    }
    });
}

getResults()

// players.forEach(player =>{
//   luckyDraw(player)
//   .then(result => {console.log(result)})
//   .catch(error => console.error(error))
// })