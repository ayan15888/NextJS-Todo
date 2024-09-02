// src/app/page.js

import CustomerCard from '../components/CustomerCard';

const testimonials = [
  {
    quote: "Simple, straightforward, and super powerful",
    logo: "/path/to/the-verge-logo.png" // Replace with actual path to logo
  },
  {
    quote: "Simply a joy to use",
    logo: "/path/to/wirecutter-logo.png" // Replace with actual path to logo
  },
  {
    quote: "The best to-do list app on the market",
    logo: "/path/to/pc-mag-logo.png" // Replace with actual path to logo
  },
  {
    quote: "Nothing short of stellar",
    logo: "/path/to/techradar-logo.png" // Replace with actual path to logo
  }
];

const TestimonialsPage = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {testimonials.map((testimonial, index) => (
        <CustomerCard
          key={index}
          quote={testimonial.quote}
          logo={testimonial.logo}
        />
      ))}
    </div>
  );
};

export default TestimonialsPage;
