// ./src/sanity/lib/queries.ts

import { groq } from "next-sanity";

export const PAGE_QUERY = groq`*[_type == "page" && slug.current == $slug][0]`;

export const PAGES_QUERY = groq`*[_type == "page"`;

export const PRODUCTS_QUERY = groq`*[_type == "page" && category == "product"]`;

export const SERVICES_QUERY = groq`*[_type == "page" && category == "service"]`;

export const SETTINGS_QUERY = groq`*[_type == "settings"][0]`;

export const HOME_QUERY = groq`
  *[_type == "home"][0] {
    // Standard document metadata fields
    _id,
    _type,
    _createdAt,
    _updatedAt,
    _rev,

    // HERO SECTION
    heroSection {
      heroContent, // blockContent field
      heroVideo {
        asset-> { // Dereference the video file asset
          url,
          mimeType,
          playbackId, // Useful if you have Mux integration
          originalFilename,
          size,
        },
        alt { // This is the image 'alt' field nested in heroVideo
          asset-> { // Dereference the image asset for the thumbnail
            url,
            metadata {
              lqip,
              dimensions { width, height },
            },
          },
        },
      },
    },

    // FIRST SECTION
    firstSection {
      leftContent, // blockContent field
      rightContent, // blockContent field
      gridContent {
        content[] { // Array of objects
          _key, // Important for React list keys
          heading,
          text,
        },
      },
    },

    // SECOND SECTION
    secondSection {
      leftContent, // blockContent field
      rightContent, // blockContent field
      slider[] { // Array of objects
        _key, // Important for React list keys
        image {
          asset-> { // Dereference the image asset for client images
            url,
            metadata {
              lqip,
              dimensions { width, height },
            },
          },
        },
        title, // String field for hover text
        alt,   // String field for alt text
      },
    },

    // THIRD SECTION
    thirdSection {
      leftContent, // blockContent field
      rightContent, // blockContent field
      // NOTE: Your description says "This section will display all products.
      // To edit products, go to the 'Product Pages' tab in the sidebar."
      // This implies products are separate documents. If you want to list
      // specific product details *here*, you'd need to query them separately
      // or add a reference field to an array of products here.
      // For now, I'm assuming this section just has content for introduction.
    },

    // FOURTH SECTION
    fourthSection {
      leftContent, // blockContent field
      rightContent, // blockContent field
      grid[] { // Array of objects
        _key, // Important for React list keys
        heading,
        text,
      },
    },

    // FIFTH SECTION
    fifthSection {
      leftContent, // blockContent field
      rightContent, // blockContent field
      // NOTE: Similar to the third section, if services are separate documents,
      // you'd typically query them separately or add references here.
    },

    // You might also have a 'slug' field on your home document itself if it's
    // accessible via a unique URL other than just being the root home page.
    // slug {
    //   current
    // }
  }
`;

export const CONTACT_QUERY = groq`*[_type == "contact"][0]`;

export const ABOUT_QUERY = groq`*[_type == "about"][0]`;

export const BANNER_QUERY = groq`*[_type == "banner"][0]`;
