"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaPhp,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiFirebase,
  SiLaravel,
  SiPostman,
  SiMysql,
  SiC,
} from "react-icons/si";
const about = {
  title: "About me",
  description:
    "Developer passionate about creating web applications. Skilled in both front-end and back-end technologies.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Mamuka Khokerashvili",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+995) 551 21 55 57",
    },
    {
      fieldName: "Experience",
      fieldValue: "1 Year",
    },
    {
      fieldName: "Email",
      fieldValue: "mamuka.khokerashvili00@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Availabe",
    },
    {
      fieldName: "Languages",
      fieldValue: "Georgia,English",
    },
  ],
};

// Experience
const experience = {
  icon: "/assests/resume/badge.svg",
  title: "My Experience",
  description: (
    <>
      <p className="mb-4">
        At Money4You, I contribute as a Backend Developer where my
        responsibilities encompass managing successful projects using Laravel.
        My role involves leveraging both SQL and NoSQL databases to ensure the
        software operates with full functionality and efficiency.
      </p>
      <p className="mb-4 font-bold">Key achievements and tasks include:</p>
      <ul className="list-disc list-inside ml-5 mb-4">
        <li className="mb-2">
          Overseeing comprehensive project development with a focus on
          results-driven methodologies.
        </li>
        <li className="mb-2">
          Collaborating effectively within team settings to deliver seamless
          project outcomes.
        </li>
        <li className="mb-2">
          Engaging in both backend and frontend development tasks to ensure
          robust and responsive solutions.
        </li>
        <li className="mb-2">
          Designing and integrating APIs to enhance system capabilities.
        </li>
      </ul>
      <p className="mb-4">
        My experience at Money4You has honed my skills in backend technologies
        while providing opportunities to expand my proficiency in frontend
        development, aligning with my goal to become a well-rounded full-stack
        developer.
      </p>
    </>
  ),
  items: [
    {
      company: "Money4you.financial",
      position: "BackEnd Developer",
      duration: "2023 - 2024",
    },
  ],
};

// Education
const education = {
  icon: "/assests/resume/cap.svg",
  title: "My Education",
  description: "",
  items: [
    {
      institution: "Georgian Technical University",
      degree: "Faculty of Informatics and Management Systems",
      duration: "2023 - Present",
    },
  ],
};

// Skills
const skills = {
  title: "My Skills",
  description:
    "Proficient in a range of modern technologies for building dynamic and responsive web applications. Skilled in both front-end and back-end development.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
    },
    {
      icon: <SiMysql />,
      name: "SQL",
    },
    {
      icon: <FaPython />,
      name: "Python",
    },
    {
      icon: <FaDocker />,
      name: "Docker",
    },
    {
      icon: <SiPostman />,
      name: "Postman",
    },
    {
      icon: <SiFirebase />,
      name: "Firebase",
    },
    {
      icon: <SiLaravel />,
      name: "Laravel",
    },
    {
      icon: <FaPhp />,
      name: "PHP",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              {/* Experience */}
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <div className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </div>
                <ScrollArea className="h-[400px]">
                  <ul className="gird grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="gird grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* Skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid gird-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            {/* About me */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
