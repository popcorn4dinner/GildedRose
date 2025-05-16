import { QualityUpdater } from "@/domain/quality-updater";
import { Item } from "@/domain/item";

const standardItemUpdater: QualityUpdater = {
  updateQuality: (item) => {
    const qualityChange = determineQualityChange(item);
    const decreasedQuality = item.quality + qualityChange;
    const updatedQuality = Math.max(0, decreasedQuality);

    return new Item(item.name, item.sellIn - 1, updatedQuality);
  },
};

function determineQualityChange(item: Item): number {
  if (item.quality === 0) return 0;

  if (item.sellIn <= 0) return -2;

  return -1;
}

export default standardItemUpdater;
