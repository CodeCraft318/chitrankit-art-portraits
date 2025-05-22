
import Layout from "@/components/layout/Layout";
import SectionTitle from "@/components/ui/SectionTitle";
import omkar from "../assets/Image/omkar.png";
import insta2 from "../assets/Image/insta2.png"
import insta4 from "../assets/Image/insta4.jpg"
import insta6 from "../assets/Image/insta6.jpg"
import insta10 from "../assets/Image/insta10.jpg"

const About = () => {
  return (
    <Layout>
      <div className="section-container">
        <SectionTitle centered>
          About Chitrankit
        </SectionTitle>

        {/* About Banner */}
        <div className="relative h-64 md:h-96 rounded-lg overflow-hidden mb-12">
          <img 
            src="https://images.unsplash.com/photo-1721322800607-8c38375eef04" 
            alt="Art studio" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <h1 className="text-white text-3xl md:text-4xl font-bold">Our Story</h1>
          </div>
        </div>

        {/* The Artists */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-8">Meet the Artists</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-full md:w-40 h-40 rounded-full overflow-hidden flex-shrink-0 mb-4">
                <img 
                  src={omkar} 
                  alt="Omkar Kalvitkar" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Omkar Kalvitkar</h3>
                <p className="text-gray-600 mb-4">
                  With over 10 years of experience in portrait sketching, Omkar brings a unique perspective to each artwork. His passion for capturing emotions and expressions began in his childhood and evolved into a lifelong pursuit of artistic excellence.
                </p>
                <p className="text-gray-600">
                  Omkar specializes in pencil sketches that bring out the soul of the subject, focusing on the intricate details that make each person unique.
                </p>
              </div>
            </div>

            
          </div>
        </div>

        {/* Mission and Inspiration */}
        <div className="mb-16 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Our Mission & Inspiration</h2>
          
          <p className="text-gray-600 mb-6 leading-relaxed">
            At Chitrankit, we believe that art is more than just visual appeal—it's about capturing moments, emotions, and connections. Our mission is to transform your cherished photos into timeless pieces of art that you can treasure forever.
          </p>
          
          <p className="text-gray-600 mb-6 leading-relaxed">
            We draw inspiration from the beauty of human connections, the joy of pets in our lives, and the special moments that define our journeys. Each sketch is a testament to these precious moments.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-earthyBeige flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">💫</span>
              </div>
              <h4 className="font-medium mb-2">Authenticity</h4>
              <p className="text-sm text-gray-600">Creating art that truly represents your memories</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-earthyBeige flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">❤️</span>
              </div>
              <h4 className="font-medium mb-2">Passion</h4>
              <p className="text-sm text-gray-600">Pouring our heart into every stroke</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-earthyBeige flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">✨</span>
              </div>
              <h4 className="font-medium mb-2">Excellence</h4>
              <p className="text-sm text-gray-600">Committing to quality in every detail</p>
            </div>
          </div>
        </div>

        {/* Art Style and Process */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Our Art Style & Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Our artistic style blends classical realism with a touch of contemporary expression. We focus on capturing not just the physical likeness but also the essence and character of our subjects.
              </p>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Whether it's the playful glint in a child's eye, the bond between a couple, or the unique personality of a beloved pet, we strive to bring these elements to life in our sketches.
              </p>
              
              <h3 className="text-xl font-medium mb-3">Our Process:</h3>
              
              <ol className="space-y-4">
                <li className="flex gap-3">
                  <span className="bg-earthyBrown text-white w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0">1</span>
                  <div>
                    <h4 className="font-medium">Photo Submission</h4>
                    <p className="text-sm text-gray-600">You share your favorite photos with us</p>
                  </div>
                </li>
                
                <li className="flex gap-3">
                  <span className="bg-earthyBrown text-white w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0">2</span>
                  <div>
                    <h4 className="font-medium">Consultation</h4>
                    <p className="text-sm text-gray-600">We discuss your preferences and artistic direction</p>
                  </div>
                </li>
                
                <li className="flex gap-3">
                  <span className="bg-earthyBrown text-white w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0">3</span>
                  <div>
                    <h4 className="font-medium">Initial Sketch</h4>
                    <p className="text-sm text-gray-600">We create a preliminary outline for your approval</p>
                  </div>
                </li>
                
                <li className="flex gap-3">
                  <span className="bg-earthyBrown text-white w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0">4</span>
                  <div>
                    <h4 className="font-medium">Final Artwork</h4>
                    <p className="text-sm text-gray-600">We perfect every detail of your custom sketch</p>
                  </div>
                </li>
                
                <li className="flex gap-3">
                  <span className="bg-earthyBrown text-white w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0">5</span>
                  <div>
                    <h4 className="font-medium">Delivery</h4>
                    <p className="text-sm text-gray-600">Your artwork is carefully packaged and delivered to you</p>
                  </div>
                </li>
              </ol>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img src={insta4} alt="Art process" className="rounded-lg shadow-md w-full h-80 object-cover" />
              <img src= {insta10} alt="Art process" className="rounded-lg shadow-md w-full h-80 object-cover" />
              <img src={insta6} alt="Art process" className="rounded-lg shadow-md w-full h-80 object-cover" />
              <img src={insta2} alt="Art process" className="rounded-lg shadow-md w-full h-80 object-cover" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;