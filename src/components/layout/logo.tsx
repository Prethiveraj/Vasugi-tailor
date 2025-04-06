
import { Link } from "react-router-dom";
import { useMobile } from "@/hooks/use-mobile";

const Logo = () => {
  const isMobile = useMobile();
  
  return (
    <Link to="/" className="flex items-center">
      <div className="flex flex-row items-center">
        {isMobile ? (
          // Single line for mobile
          <span className="font-exo text-xl font-bold text-tailor-pink">Vasugi Tailor</span>
        ) : (
          // Regular display for desktop
          <>
            <span className="font-exo text-xl sm:text-2xl md:text-3xl font-bold text-tailor-pink">Vasugi</span>
            <span className="font-exo text-xl sm:text-2xl md:text-3xl font-bold text-tailor-pink ml-2">Tailor</span>
          </>
        )}
      </div>
    </Link>
  );
};

export default Logo;
