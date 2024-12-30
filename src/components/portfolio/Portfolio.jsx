import { useRef } from "react";
import "./portfolio.scss";
import { motion,useScroll,useSpring, useTransform } from "framer-motion";

const items=[
    {
        id:1,
        title:"MindMap AI",
        img:"https://media.istockphoto.com/id/475447149/photo/x-ray-of-brain-showing-tumor.jpg?b=1&s=612x612&w=0&k=20&c=H-t_VjWLfWU60ZCnU9lC7xQsPIiEXXh6dsNRnpGF8gs=",
        decs:" Developed a brain tumor detection system using Python, Keras, Flask, and MongoDB, which identifies tumors from brain CT scans. Implemented a Convolutional Neural Network (CNN) for image recognition, achieving a 98% accuracy rate on the validation set, trained with Kaggle’s brain tumor dataset. Integrated a ChatBot that performs symptom analysis and facilitates scheduling appointments with healthcare professionals and used Flask for the backend to connect the web interface.",
        demoLink: "https://github.com/khushi71103/BrainTumorDetection",
    },
    {    id:2,
        title:"Attendify",
        img:"https://images.pexels.com/photos/8423046/pexels-photo-8423046.jpeg?auto=compress&cs=tinysrgb&w=600",
        decs:" Developed a Student Attendance Tracker using Next.js, React.js, and TypeScript, enabling efficient monitoring and management of student attendance records through a modern web application. Implemented secure user authentication via Kinde to ensure that only authorized personnel can access sensitive data, while utilizingDrizzle ORM with PostgreSQL for robust database management and efficient retrieval of attendance information. Integrated AG Grid for dynamic table views with pagination features, enhancing user experience, and employed Recharts for visual data representation, making it easier to analyze attendance trends over time.",
        demoLink: "https://github.com/khushi71103/Student-Tracker",    
    },
        {id:3,
        title:"WanderMate",
        img:"https://images.pexels.com/photos/21014/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600",
        decs:" Developed a Travel Companion application using React.js to provide users with an interactive platform for planning and sharing travel experiences, ensuring a seamless user interface. Implemented JWT for secure user authentication, enabling safe access to personalized travel features, while utilizing a GraphQL API for efficient data retrieval and management, enhancing the app’s performance. Utilized MongoDB and Mongoose for robust database handling, complemented by React Map GL and React Mapbox for dynamic map interactions and geolocation features",
        demoLink: "https://github.com/khushi71103/MERN-TravelCompanion",
    },
        {id:4,
        title:"Portfolio",
        img:"https://images.pexels.com/photos/18325774/pexels-photo-18325774/free-photo-of-cheese-daisy.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
        decs:"I created a dynamic portfolio using React.js, HTML, SCSS, and parallax effects to showcase my projects. It features smooth animations with Framer Motion, scroll-based progress indicators, and responsive design for seamless navigation. Parallax scrolling adds depth, making the portfolio visually engaging. The modular structure and optimized performance ensure scalability and a great user experience.",
        demoLink: "https://github.com/khushi71103/Portfolio",
    },
    
];

const Single=({item})=>{
    const ref=useRef();

    const {scrollYProgress}=useScroll({
        target:ref,
        // offset:["start start","end start"]
        
    });

    const y=useTransform(scrollYProgress,[0,1],[-300,300]);


    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                <img src={item.img} alt="" />
                </div>
                <motion.div className="textcontainer" style={{y}}>
                    <h2>{item.title}</h2>
                    <p>{item.decs}</p>
                    <a href={item.demoLink} target="_blank" rel="noopener noreferrer">
                            <button>See Demo</button>
                        </a>
                </motion.div>
                </div>
            </div>
        </section>

    )
};


const Portfolio = () => {
    const ref=useRef();

    const {scrollYProgress}=useScroll({
        target:ref,
        offset:["end end","start start"],
    });

    const scaleX=useSpring(scrollYProgress,{
        stiffness:100,
        damping:30,
    });


    return (
        <div className="portfolio" ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{scaleX}} className="progressBar"></motion.div>
            </div>
            {items.map((item=>(<Single item={item} key={item.id}/>)))}
        </div>
    )
}

export default Portfolio;