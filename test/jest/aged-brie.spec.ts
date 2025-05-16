import { GildedRose, Item } from "@/gilded-rose";

const name = "Aged Brie";

describe("Gilded Rose - Aged Brie", () => {
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

  it("should increase quality with every quality update by one", () => {
    const gildedRose = new GildedRose([new Item(name, 1, 3)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(4);
  });

  it("should increase quality twice as fast when sale is overdue", () => {
    const gildedRose = new GildedRose([new Item(name, -1, 6)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(8);
  });

  it("should increase quality twice as fast when sale is exactly due", () => {
    const gildedRose = new GildedRose([new Item(name, 0, 6)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(8);
  });

  it("should not increase the speed of quality increase", () => {
    const gildedRose = new GildedRose([new Item(name, 0, 6)]);
    gildedRose.updateQuality();
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(10);
  });

  it("should not increase quality over 50", () => {
    const gildedRose = new GildedRose([new Item(name, 11, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(50);
  });

  it("should increase quality until 50", () => {
    const gildedRose = new GildedRose([new Item(name, 11, 49)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(50);
  });

  it("the name remains unchanged", () => {
    const gildedRose = new GildedRose([new Item(name, 1, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe(name);
  });
});
