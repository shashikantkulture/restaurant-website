import { ObjectId } from 'mongodb';

export interface MenuItem {
  _id?: ObjectId;
  name: string;
  description: string;
  category: 'Veg' | 'Non-Veg' | 'Starters' | 'Main Course' | 'Desserts' | 'Beverages';
  price: number;
  image: string;
  available: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
