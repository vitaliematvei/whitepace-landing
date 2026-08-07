import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProjectManagementSection from '@/components/ProjectManagementSection';
import CustomizeSection from '@/components/CustomizeSection';
import WorkToghetherSection from '@/components/WorkToghetherSection';
import Pricing from '@/components/Pricing';
import YourWorkSection from '@/components/YourWorkSection';
import YourDataSection from '@/components/YourDataSection';
import SponsorsSection from '@/components/SponsorsSection';

import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <main>
        <Navbar />
        <Hero />
        <ProjectManagementSection />
        <WorkToghetherSection />
        <CustomizeSection />
        <Pricing />
        <YourWorkSection />
        <YourDataSection />
        <SponsorsSection />
      </main>
    </div>
  );
}
