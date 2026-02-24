import { ObjectId } from 'mongodb';

export interface OrderItem {
  menuItemId: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export type OrderStatus = 'Pending' | 'Preparing' | 'Delivered' | 'Cancelled';

export interface Order {
  _id?: ObjectId;
  items: OrderItem[];
  totalAmount: number;
  subtotal: number;
  gst: number;
  paymentId: string;
  razorpayOrderId: string;
  customerName: string;
  customerPhone: string;
  customerAddress: string;
  status: OrderStatus;
  createdAt?: Date;
  updatedAt?: Date;
}
