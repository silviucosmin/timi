import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Cosmin", hasColor: "" },
  { meta: "last name", metaInfo: "Stuparu", hasColor: "" },
  { meta: "Age", metaInfo: "30 Years", hasColor: "" },
  { meta: "Nationality", metaInfo: "Romanian", hasColor: "" },
  { meta: "Freelance", metaInfo: "Available on UpWork", hasColor: "green" },
  { meta: "Work Time", metaInfo: "09:00-20:00 Mo-Fr", hasColor: "" },
  { meta: "Location", metaInfo: "Bucharest", hasColor: "" },
  { meta: "langages", metaInfo: "German, English, Romanian", hasColor: "" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span
            className={`value d-block d-sm-inline-block d-lg-block d-xl-inline-block ${val.hasColor}`}
          >
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
