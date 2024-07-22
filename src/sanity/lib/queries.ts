// ./src/sanity/lib/queries.ts

import { groq } from "next-sanity";

export const PAGE_QUERY = groq`*[_type == "page" && slug.current == $slug][0]{
  _id, title, description, image, infoText, imageGrid
}`;

export const PRODUCTS_QUERY = groq`*[_type == "page" && category == "product"]{
  _id, description, title, slug, image
}`;

export const SERVICES_QUERY = groq`*[_type == "page" && category == "service"]{
  _id, description, title, slug, image
}`;

export const SETTINGS_QUERY = groq`*[_type == "settings"][0]{
  logo
}`;

export const HOME_QUERY = groq`*[_type == "home"][0]`