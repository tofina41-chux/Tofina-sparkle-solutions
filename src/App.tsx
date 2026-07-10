import { Suspense, useEffect, useState } from "react";
import { useRoutes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { routes } from "@/router/routes";
import LoadingScreen from "@/components/common/LoadingScreen";
import PageLoader from "@/components/common/PageLoader";

function AnimatedRoutes() {
  const element = useRoutes(routes);
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<PageLoader />} key={location.pathname}>
        {element}
      </Suspense>
    </AnimatePresence>
  );
}

export default function App() {
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setInitialLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  if (initialLoading) return <LoadingScreen />;

  return <AnimatedRoutes />;
}
