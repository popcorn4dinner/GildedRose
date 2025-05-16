import { SpecializedQualityUpdater } from "../quality-updater";
import { Item } from "../item";

const backstagePassesUpdater: SpecializedQualityUpdater = {
  matches: (item) => item.name.startsWith("Conjured"),
  updateQuality: (item) => {
    const qualityChange = determineQualityChange(item);
    const decreasedQuality = item.quality + qualityChange;
    const updatedQuality = Math.max(0, decreasedQuality);

    return new Item(item.name, item.sellIn - 1, updatedQuality);
  },
};

function determineQualityChange(item: Item): number {
  if (item.sellIn <= 0) return -4;

  return -2;
}

export default backstagePassesUpdater;
