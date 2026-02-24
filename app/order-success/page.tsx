'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { CheckCircle, Home, Package } from 'lucide-react';
import Link from 'next/link';
import Footer from '@/components/Footer';

function OrderSuccessContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const orderId = searchParams.get('id');
  const [order, setOrder] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (orderId) {
      fetchOrder();
    }
  }, [orderId]);

  const fetchOrder = async () => {
    try {
      const response = await fetch(`/api/orders/${orderId}`);
      if (response.ok) {
        const data = await response.json();
        setOrder(data);
      }
    } catch (error) {
      console.error('Error fetching order:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-maroon-600"></div>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen bg-cream-50">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <CheckCircle className="w-24 h-24 text-green-500 mx-auto mb-4" />
            <h1 className="text-4xl font-serif font-bold text-maroon-800 mb-4">
              Order Placed Successfully!
            </h1>
            <p className="text-lg text-gray-600 mb-2">
              Thank you for your order. We've received your payment.
            </p>
            {order && (
              <p className="text-maroon-600 font-semibold">
                Order ID: {order._id}
              </p>
            )}
          </div>

          {order && (
            <div className="bg-white rounded-lg shadow-md p-6 mb-8 text-left">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Order Details</h2>
              <div className="space-y-2 mb-4">
                <p><span className="font-semibold">Customer:</span> {order.customerName}</p>
                <p><span className="font-semibold">Phone:</span> {order.customerPhone}</p>
                <p><span className="font-semibold">Address:</span> {order.customerAddress}</p>
                <p><span className="font-semibold">Status:</span> 
                  <span className={`ml-2 px-3 py-1 rounded-full text-sm ${
                    order.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                    order.status === 'Preparing' ? 'bg-blue-100 text-blue-800' :
                    order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {order.status}
                  </span>
                </p>
                <p><span className="font-semibold">Total Amount:</span> ₹{order.totalAmount.toFixed(2)}</p>
              </div>
            </div>
          )}

          <div className="flex gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-maroon-600 hover:bg-maroon-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              <Home className="w-5 h-5" />
              Back to Home
            </Link>
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              <Package className="w-5 h-5" />
              Order More
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default function OrderSuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-maroon-600"></div>
      </div>
    }>
      <OrderSuccessContent />
    </Suspense>
  );
}
