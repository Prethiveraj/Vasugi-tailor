
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

// Tab interface
interface GalleryTab {
  id: string;
  label: string;
}

// Image interface
interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
  title: string;
}

// Gallery tabs
const tabs: GalleryTab[] = [
  { id: "all", label: "All" },
  { id: "custom", label: "Custom Clothing" },
  { id: "wedding", label: "Wedding" },
  { id: "ethnic", label: "Ethnic Wear" },
  { id: "alterations", label: "Alterations" }
];

// Gallery images - Replace with your actual images
const images: GalleryImage[] = [
  { 
    id: 1, 
    src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80", 
    alt: "Custom suit", 
    category: "custom",
    title: "Custom Tailored Suit" 
  },
  { 
    id: 2, 
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80", 
    alt: "Wedding dress", 
    category: "wedding",
    title: "Wedding Gown" 
  },
  { 
    id: 3, 
    src: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80", 
    alt: "Ethnic saree", 
    category: "ethnic",
    title: "Traditional Saree" 
  },
  { 
    id: 4, 
    src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80", 
    alt: "Altered pants", 
    category: "alterations",
    title: "Perfect Fit Alterations" 
  },
  { 
    id: 5, 
    src: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80", 
    alt: "Custom shirt", 
    category: "custom",
    title: "Custom Formal Shirt" 
  },
  { 
    id: 6, 
    src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80", 
    alt: "Wedding suit", 
    category: "wedding",
    title: "Groom's Wedding Suit" 
  },
  { 
    id: 7, 
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80", 
    alt: "Ethnic kurta", 
    category: "ethnic",
    title: "Designer Kurta" 
  },
  { 
    id: 8, 
    src: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80", 
    alt: "Dress alteration", 
    category: "alterations",
    title: "Evening Dress Alterations" 
  }
];

const Gallery = () => {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);
  
  // Filter images based on active tab
  const filteredImages = activeTab === "all" 
    ? images 
    : images.filter(image => image.category === activeTab);
  
  // Open lightbox
  const openLightbox = (image: GalleryImage) => {
    setLightboxImage(image);
    // Prevent scrolling when lightbox is open
    document.body.style.overflow = "hidden";
  };
  
  // Close lightbox
  const closeLightbox = () => {
    setLightboxImage(null);
    // Re-enable scrolling
    document.body.style.overflow = "auto";
  };

  return (
    <Layout>
      {/* Gallery Header */}
      <div className="bg-[#EC7FA9] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-exo text-[#FFEDFA] italic text-4xl md:text-5xl font-bold mb-4">Our Gallery</h1>
          <p className="font-exo text-lg text-white max-w-3xl mx-auto">
            Browse through our portfolio of custom tailoring, alterations, and design work.
          </p>
        </div>
      </div>
      
      {/* Gallery Content */}
      <div className="py-16 bg-tailor-light">
        <div className="container mx-auto px-4">
          {/* Gallery Tabs */}
          <div className="flex flex-wrap justify-center mb-12 gap-2">
            {tabs.map(tab => (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? "default" : "outline"}
                className={
                  activeTab === tab.id 
                    ? "bg-tailor-maroon hover:bg-tailor-dark text-white"
                    : "border-tailor-maroon text-tailor-dark hover:bg-tailor-maroon hover:text-white"
                }
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </Button>
            ))}
          </div>
          
          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredImages.map(image => (
              <div 
                key={image.id} 
                className="relative overflow-hidden rounded-lg shadow-md cursor-pointer transition-transform hover:scale-105"
                onClick={() => openLightbox(image)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity flex items-end">
                  <div className="p-4 w-full">
                    <h3 className="font-playfair text-lg font-bold text-white">{image.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Empty State */}
          {filteredImages.length === 0 && (
            <div className="text-center py-16">
              <p className="font-poppins text-gray-600">No images available in this category.</p>
            </div>
          )}
        </div>
      </div>
      
      {/* Lightbox */}
      {lightboxImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-white hover:bg-white/20 z-10"
              onClick={closeLightbox}
            >
              <X size={24} />
            </Button>
            
            <img 
              src={lightboxImage.src} 
              alt={lightboxImage.alt}
              className="w-full max-h-[80vh] object-contain"
            />
            
            <div className="mt-4 text-white">
              <h3 className="font-playfair text-xl font-bold">{lightboxImage.title}</h3>
            </div>
          </div>
        </div>
      )}
      
      {/* CTA Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair text-3xl font-bold text-tailor-dark mb-4">Ready for Your Custom Creation?</h2>
          <p className="font-poppins text-gray-600 max-w-2xl mx-auto mb-8">
            Contact us to discuss your requirements and bring your vision to life.
          </p>
          <Button className="bg-tailor-maroon hover:bg-tailor-dark text-white px-8 py-6 text-lg">
            Get Started
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default Gallery;
