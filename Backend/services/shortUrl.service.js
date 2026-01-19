import { getCustomSlug, saveShortUrl } from "../dao/short_url.js";
import { generateNanoId } from "../utils/helper.js";

export const generateShortUrlWithoutUser = async (url) => {
  const shortId = generateNanoId(7);
  if (!shortId) {
    throw new Error("Short URL not generated");
  }
  await saveShortUrl(shortId, url);
  return shortId;
};

export const generateShortUrlWithUser = async (url, userId, slug = null) => {
  const shortUrl = slug || generateNanoId(7);
  const exists = await getCustomSlug(slug);
  if (exists) throw new Error("This custom url already exists");
  await saveShortUrl(shortUrl, url, userId);
  return shortUrl;
};
