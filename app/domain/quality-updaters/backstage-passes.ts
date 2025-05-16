import { SpecializedQualityUpdater } from "@/domain/quality-updater";
import { Item } from "@/domain/item";
const MAX_QUALITY = 50;
const FIRST_DISCOUNT_THRSHOLD = 10; // days
const SECOND_DISCOUNT_THRSHOLD = 5; // days

const backstagePassesUpdater: SpecializedQualityUpdater = {
  matches: (item) => item.name.startsWith("Backstage passes"),
  updateQuality: (item) => {
    const qualityChange = determineQualityChange(item);

    return new Item(item.name, item.sellIn - 1, item.quality + qualityChange);
  },
};

function determineQualityChange(item: Item): number {
  if (item.sellIn < 0) return -item.quality;

  if (item.quality >= MAX_QUALITY) return 0;

  if (item.sellIn < SECOND_DISCOUNT_THRSHOLD) return 3;

  if (item.sellIn < FIRST_DISCOUNT_THRSHOLD) return 2;

  return 1;
}

export default backstagePassesUpdater;
