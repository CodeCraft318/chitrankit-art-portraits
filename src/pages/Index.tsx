
import Layout from "@/components/layout/Layout";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gray-50 py-16 md:py-24">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 leading-tight">
                Turn Your Photos Into Timeless Art
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-lg">
                Chitrankit brings your cherished moments to life with custom, hand-drawn sketches crafted with passion and precision.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/portfolio" size="lg">
                  View Portfolio
                </Button>
                <Button href="/order" variant="secondary" size="lg">
                  Order Now
                </Button>
              </div>
            </div>
            <div className="relative animate-fade-in-up">
              <img
                src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9"
                alt="Sample artwork"
                className="rounded-lg shadow-lg object-cover w-full h-[400px]"
              />
              <div className="absolute -bottom-5 -left-5 bg-white p-3 rounded shadow-md hidden md:block">
                <p className="text-sm font-medium">Handcrafted with ❤️</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 md:py-24">
        <div className="section-container">
          <SectionTitle subtitle="Why choose a custom sketch from Chitrankit? Because each stroke tells a story that's uniquely yours." centered>
            The Value of Custom Art
          </SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="p-6 border rounded-lg hover:shadow-md transition-shadow text-center">
              <div className="w-16 h-16 bg-earthyBeige rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Personalized Touch</h3>
              <p className="text-gray-600">
                Each artwork is carefully crafted based on your unique photos and preferences.
              </p>
            </div>

            <div className="p-6 border rounded-lg hover:shadow-md transition-shadow text-center">
              <div className="w-16 h-16 bg-earthyBeige rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎁</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Perfect Gift</h3>
              <p className="text-gray-600">
                Create meaningful gifts that capture special moments and emotions forever.
              </p>
            </div>

            <div className="p-6 border rounded-lg hover:shadow-md transition-shadow text-center">
              <div className="w-16 h-16 bg-earthyBeige rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏡</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Timeless Decor</h3>
              <p className="text-gray-600">
                Add a touch of elegance and personality to any space with our hand-drawn art.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Works */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="section-container">
          <SectionTitle centered>
            Featured Works
          </SectionTitle>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="overflow-hidden rounded-lg shadow-md group">
                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={`https://images.unsplash.com/photo-${item === 1 ? "1618160702438-9b02ab6515c9" : item === 2 ? "1535268647677-300dbf3d78d1" : "1439886183900-e79ec0057170"}`}
                    alt={`Featured artwork ${item}`}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 bg-white">
                  <h4 className="text-lg font-semibold">Artwork Title</h4>
                  <p className="text-sm text-gray-600">Pencil on paper</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button href="/portfolio" variant="secondary">
              View All Works <ArrowRight size={16} className="ml-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="section-container">
          <div className="bg-earthyBeige p-8 md:p-12 rounded-lg text-center">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Ready to Transform Your Photos?</h2>
            <p className="text-lg mb-8 max-w-xl mx-auto">
              Order your custom sketch today and receive a handcrafted piece of art that tells your unique story.
            </p>
            <Button href="/order" size="lg">
              Get Started
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
