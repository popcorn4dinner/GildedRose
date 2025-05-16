import { SpecializedQualityUpdater } from "../quality-updater";
import { Item } from "../item";

const MAX_QUALITY = 50;
const FIRST_DISCOUNT_THRSHOLD = 10; // days
const SECOND_DISCOUNT_THRSHOLD = 5; // days

const backstagePassesUpdater: SpecializedQualityUpdater = {
  matches: (item) => item.name.startsWith("Backstage passes"),
  updateQuality: (item) => {
    const qualityChange = determineQualityChange(item);
    const increasedQuality = item.quality + qualityChange;
    const updatedQuality = Math.min(increasedQuality, MAX_QUALITY);

    return new Item(item.name, item.sellIn - 1, updatedQuality);
  },
};

function determineQualityChange(item: Item): number {
  if (item.sellIn <= 0) return -item.quality;

  if (item.quality === 0) return 0;

  if (item.sellIn <= SECOND_DISCOUNT_THRSHOLD) return 3;

  if (item.sellIn <= FIRST_DISCOUNT_THRSHOLD) return 2;

  return 1;
}

export default backstagePassesUpdater;
