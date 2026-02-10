import React from "react";
import "./TechnologiesSlider.css";

const techList = [
  { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
  { name: "ASP.NET", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg" },
  { name: "Blazor", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blazor/blazor-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
  { name: "Vue", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: ".NET MAUI", icon: "https://cdn.jsdelivr.net/gh/callback-io/allogo@main/public/logos/dotnet/icon.svg" },
  { name: "Xamarin", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xamarin/xamarin-original.svg" },
  { name: "DevOps", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuredevops/azuredevops-original.svg" },
  { name: "SQL Server", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "Google Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" }
];

const TechnologiesSlider = () => {
  return (
    <section className="section tech-section bg-light">
      <div className="container">

        <div className="section-title">
          <h2>Technologies We Use</h2>
          <p>Modern tools & platforms powering our solutions</p>
        </div>

        <div className="slider">
          <div className="slide-track">
            {[...techList, ...techList].map((tech, index) => (
              <div className="slide" key={index}>
                <img src={tech.icon} alt={tech.name} />
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TechnologiesSlider;
