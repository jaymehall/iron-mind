import Head from 'next/head';
import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';
// import TechStack from '../components/sections/TechStack';
// import Demo from '../components/sections/Demo';
// import About from '../components/sections/About';
// import Header from '../components/layout/Header';
// import Footer from '../components/layout/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>IronMind.ai - AI-Powered Fitness Coaching</title>
        <meta name="description" content="Empowering amateur bodybuilders with AI-driven coaching, logging, and nutrition tools — right from your phone." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* <Header /> */}
        <Hero />
        <Features />
        {/* <TechStack /> */}
        {/* <Demo /> */}
        {/* <About /> */}
        {/* <Footer /> */}
      </main>
    </>
  );
} 