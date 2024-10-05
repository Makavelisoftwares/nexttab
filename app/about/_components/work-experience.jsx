import { Dot } from "lucide-react";

export const WorkExperience = () => {
  const works = [
    {
      company: "Kwale County Assembly",
      occupation: "Intern",
      duration: "April 2023-August 2023",
      description: [
        `
          Successfully installed and configured networking systems , improving network
          connectivity by 25% and reducing downtime by 15%  
        `,
        `
          Repaired and maintained hardware reducing equipment failures by 20% and extending
          the lifespan of devices by 30%.
        `,
        `
          Provided computer literacy training to government officials , resulting in a 35% increase
          in their productivity and a 40% reduction in support requests.
        `,
        `
          Efficiently fixed and maintained parliamentary and electronic equipment, ensuring a
          95% uptime during sessions and and minimising disruptions.
        `,
        `
          Managed and optimized governmental systems, leading to a 20% improvement in system
          performance and a 25% reduction in technical issues.
        `,
        `
          Assembled and deployed networking equipment ,enhancing network stability and
          increasing data transmission speed by 20%
        `,
      ],
    },
    {
      company: "Kenya School For Intergrated Medicine",
      occupation: "Intern",
      duration: "April 2022-August 2022",
      description: [
        `
          Managed and Maintained ICT systems , resulting in a 30% reduction in system
          downtime, which improved overall operational efficiency by 20% 
        `,
        `
          Conducted training session on digital literacy for trainers , enhancing their skills and
          leading to a 40% increase in trainee engagement and a 25% improvement in training
          outcomes.
        `,
        `
          Developed and Managed Learning Management systems (LMS), resulting in a 50%
        increase in course accessibility and a 35% growth in user enrolment.
        `,
        `
         Implemented Online marketing strategies , including social media and CMS website
          management , which led to a 45% increase in online engagement and and a 30% boost in
          website traffic.
        `,
      ],
    },
  ];
  return (
    <div className="mt-3">
      <div className="text-2xl font-bold tracking-wider">Work Experience</div>

      {works?.map((item, i) => (
        <div className="mt-2" key={i}>
          <div>{item?.company}</div>
          <div>{item?.occupation}</div>
          <div className="italic text-sm">{item?.duration}</div>

          <div className="text-sm text-muted-foreground mt-2">
            {item?.description?.map((it, i) => (
              <div className="flex items-center space-x-3" key={i}>
                <Dot />
                <span>{it}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
