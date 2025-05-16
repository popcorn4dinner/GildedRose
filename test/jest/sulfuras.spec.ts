import { GildedRose, Item } from "@/gilded-rose";

const name = "Sulfuras, Hand of Ragnaros";

describe("Gilded Rose - Sulfuras", () => {
  it("should not decreades sellIn with every quality update by one", () => {
    const gildedRose = new GildedRose([new Item(name, 1, 80)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(1);
  });

  it("should never has to be sold", () => {
    const iterations = 3;
    const gildedRose = new GildedRose([new Item(name, 1, 80)]);
    let items;

    for (let i = 0; i < iterations; i++) {
      items = gildedRose.updateQuality();
    }

    expect(items[0].sellIn).toBe(1);
  });

  it("should not decrease quality with every quality update by one", () => {
    const gildedRose = new GildedRose([new Item(name, 1, 80)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(80);
  });

  it("should not decrease the speed of quality increase exponentially", () => {
    const gildedRose = new GildedRose([new Item(name, 0, 80)]);
    gildedRose.updateQuality();
    gildedRose.updateQuality();
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(80);
  });

  it("the name remains unchanged", () => {
    const gildedRose = new GildedRose([new Item(name, 1, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe(name);
  });
});
