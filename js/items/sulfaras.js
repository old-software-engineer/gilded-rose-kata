const Item = require('./item');

class SulfarasItem extends Item {
  constructor(name = 'Sulfuras, Hand of Ragnaros') {
    super(name, 0, 80);
  }

  updateItem() {
    this.sellIn -= 1;
  }
}

module.exports = SulfarasItem;