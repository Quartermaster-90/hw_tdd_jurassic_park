const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  beforeEach(function () {
    park = new Park ('Jurassic Park', '20')
  })

  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park');
  });

  it('should have a ticket price', function () {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, '20')
  });

  describe('dinosaurs', function () {
    it('should have a collection of dinosaurs', function () {
      const actual = park.dinosaurs;
      assert.deepStrictEqual(actual, []);
    });

    it('should be able to add a dinosaur to its collection', function () {
      park.addDinosaur('T-Rex');
      assert.deepStrictEqual(park.dinosaurs, ['T-Rex']);
    });

    it('should be able to remove a dinosaur from its collection', function () {
      park.addDinosaur('T-Rex');
      park.addDinosaur('Raptor');
      park.removeDinosaurByName('T-Rex');
      assert.strictEqual(park.dinosaurs, ['Raptor']);
    });
  });

  xit('should be able to find the dinosaur that attracts the most visitors');

  xit('should be able to find all dinosaurs of a particular species');

  xit('should be able to calculate the total number of visitors per day');

  xit('should be able to calculate the total number of visitors per year');

  xit('should be able to calculate total revenue for one year');

});
