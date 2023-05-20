import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Création d'une fonction pour faire défiler vers le haut à chaque changement de page
const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

export default ScrollToTop;
