
import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import FeaturedServices from "@/components/home/FeaturedServices";
import AboutSection from "@/components/home/AboutSection";
import Testimonials from "@/components/home/Testimonials";
import ContactCTA from "@/components/home/ContactCTA";

const Index = () => {
  return (
    <Layout>
      <div className="w-full overflow-x-hidden">
        <Hero />
        <div className="reveal-on-scroll w-full" style={{ animationDelay: '0.2s' }}>
          <FeaturedServices />
        </div>
        <div className="reveal-on-scroll w-full" style={{ animationDelay: '0.4s' }}>
          <AboutSection />
        </div>
        <div className="reveal-on-scroll w-full" style={{ animationDelay: '0.6s' }}>
          <Testimonials />
        </div>
        <div className="reveal-on-scroll w-full" style={{ animationDelay: '0.8s' }}>
          <ContactCTA />
        </div>
      </div>
    </Layout>
  );
};

export default Index;
