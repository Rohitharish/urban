"use client"

import Footer from './Foot';

import Navbar from './Navbar';
import { StoreProvider } from './redux/Storeprovider';

export default function Layout({ children }) {
  return (
    <div>
      <StoreProvider>
      <Navbar />
      {children}
      <Footer/>
      </StoreProvider>
    </div>
  );
}
