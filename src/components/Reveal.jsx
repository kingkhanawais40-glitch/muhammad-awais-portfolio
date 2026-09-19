import { motion } from "framer-motion";

function Reveal({ 
  children, 
  direction = "up",
  delay = 0 
}) {


  const animations = {

    up: {
      hidden: { opacity: 0, y: 80 },
      visible: { opacity: 1, y: 0 }
    },

    down: {
      hidden: { opacity: 0, y: -80 },
      visible: { opacity: 1, y: 0 }
    },

    left: {
      hidden: { opacity: 0, x: -80 },
      visible: { opacity: 1, x: 0 }
    },

    right: {
      hidden: { opacity: 0, x: 80 },
      visible: { opacity: 1, x: 0 }
    }

  };



  return (

    <motion.div

      initial={animations[direction].hidden}

      whileInView={animations[direction].visible}

      transition={{
        duration:0.8,
        delay,
        ease:"easeOut"
      }}

      viewport={{
        once:true,
        amount:0.2
      }}

    >

      {children}

    </motion.div>

  );

}


export default Reveal;