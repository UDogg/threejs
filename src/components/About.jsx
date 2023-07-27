import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] mx-auto'
      >
        I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Next.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems.
      </motion.p>
      <div className="font-bold text-2xl flex justify-center">
      <a href="https://utkarshchoudhary.s3.us-east-2.amazonaws.com/CV_Utkarsh_C.pdf?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmFwLXNvdXRoLTEiRjBEAiBWqj9yEhyT97WS7bl0zzo9odgrHzmHY4BT0mxaApCF0wIgNwbSiXc0xXkzx92mxm05GFFenQfbyyt8WQyvAGtq7hoq5AIIXxAAGgwwMTIyMTI0OTE2OTYiDLuRUMsZBwatogc%2BzSrBAh3cc75FqEhii%2BHdub0msBOFhSoMlzgZhlD9qPys9DSkyuN854fN5WxY4lRpkn8XwyVjo0FWmQALUZr3L9cEH7Cl%2Bh7C7fn%2FC%2F8AlcaUFqeuXG4RVuZY8fHL7ddu8VkungX3%2B7ldGBCNGzD%2Fc8WE7tiHE5NJ97r8vTblH%2F5ko8kHgQQOKwAhiV174mebnqgm98v4yC0X1dfOxxEHCx84einPbb%2FCD8aJFF0CjYrJI%2FVKeb5Gy1FIKQe5XgovL79gMO1o1XGpvd2X59HM4lmIirApaW%2BzF4Ddh%2BJ666eDZNeR9eCDyLKl58Aq8vZFdGw2KyyUNgcARR2e0XH%2BLNnSsw9xZupWEeuALKc%2BOjk2NDOQh6Ar2s5t7VCK%2FgqsRUVxOfPo%2FtSuPgo4t5Qo%2B0jg9rUzyd9md7YIoESFe0KqOE6eXDD54ommBjq0Auh5rZEDav%2BjPwuRR%2F7ojh92cSAO7%2BcU0QNiNOb6xpHfhOoyyMRn3%2BaRw%2ByCnK%2Bz0f9p67KtfvXTCcjcvmm4%2FQ8CAR7Fs7o%2F24xT%2BODat5uXJ0TF5A9sXO%2FdsV3aK3KujnI7WX3u0%2F823drhcujimzMWlgeiP9plwQ%2Bz31Gn54SdMURwS8L9egyflT3sj2ARzVxxBHTgXBa2M6die5H2dyuCC6rZfa8xhRpxTjRJ0ayyqX6SGZQRRXc063YSAsPScaT1wC7xcUFL7xUW5ojtUVOVxa%2BnHLEwIUj9Oe9jcYczRNmkwSpXFUEC4Vx3xdtIY1ip7Tn8Nq%2FwoMi6eLeZwmuMyfvyD3ciIQekAME3l1TeGbU5%2FxTLTa4GwUFMj%2BDdoWmHO8gGLpBXOvlI5nyXgQeJ4PTF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230727T163603Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAQFV7L2WYCCSW7TUK%2F20230727%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Signature=22affd666eca49a0828ac4ad011f94f651e6bdad5f2d1b1e02a6e3ba110c10c9" target="_blank">Click here to check out my Résumé!</a>
      </div>
      
      <div className='mt-20 flex flex-wrap gap-10 flex justify-center'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
