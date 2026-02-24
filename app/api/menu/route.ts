import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { MenuItem } from '@/lib/models/Menu';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('restaurant');
    const menu = await db.collection<MenuItem>('menu').find({}).toArray();
    
    return NextResponse.json(menu);
  } catch (error) {
    console.error('Error fetching menu:', error);
    return NextResponse.json(
      { error: 'Failed to fetch menu' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, description, category, price, image, available } = body;

    if (!name || !description || !category || !price) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db('restaurant');
    
    const menuItem: MenuItem = {
      name,
      description,
      category,
      price: Number(price),
      image: image || '',
      available: available !== undefined ? available : true,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const result = await db.collection<MenuItem>('menu').insertOne(menuItem);
    
    return NextResponse.json({ 
      success: true, 
      id: result.insertedId 
    }, { status: 201 });
  } catch (error) {
    console.error('Error creating menu item:', error);
    return NextResponse.json(
      { error: 'Failed to create menu item' },
      { status: 500 }
    );
  }
}
