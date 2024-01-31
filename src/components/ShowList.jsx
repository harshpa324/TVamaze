// components/ShowList.js
import React from 'react';
import Link from 'next/link';

const ShowList = ({ shows }) => {
  return (
    <div className="container mx-auto my-8">
      <h1 className="text-4xl font-bold mb-4">TV Shows</h1>
      <ul className="list-disc pl-4">
        {shows.map(show => (
          <li key={show.show.id} className="text-blue-500 hover:underline mb-2">
            <Link href={`/show/${show.show.id}`}>
              {show.show.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowList;
