import Layout from "@/components/layout/Layout";
import SectionTitle from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/button";
import insta6 from "../assets/Image/insta6.jpg"
import insta from "../assets/Image/insta.png"
import insta5 from "../assets/Image/insta5.jpg"
import insta2 from "../assets/Image/insta2.png"
import insta20 from "../assets/Image/insta20.png"
import insta21 from "../assets/Image/insta21.jpeg"


const Services = () => {
  const services = [
    {
      id: 1,
      title: "Pencil Sketch",
      description: "Classic black and white pencil sketches that capture the essence of your photos with stunning detail and shading.",
      features: ["High-quality drawing paper", "Multiple size options", "Framing available", "Digital copy included"],
      price: "Starting at ₹800+",
      image: insta6,
      deliveryTime: "7-10 days"
    },
    {
      id: 2,
      title: "Colored Portraits",
      description: "Vibrant colored portraits that bring your photos to life with rich hues and artistic flair.",
      features: ["Premium art paper", "Vibrant color application", "Multiple size options", "Framing available", "Digital copy included"],
      price: "Starting at	₹1000+",
      image: insta,
      deliveryTime: "10-14 days"
    },
    {
      id: 3,
      title: "Family Portraits",
      description: "Capture the bond between loved ones with our custom couple and family sketches.",
      features: ["Up to 4 people included", "Additional subjects at extra cost", "Various composition options", "Framing available"],
      price: "Starting at ₹1200+",
      image: insta5,
      deliveryTime: "12-15 days"
    },
    {
      id: 4,
      title: "Couples Sketches",
      description: "Immortalize your furry friends with charming pet portraits that capture their unique personality.",
      features: ["Detailed fur texture", "Character expression emphasis", "Various sizes available", "Perfect gift for pet lovers"],
      price: "Starting at ₹1000+",
      image: insta2,
      deliveryTime: "7-10 days"
    },
     {
      id: 5,
      title: "Lord Shree Ram Mandir Model",
      description: "HandMade Ram Mandir For decoration and Home Available Custom Size.",
      features: ["Custom Size", "Eco-friendly Material use", "Strong and Durable"],
      price: "Starting at ₹2000+",
      image: insta20,
      deliveryTime: "12-15 days"
    },
     {
      id: 6,
      title: "All Types Of Rangoli Potriat",
      description: "Custome Rongoli Available Any Potrait Rongli for Festival And Function will be Created on Place.",
      features: ["Premium Rangoli", "Vibrant color application", "Multiple size options"],
      price: "Starting at	₹1500+ with material",
      image: insta21,
      deliveryTime: "1 days"
    },
    
  ];

  return (
    <Layout>
      <div className="section-container">
        <SectionTitle
          subtitle="Transform your photos into beautiful artwork with our range of custom sketching services."
          centered
        >
          Our Services
        </SectionTitle>

        <div className="space-y-16">
          {services.map((service) => (
            <div key={service.id} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className={`order-1 ${service.id % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-100 object-cover"
                  />
                </div>
              </div>

              <div className={`order-2 ${service.id % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                <h3 className="text-2xl font-semibold mb-3 font-playfair">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>

                <div className="bg-gray-50 p-5 rounded-lg mb-5">
                  <h4 className="font-medium mb-3">Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <span className="mr-2 text-earthyBrown">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <div className="mb-4 sm:mb-0">
                    <p className="text-lg font-semibold text-earthyBrown">{service.price}</p>
                    <p className="text-sm text-gray-500">Delivery time: {service.deliveryTime}</p>
                  </div>
                  <Button href="/order">Order Now</Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Delivery Information */}
        <div className="mt-16 pt-8 border-t">
          <h3 className="text-2xl font-semibold mb-6">Delivery Information</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-medium mb-3">Shipping Details</h4>
              <p className="text-gray-600 mb-3">
                We ship worldwide using reliable courier services to ensure your artwork arrives safely.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2 text-earthyBrown font-bold">•</span>
                  <span>Domestic shipping (within India): 3-5 business days</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-earthyBrown font-bold">•</span>
                  <span>International shipping: 7-14 business days</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-earthyBrown font-bold">•</span>
                  <span>Tracking information provided via email</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-earthyBrown font-bold">•</span>
                  <span>Special packaging to protect your artwork</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-medium mb-3">Additional Options</h4>
              <p className="text-gray-600 mb-3">
                Customize your order with these additional options:
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex justify-between items-center">
                  <span>Black framing</span>
                  <span className="font-medium">+₹150</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Size upgrade (A3)</span>
                  <span className="font-medium">+₹100</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Express creation (4-5 days)</span>
                  <span className="font-medium">+₹200</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Express shipping (2-3 days)</span>
                  <span className="font-medium">+₹150</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Additional subjects in portrait</span>
                  <span className="font-medium">+₹180 each</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 bg-earthyBeige p-8 rounded-lg text-center">
          <h3 className="text-2xl font-semibold mb-3">Ready to Order Your Custom Artwork?</h3>
          <p className="text-lg mb-6 max-w-xl mx-auto">
            Transform your precious photos into timeless art that you'll cherish forever.
          </p>
          <Button href="/order" size="lg">
            Place Your Order
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default Services;
