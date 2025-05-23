
import Layout from "@/components/layout/Layout";
import SectionTitle from "@/components/ui/SectionTitle";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Priya Shah",
    location: "Mumbai, India",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    rating: 5,
    text: "I ordered a pencil sketch of my parents on their anniversary and it brought tears to their eyes. The attention to detail was remarkable and it truly captured their bond. Thank you, Chitrankit!"
  },
  {
    id: 2,
    name: "Rahul Mehta",
    location: "Mumbai, India",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
    rating: 5,
    text: "Received my portrait and I'm absolutely thrilled with the result! The artist captured my dog's personality perfectly. The quality of the work exceeded my expectations."
  },
  {
    id: 3,
    name: "Anika Patel",
    location: "Kalyan, India",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    rating: 4,
    text: "Beautiful work on our family portrait. The artist was patient with our requests for minor adjustments, and the final piece is now the centerpiece of our living room."
  },
  {
    id: 4,
    name: "Vikram Singh",
    location: "Kalyan, India",
    image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1",
    rating: 5,
    text: "I gifted a portrait to my wife on our anniversary and she absolutely loved it. The team at Chitrankit was professional, prompt, and the artwork was delivered well before the expected date."
  },
  {
    id: 5,
    name: "Neha Sharma",
    location: "Kalyan, India",
    image: "https://images.unsplash.com/photo-1439886183900-e79ec0057170",
    rating: 5,
    text: "This is the second time I've ordered from Chitrankit, and they've outdone themselves again. The colored portrait of my daughter is breathtaking. Will definitely recommend to friends and family!"
  },
  {
    id: 6,
    name: "Arjun Kapoor",
    location: "kalyan, India",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    rating: 4,
    text: "Impressive work on my wedding portrait. The artists have a great eye for detail and managed to capture our happiest moment beautifully. The packaging was also very secure."
  }
];

const Testimonials = () => {
  return (
    <Layout>
      <div className="section-container">
        <SectionTitle 
          subtitle="Don't take our word for it—hear from our satisfied clients about their experience with Chitrankit."
          centered
        >
          Client Testimonials
        </SectionTitle>

        {/* Featured Testimonial
        <div className="bg-earthyBeige p-6 md:p-10 rounded-lg mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="rounded-lg overflow-hidden">
              <img 
                src={testimonials[0].image} 
                alt={testimonials[0].name} 
                className="w-full h-64 object-cover"
              />
            </div>
            <div>
              <div className="flex mb-3">
                {[...Array(testimonials[0].rating)].map((_, i) => (
                  <Star key={i} size={20} fill="#8B7355" stroke="#8B7355" />
                ))}
              </div>
              <p className="text-lg italic mb-5">"{testimonials[0].text}"</p>
              <div>
                <h3 className="font-semibold text-lg">{testimonials[0].name}</h3>
                <p className="text-gray-600">{testimonials[0].location}</p>
              </div>
            </div>
          </div>
        </div> */}

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.slice(1).map((testimonial) => (
            <div key={testimonial.id} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>
              
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="#8B7355" stroke="#8B7355" />
                ))}
              </div>
              
              <p className="text-gray-700 italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>

        {/* Client Ratings Summary */}
        <div className="mt-16 bg-gray-50 p-8 rounded-lg">
          <h3 className="text-xl font-semibold mb-6 text-center">Why Our Clients Love Us</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-earthyBrown mb-2">98%</div>
              <p className="text-gray-600">Customer satisfaction</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-earthyBrown mb-2">4.9</div>
              <p className="text-gray-600">Average rating</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-earthyBrown mb-2">500+</div>
              <p className="text-gray-600">Completed artworks</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-earthyBrown mb-2">95%</div>
              <p className="text-gray-600">Repeat customers</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Testimonials;
