import Navbar from '../components/layout/NavBar';
import Hero from '../components/layout/Hero';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      {/* Aici urmeaza Hero Section */}
    </main>
  );
}
