import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import Home from "./components/Home.jsx";
import FilterBookCategory from "./components/FilterBookCategory.jsx";
import BrowseBooks from "./components/BrowseBooks.jsx";
import appStore from "./utils/appStore.js";
import AddBook from "./components/AddBook.jsx";
import BookDetails from "./components/BookDetails.jsx";
import Error from "./components/Error.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/books/:categories",
        element: <FilterBookCategory />,
      },
      {
        path: "/browseBooks",
        element: <BrowseBooks />,
      },
      {
        path: "/addBook",
        element: <AddBook />,
      },
      {
        path: "/book/:id",
        element: <BookDetails />,
      },
    ],
    errorElement: <Error />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={appStore}>
      <RouterProvider router={appRouter} />
    </Provider>
  </StrictMode>
);
