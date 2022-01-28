const Item = require('./item');

class SulfarasItem extends Item {
  constructor(name = 'Sulfuras, Hand of Ragnaros',sellIn,quantity) {
    super(name,sellIn, 80);
  }

  updateItem() {
    this.sellIn=this.sellIn;
  }
}

module.exports = SulfarasItem;