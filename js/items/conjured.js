const Item = require('./item');

class ConjuredItem extends Item {
  updateItem() {
    this.quality = Math.max(0, this.sellIn > 0 ? this.quality - 2 : this.quality - 4);
    this.sellIn -= 1;
  }
}

module.exports = ConjuredItem;