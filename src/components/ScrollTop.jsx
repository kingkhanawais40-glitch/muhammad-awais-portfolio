import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

function ScrollTop() {

  const [visible, setVisible] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);

  }, []);


  const scrollTop = () => {
    window.scrollTo({
      top:0,
      behavior:"smooth"
    });
  };


  return (
    <>
      {visible && (
        <button 
          className="scroll-btn"
          onClick={scrollTop}
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
}

export default ScrollTop;