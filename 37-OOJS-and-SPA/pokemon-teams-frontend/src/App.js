class App {
  constructor(trainers){
    //instance variables might be want
    let trainerInstances = trainers.map(trainer => new Trainer(trainer))
    this.trainers = trainerInstances
  }

  render(){
    return `
      <header>
        <h2>Pokemon Teams!</h2>
          <main>
            ${this.trainers.map(trainer => trainer.render()).join("")}
          </main>
      </header>
    `
  }
}
