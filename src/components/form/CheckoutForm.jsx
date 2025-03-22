"use client";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

// CheckoutForm component
const CheckoutForm = ({ service }) => {
  // Access session information
  const session = useSession();
  const { data } = session;
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    email: "",
    dueAmount: "",
    phone: "",
    address: "",
  });
  // Set initial values from session data when it's available
  useEffect(() => {
    if (data?.user) {
      setFormData((prevState) => ({
        ...prevState,
        name: data.user.name || "",
        email: data.user.email || "",
        dueAmount: service.price || "",
      }));
    }
  }, [data]);

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      // Spread the previous state and update the current input value
      ...prevState,
      [name]: value,
    }));
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Display a loading toast to the user
    toast.loading("Placing order...");

    // Create a payload object from the form data
    const payload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      date: formData.date,
      dueAmount: formData.dueAmount,
      serviceTitle: service.title,
      serviceId: service._id,
      serviceImage: service.img,
    };

    try {
      // Make a POST request to the /api/services API endpoint
      const res = await fetch("https://car-dotcor-nextjs.vercel.app/api/services", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const response = await res.json();
      console.log(response);

      // If the response is OK, show a success toast to the user
      if (response.insertedId) {
          toast.dismiss();
        toast.success("Order placed successfully");
        // Reset the form fields
        setFormData({
         
          date: "",
          phone: "",
          address: "",
          name: data.user.name || "",
          email: data.user.email || "",
          dueAmount: service.price || "",

        });
      
       
      }
    } catch (error) {
      console.error("Error during form submission:", error);
      // Show an error toast to the user if there's an error
      toast.dismiss();
      toast.error("Order failed. Please try again.");
      // Dismiss the loading toast
    }
  };

  return (
    <div className="max-w-4xl w-full mx-auto p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Checkout Details
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name Field */}
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              readOnly
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff3811] focus:border-transparent"
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              readOnly
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff3811] focus:border-transparent"
              required
            />
          </div>

          {/* Due Amount Field */}
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Due Amount
            </label>
            <input
              type="number"
              name="dueAmount"
              value={formData.dueAmount}
              readOnly
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff3811] focus:border-transparent"
              required
            />
          </div>
          {/* Date Field */}
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Date
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff3811] focus:border-transparent"
              required
            />
          </div>
          {/* Phone Field */}
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff3811] focus:border-transparent"
              required
            />
          </div>
        </div>

        {/* Address Field - Full Width */}
        <div>
          <label className="block text-gray-700 text-sm font-semibold mb-2">
            Present Address
          </label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            rows="3"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff3811] focus:border-transparent"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#ff3811] text-white py-3 rounded-lg font-semibold hover:bg-[#dd3010] transition-colors duration-300"
        >
          Confirm Order
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
