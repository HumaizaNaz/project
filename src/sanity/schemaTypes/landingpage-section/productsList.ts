/* eslint-disable import/no-anonymous-default-export */
// schemas/product.js

export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Product Name',
        type: 'string',
      },
      {
        name: 'description',
        title: 'Product Description',
        type: 'text',
      },
      {
        name: 'category',
        title: 'Category',
        type: 'string',
        options: {
          list: [
            { title: 'Dresses', value: 'dresses' },
            { title: 'Bags', value: 'bags' },
            { title: 'Shoes', value: 'shoes' },
            { title: 'Accessories', value: 'accessories' },
            { title: 'Jewelry', value: 'jewelry' },
            { title: 'Tops', value: 'tops' },
            { title: 'Bottoms', value: 'bottoms' },
            { title: 'Outerwear', value: 'outerwear' },
            { title: 'Activewear', value: 'activewear' },
            { title: 'Home & Living', value: 'homeLiving' },
            { title: 'Beauty', value: 'beauty' },
            { title: 'Electronics', value: 'electronics' },
            { title: 'Gifts', value: 'gifts' },
            { title: 'Kids', value: 'kids' },
            { title: 'Toys & Games', value: 'toysGames' },
            { title: 'Pet Supplies', value: 'petSupplies' },
            { title: 'Health & Wellness', value: 'healthWellness' },
          ],
        },
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number',
      },
      {
        name: 'oldPrice',
        title: 'Old Price',
        type: 'number',
      },
      {
        name: 'availability',
        title: 'Availability',
        type: 'string',
        options: {
          list: [
            { title: 'In Stock', value: 'inStock' },
            { title: 'Out of Stock', value: 'outOfStock' },
          ],
        },
      },
      {
        name: 'image',
        title: 'Product Image',
        type: 'image',
      },
      {
        name: 'images',
        title: 'Additional Images',
        type: 'array',
        of: [{ type: 'image' }],
      },
      {
        name: 'colors',
        title: 'Colors Available',
        type: 'array',
        of: [{ type: 'string' }],
      },
      {
        name: 'sizeAvailability',
        title: 'Size Availability',
        type: 'array',
        of: [{ type: 'string' }],
      },
      {
        name: 'rating',
        title: 'Rating',
        type: 'number',
        validation: Rule => Rule.min(0).max(5),
      },
      {
        name: 'material',
        title: 'Material',
        type: 'string',
      },
    ],
  };
  