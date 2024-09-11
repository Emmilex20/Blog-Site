import React from 'react';
import Hero from '../../../public/Hero.jpg'
const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className='flex items-center justify-center w-full'>
        <img 
          src={Hero} 
          alt="Hero" 
          className='w-full max-h-80 object-cover' 
        />
      </div>
      <div className="text-center mt-8">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg mb-4">
          <strong>Welcome to Stateside Scoop: Your Global News Hub</strong>
        </p>
        <p className="text-base mb-6">
          At Stateside Scoop, our mission is to provide you with timely, accurate, and engaging news from around the world. We are dedicated to delivering the most relevant updates across a wide range of topics, including politics, entertainment, technology, and lifestyle.
        </p>

        <h2 className="text-3xl font-semibold mb-4">What We Offer</h2>
        <div className="flex flex-wrap justify-center gap-8 mb-6">
          <div className="flex-1 min-w-[200px]">
            <strong>Breaking News:</strong>
            <p>Stay up-to-date with the latest headlines and major events from around the globe. Our real-time coverage ensures that you are always informed about what’s happening right now.</p>
          </div>
          <div className="flex-1 min-w-[200px]">
            <strong>Trending Stories:</strong>
            <p>Explore the stories that are making waves. From viral trends to critical issues, we bring you the content that captures the public's attention.</p>
          </div>
          <div className="flex-1 min-w-[200px]">
            <strong>In-Depth Analysis:</strong>
            <p>Our expert analysis provides context and insight into the news, helping you understand the implications and underlying factors of current events.</p>
          </div>
        </div>

        <h2 className="text-3xl font-semibold mb-4">Why Choose Us?</h2>
        <div className="flex flex-wrap justify-center gap-8 mb-6">
          <div className="flex-1 min-w-[200px]">
            <strong>24/7 Coverage:</strong>
            <p>We are here to keep you informed around the clock. Our dedicated team works tirelessly to bring you news as it happens.</p>
          </div>
          <div className="flex-1 min-w-[200px]">
            <strong>Diverse Perspectives:</strong>
            <p>We offer a range of viewpoints and insights to give you a well-rounded understanding of the stories that matter.</p>
          </div>
          <div className="flex-1 min-w-[200px]">
            <strong>User-Friendly Experience:</strong>
            <p>Our site is designed with you in mind. With easy navigation and a clean, modern interface, you can quickly find the information you're looking for.</p>
          </div>
        </div>

        <h2 className="text-3xl font-semibold mb-4">Join Us on Our Journey</h2>
        <p className="text-base mb-6">
          We invite you to be part of our community. Engage with us through our articles, follow us on social media, and share your thoughts. Your feedback helps us grow and improve as we strive to deliver the best news experience possible.
        </p>

        <p className="text-base">
          Thank you for visiting Stateside Scoop. We look forward to keeping you informed and engaged!
        </p>
      </div>
    </div>
  );
};

export default About;
