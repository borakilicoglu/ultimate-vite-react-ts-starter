import { useState } from 'react';
import './index.css';
import Header from '@/Components/Header';
import ReadTheDocs from '@/Components/ReadTheDocs';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="bg-gray-800 h-screen flex flex-col items-center justify-center gap-y-12">
      <Header />
      <ReadTheDocs />
      <div className="card flex flex-col">
        <button
          type="button"
          className="border border-indigo-500 px-8 py-4 text-white rounded-md text-2xl font-light"
          onClick={() => setCount(count + 1)}
        >
          count is {count}
        </button>
      </div>
    </div>
  );
}

export default App;
