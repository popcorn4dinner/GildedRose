import { SpecializedQualityUpdater } from "../quality-updater";
import { Item } from "../item";

const legendaryItemUpdater: SpecializedQualityUpdater = {
  matches: (item) => item.name.startsWith("Sulfuras"),
  updateQuality: (item) => {
    return item;
  },
};

function determineQualityChange(item: Item): number {
  if (item.quality === 0) return 0;

  if (item.sellIn < 0) return -2;

  return -1;
}

export default legendaryItemUpdater;
