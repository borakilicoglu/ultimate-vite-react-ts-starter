import reactLogo from '@/Assets/react.svg';
import viteLogo from '@/Assets/vite.svg';
import typescriptLogo from '@/Assets/typescript.svg';
import tailwindcssLogo from '@/Assets/tailwindcss.svg';

function Header() {
  return (
    <>
      <div className="flex space-x-12">
        <img src={viteLogo} className="w-20" data-testid="vite-logo" alt="Vite logo" />
        <img src={reactLogo} className="w-20" data-testid="react-logo" alt="React logo" />
        <img src={typescriptLogo} className="w-20" data-testid="typescript-logo" alt="Typescript logo" />
        <img src={tailwindcssLogo} className="w-20" data-testid="tailwindcss-logo" alt="Tailwind CSS logo" />
      </div>
      <h1 className="text-indigo-200 text-4xl font-bold">Ultimate Vite React Typescript Starter 🦄</h1>
      <h2 className="text-indigo-300 text-2xl font-semibold">
        Vite + React + TypeScript + Tailwind CSS + Eslint (Airbnb) + Eslint + Jest + Testing Library
      </h2>
    </>
  );
}

export default Header;
