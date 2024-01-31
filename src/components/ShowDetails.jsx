// components/ShowDetails.js
import React from 'react';
import { useRouter } from 'next/router';

const ShowDetails = ({ show }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div className="container mx-auto my-8">Loading...</div>;
  }

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-4xl font-bold mb-4">{show.name}</h1>
      <p className="text-gray-700">{show.summary}</p>
    </div>
  );
};

export default ShowDetails;
