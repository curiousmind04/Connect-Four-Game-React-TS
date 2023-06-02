import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import GamePage from "./pages/Game";
import RulesPage from "./pages/Rules";
import RootLayout from "./pages/Root";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "/rules",
          element: <RulesPage />,
        },
        {
          path: "/game-players",
          element: <GamePage />,
        },
        {
          path: "/game-vs-computer",
          element: <GamePage />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
