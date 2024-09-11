import React from 'react'
import {createBrowserRouter} from "react-router-dom"
import App from '../App';
import Home from '../pages/home/Home';
import About from '../pages/miniPage/About';
import PrivacyPolicy from '../pages/miniPage/PrivacyPolicy';
import ContactUs from '../pages/miniPage/ContactUs';
import SingleBlog from '../pages/blogs/singleBlog/SingleBlog';
import Login from '../pages/user/Login';
import Register from '../pages/user/Register';
import AdminLayout from '../pages/admin/AdminLayout';
import AddPost from '../pages/admin/post/AddPost';
import ManageItems from '../pages/admin/post/ManageItems';
import ManageUser from '../pages/admin/user/ManageUser';
import PrivateRouter from './PrivateRouter';
import Dashboard from '../pages/admin/dashboard/Dashboard';
import UpdatePost from '../pages/admin/post/UpdatePost';
import Terms from '../pages/miniPage/Terms';

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "about-us",
          element: <About />
        },
        {
          path: "/privacy-policy",
          element: <PrivacyPolicy />
        },
        {
          path: "/contact-us",
          element: <ContactUs />
        },
        {
          path: '/terms-and-conditions',
          element: <Terms />
        },
        {
          path: "/blogs/:id",
          element: <SingleBlog />
        },
        {
          path: "/login",
          element: <Login />
        },
        {
          path: "/register",
          element: <Register />
        },
        {
          path: "dashboard",
          element: <PrivateRouter><AdminLayout/></PrivateRouter>, // it will be protected by admin: use Private Routes
          children: [
            {
              path: '',
              element: <Dashboard />
            },
            {
              path: 'add-new-post',
              element: <AddPost />
            },
            {
              path: 'manage-items',
              element: <ManageItems />
            },
            {
              path: 'users',
              element: <ManageUser />
            },
            {
              path: 'update-items/:id',
              element: <UpdatePost />
            }
          ]
        }
      ]
    },
  ]);

export default router