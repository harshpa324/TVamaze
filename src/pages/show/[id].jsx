// pages/show/[id].js
import React from 'react';
import ShowDetails from '../../components/ShowDetails';

const Show = ({ show }) => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <ShowDetails show={show} />
    </div>
  );
};

export async function getStaticPaths() {
  
  const res = await fetch('https://api.tvmaze.com/search/shows?q=all');
  const data = await res.json();
  
  
  const paths = data.map(show => ({ params: { id: show.show.id.toString() } }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {

  const res = await fetch(`https://api.tvmaze.com/shows/${params.id}`);
  const data = await res.json();

  return {
    props: { show: data }, 
  };
}

export default Show;
