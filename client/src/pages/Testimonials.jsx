import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "HeartChain helped us save about 8 hours a week on donation tracking. Our donors appreciate being able to see exactly where their money goes.",
      author: "Sarah Chen",
      role: "Executive Director",
      organization: "Global Impact Foundation",
      imageSrc: "https://images.unsplash.com/photo-1494790108755-2616b612b1b4?w=400&h=400&fit=crop&crop=face"
    },
    {
      quote: "The platform is straightforward to use. We've seen a modest increase in recurring donations since we started showing transaction transparency.",
      author: "Marcus Rodriguez",
      role: "Founder",
      organization: "Clean Water Initiative",
      imageSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    },
    {
      quote: "It took some getting used to, but the real-time reporting has been helpful for our quarterly reviews. Donors seem to trust the process more.",
      author: "Dr. Emily Watson",
      role: "Development Director",
      organization: "Education For All",
      imageSrc: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face"
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = React.useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentTestimonial];

  return (
    <section className="min-h-screen bg-[#ea638c] flex items-center justify-center px-6 py-12">
      <div className="max-w-4xl w-full">
        {/* Simple header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-5xl font-medium text-white mb-4">
            What people are saying
          </h2>
          <p className="text-lg text-black">
            Real feedback from organizations using our platform
          </p>
        </div>

        {/* Main testimonial card */}
        <div className="bg-white rounded-lg shadow-sm p-8 md:p-12 mb-8">
          <div className="max-w-3xl mx-auto">
            {/* Quote */}
            <blockquote className="text-xl md:text-2xl leading-relaxed text-gray-800 mb-8 font-normal">
              "{current.quote}"
            </blockquote>
            
            {/* Author info */}
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 mr-4 flex-shrink-0">
                <img 
                  src={current.imageSrc} 
                  alt={current.author}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full bg-gray-300 hidden items-center justify-center text-gray-600 font-medium text-sm">
                  {current.author.split(' ').map(n => n[0]).join('')}
                </div>
              </div>
              
              <div>
                <div className="font-medium text-gray-900">{current.author}</div>
                <div className="text-gray-600 text-sm">{current.role}</div>
                <div className="text-gray-500 text-sm">{current.organization}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Simple navigation */}
        <div className="flex justify-center items-center space-x-4">
          <button 
            onClick={prevTestimonial}
            className="w-10 h-10 rounded-full bg-white bg-opacity-50 hover:bg-opacity-75 transition-all duration-200 flex items-center justify-center"
            aria-label="Previous testimonial"
          >
            <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Simple dots */}
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentTestimonial 
                    ? 'bg-gray-800' 
                    : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button 
            onClick={nextTestimonial}
            className="w-10 h-10 rounded-full bg-white bg-opacity-50 hover:bg-opacity-75 transition-all duration-200 flex items-center justify-center"
            aria-label="Next testimonial"
          >
            <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Subtle footer note */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-700 opacity-75">
            {currentTestimonial + 1} of {testimonials.length}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;