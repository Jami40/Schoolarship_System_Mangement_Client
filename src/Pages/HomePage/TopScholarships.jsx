import React from 'react';
import { Link } from 'react-router-dom';

export default function TopScholarships() {
  const scholarships = [
    {
      id: 1,
      title: 'Merit-Based Excellence Award',
      amount: '$5,000',
      deadline: 'March 15, 2026',
      category: 'Academic',
      description: 'For students with outstanding academic achievements and GPA above 3.5.',
    },
    {
      id: 2,
      title: 'STEM Innovation Scholarship',
      amount: '$7,500',
      deadline: 'April 30, 2026',
      category: 'STEM',
      description: 'Supporting future innovators in Science, Technology, Engineering, and Math.',
    },
    {
      id: 3,
      title: 'Community Leadership Grant',
      amount: '$4,000',
      deadline: 'February 28, 2026',
      category: 'Leadership',
      description: 'Recognizing students who demonstrate exceptional community service.',
    },
    {
      id: 4,
      title: 'Arts and Creativity Scholarship',
      amount: '$3,500',
      deadline: 'May 20, 2026',
      category: 'Arts',
      description: 'For talented students pursuing careers in arts and creative fields.',
    },
    {
      id: 5,
      title: 'First Generation College Grant',
      amount: '$6,000',
      deadline: 'March 31, 2026',
      category: 'Need-Based',
      description: 'Supporting first-generation college students in achieving their dreams.',
    },
    {
      id: 6,
      title: 'Athletic Excellence Award',
      amount: '$4,500',
      deadline: 'April 15, 2026',
      category: 'Sports',
      description: 'For student-athletes who excel both in sports and academics.',
    },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Top Scholarships
          </h2>
          <p className="text-lg text-gray-600">
            Explore our featured scholarship opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {scholarships.map((scholarship) => (
            <div
              key={scholarship.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="inline-block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-semibold">
                  {scholarship.category}
                </span>
                <span className="text-2xl font-bold text-blue-600">
                  {scholarship.amount}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {scholarship.title}
              </h3>
              
              <p className="text-gray-600 mb-4 line-clamp-2">
                {scholarship.description}
              </p>
              
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                Deadline: {scholarship.deadline}
              </div>
              
              <Link
                to={`/scholarships/${scholarship.id}`}
                className="block w-full text-center bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors duration-200 font-medium"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/scholarships"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
          >
            View All Scholarships
          </Link>
        </div>
      </div>
    </div>
  );
}
