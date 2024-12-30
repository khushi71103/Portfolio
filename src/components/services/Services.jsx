import { motion,useInView } from "framer-motion";
import { useRef } from "react";
import "./services.scss";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },

  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {

    const ref=useRef();

    const isInView=useInView(ref,{margin:"-100px"}); 
  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={isInView && "animate"}
        whileInView="animate"
    
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on learning new technologies
          <br />
          and help others too
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>What</motion.b> I have
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>Learnt</motion.b> so far.
          </h1>
          <button>TechStacks</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}>
          <h2>React JS</h2>
          <p>
            React is a JavaScript library developed by Facebook for building
            user interfaces, known for its component-based architecture. It
            simplifies the creation of interactive and dynamic web applications,
            making it a popular choice among front-end developers.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>AI/ML</h2>
          <p>
            Artificial Intelligence is a branch of computer science focused on
            creating intelligent systems capable of learning and making
            decisions. MachineLearning is a subset of AI that involves using
            algorithms and statistical models to make predictions based on data,
            without explicit programming.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Next JS</h2>
          <p>
          Next.js is a powerful React framework designed for building fast, SEO-friendly, 
          and scalable web applications. It supports server-side rendering (SSR), 
          static site generation (SSG), and client-side rendering (CSR), offering flexibility 
          for different use cases. With built-in routing, API handling, and performance 
          optimizations, it simplifies the development process. Next.js also integrates 
          well with TypeScript, making it a popular choice for modern web development.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>MYSQL/MONGODB/
            POSTGRESSQL</h2>
          <p>
            MySQL is a popular open-source relational database known for its
            structured data storage, while MongoDB is a NoSQL database that
            offers flexibility in handling unstructured and semi-structured
            data.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
