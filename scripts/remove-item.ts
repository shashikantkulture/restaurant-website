import { MongoClient } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/restaurant';

async function removeItem() {
    const client = new MongoClient(MONGODB_URI);

    try {
        await client.connect();
        console.log('Connected to MongoDB');

        const db = client.db('restaurant');
        const collection = db.collection('menu');

        const result = await collection.deleteOne({ name: 'Tandoori Chicken' });
        if (result.deletedCount === 1) {
            console.log('Successfully deleted "Tandoori Chicken" from the menu.');
        } else {
            console.log('Item "Tandoori Chicken" not found in the menu.');
        }
    } catch (error) {
        console.error('Error removing item:', error);
        process.exit(1);
    } finally {
        await client.close();
    }
}

removeItem();
