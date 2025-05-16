import { SpecializedQualityUpdater } from "@/domain/quality-updater";
import { Item } from "@/domain/item";

const backstagePassesUpdater: SpecializedQualityUpdater = {
  matches: (item) => item.name.startsWith("Conjured"),
  updateQuality: (item) => {
    const qualityChange = determineQualityChange(item);

    return new Item(item.name, item.sellIn - 1, item.quality + qualityChange);
  },
};

function determineQualityChange(item: Item): number {
  if (item.quality === 0) return 0;

  if (item.sellIn < 0) return -4;

  return -2;
}

export default backstagePassesUpdater;
