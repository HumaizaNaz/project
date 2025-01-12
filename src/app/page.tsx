// src/app/page.tsx

import Hero from '@/app/components/landingPage/Hero';
import Topbar from './components/landingPage/Topbar';
import Navbar from './components/landingPage/Navbar';
import Footer from './components/landingPage/Footer';
import Vita from './components/landingPage/Vita';
import Fluid from './components/landingPage/Fluid';
import FeaturedPosts from '../app/components/FeaturedPosts';
import Editor from './components/landingPage/Editor';
import Product from './components/landingPage/Product';

export default function Home() {

 

  return (
    <div>
      <Topbar/>
      <Navbar/>
   <Hero/>
   <Editor/>
   <Product/>
   <Vita/>
   <Fluid/>
   <FeaturedPosts/>
   <Footer/>
    </div>
  );
}
