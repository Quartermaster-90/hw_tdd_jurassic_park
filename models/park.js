const Park = function (name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice
    this.dinosaurs = []
};

Park.prototype.addDinosaur = function (name) {
    this.dinosaurs.push(name);
};

Park.prototype.removeDinosaurByName = function (dinosaurName) {
    const index = this.dinosaurs.indexOf(dinosaurName);
    this.dinosaurs.splice(index, 1);
};

module.exports = Park