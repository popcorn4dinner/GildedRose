import { GildedRose, Item } from "@/gilded-rose";

const name = "Conjured Mana Cake";

describe("Gilded Rose - Conjured Items", () => {
  it("should decreades sellIn with every quality update by one", () => {
    const gildedRose = new GildedRose([new Item(name, 1, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(0);
  });

  it("should allow sellIn to become negative", () => {
    const iterations = 3;
    const gildedRose = new GildedRose([new Item(name, 1, 0)]);
    let items;

    for (let i = 0; i < iterations; i++) {
      items = gildedRose.updateQuality();
    }

    expect(items[0].sellIn).toBe(-2);
  });

  it("should decrease quality with every quality update by two", () => {
    const gildedRose = new GildedRose([new Item(name, 1, 3)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(1);
  });

  it("should decrease quality twice as fast when sale is overdue", () => {
    const gildedRose = new GildedRose([new Item(name, -1, 6)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(2);
  });

  it("should decrease quality twice as fast when sale is exactly due", () => {
    const gildedRose = new GildedRose([new Item(name, 0, 6)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(2);
  });

  it("should not decrease quality below 0 with double speed", () => {
    const gildedRose = new GildedRose([new Item(name, -1, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });

  it("should not decrease the speed of quality increase exponentially", () => {
    const gildedRose = new GildedRose([new Item(name, 0, 60)]);
    gildedRose.updateQuality();
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(52);
  });

  it("should not decrease quality below 0", () => {
    const gildedRose = new GildedRose([new Item(name, 7, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });

  it("the name remains unchanged", () => {
    const gildedRose = new GildedRose([new Item(name, 1, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe(name);
  });
});
