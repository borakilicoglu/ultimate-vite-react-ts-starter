function ReadTheDocs() {
  return (
    <p className="text-gray-300 text-xl text-center font-default w-[40%]" data-testid="read-the-docs">
      <a
        className="hover:text-indigo-500"
        href="https://vitejs.dev/guide/features.html"
        target="_blank"
        rel="noopener noreferrer"
      >
        Vite Docs
      </a>
      {' | '}
      <a className="hover:text-indigo-500" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        React Docs
      </a>
      {' | '}
      <a
        className="hover:text-indigo-500"
        href="https://www.typescriptlang.org/docs/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Typescript
      </a>
      {' | '}
      <a
        className="hover:text-indigo-500"
        href="https://tailwindcss.com/docs/installation"
        target="_blank"
        rel="noopener noreferrer"
      >
        Tailwind CSS
      </a>
      {' | '}
      <a className="hover:text-indigo-500" href="https://eslint.org/" target="_blank" rel="noopener noreferrer">
        Eslint docs
      </a>
      {' | '}
      <a
        className="hover:text-indigo-500"
        href="https://github.com/airbnb/javascript"
        target="_blank"
        rel="noopener noreferrer"
      >
        Airbnb JS Style Guide
      </a>
      {' | '}
      <a
        className="hover:text-indigo-500"
        href="https://github.com/airbnb/javascript/tree/master/react"
        target="_blank"
        rel="noopener noreferrer"
      >
        Airbnb React Style Guide
      </a>
      {' | '}
      <a
        className="hover:text-indigo-500"
        href="https://jestjs.io/pt-BR/docs/getting-started"
        target="_blank"
        rel="noopener noreferrer"
      >
        Jest
      </a>
      {' | '}
      <a className="hover:text-indigo-500" href="https://testing-library.com" target="_blank" rel="noopener noreferrer">
        Testing Library
      </a>
      {' | '}
      <a
        className="hover:text-indigo-500"
        href="https://github.com/borakilicoglu/ultimate-vite-react-ts-starter"
        target="_blank"
        rel="noopener noreferrer"
      >
        Template repository
      </a>
    </p>
  );
}
export default ReadTheDocs;
