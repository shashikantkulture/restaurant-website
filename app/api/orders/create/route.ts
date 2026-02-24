import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';
import clientPromise from '@/lib/mongodb';
import { Order } from '@/lib/models/Order';

const razorpay = new Razorpay({
  key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || 'dummy_key_id',
  key_secret: process.env.RAZORPAY_KEY_SECRET || 'dummy_key_secret',
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      items,
      subtotal,
      gst,
      totalAmount,
      customerName,
      customerPhone,
      customerAddress,
    } = body;

    if (!items || !totalAmount || !customerName || !customerPhone || !customerAddress) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create Razorpay order
    const razorpayOrder = await razorpay.orders.create({
      amount: Math.round(totalAmount * 100), // Amount in paise
      currency: 'INR',
      receipt: `order_${Date.now()}`,
    });

    // Save order to database
    const client = await clientPromise;
    const db = client.db('restaurant');

    const order: Order = {
      items,
      subtotal,
      gst,
      totalAmount,
      paymentId: '',
      razorpayOrderId: razorpayOrder.id,
      customerName,
      customerPhone,
      customerAddress,
      status: 'Pending',
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const result = await db.collection<Order>('orders').insertOne(order);

    return NextResponse.json({
      success: true,
      orderId: result.insertedId.toString(),
      razorpayOrderId: razorpayOrder.id,
    });
  } catch (error: any) {
    console.error('Error creating order:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to create order' },
      { status: 500 }
    );
  }
}
