import { useEffect, useState } from "react";

function Loader() {

  const [loading, setLoading] = useState(true);


  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);


    return () => clearTimeout(timer);

  }, []);



  if (!loading) return null;



  return (

    <div className="loader">

      <div className="loader-logo">
        MA
      </div>


      <h2 className="loader-text">
        Muhammad Awais
      </h2>


      <p>
        Software Engineer • AI Engineer • ML Engineer
      </p>


      <div className="loader-line"></div>


    </div>

  );

}


export default Loader;