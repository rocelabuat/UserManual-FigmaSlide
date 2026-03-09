import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import { Slide } from './components/Slide';
import { SlideControls } from './components/SlideControls';

import slide1Dark from 'figma:asset/01962370c5547bd530de43592f323d732a6e84c0.png';
import slide1Light from 'figma:asset/1352e0e6eee956e005b4d72a16c297d46d0c32e5.png';
import slide2Login from 'figma:asset/79dafcf1619854dca9610d795dd7d48e26f6b729.png';
import slide3Menu from 'figma:asset/02abd70fb3b961dc4ad395c3b91790e1bed09996.png';
import slide4Cart from 'figma:asset/dca2dfe41e0aa74576e017c562a7b3d4a3e5d6df.png';
import slide5Checkout from 'figma:asset/3e62f223f48ba64b72712afa6c2be4b101e02e97.png';
import slide6Success from 'figma:asset/9db172a9a024b0a3274692d85740ba0d56d6c1f4.png';
import slide7Orders from 'figma:asset/64c7d34d03ebccb2604433cba7102695b485d6e0.png';

import staffLogin from 'figma:asset/5c674a032b79640aa030830bef4686d427252203.png';
import staffDashboard from 'figma:asset/eb67e93af90a6cc7427ca2d556f92b6b84de2d56.png';
import staffOrderDetails from 'figma:asset/22e1fd3f1c742e3bff0e051799bdf9b4c9047654.png';
import staffStatusUpdate from 'figma:asset/056042a22992b27aa44ea391096ad4b58ad215fa.png';

import adminLogin from 'figma:asset/7dde59054d238ceed9f581f75ef03ded5a51385d.png';
import adminDashboard from 'figma:asset/9e1dd0e170fac69b57a329b267c09c04d31fea15.png';
import adminSales from 'figma:asset/93fa7fb0c7d4ef1e64082c5c647c4b5b06464c4c.png';
import adminMenuManagement from 'figma:asset/5b5771f736db019fd200f273271809fb38f00d62.png';
import adminAddProduct from 'figma:asset/a2eca46b216ae3e23c31739ec542becb0c72f6d4.png';
import adminInventory from 'figma:asset/572e4dfc0f6f77e10a5ce57699e24443ad350b38.png';
import adminUpdateInventory from 'figma:asset/80fcf07e9b2c90e305694d59ce3c3c9c41ff76b4.png';
import adminUserManagement from 'figma:asset/1d44f2611ed3f2a31af76b992b4c060db9b024f1.png';

