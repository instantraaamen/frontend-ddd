# frontend-ddd

## 1. setup

> tarminal
```sh
npm create vite@latest app -- --template react-ts
cd app
npm install
npm run dev
```

```sh
npm install --save-dev vitest @testing-library/react @testing-library/jest-dom jsdom
```

> package.json
```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview",
    "test": "vitest"
  },
}
```

> vite.config.ts
```ts
/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: 'src/setupTests.ts',
  },
});

```

## 2. conf

> src/setupTests.ts
```ts
import * as matchers from '@testing-library/jest-dom/matchers';
import { expect } from 'vitest';

expect.extend(matchers);
```

> src/components/Hello.tsx
```ts
import React from 'react';

type HelloProps = {
  name: string;
};

const Hello: React.FC<HelloProps> = ({ name }) => {
  return <h1>Hello, {name}!</h1>;
};

export default Hello;
```

> src/components/Hello.test.tsx
```ts
import { describe, expect, it } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import Hello from './Hello';

describe('Helloコンポーネント', () => {
  it('正しく挨拶を表示する', () => {
    render(<Hello name="World" />);
    expect(screen.getByText('Hello, World!')).toBeInTheDocument();
  });
});
```

> tarminal
```sh
npm run test
```

## 3. react router

> tarminal
```sh
npm install react-router-dom
npm install --save-dev @types/react-router-dom
```

> src/main.tsx
```ts
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
```

> src/App.tsx
```ts
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import User from './components/User';
import NotFound from './components/NotFound';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="user/:id" element={<User />} />
      {/* リダイレクト例 */}
      <Route path="old-home" element={<Navigate to="/" replace />} />
      {/* 404ページ */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
```

> src/components/Home.tsx
```ts
import React from 'react';

const Home: React.FC = () => (
  <div>
    <h1>Home</h1>
    <p>Welcome to the Home page.</p>
  </div>
);
export default Home;
```

> tarminal
```sh
npm run build
npm run preview 
```
