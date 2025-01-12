// editorSection.ts
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    name: 'editorSection',
    title: 'Editor Section', // Display title in Sanity Studio
    type: 'document',        // The type of this schema is a document
    fields: [
      {
        name: 'images',   // Array of images in the editor section
        title: 'Images',   // Label for the images field
        type: 'array',     // Array type to hold multiple images
        of: [
          {
            name: 'imageSet',  // Renamed from 'image' to 'imageSet'
            title: 'Image Set',  // Title for the image
            type: 'object',   // Object type to contain multiple fields
            fields: [
              {
                name: 'defaultImage',  // Default image (initial state)
                title: 'Default Image',  // Label for the default image
                type: 'image',   // Field type is image
                options: {
                  hotspot: true  // Allows for a focused area of the image
                }
              },
              {
                name: 'hoveredImage',  // Hovered image (to change on hover)
                title: 'Hovered Image',  // Label for the hovered image
                type: 'image',    // Field type is image
                options: {
                  hotspot: true  // Allows for a focused area of the image
                }
              }
            ]
          },
        ]
      }
    ]
  };
  