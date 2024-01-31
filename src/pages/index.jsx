
import React from 'react';
import ShowList from '../components/ShowList';

const Home = ({ shows }) => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <ShowList shows={shows} />
    </div>
  );
};

export async function getStaticProps() {

  const res = await fetch('https://api.tvmaze.com/search/shows?q=all');
  const data = await res.json();
  
  return {
    props: { shows: data }, 
  };
}

export default Home;
