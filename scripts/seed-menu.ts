/**
 * Seed script to populate initial menu items
 * Run with: npx tsx scripts/seed-menu.ts
 */

import { MongoClient } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/restaurant';

const getPromptImage = (name: string, category: string) => {
  return `https://image.pollinations.ai/prompt/${encodeURIComponent(name + ' delicious ' + category + ' indian food high quality photorealistic')}?width=800&height=600&nologo=true`;
};

const menuItems = [
  {
    name: 'Butter Chicken',
    description: 'Creamy tomato-based curry with tender chicken pieces, cooked in butter and aromatic spices',
    category: 'Non-Veg',
    price: 450,
    image: getPromptImage('Butter Chicken', 'Non-Veg'),
    available: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'Paneer Tikka',
    description: 'Grilled cottage cheese marinated in spices and yogurt, served with mint chutney',
    category: 'Veg',
    price: 280,
    image: getPromptImage('Paneer Tikka', 'Veg'),
    available: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'Biryani',
    description: 'Fragrant basmati rice cooked with aromatic spices, herbs, and your choice of meat or vegetables',
    category: 'Main Course',
    price: 350,
    image: getPromptImage('Biryani', 'Main Course'),
    available: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'Samosa',
    description: 'Crispy fried pastry filled with spiced potatoes and peas, served with tamarind chutney',
    category: 'Starters',
    price: 80,
    image: getPromptImage('Samosa', 'Starters'),
    available: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'Gulab Jamun',
    description: 'Soft, spongy milk-based dessert soaked in sweet rose-flavored syrup',
    category: 'Desserts',
    price: 120,
    image: getPromptImage('Gulab Jamun', 'Desserts'),
    available: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'Mango Lassi',
    description: 'Refreshing yogurt-based drink blended with fresh mango and a hint of cardamom',
    category: 'Beverages',
    price: 150,
    image: getPromptImage('Mango Lassi', 'Beverages'),
    available: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'Dal Makhani',
    description: 'Creamy black lentils slow-cooked with butter, cream, and aromatic spices',
    category: 'Veg',
    price: 320,
    image: getPromptImage('Dal Makhani', 'Veg'),
    available: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },

  // Indian Paneer Gravy
  ...[
    { name: 'Matar paneer', price: 220 },
    { name: 'Amritsar paneer', price: 260 },
    { name: 'Palak paneer', price: 220 },
    { name: 'Paneer do Pyaza', price: 240 },
    { name: 'Paneer Butter Masala', price: 240 },
    { name: 'Kadhai Paneer', price: 260 },
    { name: 'Handi Paneer', price: 240 },
    { name: 'Paneer Kali Mirch', price: 260 },
    { name: 'Paneer lababdar', price: 260 },
    { name: 'Shahi Paneer', price: 280 },
    { name: 'Paneer Tikka Masala', price: 260 },
    { name: 'Paneer Bhurji', price: 260 },
    { name: 'Hyderabadi Paneer', price: 260 }
  ].map(item => ({
    name: item.name,
    description: 'Delicious Indian Paneer Gravy',
    category: 'Veg' as any,
    price: item.price,
    image: getPromptImage(item.name, 'Veg'),
    available: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  })),
  // Indian Veg Gravy
  ...[
    { name: 'Chana Masala', price: 220 },
    { name: 'Mushroom Matar', price: 240 },
    { name: 'Mushroom Masala150', price: 240 },
    { name: 'Mushroom Butter Masala', price: 240 },
    { name: 'Palak Corn', price: 220 },
    { name: 'Veg Kofta', price: 220 },
    { name: 'Malai Kofta', price: 260 },
    { name: 'Banarsi Dum Aalo(Gravy)', price: 220 },
    { name: 'Kashmiri Dum Aalo(Gravy)', price: 220 }
  ].map(item => ({
    name: item.name,
    description: 'Authentic Indian Veg Gravy',
    category: 'Veg' as any,
    price: item.price,
    image: getPromptImage(item.name, 'Veg'),
    available: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  })),
  // Dal
  ...[
    { name: 'Dal Tadka(Amul Butter)', price: 180 },
    { name: 'Dal Makhni', price: 220 },
    { name: 'Dal Bukhara', price: 180 }
  ].map(item => ({
    name: item.name,
    description: 'Traditional Dal',
    category: 'Veg' as any,
    price: item.price,
    image: getPromptImage(item.name, 'Veg'),
    available: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  })),
  // Vegetables
  ...[
    { name: 'Jeera Aalo', price: 150 },
    { name: 'Aalo Matar', price: 150 },
    { name: 'Aalo Gobhi Matar', price: 150 },
    { name: 'Mix Veg', price: 200 }
  ].map(item => ({
    name: item.name,
    description: 'Fresh vegetable preparations',
    category: 'Veg' as any,
    price: item.price,
    image: getPromptImage(item.name, 'Veg'),
    available: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  })),
  // Breads
  ...[
    { name: 'Plain Tandoori Roti', price: 18 },
    { name: 'Butter Tandoori Roti', price: 25 },
    { name: 'Missi Roti', price: 55 },
    { name: 'Plain naan', price: 45 },
    { name: 'Butter naan', price: 65 },
    { name: 'Stuffed naan', price: 70 },
    { name: 'Butter garlic naan', price: 80 },
    { name: 'Laccha paratha', price: 45 },
    { name: 'Cheese Naan', price: 80 },
    { name: 'Janglee Roti', price: 25 }
  ].map(item => ({
    name: item.name,
    description: 'Fresh Indian breads cooked in tandoor',
    category: 'Veg' as any,
    price: item.price,
    image: getPromptImage(item.name, 'Veg Bread'),
    available: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  })),
  // Rice
  ...[
    { name: 'Plain rice', price: 120 },
    { name: 'Jeera rice', price: 130 },
    { name: 'Matar pulao', price: 150 },
    { name: 'Veg Masala Pulao', price: 150 }
  ].map(item => ({
    name: item.name,
    description: 'Aromatic rice preparations',
    category: 'Veg' as any,
    price: item.price,
    image: getPromptImage(item.name, 'Veg Rice'),
    available: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  }))
];

async function seedMenu() {
  const client = new MongoClient(MONGODB_URI);

  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db('restaurant');
    const collection = db.collection('menu');

    // Clear existing menu items
    await collection.deleteMany({});
    console.log('Cleared existing menu items');

    // Insert new menu items
    const result = await collection.insertMany(menuItems);
    console.log(`Inserted ${result.insertedCount} menu items`);

    console.log('Menu seeding completed successfully!');
  } catch (error) {
    console.error('Error seeding menu:', error);
    process.exit(1);
  } finally {
    await client.close();
  }
}

seedMenu();
