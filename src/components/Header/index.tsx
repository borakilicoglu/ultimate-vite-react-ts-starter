import reactLogo from '@/Assets/react.svg';
import viteLogo from '@/Assets/vite.svg';

function Header() {
  return (
    <>
      <div className="flex space-x-4 space-y-4">
        <img src={viteLogo} className="w-20" data-testid="vite-logo" alt="Vite logo" />
        <img src={reactLogo} className="w-20" data-testid="react-logo" alt="React logo" />
      </div>
      <h2 className="text-indigo-300 text-2xl font-semibold">
        Vite + React + TypeScript + Eslint (Airbnb) + Eslint + Jest + Testing Library = ultimate-vite-react-ts-starter❤️‍🔥
      </h2>
    </>
  );
}

export default Header;
