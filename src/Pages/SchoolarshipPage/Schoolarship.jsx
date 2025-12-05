import React, { useState, useMemo } from 'react';
import useScholarships from '../../hooks/useScholarships';
import ScholarshipCard from '../../components/ScholarshipCard';

export default function Schoolarship() {
  const { scholarships, loading, error } = useScholarships();
  const [searchQuery, setSearchQuery] = useState('');

  // Filter scholarships based on search query
  const filteredScholarships = useMemo(() => {
    if (!searchQuery.trim()) {
      return scholarships;
    }

    const query = searchQuery.toLowerCase();
    return scholarships.filter((scholarship) => {
      return (
        scholarship.university_name?.toLowerCase().includes(query) ||
        scholarship.scholarship_category?.toLowerCase().includes(query) ||
        scholarship.subject_name?.toLowerCase().includes(query) ||
        scholarship.location?.country?.toLowerCase().includes(query) ||
        scholarship.location?.city?.toLowerCase().includes(query) ||
        scholarship.scholarship_description?.toLowerCase().includes(query)
      );
    });
  }, [scholarships, searchQuery]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const clearSearch = () => {
    setSearchQuery('');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600"></div>
          <p className="mt-4 text-xl text-gray-700 font-semibold">
            Loading Scholarships...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center bg-white p-8 rounded-lg shadow-lg">
          <div className="text-red-500 text-5xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Oops! Something went wrong
          </h2>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Available Scholarships
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive collection of scholarship opportunities from
            universities around the world. Find the perfect match for your
            academic journey.
          </p>
        </div>

        {/* Search Box */}
        <div className="max-w-3xl mx-auto mb-8">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg
                className="h-6 w-6 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search by university name, subject, degree, location..."
              className="w-full pl-12 pr-12 py-4 text-lg border-2 border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
            />
            {searchQuery && (
              <button
                onClick={clearSearch}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            )}
          </div>
          {searchQuery && (
            <p className="mt-3 text-sm text-gray-600 text-center">
              {filteredScholarships.length} result(s) found for "{searchQuery}"
            </p>
          )}
        </div>

        {/* Results Count */}
        <div className="mb-8 flex justify-center">
          <div className="inline-block bg-blue-100 px-6 py-3 rounded-full">
            <p className="text-blue-800 font-semibold">
              {searchQuery ? 'Filtered Results' : 'Total Scholarships Available'}:{' '}
              <span className="text-2xl font-bold">{filteredScholarships.length}</span>
            </p>
          </div>
        </div>

        {/* Scholarships Grid */}
        {filteredScholarships.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredScholarships.map((scholarship) => (
              <ScholarshipCard key={scholarship._id} scholarship={scholarship} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-gray-400 text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">
              {searchQuery ? 'No Matching Scholarships Found' : 'No Scholarships Found'}
            </h3>
            <p className="text-gray-500 mb-4">
              {searchQuery
                ? `No scholarships match "${searchQuery}". Try different keywords.`
                : 'Check back later for new scholarship opportunities.'}
            </p>
            {searchQuery && (
              <button
                onClick={clearSearch}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Clear Search
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

