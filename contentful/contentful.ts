import axios from "axios";
import { ContentfulApi } from "../interfaces/interfaces";

// Hardcodes values for demonstration purposes
const entryLimit = "1000";
const contentType = "job";

export const contentfulBaseURI = "https://cdn.contentful.com/";
export const contentfulQuerry = `spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT}/entries?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}&content_type=${contentType}&limit=${entryLimit}&include=10`;

/**
 * Axios contentful client
 */
export const contentfulClient = axios.create({
  baseURL: contentfulBaseURI,
});

/**
 * Builds and querries contentful CD Api
 *
 * @returns contentful entries
 */
export const getEntries = () => {
  const endpnt = contentfulQuerry;
  return contentfulClient.get<ContentfulApi>(endpnt);
};
