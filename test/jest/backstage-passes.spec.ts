import { GildedRose, Item } from "@/gilded-rose";

const name = "Backstage passes to a TAFKAL80ETC concert";

describe("Gilded Rose - Backstage passes", () => {
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

  it("should increase quality with every quality update by one with more than 10 days left to sell", () => {
    const gildedRose = new GildedRose([new Item(name, 11, 30)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(31);
  });

  it("should not increase quality over 50", () => {
    const gildedRose = new GildedRose([new Item(name, 11, 50)]);
    gildedRose.updateQuality();
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(50);
  });

  it("should increase quality until 50", () => {
    const gildedRose = new GildedRose([new Item(name, 11, 49)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(50);
  });

  it("should increase quality with every quality update by two with 10 days left to sell", () => {
    const gildedRose = new GildedRose([new Item(name, 10, 30)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(32);
  });

  it("should increase quality with every quality update by two with more less 10 days left to sell", () => {
    const gildedRose = new GildedRose([new Item(name, 9, 30)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(32);
  });

  it("should increase quality with every quality update by three with less than 5 days left to sell", () => {
    const gildedRose = new GildedRose([new Item(name, 4, 30)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(33);
  });

  it("should increase quality with every quality update by three with 5 days left to sell", () => {
    const gildedRose = new GildedRose([new Item(name, 5, 30)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(33);
  });

  it("should increase quality with every quality update by two with more than 5 days left to sell", () => {
    const gildedRose = new GildedRose([new Item(name, 6, 30)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(32);
  });

  it("should drop quality to 0 after the concert", () => {
    const gildedRose = new GildedRose([new Item(name, -1, 6)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });

  it("should drop the quality to 0 on the date of the concert", () => {
    const gildedRose = new GildedRose([new Item(name, 0, 6)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });

  it("should not decrease quality below 0", () => {
    const gildedRose = new GildedRose([new Item(name, -1, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });

  it("the name remains unchanged", () => {
    const gildedRose = new GildedRose([new Item(name, 1, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe(name);
  });
});
