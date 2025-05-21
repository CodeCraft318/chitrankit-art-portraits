
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="section-container flex flex-col items-center justify-center py-20">
        <h1 className="text-6xl font-bold text-earthyBrown mb-4">404</h1>
        <p className="text-2xl font-medium mb-8">Oops! Page not found</p>
        <p className="text-gray-600 mb-8 text-center max-w-lg">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Button href="/" size="lg">
          Return to Home
        </Button>
      </div>
    </Layout>
  );
};

export default NotFound;
