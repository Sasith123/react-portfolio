import {CONTACT} from "../constants";
import {motion} from "framer-motion";
const Contact = () =>{
    return(
        <div className= "border-b border-neutral-900 pb-20">
            <motion.h1 
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className= "my-10 text-center text-4xl ">Get in Touch</motion.h1>
            <motion.div 
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-center tracking-tighter">
                <p className="my-4 ">{CONTACT.address}</p>
                <p className="my-4 ">{CONTACT.phoneNo}</p>
                <a href="" className="border-b ">{CONTACT.email}</a>
            </motion.div>
        </div>
    );

};

export default Contact;