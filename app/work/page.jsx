"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/ui/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "",
    title: "project 1",
    description: (
      <>
        This chat application is built using Next.js for the front end and
        MongoDB for the back end. It incorporates React for a dynamic user
        interface and Pusher for real-time messaging capabilities. Tailwind CSS
        is used for styling, ensuring a responsive and modern design. The app
        supports features like user authentication, chat rooms, and real-time
        message updates, providing a seamless communication platform.
        <br />
        <br />
        <strong>Key Features:</strong>
        <ul className="list-disc list-inside ml-4">
          <li>User Authentication: Secure login and registration system.</li>
          <li>Real-time Messaging: Instant message delivery using Pusher.</li>
          <li>Responsive Design: Optimized for both desktop and mobile use.</li>
          <li>Chat Rooms: Create and join multiple chat rooms.</li>
        </ul>
      </>
    ),
    stack: [
      { name: "Next.js" },
      { name: "MongoDB" },
      { name: "React" },
      { name: "Pusher for realtime messages" },
      { name: "Tailwind" },
    ],
    image: "/assets/work/Website1.png",
    live: "",
    github: "https://github.com/JustRascal00/chatapp",
  },
  {
    num: "02",
    category: "",
    title: "project 2",
    description: (
      <>
        This project is a simple chat room application utilizing PHP for the
        backend and SQL for database management. JavaScript is used for the
        interactive front end, while CSS ensures a clean and responsive design.
        Users can join chat rooms, send messages, and view message history. This
        project demonstrates the fundamental implementation of a real-time chat
        application.
        <br />
        <br />
        <strong>Key Features:</strong>
        <ul className="list-disc list-inside ml-4">
          <li>Chat Rooms: Users can join and create chat rooms.</li>
          <li>Message History: View and store chat history.</li>
          <li>
            Real-time Messaging: Instant message updates using JavaScript.
          </li>
          <li>
            Responsive Design: Accessible on both desktop and mobile devices.
          </li>
        </ul>
      </>
    ),
    stack: [
      { name: "PHP" },
      { name: "SQL" },
      { name: "JavaScript" },
      { name: "CSS" },
    ],
    image: "/assets/work/Website2.png",
    live: "",
    github: "https://github.com/JustRascal00/chatroom",
  },
  {
    num: "03",
    category: "",
    title: "project 3",
    description: (
      <>
        This project is a WhatsApp clone developed using Next.js for the
        frontend and PostgreSQL for database management. It features Socket.io
        for real-time communication, Tailwind CSS for styling, and Firebase for
        backend services. Users can send voice messages, search messages, make
        voice and video calls, and more. This clone replicates many
        functionalities of the original WhatsApp application.
        <br />
        <br />
        <strong>Key Features:</strong>
        <ul className="list-disc list-inside ml-4">
          <li>Voice Messages: Record and send voice messages.</li>
          <li>Search Messages: Efficiently search through chat history.</li>
          <li>
            Voice and Video Calls: Make high-quality voice and video calls.
          </li>
          <li>Real-time Communication: Instant messaging using Socket.io.</li>
          <li>Responsive Design: Ensures usability across devices.</li>
        </ul>
      </>
    ),
    stack: [
      { name: "Next.js" },
      { name: "Socket.io" },
      { name: "Tailwind CSS" },
      { name: "Node.js" },
      { name: "Firebase" },
    ],
    image: "/assets/work/Website3.png",
    live: "",
    github: "https://github.com/JustRascal00/rasapp",
  },
  {
    num: "04",
    category: "",
    title: "project 4",
    description: (
      <>
        This project is a full-stack application built using Laravel 11 for the
        backend and React for the frontend, integrated seamlessly with
        Inertia.js to provide a modern, single-page application experience. The
        app is designed to facilitate efficient project management, offering a
        robust set of features to manage tasks, teams, and workflows
        effectively.
        <br />
        <br />
        <strong>Key Features:</strong>
        <ul className="list-disc list-inside ml-4">
          <li>
            Task Management: Create, assign, and track tasks with customizable
            statuses and priorities.
          </li>
          <li>
            Team Collaboration: Manage team members, assign roles, and
            collaborate in real-time.
          </li>
          <li>
            Project Tracking: Monitor project progress with detailed timelines,
            milestones, and reporting tools.
          </li>
          <li>
            Notifications: Receive real-time notifications for task updates,
            deadlines, and team activities.
          </li>
          <li>
            Responsive Design: Optimized for both desktop and mobile devices to
            ensure accessibility on the go.
          </li>
          <li>
            Secure Authentication: User authentication and authorization handled
            through Laravel's robust security features.
          </li>
        </ul>
      </>
    ),
    stack: [{ name: "Laravel" }, { name: "React" }, { name: "Inertia" }],
    image: "/assets/work/Website4.png",
    live: "",
    github: "https://github.com/JustRascal00/laravel-ProjectManagement-App",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-8">
          <div className="w-full xl:w-1/2 xl:h-[460px] flex flex-col justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-4xl font-bold leading-none text-white transition-all duration-150 capitalize">
                {project.category} project
              </h2>
              <div className="text-white/60 mb-4">{project.description}</div>
              <ul className="flex flex-wrap gap-2 text-xl text-accent mb-4">
                {project.stack.map((item, index) => (
                  <li key={index}>
                    {item.name}
                    {index !== project.stack.length - 1 && <span>,</span>}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20 mb-4"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-1/2">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="relative w-full h-full flex justify-center items-center">
                      <Image
                        src={project.image}
                        layout="fill"
                        objectFit="contain"
                        alt=""
                      />
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
