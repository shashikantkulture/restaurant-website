import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { Order } from '@/lib/models/Order';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');

    const client = await clientPromise;
    const db = client.db('restaurant');

    const query = status ? { status } : {};
    const orders = await db
      .collection<Order>('orders')
      .find(query)
      .sort({ createdAt: -1 })
      .toArray();

    return NextResponse.json(orders);
  } catch (error) {
    console.error('Error fetching orders:', error);
    return NextResponse.json(
      { error: 'Failed to fetch orders' },
      { status: 500 }
    );
  }
}
