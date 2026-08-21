import Navbar from '../components/layout/NavBar';
import Hero from '../components/layout/Hero';
import Extension from '../components/layout/Extension';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      {/* Aici urmeaza Hero Section */}
      <Extension />
    </main>
  );
}
