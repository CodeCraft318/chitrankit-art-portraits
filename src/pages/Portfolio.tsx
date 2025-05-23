
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import SectionTitle from "@/components/ui/SectionTitle";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import insta2 from "../assets/Image/insta2.png"
import insta from "../assets/Image/insta.png"
import insta3 from "../assets/Image/insta3.png"
import insta4 from "../assets/Image/insta4.jpg"
import insta5 from "../assets/Image/insta5.jpg"
import insta6 from "../assets/Image/insta6.jpg"
import insta7 from "../assets/Image/insta7.jpg"
import insta8 from "../assets/Image/insta8.jpg"
import insta9 from "../assets/Image/insta9.jpg"
import insta10 from "../assets/Image/insta10.jpg"
import insta11 from "../assets/Image/insta11.jpg"
import insta12 from "../assets/Image/insta12.jpg"
import insta13 from "../assets/Image/insta13.jpg"
import insta14 from "../assets/Image/insta14.jpg"
import insta15 from "../assets/Image/insta15.jpg"

// Mock portfolio data
const portfolioItems = [
  {
    id: 1,
    title: "Lord Hanuman",
    category: "family",
    image: insta10,
    description: "Pencil sketch on premium paper, 11x14 inches"
  },
  {
    id: 2,
    title: "Cinema Theme",
    category: "couple",
    image: insta11,
    description: "Colored portrait, 12x16 inches"
  },
  {
    id: 3,
    title: "Personal Portriat",
    category: "pet",
    image: insta4,
    description: "Pencil sketch on premium paper, 8x10 inches"
  },
  {
    id: 4,
    title: "Family Portriat",
    category: "family",
    image: insta5,
    description: "Pencil sketch on premium paper, 11x14 inches"
  },
  {
    id: 5,
    title: "Birthday Portriat",
    category: "pet",
    image: insta6,
    description: "Pencil sketch on premium paper, 11x14 inches"
  },
  {
    id: 6,
    title: "Custom Lord Portriat",
    category: "couple",
    image: insta,
    description: "Colored portrait, 4x5 feet"
  },
   {
    id: 7,
    title: "Marriage Portrait",
    category: "couple",
    image: insta2,
    description: "Digital art portrait, 12x16 inches"
  },
  {
    id: 8,
    title: "Young Couple",
    category: "couple",
    image: insta3,
    description: "Pencil sketch on premium paper, 14x20 inches"
  },
  {
    id: 9,
    title: "Radha-Krishna Portrait",
    category: "couple",
    image: insta7,
    description: "Pencil sketch on premium paper, 11x14 inches"
  },
  {
    id: 10,
    title: "Chritsmas Theme",
    category: "couple",
    image: insta8,
    description: "Colored portrait, 12x16 inches"
  },
  {
    id: 11,
    title: "Virat Kholi",
    category: "couple",
    image: insta9,
    description: "Pencil sketch on premium pape, 12x16 inches"
  },
   {
    id: 12,
    title: "Lord Shiva",
    category: "couple",
    image: insta12,
    description: "Pencil sketch on premium pape, 12x16 inches"
  },
   {
    id: 13,
    title: "Lord Shree Ram",
    category: "couple",
    image: insta13,
    description: "Pencil sketch on premium pape, 12x16 inches"
  },
   {
    id: 14,
    title: "Lord Vithal",
    category: "couple",
    image: insta14,
    description: "Pencil sketch on premium pape, 12x16 inches"
  },
   {
    id: 15,
    title: "Avenger End Games",
    category: "couple",
    image: insta15,
    description: "DPencil sketch on premium pape, 12x16 inches"
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

        {/* Filter
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
        </div> */}

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