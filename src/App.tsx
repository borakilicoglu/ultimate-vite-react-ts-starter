import { useState } from 'react';
import './index.css';
import Header from '@/Components/Header';
import ReadTheDocs from '@/Components/ReadTheDocs';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="bg-gray-800 h-screen flex flex-col items-center justify-center">
      <Header />
      <div className="card flex flex-col">
        <button type="button" onClick={() => setCount(count + 1)}>
          count is {count}
        </button>
      </div>
      <ReadTheDocs />
    </div>
  );
}

export default App;
