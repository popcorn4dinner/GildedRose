import { Item } from "./item";
import standardItemUpdater from "./quality-updaters/standard-items";
import agedBrieUpdater from "./quality-updaters/aged-brie";
import backstagePassesUpdater from "./quality-updaters/backstage-passes";
import legendaryItemUpdater from "./quality-updaters/legendary-items";
import conjuredItemsUpdater from "./quality-updaters/conjured-items";

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
  conjuredItemsUpdater,
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
