
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import SectionTitle from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { Instagram, MessageSquare, Phone } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });

      setFormData({
        name: "",
        email: "",
        message: ""
      });

      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <Layout>
      <div className="section-container">
        <SectionTitle
          subtitle="Have questions or want to discuss a custom order? Get in touch with us."
          centered
        >
          Contact Us
        </SectionTitle>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Send Us a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-earthyBrown"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-earthyBrown"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-earthyBrown"
                  required
                ></textarea>
              </div>

              <div>
                <Button type="submit" disabled={isSubmitting} className="w-full">
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Get In Touch</h3>

            <p className="text-gray-600 mb-8">
              We'd love to hear from you! Whether you have questions about our services,
              need assistance with an order, or want to discuss a custom project, our team is here to help.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-earthyBeige p-3 rounded-full mr-4">
                  <Phone size={20} className="text-earthyBrown" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Phone</h4>
                  <p className="text-gray-600">+91 9876543210</p>
                  <p className="text-sm text-gray-500">Monday-Friday, 10am-6pm IST</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-earthyBeige p-3 rounded-full mr-4">
                  <MessageSquare size={20} className="text-earthyBrown" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">WhatsApp</h4>
                  <p className="text-gray-600">+91 9876543210</p>
                  <p className="text-sm text-gray-500">Quick responses within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-earthyBeige p-3 rounded-full mr-4">
                  <Instagram size={20} className="text-earthyBrown" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Instagram</h4>
                  <p className="text-gray-600">@chitrankit.art</p>
                  <p className="text-sm text-gray-500">DM us for quick inquiries</p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-gray-50 p-6 rounded-lg border">
              <h4 className="font-medium mb-3">Business Hours</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>10:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span>
                  <span>11:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="mt-16 pt-8 border-t">
          <h3 className="text-2xl font-semibold mb-6 text-center">Frequently Asked Questions</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border rounded-lg p-6">
              <h4 className="font-medium mb-2">How long does it take to complete an artwork?</h4>
              <p className="text-gray-600">
                Depending on complexity, most artworks take 7-14 days to complete. Rush orders are available for an additional fee.
              </p>
            </div>

            <div className="border rounded-lg p-6">
              <h4 className="font-medium mb-2">Do you ship internationally?</h4>
              <p className="text-gray-600">
                Yes, we ship worldwide! International shipping typically takes 7-14 business days.
              </p>
            </div>

            <div className="border rounded-lg p-6">
              <h4 className="font-medium mb-2">What photo quality do you need?</h4>
              <p className="text-gray-600">
                We recommend clear, well-lit photos for the best results. However, our artists can work with various photo qualities.
              </p>
            </div>

            <div className="border rounded-lg p-6">
              <h4 className="font-medium mb-2">Can I request revisions?</h4>
              <p className="text-gray-600">
                Yes, we offer one round of minor revisions to ensure you're completely satisfied with your artwork.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