const slides = [
  {
    id: 1,
    title: "Welcome to Jesan's Fried Chicken",
    subtitle: "Customer Journey - Homepage",
    image: slide1Dark,
    description: "Crispy. Juicy. Perfectly Fried! Experience the ultimate fried chicken."
  },
  {
    id: 2,
    title: "Customer Login",
    subtitle: "Secure account access",
    image: slide2Login,
    description: "Sign in to your account to order and track your delicious chicken."
  },
  {
    id: 3,
    title: "Browse Our Menu",
    subtitle: "Delicious selection of fried chicken",
    image: slide3Menu,
    description: "Choose from our menu: Crispy Drumstick, Chicken Wings, Family Bucket, and Burgers."
  },
  {
    id: 4,
    title: "Shopping Cart",
    subtitle: "Review your order",
    image: slide4Cart,
    description: "Manage quantities and proceed to checkout with your selected items."
  },
  {
    id: 5,
    title: "Checkout",
    subtitle: "Delivery information & payment",
    image: slide5Checkout,
    description: "Enter your delivery details and choose your payment method."
  },
  {
    id: 6,
    title: "Order Successful!",
    subtitle: "Thank you for your order",
    image: slide6Success,
    description: "Your transaction was completed successfully. Enjoy your meal!"
  },
  {
    id: 7,
    title: "My Orders",
    subtitle: "Track your orders",
    image: slide7Orders,
    description: "View your order history and track current orders."
  },
  {
    id: 8,
    title: "Staff Login",
    subtitle: "Staff Portal Access",
    image: staffLogin,
    description: "Staff members sign in to access the order management system."
  },
  {
    id: 9,
    title: "Staff Dashboard",
    subtitle: "Order Management Overview",
    image: staffDashboard,
    description: "View all incoming orders, manage order status, and track order preparation."
  },
  {
    id: 10,
    title: "Order Details",
    subtitle: "View order information",
    image: staffOrderDetails,
    description: "Access detailed information about each order including items, quantities, and customer details."
  },
  {
    id: 11,
    title: "Update Order Status",
    subtitle: "Manage order workflow",
    image: staffStatusUpdate,
    description: "Update order status from Pending to Preparing to Ready for pickup or delivery."
  },
  {
    id: 12,
    title: "Admin Login",
    subtitle: "Admin Portal Access",
    image: adminLogin,
    description: "Administrators sign in to access the full system management dashboard."
  },
  {
    id: 13,
    title: "Admin Dashboard",
    subtitle: "Complete system overview",
    image: adminDashboard,
    description: "View key metrics, recent orders, sales trends, and system health at a glance."
  },
  {
    id: 14,
    title: "Sales Analytics",
    subtitle: "Track revenue and performance",
    image: adminSales,
    description: "Monitor daily, weekly, and monthly sales with detailed charts and reports."
  },
  {
    id: 15,
    title: "Menu Management",
    subtitle: "Manage product catalog",
    image: adminMenuManagement,
    description: "View, edit, and organize all menu items including pricing and availability."
  },
  {
    id: 16,
    title: "Add New Product",
    subtitle: "Create menu items",
    image: adminAddProduct,
    description: "Add new products to the menu with details, pricing, and images."
  },
  {
    id: 17,
    title: "Inventory Management",
    subtitle: "Track stock levels",
    image: adminInventory,
    description: "Monitor inventory levels, low stock alerts, and ingredient availability."
  },
  {
    id: 18,
    title: "Update Inventory",
    subtitle: "Adjust stock quantities",
    image: adminUpdateInventory,
    description: "Update stock levels and manage inventory replenishment."
  },
  {
    id: 19,
    title: "User Management",
    subtitle: "Manage staff and customers",
    image: adminUserManagement,
    description: "Create, edit, and manage user accounts for staff and customer access."
  }
];

export default function App() {
  const [[currentSlide, direction], setCurrentSlide] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    const nextSlide = currentSlide + newDirection;
    if (nextSlide >= 0 && nextSlide < slides.length) {
      setCurrentSlide([nextSlide, newDirection]);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        paginate(-1);
      } else if (e.key === 'ArrowRight') {
        paginate(1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  return (
    <div className="size-full bg-[#2a2421] overflow-hidden relative">
      <AnimatePresence initial={false} custom={direction}>
        <Slide key={currentSlide} direction={direction}>
          <div className="size-full flex flex-col items-center justify-center p-12">
            <div className="max-w-7xl w-full">
              <div className="text-center mb-8">
                <h1 className="mb-2 text-white">{slides[currentSlide].title}</h1>
                <p className="text-[#ef4423] text-xl mb-3">{slides[currentSlide].subtitle}</p>
                <p className="text-gray-300 max-w-2xl mx-auto">{slides[currentSlide].description}</p>
              </div>

              <div className="flex justify-center">
                <img
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].title}
                  className="max-h-[600px] w-auto rounded-lg shadow-2xl border border-gray-700"
                />
              </div>
            </div>
          </div>
        </Slide>
      </AnimatePresence>

      <SlideControls
        currentSlide={currentSlide}
        totalSlides={slides.length}
        onPrevious={() => paginate(-1)}
        onNext={() => paginate(1)}
      />

      <div className="absolute top-8 right-8 text-white/80 text-sm bg-black/40 px-4 py-2 rounded-full backdrop-blur-sm">
        {currentSlide + 1} / {slides.length}
      </div>
    </div>
  );
}