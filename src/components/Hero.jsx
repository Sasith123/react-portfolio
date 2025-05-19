
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/Sasith Vihanga .png";
import {motion} from "framer-motion";

const container= (delay) =>({
    hidden: { x: -100, opacity:0},
    visible:{
        x:0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay},

    },
});


const hero = () => {
    return (
        <div className = "flex flex-col min-h-screen lg:flex-row items-center justify-between px-6 py-10 lg:px-20">

                <div className="flex flex-col items-center lg:items-start">
                    <motion.h1 
                               variants= {container(1)}
                               initial= "hidden"
                               animate= "visible"
                               className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
                        Sasith Karunathilaka
                    </motion.h1>
                    <motion.span variants= {container(1.5)}
                               initial= "hidden"
                               animate= "visible"
                    className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
                        Full Stack Developer
                    </motion.span>
                    <motion.p 
                               variants= {container(1.75)}
                               initial= "hidden"
                               animate= "visible"
                    className="my-2 max-w-xl py-6 font-light tracking-tight">{HERO_CONTENT}</motion.p>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center lg:justify-end">
                        <motion.img 
                               initial= {{x: 100, opacity:0}}
                               animate= {{x: 0, opacity: 1}}
                               transition= {{ duration: 0.5, delay: 1 }}
                        src={profilePic} alt="Profile Picture" />
                    </div>
                </div>
        </div>

    );

};

export default hero;
