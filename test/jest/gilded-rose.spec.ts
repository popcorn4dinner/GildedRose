import { GildedRose, Item } from "@/gilded-rose";
const items = [
  new Item("+5 Dexterity Vest", 10, 20), //
  new Item("Aged Brie", 2, 0), //
  new Item("Elixir of the Mongoose", 5, 7), //
  new Item("Sulfuras, Hand of Ragnaros", 0, 80), //
  new Item("Sulfuras, Hand of Ragnaros", -1, 80),
  new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
  new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
  new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),
  new Item("Conjured Mana Cake", 3, 6),
];

describe("Gilded Rose", () => {
  it("should work correcty for one day", () => {
    const expectedResult = [
      new Item("+5 Dexterity Vest", 9, 19), //
      new Item("Aged Brie", 1, 1), //
      new Item("Elixir of the Mongoose", 4, 6), //
      new Item("Sulfuras, Hand of Ragnaros", 0, 80), //
      new Item("Sulfuras, Hand of Ragnaros", -1, 80),
      new Item("Backstage passes to a TAFKAL80ETC concert", 14, 21),
      new Item("Backstage passes to a TAFKAL80ETC concert", 9, 50),
      new Item("Backstage passes to a TAFKAL80ETC concert", 4, 50),
      new Item("Conjured Mana Cake", 2, 5),
    ];

    const gildedRose = new GildedRose(items);
    const processed = gildedRose.updateQuality();
    expect(processed.sort()).toEqual(expectedResult.sort());
  });

  it("should work correcty for two days", () => {
    const expectedResult = [
      new Item("+5 Dexterity Vest", 7, 17), //
      new Item("Aged Brie", -1, 4), //
      new Item("Elixir of the Mongoose", 2, 4), //
      new Item("Sulfuras, Hand of Ragnaros", 0, 80), //
      new Item("Sulfuras, Hand of Ragnaros", -1, 80),
      new Item("Backstage passes to a TAFKAL80ETC concert", 12, 23),
      new Item("Backstage passes to a TAFKAL80ETC concert", 7, 50),
      new Item("Backstage passes to a TAFKAL80ETC concert", 2, 50),
      new Item("Conjured Mana Cake", 0, 3),
    ];

    const gildedRose = new GildedRose(items);
    gildedRose.updateQuality();
    const processed = gildedRose.updateQuality();
    expect(processed.sort()).toEqual(expectedResult.sort());
  });
});
