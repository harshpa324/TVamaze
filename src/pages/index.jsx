import axios from 'axios';
import ShowList from '../components/ShowList';
import Header from '@/components/Header';

const Home = ({ shows }) => {
  return (
    <div className="container p-6 mx-auto my-8">
      <h1 className="text-3xl font-bold mb-4">TV Shows</h1>
      <ShowList shows={shows} />
    </div>
  );
};

export async function getStaticProps() {
  try {
    const response = await axios.get('https://api.tvmaze.com/search/shows?q=all');
    const shows = response.data;
    return { props: { shows } };
  } catch (error) {
    console.error('Error fetching data:', error.message);
    return { props: { shows: [] } };
  }
}

export default Home;
