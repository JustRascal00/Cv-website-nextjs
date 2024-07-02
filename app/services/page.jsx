"use client";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { Description } from "@radix-ui/react-dialog";

const services = [
  {
    num: "01",
    title: "Web Development",
    Description:
      "As a passionate and emerging web developer, I bring a fresh perspective and boundless enthusiasm to every project. With a year of hands-on experience, I’m dedicated to creating modern, user-friendly websites that help businesses and individuals shine online. Specializing in personalized web development services, I cater to your unique needs, ensuring every website is visually appealing, responsive, and optimized for performance. Whether you're a small business, a startup, or an individual looking to establish an online presence, I’m here to help you succeed with tailored solutions and a commitment to excellence.",
    href: "",
  },
  {
    num: "02",
    title: "Content Management",
    Description:
      "Managing your website’s content can be time-consuming. I can assist with updating text, images, and other elements to keep your site fresh and relevant. Whether you need regular updates or a one-time overhaul, I’ll ensure your content stays current and engaging.",
    href: "",
  },
];

import { motion } from "framer-motion";
const Services = () => {
  return (
    <section className="min-h-[80vh flex flex-col justify-center py-12 xl:py-0]">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                <p className="text-white/60">{service.Description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
