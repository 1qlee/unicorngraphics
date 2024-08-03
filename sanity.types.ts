/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: "sanity.imagePaletteSwatch";
  background?: string;
  foreground?: string;
  population?: number;
  title?: string;
};

export type SanityImagePalette = {
  _type: "sanity.imagePalette";
  darkMuted?: SanityImagePaletteSwatch;
  lightVibrant?: SanityImagePaletteSwatch;
  darkVibrant?: SanityImagePaletteSwatch;
  vibrant?: SanityImagePaletteSwatch;
  dominant?: SanityImagePaletteSwatch;
  lightMuted?: SanityImagePaletteSwatch;
  muted?: SanityImagePaletteSwatch;
};

export type SanityImageDimensions = {
  _type: "sanity.imageDimensions";
  height?: number;
  width?: number;
  aspectRatio?: number;
};

export type SanityFileAsset = {
  _id: string;
  _type: "sanity.fileAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  source?: SanityAssetSourceData;
};

export type Geopoint = {
  _type: "geopoint";
  lat?: number;
  lng?: number;
  alt?: number;
};

export type Banner = {
  _id: string;
  _type: "banner";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  content?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "h1" | "h2" | "h3" | "h4" | "normal" | "small";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  } | {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
    _key: string;
  } | ({
    _key: string;
  } & Button)>;
};

export type Button = {
  _type: "button";
  text?: string;
  link?: string;
  icon?: string;
};

export type Settings = {
  _id: string;
  _type: "settings";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  logo?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  };
  footerText?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "h1" | "h2" | "h3" | "h4" | "normal" | "small";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  } | {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
    _key: string;
  } | ({
    _key: string;
  } & Button)>;
};

export type BlockContent = Array<{
  children?: Array<{
    marks?: Array<string>;
    text?: string;
    _type: "span";
    _key: string;
  }>;
  style?: "h1" | "h2" | "h3" | "h4" | "normal" | "small";
  listItem?: "bullet" | "number";
  markDefs?: Array<{
    href?: string;
    _type: "link";
    _key: string;
  }>;
  level?: number;
  _type: "block";
  _key: string;
} | {
  asset?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
  };
  hotspot?: SanityImageHotspot;
  crop?: SanityImageCrop;
  alt?: string;
  _type: "image";
  _key: string;
} | ({
  _key: string;
} & Button)>;

export type Page = {
  _id: string;
  _type: "page";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  category?: "product" | "service";
  heroSection?: {
    heroContent?: BlockContent;
    heroImage?: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      alt?: string;
      _type: "image";
    };
  };
  textSection?: {
    leftContent?: BlockContent;
    rightContent?: BlockContent;
    gridContent?: {
      content?: Array<{
        icon?: string;
        heading?: string;
        text?: string;
        _key: string;
      }>;
    };
  };
  imageGrid?: Array<{
    image?: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      _type: "image";
    };
    title?: string;
    alt?: string;
    _key: string;
  }>;
};

export type Slug = {
  _type: "slug";
  current?: string;
  source?: string;
};

export type About = {
  _id: string;
  _type: "about";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  heroSection?: {
    heroContent?: BlockContent;
    heroImage?: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      alt?: string;
      _type: "image";
    };
  };
  firstSection?: {
    leftContent?: BlockContent;
    rightContent?: BlockContent;
  };
  secondSection?: {
    images?: Array<{
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      title?: string;
      alt?: string;
      _type: "image";
      _key: string;
    }>;
  };
  thirdSection?: {
    leftContent?: BlockContent;
    rightContent?: BlockContent;
  };
};

export type Contact = {
  _id: string;
  _type: "contact";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  hero?: BlockContent;
  content?: {
    leftContent?: BlockContent;
    middleContent?: BlockContent;
    rightContent?: BlockContent;
  };
};

