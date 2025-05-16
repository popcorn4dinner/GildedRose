import { SpecializedQualityUpdater } from "../quality-updater";
import { Item } from "../item";

const MAX_QUALITY = 50;

const agedBrieUpdater: SpecializedQualityUpdater = {
  matches: (item) => item.name === "Aged Brie",
  updateQuality: (item) => {
    const qualityChange = determineQualityChange(item);

    return new Item(item.name, item.sellIn - 1, item.quality + qualityChange);
  },
};

function determineQualityChange(item: Item): number {
  if (item.quality >= MAX_QUALITY) return 0;

  if (item.sellIn <= 0) return 2;

  return 1;
}

export default agedBrieUpdater;
