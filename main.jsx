import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import './index.css'

import { createBrowserRouter , RouterProvider} from 'react-router-dom';
// import { RouterProvider } from 'react-router-dom';
import Error from './components/Error.jsx';
import AddBook from './components/AddBook.jsx';
import BrowseBooks from './components/BrowseBooks.jsx';
import BookDetails from './components/BookDetails.jsx';

import { Provider } from 'react-redux';
import appStore from './utils/appStore.js';
import PageNotFound from './components/PageNotFound.jsx';




// routing confi
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <PageNotFound/>,

  },
  {
    path: "/AddBook",
    element: <AddBook/>,
  },
  {
    path: "/BrowseBooks",
    element:<BrowseBooks/>,
  },
  {
    path: "/BrowseBooks/:category",
    element:<BrowseBooks/>,
  },
  {
    path: "/book/:id",
    element: <BookDetails/>,
  },
  {
    path: "/book/:category" ,
    element: <BrowseBooks />,
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={appStore}>
    <RouterProvider router = {appRouter}/> 
    {/* <App /> */}
    </Provider>
  </StrictMode>,
)
