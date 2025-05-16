import { Item } from "@/domain/item";
import performQualityUpdate from "@/application/perform-quality-update";

class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    const updatedItems = performQualityUpdate(this.items);
    this.items.splice(0, this.items.length, ...updatedItems);
    return this.items;
  }
}

export { GildedRose, Item };
