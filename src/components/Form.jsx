import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/form.css";
import ChatBot from "react-simple-chatbot";
import "../style/chatbot.css";

export const Form = () => {
  // const [name, setName] = useState(``);
  // const [profession, setProfession] = useState(``);
  // const [about, setAbout] = useState(``);
  // const [skills, setProfession] = useState(``);
  // const [projects, setProfession] = useState(``);
  // const [education, setProfession] = useState(``);
  // const [resume, setResume] = useState({
  //   name: ``,
  //   profession: ``,
  //   about: ``,
  //   skills: [],
  //   projects: [],
  //   education: ``,
  // });
  const [data, setdata] = useState(localStorage["resumeData"]);
  const handleEnd = ({ steps, values }) => {
    localStorage.clear();
    // console.log(steps);
    // console.log(values);
    // console.log(`${values[0]}`);

    // setResume({
    //   name: `${values[0]}`,
    //   profession: `${values[1]}`,
    //   about: `${values[2]}`,
    //   skills: [`${values[3]}`],
    //   projects: [`${values[4]}`],
    //   education: `${values[5]}`,
    // });
    localStorage.setItem("resumeData", JSON.stringify(values));
  };

  return (
    <div className="chatbot-main-div">
      <ChatBot
        handleEnd={handleEnd}
        recognitionEnable={true}
        speechSynthesis={{ enable: true, lang: "en" }}
        steps={[
          {
            id: "welcome",
            message: "Hello there! I am Angela your chatBot for the day.",
            trigger: "1",
          },
          {
            id: "1",
            message: "What is your name?",
            trigger: "name",
          },
          {
            id: "name",
            user: true,
            trigger: "3",
          },
          {
            id: "3",
            message: "Hi {previousValue}, nice to meet you!",
            trigger: "4",
          },
          {
            id: "4",
            message: "Can I know your wonderful profession ?",
            trigger: "5",
          },
          {
            id: "5",
            user: true,
            trigger: "6",
          },
          {
            id: "6",
            message: "Tell me something about yourself ?",
            trigger: "7",
          },
          {
            id: "7",
            user: true,
            trigger: "8",
          },
          {
            id: "8",
            message: "Hey amazing person tell me your skills ?",
            trigger: "9",
          },
          {
            id: "9",
            user: true,
            trigger: "10",
          },
          {
            id: "10",
            message: "Man you are wonderful have you created some projects ?",
            trigger: "11",
          },
          {
            id: "11",
            user: true,
            trigger: "12",
          },
          {
            id: "12",
            message: "From where have you completed your education ?",
            trigger: "13",
          },
          {
            id: "13",
            user: true,
            trigger: "14",
          },
          {
            id: "14",
            message:
              "Man you did a great work you have a wonderful career ahead. Get you pdf from the below link.",
            end: true,
          },
        ]}
      />
      <Link to="/resume-data">Resume</Link>
    </div>
  );
};