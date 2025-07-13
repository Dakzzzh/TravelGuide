import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import blogData from './assets/assets.js'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import App from './App.jsx'
import Page from './blogs/[id]/Page.jsx'
import AdminPage from './frontendComponents/AdminPage.jsx'

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/blogs/:id' element={<Page />}></Route>
        <Route path='/' element={<App />}></Route>
        <Route path={`/blogs/${blogData.id}`} element={<Page />}></Route>
        <Route path={'/adminPage'} element={<AdminPage />}></Route>
      </Route>
    )
  )

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SkeletonTheme baseColor="#dedddc" highlightColor="#949392">
    <RouterProvider router={router}></RouterProvider>
    </SkeletonTheme>
  </StrictMode>,
)
