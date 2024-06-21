import { BrowserRouter, Link, Route, Routes, useLocation } from 'react-router-dom';
import type { FC } from 'react';

import Task_1 from './task_1/task_1';
import Task_2 from './task_2/task_2';
import Task_3 from './task_3/task_3';

const paths = ['/task_1', '/task_2', '/task_3'];

const Header: FC = () => {
  const location = useLocation();

  return (
    <header>
      <nav>
        <ul>
          {paths.map((path, i) => (
            <li key={path}>
              <Link
                to={path}
                className={location.pathname === path ? 'active' : ''}
              >
                Задание {i + 1}
                {i === 2 && <span>*</span>}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

const App: FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={<></>}
          />
          <Route
            path="/task_1"
            element={<Task_1 />}
          />
          <Route
            path="/task_2"
            element={<Task_2 />}
          />
          <Route
            path="/task_3"
            element={<Task_3 />}
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
