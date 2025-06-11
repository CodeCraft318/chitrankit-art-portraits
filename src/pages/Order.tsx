import { useState } from "react";
import Layout from "@/components/layout/Layout";
import SectionTitle from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { Upload, Check } from "lucide-react";

const serviceOptions = [
  { value: "pencil", label: "Pencil Sketch", price: 49 },
  { value: "colored", label: "Colored Portrait", price: 79 },
  { value: "couple", label: "Couple/Family Portrait", price: 89 },
  { value: "pet", label: "Pet Sketch", price: 59 },
];

const sizeOptions = [
  { value: "a5", label: "A5 (5.8 × 8.3 in)", price: 0 },
  { value: "a4", label: "A4 (8.3 × 11.7 in)", price: 10 },
  { value: "a3", label: "A3 (11.7 × 16.5 in)", price: 20 },
];

const Order = () => {
  const [selectedService, setSelectedService] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Calculate total price
  const getBasePrice = () => {
    const service = serviceOptions.find(
      (option) => option.value === selectedService
    );
    return service ? service.price : 0;
  };

  const getSizePrice = () => {
    const size = sizeOptions.find((option) => option.value === selectedSize);
    return size ? size.price : 0;
  };

  const getTotalPrice = () => {
    return getBasePrice() + getSizePrice();
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setPhotoFile(file);

      const reader = new FileReader();
      reader.onload = () => {
        setPhotoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Order submitted successfully!",
        description: "We'll review your order and contact you soon.",
      });

      // Reset form
      setSelectedService("");
      setSelectedSize("");
      setName("");
      setEmail("");
      setPhone("");
      setAddress("");
      setNotes("");
      setPhotoFile(null);
      setPhotoPreview(null);

      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <Layout>
      <div className="section-container">
        <SectionTitle
          subtitle="Upload your photo and provide details to get your custom artwork."
          centered
        >
          Place Your Order
        </SectionTitle>

        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Step 1: Choose Service & Size */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">
                1. Choose Your Service
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {serviceOptions.map((option) => (
                  <div
                    key={option.value}
                    onClick={() => setSelectedService(option.value)}
                    className={`p-4 border rounded-lg cursor-pointer flex items-center justify-between ${
                      selectedService === option.value
                        ? "border-earthyBrown bg-earthyBeige/30"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    <div>
                      <h4 className="font-medium">{option.label}</h4>
                      <p className="text-sm text-gray-600">₹{option.price}</p>
                    </div>
                    {selectedService === option.value && (
                      <Check className="text-earthyBrown" size={20} />
                    )}
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-semibold mb-4">2. Choose Size</h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {sizeOptions.map((option) => (
                  <div
                    key={option.value}
                    onClick={() => setSelectedSize(option.value)}
                    className={`p-4 border rounded-lg cursor-pointer flex items-center justify-between ${
                      selectedSize === option.value
                        ? "border-earthyBrown bg-earthyBeige/30"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    <div>
                      <h4 className="font-medium">{option.label}</h4>
                      {option.price > 0 && (
                        <p className="text-sm text-gray-600">
                          +₹{option.price}
                        </p>
                      )}
                    </div>
                    {selectedSize === option.value && (
                      <Check className="text-earthyBrown" size={20} />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Step 2: Upload Photo */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">
                3. Upload Your Photo
              </h3>

              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center">
                {photoPreview ? (
                  <div className="w-full text-center">
                    <img
                      src={photoPreview}
                      alt="Photo preview"
                      className="max-h-64 mx-auto mb-4 rounded"
                    />
                    <p className="text-sm text-gray-600 mb-2">
                      {photoFile?.name} (
                      {Math.round((photoFile?.size || 0) / 1024)} KB)
                    </p>
                    <Button
                      type="button"
                      variant="secondary"
                      onClick={() => {
                        setPhotoFile(null);
                        setPhotoPreview(null);
                      }}
                    >
                      Remove photo
                    </Button>
                  </div>
                ) : (
                  <>
                    <Upload size={32} className="text-gray-400 mb-2" />
                    <p className="text-gray-600 mb-2">
                      Click or drag to upload your photo
                    </p>
                    <p className="text-sm text-gray-500 mb-4">
                      JPG, PNG or HEIC. Max 10MB.
                    </p>
                    <Button type="button" variant="secondary">
                      <label htmlFor="photo-upload" className="cursor-pointer">
                        Select File
                        <input
                          type="file"
                          id="photo-upload"
                          accept="image/*"
                          onChange={handlePhotoChange}
                          className="sr-only"
                        />
                      </label>
                    </Button>
                  </>
                )}
              </div>
            </div>

            {/* Step 3: Personal Details */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">4. Your Details</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Full Name*
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-earthyBrown"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address*
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-earthyBrown"
                    required
                  />
                </div>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone Number*
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-earthyBrown"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Shipping Address*
                </label>
                <textarea
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-earthyBrown"
                  required
                ></textarea>
              </div>

              <div>
                <label
                  htmlFor="notes"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Special Instructions (Optional)
                </label>
                <textarea
                  id="notes"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-earthyBrown"
                ></textarea>
              </div>
            </div>

            {/* Order Summary */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Order Summary</h3>

              <div className="space-y-3 mb-6">
                {selectedService && (
                  <div className="flex justify-between">
                    <span>Service:</span>
                    <span>
                      {
                        serviceOptions.find(
                          (option) => option.value === selectedService
                        )?.label
                      }{" "}
                      - ${getBasePrice()}
                    </span>
                  </div>
                )}

                {selectedSize && (
                  <div className="flex justify-between">
                    <span>Size:</span>
                    <span>
                      {
                        sizeOptions.find(
                          (option) => option.value === selectedSize
                        )?.label
                      }
                      {getSizePrice() > 0 && ` - ₹${getSizePrice()}`}
                    </span>
                  </div>
                )}

                <div className="pt-3 border-t font-semibold flex justify-between">
                  <span>Total:</span>
                  <span>₹{getTotalPrice()}</span>
                </div>
              </div>

              <div className="text-sm text-gray-500 mb-6">
                <p>* Payment will be collected after order confirmation</p>
                <p>
                  * Shipping costs will be calculated based on your location
                </p>
              </div>

              <Button
                type="submit"
                disabled={
                  isSubmitting ||
                  !selectedService ||
                  !selectedSize ||
                  !photoFile ||
                  !name ||
                  !email ||
                  !phone ||
                  !address
                }
                className="w-full"
              >
                {isSubmitting ? "Submitting..." : "Submit Order Request"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Order;
