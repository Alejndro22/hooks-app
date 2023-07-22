import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from './Routes';

// import { HooksApp } from './HooksApp';
// import { CounterApp } from './01-useState/CounterApp';
// import { CounterCustomHook } from './01-useState/CounterCustomHook';
// import { SimpleForm } from './02-useEffect/SimpleForm';
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
// import { FocusScreen } from './04-useRef/FocusScreen';
// import { Layout } from './05-useLayoutEffect/Layout';
// import { Memorize } from './06-memos/Memorize';
// import { MemoHook } from './06-memos/MemoHook';
// import { CallbackHook } from './06-memos/CallbackHook';
// import { Parent } from './07-tarea-memo/Parent';
// import './08-useReducer/intro-reducer';
// import { ToDoApp } from './08-useReducer/ToDoApp';

import './index.css';

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
);
