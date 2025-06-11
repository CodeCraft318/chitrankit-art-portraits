import Layout from "@/components/layout/Layout";
import SectionTitle from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import homeImage from "../assets/Image/homeImg.jpeg";

import instaimg2 from "../assets/Image/insta2.png";
import instaimg3 from "../assets/Image/insta3.png";
import instaimg4 from "../assets/Image/insta4.jpg";
import { Link } from "react-router-dom";

const Index = () => {
  // const getImageByItem = (item: number) => {
  //   if (item === 1) return insta2;
  //   if (item === 2) return insta3;
  //   return insta4;
  // };

  // // JSX
  // <img
  //   src={getImageByItem(item)}
  //   alt="Instagram preview"
  //   className="rounded-lg shadow-lg object-cover w-full h-[400px]"
  // />

  return (
    <Layout>
      <section className="relative bg-gray-50 py-16 md:py-24">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 leading-tight">
                Turn Your Photos Into Timeless Art
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-lg">
                Chitrankit brings your cherished moments to life with custom,
                hand-drawn sketches crafted with passion and precision.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link to="/portfolio">View Portfolio</Link>
                </Button>

                {/* <Button asChild variant="secondary" size="lg">
                  <Link to="/order">Order Now</Link>
                </Button> */}
              </div>
            </div>
            <div className="relative animate-fade-in-up">
              <img
                src={homeImage}
                alt="Sample artwork"
                className="rounded-lg shadow-lg object-cover w-full h-[400px]"
              />

              {/* <div className="absolute -bottom-5 -left-5 bg-white p-3 rounded shadow-md hidden md:block">
                <p className="text-sm font-medium">Handcrafted with ❤️</p>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 md:py-24">
        <div className="section-container">
          <SectionTitle
            subtitle="Why choose a custom sketch from Chitrankit? Because each stroke tells a story that's uniquely yours."
            centered
          >
            The Value of Custom Art
          </SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="p-6 border rounded-lg hover:shadow-md transition-shadow text-center">
              <div className="w-16 h-16 bg-earthyBeige rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Personalized Touch</h3>
              <p className="text-gray-600">
                Each artwork is carefully crafted based on your unique photos
                and preferences.
              </p>
            </div>

            <div className="p-6 border rounded-lg hover:shadow-md transition-shadow text-center">
              <div className="w-16 h-16 bg-earthyBeige rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎁</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Perfect Gift</h3>
              <p className="text-gray-600">
                Create meaningful gifts that capture special moments and
                emotions forever.
              </p>
            </div>

            <div className="p-6 border rounded-lg hover:shadow-md transition-shadow text-center">
              <div className="w-16 h-16 bg-earthyBeige rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏡</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Timeless Decor</h3>
              <p className="text-gray-600">
                Add a touch of elegance and personality to any space with our
                hand-drawn art.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Works */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="section-container">
          <SectionTitle centered>Featured Works</SectionTitle>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="overflow-hidden rounded-lg shadow-md group"
              >
                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={
                      item === 1
                        ? instaimg2
                        : item === 2
                        ? instaimg3
                        : instaimg4
                    }
                    alt="Instagram preview"
                    className="rounded-lg shadow-lg object-cover w-full h-[400px]"
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
            <Button variant="secondary">
              <Link to="/portfolio">View All Works</Link>

              <ArrowRight size={16} className="ml-1" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="section-container">
          <div className="bg-earthyBeige p-8 md:p-12 rounded-lg text-center">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Ready to Transform Your Photos?
            </h2>
            <p className="text-lg mb-8 max-w-xl mx-auto">
              Order your custom sketch today and receive a handcrafted piece of
              art that tells your unique story.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
