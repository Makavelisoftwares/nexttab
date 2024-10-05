import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const ProjectCard = () => {
  const projects = [
    {
      name: "EaseRide",
      complete: true,
      description: `
        Easeride is an intuitive car hiring management system designed to simplify
        the vehicle rental process.Clients can browse a wide selevtion of available vehicles ,choose
        the one that fits their needs,and seamlessly hire it for their preffered duration.The platform 
        offers a secure and convenient payment gateway,allowing clients to pay for rentals using paypal,ensuring hasle-free transactions.
        With a focus on user experience ,Easeride automates the entire rental lifecycle,from vehicle selection to payment
        and booking management, providing both clients and car owners with a streamlined reliable solution. 
            `,
      technologies: [
        "NextJs",
        "NodeJs",
        "Tailwind CSS",
        "Clerk",
        "PayPal",
        "MySQL",
        "Shadcn UI",
        "UploadThing",
      ],
      link: "https://easeride.vercel.app",
      image: "/images/easeride.png",
    },
    {
      name: "MAiSOMO",
      complete: true,

      description: `
        Maisomo is a cutting-edge AI-powered LMS that enhances the education experience 
        by leveraging AI. Users can ask qustions directly to an AI model, which responds
         with additional curated learning resources
        such as links ,articles, and books to deepen their understanding .Whether it's for 
        academic purpose or self-paced learning ,Maisomo revolutionizes 
         how users access and consume education material.
            `,
      technologies: [
        "NextJs",
        "NodeJs",
        "Tailwind CSS",
        "NextAuth",
        "Shadcn UI",
        "Gemini AI api",
        "MySQL",

        "UploadThing",
      ],
      link: "https://maisomo-pi.vercel.app",
      image: "/images/maisomo.png",
    },
    {
      name: "PyDev",
      complete: true,

      description: `
        PyDev is an interactive Python editor designed to help users develop and refine their 
        python programming skills. The platform offers a streamlined coding environment 
        where learners can practice writing python code , recieve instant feedback , and access 
        curated exercises that guide them through various levels of proficiency .Whether 
        you're a beginner or advanced coder ,PyDev provides a supportive space for honing you skills ,with 
        built-in tutorials , challenges ,and debugging tools to enhance the learning experience .It's the perfect tool for anyone looking 
        to practice python .
            `,
      technologies: [
        "NextJs",
        "NodeJs",
        "Tailwind CSS",
        "Clerk Auth",
        "Shadcn UI",
        "Jdoodle",
        "MongoDB",
        "UploadThing",
      ],
      link: "https://pydev.vercel.app",
      image: "/images/pydev.png",
    },
    // {
    //   name: "Titan",
    //   complete: false,

    //   description: `
    //     Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    //     Nulla alias mollitia maxime quo libero cupiditate maiores amet molestias,
    //     sapiente aliquid a sequi. Consequatur, vitae quas fugit hic aliquam ipsam
    //     maiores distinctio necessitatibus ut aspernatur maxime quam dicta magnam
    //     libero. Eius.
    //         `,
    //   technologies: [
    //     "NextJs",
    //     "NodeJs",
    //     "Tailwind CSS",
    //     "Clerk Auth",
    //     "Shadcn UI",
    //     "Jdoodle",
    //     "MongoDB",
    //     "UploadThing",
    //   ],
    //   link: "#",
    //   image: "/images/maisomo.png",
    // },
    // {
    //   name: "Komrada",
    //   complete: false,

    //   description: `
    //     Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    //     Nulla alias mollitia maxime quo libero cupiditate maiores amet molestias,
    //     sapiente aliquid a sequi. Consequatur, vitae quas fugit hic aliquam ipsam
    //     maiores distinctio necessitatibus ut aspernatur maxime quam dicta magnam
    //     libero. Eius.
    //         `,
    //   technologies: [
    //     "NextJs",
    //     "NodeJs",
    //     "Tailwind CSS",
    //     "Clerk Auth",
    //     "Shadcn UI",
    //     "Jdoodle",
    //     "MongoDB",
    //     "UploadThing",
    //   ],
    //   link: "#",
    //   image: "/images/maisomo.png",
    // },
  ];

  return (
    <div>
      <div>
        {projects?.map((item, i) => (
          <Card key={i} className="shadow-none rounded-none border-none">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div>
                  <Link
                    className="flex items-center space-x-2"
                    target="_blank"
                    href={item?.link}
                  >
                    <span>{item?.name}</span>
                    <Link2 />
                  </Link>
                </div>

                {item?.complete ? (
                  <div className="flex items-center">
                    <Badge className="bg-emerald-500 tracking-wider">
                      complete
                    </Badge>
                  </div>
                ) : (
                  <div className="flex items-center">
                    <Badge className="bg-sky-500 tracking-wider">
                      inprogress
                    </Badge>
                  </div>
                )}
              </CardTitle>
              <CardDescription>
                <div>{item?.description}</div>
                <div className="md:flex mt-2 grid grid-cols-3 gap-1 md:items-center md:space-x-3">
                  {item?.technologies?.map((it, i) => (
                    <Badge className="text-xs col-span-1 text-center flex items-center justify-center" key={i}>{it}</Badge>
                  ))}
                </div>
              </CardDescription>

              <CardContent>
                <div className="relative aspect-video">
                  <Image fill src={item?.image} className="object-contain" />
                </div>
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};
