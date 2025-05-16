import { QualityUpdater } from "@/domain/quality-updater";
import { Item } from "@/domain/item";

const standardItemUpdater: QualityUpdater = {
  updateQuality: (item) => {
    const qualityChange = determineQualityChange(item);

    return new Item(item.name, item.sellIn - 1, item.quality + qualityChange);
  },
};

function determineQualityChange(item: Item): number {
  if (item.quality === 0) return 0;

  if (item.sellIn < 0) return -2;

  return -1;
}

export default standardItemUpdater;