export type Home = {
  _id: string;
  _type: "home";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  heroSection?: {
    heroContent?: BlockContent;
    heroImage?: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      alt?: string;
      _type: "image";
    };
  };
  firstSection?: {
    leftContent?: BlockContent;
    rightContent?: BlockContent;
    gridContent?: {
      content?: Array<{
        heading?: string;
        text?: string;
        _key: string;
      }>;
    };
  };
  secondSection?: {
    leftContent?: BlockContent;
    rightContent?: BlockContent;
    slider?: Array<{
      image?: {
        asset?: {
          _ref: string;
          _type: "reference";
          _weak?: boolean;
          [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
        };
        hotspot?: SanityImageHotspot;
        crop?: SanityImageCrop;
        _type: "image";
      };
      title?: string;
      alt?: string;
      _key: string;
    }>;
  };
  thirdSection?: {
    leftContent?: BlockContent;
    rightContent?: BlockContent;
  };
  fourthSection?: {
    leftContent?: BlockContent;
    rightContent?: BlockContent;
    grid?: Array<{
      heading?: string;
      text?: string;
      _key: string;
    }>;
  };
  fifthSection?: {
    leftContent?: BlockContent;
    rightContent?: BlockContent;
  };
};

export type SanityImageCrop = {
  _type: "sanity.imageCrop";
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type SanityImageHotspot = {
  _type: "sanity.imageHotspot";
  x?: number;
  y?: number;
  height?: number;
  width?: number;
};

export type SanityImageAsset = {
  _id: string;
  _type: "sanity.imageAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  metadata?: SanityImageMetadata;
  source?: SanityAssetSourceData;
};

export type SanityAssetSourceData = {
  _type: "sanity.assetSourceData";
  name?: string;
  id?: string;
  url?: string;
};

export type SanityImageMetadata = {
  _type: "sanity.imageMetadata";
  location?: Geopoint;
  dimensions?: SanityImageDimensions;
  palette?: SanityImagePalette;
  lqip?: string;
  blurHash?: string;
  hasAlpha?: boolean;
  isOpaque?: boolean;
};

export type AllSanitySchemaTypes = SanityImagePaletteSwatch | SanityImagePalette | SanityImageDimensions | SanityFileAsset | Geopoint | Banner | Button | Settings | BlockContent | Page | Slug | About | Contact | Home | SanityImageCrop | SanityImageHotspot | SanityImageAsset | SanityAssetSourceData | SanityImageMetadata;
export declare const internalGroqTypeReferenceTo: unique symbol;
// Source: ./src/sanity/lib/queries.ts
// Variable: PAGE_QUERY
// Query: *[_type == "page" && slug.current == $slug][0]
export type PAGE_QUERYResult = {
  _id: string;
  _type: "page";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  category?: "product" | "service";
  heroSection?: {
    heroContent?: BlockContent;
    heroImage?: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      alt?: string;
      _type: "image";
    };
  };
  textSection?: {
    leftContent?: BlockContent;
    rightContent?: BlockContent;
    gridContent?: {
      content?: Array<{
        icon?: string;
        heading?: string;
        text?: string;
        _key: string;
      }>;
    };
  };
  imageGrid?: Array<{
    image?: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      _type: "image";
    };
    title?: string;
    alt?: string;
    _key: string;
  }>;
} | null;
// Variable: PRODUCTS_QUERY
// Query: *[_type == "page" && category == "product"]
export type PRODUCTS_QUERYResult = Array<{
  _id: string;
  _type: "page";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  category?: "product" | "service";
  heroSection?: {
    heroContent?: BlockContent;
    heroImage?: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      alt?: string;
      _type: "image";
    };
  };
  textSection?: {
    leftContent?: BlockContent;
    rightContent?: BlockContent;
    gridContent?: {
      content?: Array<{
        icon?: string;
        heading?: string;
        text?: string;
        _key: string;
      }>;
    };
  };
  imageGrid?: Array<{
    image?: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      _type: "image";
    };
    title?: string;
    alt?: string;
    _key: string;
  }>;
}>;
// Variable: SERVICES_QUERY
// Query: *[_type == "page" && category == "service"]
export type SERVICES_QUERYResult = Array<{
  _id: string;
  _type: "page";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  category?: "product" | "service";
  heroSection?: {
    heroContent?: BlockContent;
    heroImage?: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      alt?: string;
      _type: "image";
    };
  };
  textSection?: {
    leftContent?: BlockContent;
    rightContent?: BlockContent;
    gridContent?: {
      content?: Array<{
        icon?: string;
        heading?: string;
        text?: string;
        _key: string;
      }>;
    };
  };
  imageGrid?: Array<{
    image?: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      _type: "image";
    };
    title?: string;
    alt?: string;
    _key: string;
  }>;
}>;
// Variable: SETTINGS_QUERY
// Query: *[_type == "settings"][0]
export type SETTINGS_QUERYResult = {
  _id: string;
  _type: "settings";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  logo?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  };
  footerText?: Array<({
    _key: string;
  } & Button) | {
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "h1" | "h2" | "h3" | "h4" | "normal" | "small";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  } | {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
    _key: string;
  }>;
} | null;
// Variable: HOME_QUERY
// Query: *[_type == "home"][0]
export type HOME_QUERYResult = {
  _id: string;
  _type: "home";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  heroSection?: {
    heroContent?: BlockContent;
    heroImage?: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      alt?: string;
      _type: "image";
    };
  };
  firstSection?: {
    leftContent?: BlockContent;
    rightContent?: BlockContent;
    gridContent?: {
      content?: Array<{
        heading?: string;
        text?: string;
        _key: string;
      }>;
    };
  };
  secondSection?: {
    leftContent?: BlockContent;
    rightContent?: BlockContent;
    slider?: Array<{
      image?: {
        asset?: {
          _ref: string;
          _type: "reference";
          _weak?: boolean;
          [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
        };
        hotspot?: SanityImageHotspot;
        crop?: SanityImageCrop;
        _type: "image";
      };
      title?: string;
      alt?: string;
      _key: string;
    }>;
  };
  thirdSection?: {
    leftContent?: BlockContent;
    rightContent?: BlockContent;
  };
  fourthSection?: {
    leftContent?: BlockContent;
    rightContent?: BlockContent;
    grid?: Array<{
      heading?: string;
      text?: string;
      _key: string;
    }>;
  };
  fifthSection?: {
    leftContent?: BlockContent;
    rightContent?: BlockContent;
  };
} | null;
// Variable: CONTACT_QUERY
// Query: *[_type == "contact"][0]
export type CONTACT_QUERYResult = {
  _id: string;
  _type: "contact";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  hero?: BlockContent;
  content?: {
    leftContent?: BlockContent;
    middleContent?: BlockContent;
    rightContent?: BlockContent;
  };
} | null;
// Variable: ABOUT_QUERY
// Query: *[_type == "about"][0]
export type ABOUT_QUERYResult = {
  _id: string;
  _type: "about";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  heroSection?: {
    heroContent?: BlockContent;
    heroImage?: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      alt?: string;
      _type: "image";
    };
  };
  firstSection?: {
    leftContent?: BlockContent;
    rightContent?: BlockContent;
  };
  secondSection?: {
    images?: Array<{
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      title?: string;
      alt?: string;
      _type: "image";
      _key: string;
    }>;
  };
  thirdSection?: {
    leftContent?: BlockContent;
    rightContent?: BlockContent;
  };
} | null;
// Variable: BANNER_QUERY
// Query: *[_type == "banner"][0]
export type BANNER_QUERYResult = {
  _id: string;
  _type: "banner";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  content?: Array<({
    _key: string;
  } & Button) | {
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "h1" | "h2" | "h3" | "h4" | "normal" | "small";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  } | {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
    _key: string;
  }>;
} | null;
