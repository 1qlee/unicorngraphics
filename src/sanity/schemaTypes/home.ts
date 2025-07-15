import { defineField, defineType } from "sanity";
import { HomeIcon } from "@sanity/icons";

export default defineType({
  name: "home",
  title: "Home",
  type: "document",
  icon: HomeIcon,
  fields: [
    defineField({
      name: "heroSection",
      title: "Hero Section",
      type: "object",
      description:
        "This section will display at the top of the page. It is the first section viewers will see on the page.",
      fields: [
        {
          name: "heroContent",
          title: "Hero Content",
          type: "blockContent",
          description:
            "This text will display in the center of the hero section. Please do NOT use black or gray colored text.",
        },
        {
          name: "heroVideo",
          title: "Hero Video",
          type: "file",
          description:
            "This is the background image for the hero section. It will have a black overlay to make the text more readable.",
          fields: [
            {
              name: "alt",
              type: "image",
              title: "Thumbnail",
              description:
                "This image will display instead of the video when the video fails to load or is in a loading state.",
            },
          ],
        },
      ],
    }),
    defineField({
      name: "firstSection",
      title: "First Section",
      type: "object",
      description:
        "This section will display directly below the hero  section (the main image). This is a two-column section.",
      fields: [
        {
          name: "leftContent",
          type: "blockContent",
          title: "Left Side Content",
          description: "This will display on the left half of the section.",
        },
        {
          name: "rightContent",
          type: "blockContent",
          title: "Right Side Content",
          description: "This will display on the right half of the section.",
        },
        {
          name: "gridContent",
          title: "Grid Content",
          type: "object",
          description:
            "This will display below the two-column section. This is a grid that will expand to as many columns as items inputted.",
          fields: [
            {
              name: "content",
              title: "Content",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    {
                      name: "heading",
                      type: "string",
                      title: "Heading",
                    },
                    {
                      name: "text",
                      type: "string",
                      title: "Text",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: "secondSection",
      title: "Second Section",
      type: "object",
      description:
        "This is a two-column section above all of the client images which are vertically and horizontally centered.",
      fields: [
        {
          title: "Left Side Content",
          name: "leftContent",
          type: "blockContent",
          description:
            "This text will display on the left side half. Use it for a header.",
        },
        {
          name: "rightContent",
          title: "Right Side Content",
          type: "blockContent",
          description:
            "This text will display on the right side half. Use it for a description.",
        },
        {
          name: "slider",
          title: "Client Images",
          description:
            "Best to use images that are 2:1 ratio (width is greater than height).",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "image",
                  type: "image",
                  title: "Image",
                },
                {
                  name: "title",
                  type: "string",
                  title: "Title",
                  description:
                    "This text will display when users hover over the image.",
                },
                {
                  name: "alt",
                  type: "string",
                  title: "Alt text",
                  description:
                    "This text will display when the image fails to load.",
                },
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: "thirdSection",
      title: "Third Section",
      type: "object",
      description:
        "This section will display all products. To edit products, go to the 'Product Pages' tab in the sidebar.",
      fields: [
        {
          name: "leftContent",
          title: "Left Side Content",
          type: "blockContent",
          description: "This text will display on the left-side column.",
        },
        {
          name: "rightContent",
          title: "Right Side Content",
          type: "blockContent",
          description: "This text will display on the right-side column.",
        },
      ],
    }),
    defineField({
      name: "fourthSection",
      title: "Fourth Section",
      type: "object",
      description:
        "This is a two-column section with a multi-column section below it.",
      fields: [
        {
          name: "leftContent",
          title: "Left Side Content",
          type: "blockContent",
          description: "This text will display on the left-side column.",
        },
        {
          name: "rightContent",
          title: "Right Side Content",
          type: "blockContent",
          description: "This text will display on the right-side column.",
        },
        {
          name: "grid",
          title: "Grid Content",
          description:
            "Grid content will display below the two-column section. This is a grid that will expand to as many columns as items inputted.",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "heading",
                  type: "string",
                  title: "Heading",
                },
                {
                  name: "text",
                  type: "string",
                  title: "Text",
                },
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: "fifthSection",
      title: "Fifth Section",
      type: "object",
      description:
        "This section will display all services. To edit services, go to the 'Service Pages' tab in the sidebar.",
      fields: [
        {
          name: "leftContent",
          title: "Left Side Content",
          type: "blockContent",
          description: "This text will display on the left-side column.",
        },
        {
          name: "rightContent",
          title: "Right Side Content",
          type: "blockContent",
          description: "This text will display on the right-side column.",
        },
      ],
    }),
  ],
});
