import { Item } from "@/domain/item";
import standardItemUpdater from "@/domain/quality-updaters/standard-items";
import agedBrieUpdater from "@/domain/quality-updaters/aged-brie";
import backstagePassesUpdater from "@/domain/quality-updaters/backstage-passes";
import legendaryItemUpdater from "@/domain/quality-updaters/legendary-items";
import conjuredItemsUpdater from "@/domain/quality-updaters/conjured-items";

export interface SpecializedQualityUpdater extends QualityUpdater {
  matches(item: Item): boolean;
}

export interface QualityUpdater {
  updateQuality(item: Item): Item;
}

const defaultUpdater: QualityUpdater = standardItemUpdater;
const specializedUpdaters: SpecializedQualityUpdater[] = [
  agedBrieUpdater,
  backstagePassesUpdater,
  legendaryItemUpdater,
  // conjuredItemsUpdater,
];

const qualityUpdater: QualityUpdater = {
  updateQuality: (item: Item) => {
    const specializedUpdater = specializedUpdaters.find((updater) =>
      updater.matches(item)
    );
    const updater = specializedUpdater || defaultUpdater;

    return updater.updateQuality(item);
  },
};

export default qualityUpdater;
