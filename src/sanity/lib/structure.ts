import type { StructureResolver } from "sanity/structure";
import { type DocumentDefinition } from 'sanity'
import { PackageIcon, RobotIcon, CogIcon } from "@sanity/icons";

export const singletonPlugin = (types: string[]) => {
  return {
    name: 'singletonPlugin',
    document: {
      // Hide 'Singletons (such as Home)' from new document options
      // https://user-images.githubusercontent.com/81981/195728798-e0c6cf7e-d442-4e58-af3a-8cd99d7fcc28.png
      newDocumentOptions: (prev: any[], { creationContext }: { creationContext: { type?: string } }) => {
        if (creationContext.type === 'global') {
          return prev.filter(
            (templateItem) => !types.includes(templateItem.templateId),
          )
        }

        return prev
      },
      // Removes the "duplicate" action on the Singletons (such as Home)
      actions: (prev: any[], { schemaType }: { schemaType: string }) => {
        if (types.includes(schemaType)) {
          return prev.filter(({ action }) => action !== 'duplicate')
        }

        return prev
      },
    },
  }
}

// The StructureResolver is how we're changing the DeskTool structure to linking to document (named Singleton)
// like how "Home" is handled.
export const pageStructure = (
  typeDefArray: DocumentDefinition[],
): StructureResolver => {
  return (S) => {
    // Goes through all of the singletons that were provided and translates them into something the
    // Desktool can understand
    const singletonItems = typeDefArray.map((typeDef) => {
      return S.listItem()
        .title(typeDef.title!)
        .icon(typeDef.icon)
        .child(
          S.editor()
            .title(typeDef.title!)
            .id(typeDef.name)
            .schemaType(typeDef.name)
            .documentId(typeDef.name),
        )
    })

    // The default root list items (except custom ones)
    const defaultListItems = S.documentTypeListItems().filter(
      (listItem) =>
        !typeDefArray.find((singleton) => singleton.name === listItem.getId()),
    )

    return S.list()
      .title('Pages')
      .items([
        ...singletonItems, 
        S.divider(), 
        S.listItem()
          .title("Product Pages")
          .schemaType("page")
          .icon(PackageIcon)
          .child(
            S.documentTypeList("page")
              .title("Products Pages")
              .filter("category == 'product'")
          ),
        S.listItem()
          .title("Service Pages")
          .schemaType("page")
          .icon(RobotIcon)
          .child(
            S.documentTypeList("page")
              .title("Service Pages")
              .filter("category == 'service'")
          ),
        S.divider(),
        S.listItem()
          .title("Site Settings")
          .schemaType("settings")
          .icon(CogIcon)
          .child(
            S.editor()
              .title("Site Settings")
              .id("settings")
              .schemaType("settings")
              .documentId("settings"),
          ),
      ])
  }
}