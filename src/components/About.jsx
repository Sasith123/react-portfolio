import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";
const About = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <h1 className="my-20 text-center text-4xl">
                About
                <span className="text-neutral-500">Me</span>
            </h1>
            <div className="flex flex-wrap">
                {/* Image on the left */}
                <div className="w-full lg:w-1/2 lg:p-8 flex items-center justify-center">
                    <motion.img 
                        whileInView={{ x: 0, opacity: 1 }}
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: -100, opacity: 1 }}
                        transition={{ duration: 1, delay: 1}}
                    src={aboutImg} className="rounded-2xl" alt="about" />
                </div>
                {/* Text on the right */}
                <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-start">
                    <motion.p
                        whileInView={{ x: 0, opacity: 1}}   
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 100, opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                        className="my-2 max-w-xl py-6">{ABOUT_TEXT}</motion.p>
                </div>
            </div>
        </div>
    );
};

export default About;