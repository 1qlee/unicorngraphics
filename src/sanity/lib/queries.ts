// ./src/sanity/lib/queries.ts

import { groq } from "next-sanity";

export const POSTS_QUERY = groq`*[_type == "post" && defined(slug.current)][0...12]{
  _id, title, slug
}`;

export const POST_QUERY = groq`*[_type == "post" && slug.current == $slug][0]{
  title, body, mainImage
}`;

export const PRODUCT_QUERY = groq`*[_type == "page" && slug.current == $slug][0]{
  title,
}`;

export const PRODUCTS_QUERY = groq`*[_type == "page" && category == "product"]{
  _id, description, title, slug
}`;

export const SERVICES_QUERY = groq`*[_type == "page" && category == "service"]{
  _id, description, title, slug
}`;

export const SETTINGS_QUERY = groq`*[_type == "settings"][0]{
  logo
}`;

export const HOME_QUERY = groq`*[_type == "home"][0]`