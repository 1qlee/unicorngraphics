// ./src/sanity/lib/queries.ts

import { groq } from "next-sanity";

export const PAGE_QUERY = groq`*[_type == "page" && slug.current == $slug][0]`;

export const PAGES_QUERY = groq`*[_type == "page"`;

export const PRODUCTS_QUERY = groq`*[_type == "page" && category == "product"]`;

export const SERVICES_QUERY = groq`*[_type == "page" && category == "service"]`;

export const SETTINGS_QUERY = groq`*[_type == "settings"][0]`;

export const HOME_QUERY = groq`*[_type == "home"][0]`

export const CONTACT_QUERY = groq`*[_type == "contact"][0]`

export const ABOUT_QUERY = groq`*[_type == "about"][0]`

export const BANNER_QUERY = groq`*[_type == "banner"][0]`