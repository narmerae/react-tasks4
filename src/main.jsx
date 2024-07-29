import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Homepage from "./pages/Homepage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import About from "./pages/About.jsx";
import Profiles from "./pages/Profiles.jsx";
import SingleProfile from "./pages/SingleProfile.jsx";
import ChangeColor from "./pages/ChangeColor.jsx";
import RenderCount from "./pages/RenderCount.jsx";
import SmoothScroll from "./pages/SmoothScroll.jsx";
import ToggleVisibility from "./pages/ToggleVisibility.jsx";
import PreviousState from "./pages/PreviousState.jsx";
import FocusInput from "./pages/FocusInput.jsx";
import FetchDataWithDependency from "./pages/FetchDataWithDependency.jsx";
import DynamicFontSize from "./pages/DynamicFontSize.jsx";
import CountdownTimer from "./pages/CountdownTimer.jsx";
import ClickCounter from "./pages/ClickCounter.jsx";
import ChangeBackground from "./pages/ChangeBackground.jsx";
import AutoSaveForm from "./pages/AutoSaveForm.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage/>,
        errorElement: <ErrorPage/>,
    },
    {
        path: "/about",
        element: <About/>,
        errorElement: <ErrorPage/>,
    },
    {
        path: "/profiles",
        element: <Profiles/>,
        errorElement: <ErrorPage/>,
    },
    {
        path: "/profiles/:profilesId",
        element: <SingleProfile/>,
        errorElement: <ErrorPage/>,
    },
    {
        path: "/colorchange",
        element: <ChangeColor/>,
        errorElement: <ErrorPage/>,
    },
    {
        path: "/rendercount",
        element: <RenderCount/>,
        errorElement: <ErrorPage/>
    },
    {
        path: "/smooth",
        element: <SmoothScroll/>,
        errorElement: <ErrorPage/>,
    },
    {
        path: "/toggle",
        element: <ToggleVisibility/>,
        errorElement: <ErrorPage/>,
    },
    {
        path: "/previousstate",
        element: <PreviousState/>,
        errorElement: <ErrorPage/>,
    },
    {
        path: "/focusinput",
        element: <FocusInput/>,
        errorElement: <ErrorPage/>,
    },
    {
        path: "/fetchdata",
        element: <FetchDataWithDependency/>,
        errorElement: <ErrorPage/>
    },
    {
        path: "/dynamic",
        element: <DynamicFontSize/>,
        errorElement: <ErrorPage/>
    },
    {
        path: "/countdown",
        element: <CountdownTimer/>,
        errorElement: <ErrorPage/>
    },
    {
        path: "/clickcounter",
        element: <ClickCounter/>,
        errorElement: <ErrorPage/>
    },
    {
        path: "/changecolor",
        element: <ChangeColor/>,
        errorElement: <ErrorPage/>
    },
    {
        path: "/changebackground",
        element: <ChangeBackground/>,
        errorElement: <ErrorPage/>
    },
    {
        path: "/autosaveform",
        element: <AutoSaveForm/>,
        errorElement: <ErrorPage/>
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
