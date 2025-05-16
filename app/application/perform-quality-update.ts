import { Item } from "@/domain/item";
import qualityUpdater from "@/domain/quality-updater";

export default function performQualityUpdate(items: Item[]): Item[] {
  return items.map((item) => {
    const updatedItem = qualityUpdater.updateQuality(item);
    return updatedItem;
  });
}
