import { useRef } from "react";
import "./portfolio.scss";
import { motion,useScroll,useSpring, useTransform } from "framer-motion";

const items=[
    {
        id:1,
        title:"React Commerce",
        img:"https://images.pexels.com/photos/18325774/pexels-photo-18325774/free-photo-of-cheese-daisy.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
        decs:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam quibusdam dolores velit dicta quis! Adipisci commodi accusamus sint, voluptates dicta, odio deleniti quae reprehenderit, itaque earum voluptate vero fuga aut.",
    },
    {    id:2,
        title:"Next.js Blog",
        img:"https://images.pexels.com/photos/18325774/pexels-photo-18325774/free-photo-of-cheese-daisy.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
        decs:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam quibusdam dolores velit dicta quis! Adipisci commodi accusamus sint, voluptates dicta, odio deleniti quae reprehenderit, itaque earum voluptate vero fuga aut.",
        },
        {id:3,
        title:"Vanilla",
        img:"https://images.pexels.com/photos/18325774/pexels-photo-18325774/free-photo-of-cheese-daisy.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
        decs:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam quibusdam dolores velit dicta quis! Adipisci commodi accusamus sint, voluptates dicta, odio deleniti quae reprehenderit, itaque earum voluptate vero fuga aut.",
        },
        {id:4,
        title:"Music",
        img:"https://images.pexels.com/photos/18325774/pexels-photo-18325774/free-photo-of-cheese-daisy.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
        decs:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam quibusdam dolores velit dicta quis! Adipisci commodi accusamus sint, voluptates dicta, odio deleniti quae reprehenderit, itaque earum voluptate vero fuga aut.",
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
                    <button>See Demo</button>
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