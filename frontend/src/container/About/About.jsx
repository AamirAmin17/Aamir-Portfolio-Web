import React, { useEffect, useState } from "react";
import "./About.scss";
import "./About-MediaQuery.scss";
import { motion } from "framer-motion";
import { images } from "../../constants";
// import { client, urlFor } from "../../client";
const About = () => {
  // const [abouts, setAbouts] = useState([]);

  // useEffect(() => {
  //   const query = '*[_type == "abouts"]';

  //   client.fetch(query).then((data) => {
  //     setAbouts(data);
  //   });
  // }, []);

  const abouts = [
    {
      title: "Frontend Development",
      description:
        "I am a Frontend Developer having more than 2.5 years of industrial experience. ",
      imgUrl: images.about02,
    },
    {
      title: "UI/UX Development",
      description:
        "I always ensure that the user Interface should be eye catching and the user experience should be smooth",
      imgUrl: images.about03,
    },
    {
      title: "Web Animations",
      description:
        "I am always excited to make a creative/attractive websites with animations",
      imgUrl: images.about04,
    },
  ];

  return (
    <section className='app__section-about'>
      <h2 className='head-text'>
        I know That <span>Good Apps </span>
        <br />
        means
        <span> Good Business</span>
      </h2>

      <div className='app__profiles'>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className='app__profile-item'
            key={about.title + index}>
            <img src={about.imgUrl} alt={about.title} />
            <h2 className='bold-text' style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className='p-text' style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
