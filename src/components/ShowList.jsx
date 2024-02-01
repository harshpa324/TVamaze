import Link from 'next/link';

const ShowList = ({ shows }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      
      {shows.map((show) => (
        <div key={show.show.id} className="bg-white p-4 shadow-md rounded-md">
          <Link href={`/show/${show.show.id}`} 
             className="text-blue-500">
          <div className=" grid grid-cols-2 gap-3 ">
            <img
            src={show.show.image?.medium || 'https://placehold.it/210x295'}
            alt={show.show.name}
            className="w-210 h-295 object-cover mb-4 rounded-md"
            />
            <div className="flex flex-col justify-center items-center">
              <p className="text-white bg-blue-500 p-1 mb-2">Language: {show.show.language}</p>
              <p className="text-gray-400 text-sm">Genre: {show.show.genres.join(', ')}</p>
            </div>
          </div>
          <h2 className="text-lg font-semibold mb-2">{show.show.name}</h2>
          View Details
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ShowList;
