import { defineField, defineType } from "sanity";
import icon from "./icon";

export default defineType({
  name: "page",
  title: "Page",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description:
        "The slug is the URL path for this page. e.g. www.unicorngraphics.com/slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (rule) =>
        rule.required().error("Required to generate a URL."),
      hidden: ({ document }) => !document?.title,
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      description:
        "This will determine how the page is displayed and what links to it.",
      options: {
        list: ["product", "service"],
        layout: "radio",
      },
    }),
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
          name: "heroImage",
          title: "Hero Image",
          type: "image",
          description:
            "This is the background image for the hero section as well as the image that will display alongside links to this product.",
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative Text",
              description:
                "This text will display instead of an image when the image fails to load.",
            },
          ],
        },
      ],
    }),
    defineField({
      name: "textSection",
      title: "Text Section",
      type: "object",
      description: "This is a two-column section for text.",
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
                    icon,
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
      name: "imageGrid",
      title: "Image Grid",
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
    }),
  ],
});
