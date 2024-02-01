import React from 'react';
import { useRouter } from 'next/router';

const ShowDetails = ({ show }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div className="container mx-auto my-8">Loading...</div>;
  }

  return (
    <div className="container mx-auto my-8 text-center">
      <img
        src={show.image?.medium || 'https://placehold.it/210x295'}
        alt={show.name}
        className="w-210 h-295 object-cover mx-auto mb-4 rounded-md"
      />
      <h1 className="text-4xl font-bold mb-4">{show.name}</h1>
      
      {show.language && (
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Languages:</h2>
          <p className="text-gray-700">{show.language}</p>
        </div>
      )}

      {show.genres && (
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Genres:</h2>
          <p className="text-gray-700">{show.genres.join(', ')}</p>
        </div>
      )}

      {show.summary && (
        <div>
          <h2 className="text-xl font-semibold mb-2">Summary:</h2>
          <div
            className="text-gray-700"
            dangerouslySetInnerHTML={{ __html: show.summary }}
          />
        </div>
      )}
    </div>
  );
};

export default ShowDetails;
