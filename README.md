# Premium Restaurant Website

A modern, responsive restaurant website built with Next.js, featuring online ordering, payment integration, and an admin panel.

## Features

- 🎨 **Modern UI/UX**: Elegant Indian traditional theme with rich colors (maroon, gold, cream)
- 📱 **Fully Responsive**: Works seamlessly on all devices
- 🛒 **Online Ordering**: Complete cart and checkout system
- 💳 **Payment Integration**: Razorpay payment gateway
- 📊 **Admin Panel**: Manage menu items and orders
- 🔐 **Secure**: Protected admin routes with authentication
- ⚡ **Fast**: Built with Next.js 14 App Router
- 🎭 **Animations**: Smooth transitions with Framer Motion

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Database**: MongoDB
- **Payment**: Razorpay
- **Language**: TypeScript

## Getting Started

### Prerequisites

- Node.js 18+ installed
- MongoDB database (local or Atlas)
- Razorpay account with API keys

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd cafe
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   # MongoDB Connection
   MONGODB_URI=mongodb://localhost:27017/restaurant
   # Or use MongoDB Atlas: mongodb+srv://username:password@cluster.mongodb.net/restaurant

   # Razorpay Keys
   NEXT_PUBLIC_RAZORPAY_KEY_ID=your_razorpay_key_id
   RAZORPAY_KEY_SECRET=your_razorpay_key_secret

   # Admin Credentials
   ADMIN_EMAIL=admin@restaurant.com
   ADMIN_PASSWORD=admin123
   ADMIN_TOKEN=admin-secret-token

   # App URL
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── admin/             # Admin panel pages
│   ├── api/               # API routes
│   ├── about/             # About page
│   ├── cart/              # Shopping cart page
│   ├── checkout/          # Checkout page
│   ├── contact/           # Contact page
│   ├── menu/              # Menu page
│   └── order-success/     # Order success page
├── components/            # React components
├── context/               # React context providers
├── lib/                   # Utility functions and models
└── public/                # Static assets
```

## Pages

### Customer Pages

- **Home** (`/`): Hero section, featured dishes, testimonials
- **Menu** (`/menu`): Browse menu items by category
- **Cart** (`/cart`): View and manage cart items
- **Checkout** (`/checkout`): Customer details and payment
- **About** (`/about`): Restaurant story and gallery
- **Contact** (`/contact`): Contact form and map

### Admin Pages

- **Login** (`/admin/login`): Admin authentication
- **Dashboard** (`/admin/dashboard`): Overview statistics
- **Menu Management** (`/admin/menu`): Add/edit/delete menu items
- **Order Management** (`/admin/orders`): View and update orders

## Database Schema

### Menu Collection
```typescript
{
  _id: ObjectId,
  name: string,
  description: string,
  category: 'Veg' | 'Non-Veg' | 'Starters' | 'Main Course' | 'Desserts' | 'Beverages',
  price: number,
  image: string,
  available: boolean,
  createdAt: Date,
  updatedAt: Date
}
```

### Orders Collection
```typescript
{
  _id: ObjectId,
  items: OrderItem[],
  totalAmount: number,
  subtotal: number,
  gst: number,
  paymentId: string,
  razorpayOrderId: string,
  customerName: string,
  customerPhone: string,
  customerAddress: string,
  status: 'Pending' | 'Preparing' | 'Delivered' | 'Cancelled',
  createdAt: Date,
  updatedAt: Date
}
```

## Payment Flow

1. Customer adds items to cart
2. Proceeds to checkout and enters details
3. Razorpay payment gateway opens
4. After successful payment, signature is verified
5. Order is saved to database with status "Preparing"
6. Admin can update order status

## Admin Access

Default credentials (change in `.env.local`):
- Email: `admin@restaurant.com`
- Password: `admin123`

## Building for Production

```bash
npm run build
npm start
```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `MONGODB_URI` | MongoDB connection string | Yes |
| `NEXT_PUBLIC_RAZORPAY_KEY_ID` | Razorpay public key | Yes |
| `RAZORPAY_KEY_SECRET` | Razorpay secret key | Yes |
| `ADMIN_EMAIL` | Admin login email | Yes |
| `ADMIN_PASSWORD` | Admin login password | Yes |
| `ADMIN_TOKEN` | Admin session token | Yes |
| `NEXT_PUBLIC_APP_URL` | Application URL | Yes |

## Security Features

- Admin routes protected with middleware
- Payment signature verification
- Secure cookie-based authentication
- Input validation on all forms

## Customization

### Colors
Edit `tailwind.config.ts` to customize the color scheme:
- Maroon: Primary brand color
- Gold: Accent color
- Cream: Background color

### Menu Categories
Update categories in `app/menu/page.tsx`:
```typescript
const categories = ['All', 'Veg', 'Non-Veg', 'Starters', 'Main Course', 'Desserts', 'Beverages'];
```

## Support

For issues or questions, please open an issue on GitHub.

## License

This project is licensed under the MIT License.
