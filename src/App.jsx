// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useEffect, useState } from "react";
import GlobalStyle from "./styles/GlobalStyles";
import { lightTheme, darkTheme } from "./styles/theme";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import BlogList from "./pages/BlogList";
import BlogPost from "./pages/BlogPost";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ThemeToggle from "./components/ThemeToggle";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import SmoothScroll from "./components/SmoothScroll";
import PageTransition from "./components/PageTransition";
import { TransitionProvider } from "./context/TransitionContext";

function AnimatedRoutes() {
  const location = useLocation();
  const hideFooter = location.pathname === '/login' || location.pathname === '/signup' || location.pathname === '/maintenance';

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<BlogList />} />
          <Route path="/blogs/:id" element={<BlogPost />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/maintenance" element={<MaintenanceScreen />} />
        </Routes>
      </AnimatePresence>
      {!hideFooter && <Footer />}
    </>
  );
}

import MaintenanceScreen from "./components/MaintenanceScreen";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [maintenanceMode, setMaintenanceMode] = useState(false);
  const [maintenanceResolved, setMaintenanceResolved] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const readMaintenanceMode = async () => {
      try {
        const response = await fetch("/api/maintenance-status", {
          cache: "no-store",
        });

        if (!isMounted) {
          return;
        }

        if (!response.ok) {
          // In local Vite dev, this endpoint may be unavailable. Fail open.
          setMaintenanceMode(false);
          return;
        }

        const data = await response.json();
        if (typeof data.maintenanceMode === "boolean") {
          setMaintenanceMode(data.maintenanceMode);
        } else {
          setMaintenanceMode(false);
        }
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error("Failed to load maintenance mode status", error);
        }

        if (isMounted) {
          // Network/route errors should not lock local development.
          setMaintenanceMode(false);
        }
      } finally {
        if (isMounted) {
          setMaintenanceResolved(true);
        }
      }
    };

    readMaintenanceMode();
    const intervalId = setInterval(readMaintenanceMode, 15000);

    return () => {
      isMounted = false;
      clearInterval(intervalId);
    };
  }, []);

  if (!maintenanceResolved) {
    return <MaintenanceScreen />;
  }

  if (maintenanceMode) {
    return <MaintenanceScreen />;
  }

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      {!loadingComplete ? (
        <Preloader setLoadingComplete={setLoadingComplete}></Preloader>
      ) : (
        <BrowserRouter>
          <TransitionProvider>
            <SmoothScroll>
              <PageTransition />
              <Navbar darkMode={darkMode} setDarkMode={setDarkMode} ThemeToggleComponent={ThemeToggle} />
              <AnimatedRoutes />
            </SmoothScroll>
          </TransitionProvider>
        </BrowserRouter>
      )}
    </ThemeProvider>
  );
}

export default App;