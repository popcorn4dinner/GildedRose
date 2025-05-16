import { Item } from "@/domain/item";

export interface SpecializedQualityUpdater extends QualityUpdater {
  matches(item: Item): boolean;
}

export interface QualityUpdater {
  updateQuality(item: Item): Item;
}
