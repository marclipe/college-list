import { Link } from 'react-router-dom';
import imageUniversity from '../../assets/img/university-home.svg'

export function Home() {
  return (
    <main className="flex justify-center flex-col items-center h-screen">
      <img
        className="w-[600px] rounded-[10px]"
        src={imageUniversity}
        alt={imageUniversity}
      />
      <h1 className="text-[1.5rem] font-semibold mb-2">
        Ready to go to college?
      </h1>
      <Link to="/search">
        <button className="bg-indigo-700 text-[white] px-5 py-2.5 rounded-[40px]">
          Let's go
        </button>
      </Link>
    </main>
  );
}