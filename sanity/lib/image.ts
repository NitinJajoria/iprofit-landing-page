import imageUrlBuilder from "@sanity/image-url";
import { dataset, projectId } from "../env";

const builder = imageUrlBuilder({ projectId, dataset });

export const urlForImage = (source: any) => {
  return builder.image(source);
};
