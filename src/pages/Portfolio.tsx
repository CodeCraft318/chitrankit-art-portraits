
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import SectionTitle from "@/components/ui/SectionTitle";
import { Dialog, DialogContent } from "@/components/ui/dialog";

// Mock portfolio data
const portfolioItems = [
  {
    id: 1,
    title: "Father and Daughter",
    category: "family",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    description: "Pencil sketch on premium paper, 11x14 inches"
  },
  {
    id: 2,
    title: "Wedding Portrait",
    category: "couple",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
    description: "Colored portrait, 12x16 inches"
  },
  {
    id: 3,
    title: "Tabby Cat",
    category: "pet",
    image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1",
    description: "Pencil sketch on premium paper, 8x10 inches"
  },
  {
    id: 4,
    title: "Mother and Child",
    category: "family",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    description: "Pencil sketch on premium paper, 11x14 inches"
  },
  {
    id: 5,
    title: "Deers in Forest",
    category: "pet",
    image: "https://images.unsplash.com/photo-1439886183900-e79ec0057170",
    description: "Colored portrait, 12x16 inches"
  },
  {
    id: 6,
    title: "Young Couple",
    category: "couple",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    description: "Digital art portrait, 12x16 inches"
  }
];

const Portfolio = () => {
  const [filter, setFilter] = useState<string>("all");
  const [selectedImage, setSelectedImage] = useState<typeof portfolioItems[0] | null>(null);

  const filteredItems = filter === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  return (
    <Layout>
      <div className="section-container">
        <SectionTitle 
          subtitle="Browse through our collection of custom artwork created for clients around the world."
          centered
        >
          Our Portfolio
        </SectionTitle>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <button
            className={`px-4 py-2 rounded-full text-sm ${
              filter === "all" 
                ? "bg-earthyBrown text-white" 
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button
            className={`px-4 py-2 rounded-full text-sm ${
              filter === "single" 
                ? "bg-earthyBrown text-white" 
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            onClick={() => setFilter("single")}
          >
            Single
          </button>
          <button
            className={`px-4 py-2 rounded-full text-sm ${
              filter === "couple" 
                ? "bg-earthyBrown text-white" 
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            onClick={() => setFilter("couple")}
          >
            Couple
          </button>
          <button
            className={`px-4 py-2 rounded-full text-sm ${
              filter === "family" 
                ? "bg-earthyBrown text-white" 
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            onClick={() => setFilter("family")}
          >
            Family
          </button>
          <button
            className={`px-4 py-2 rounded-full text-sm ${
              filter === "pet" 
                ? "bg-earthyBrown text-white" 
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            onClick={() => setFilter("pet")}
          >
            Pet
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredItems.map((item) => (
            <div key={item.id} className="group cursor-pointer" onClick={() => setSelectedImage(item)}>
              <div className="overflow-hidden rounded-lg shadow-md">
                <div className="relative aspect-square">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity"></div>
                </div>
                <div className="p-4 bg-white">
                  <h3 className="font-medium text-lg">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">No artwork found for this category.</p>
          </div>
        )}

        {/* Image Modal */}
        <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
          <DialogContent className="max-w-2xl">
            {selectedImage && (
              <div>
                <img 
                  src={selectedImage.image} 
                  alt={selectedImage.title} 
                  className="w-full h-auto rounded-lg"
                />
                <div className="mt-4">
                  <h3 className="text-xl font-semibold">{selectedImage.title}</h3>
                  <p className="text-gray-600">{selectedImage.description}</p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </Layout>
  );
};

export default Portfolio;
