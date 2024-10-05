import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Briefcase,
  Github,
  Link2,
  Linkedin,
  Phone,
  PhoneCall,
} from "lucide-react";
import Link from "next/link";

export const SideBar = () => {
  return (
    <div className="flex flex-col items-center space-y-4 ">
      <div>
        <Avatar className="h-[200px] w-[200px] rounded-full">
          <AvatarImage
            src="/profile2.jpg"
            className="object-cover object-center"
          />
          <AvatarFallback>Founder</AvatarFallback>
        </Avatar>
      </div>
      <div>
        <div className="flex mb-2 items-center flex-col">
          <span className="text-xl font-bold ">Mwacheti Omar Maulid</span>
          <span className="text-sm ">
            Software Engineer
          </span>
          <span className="text-sm ">CEO/Founder</span>
        </div>

        <div className="flex flex-col text-muted-foreground space-y-3">
          <Link href="/about" className="flex items-center  space-x-2 text-sm">
            <Briefcase className="" />
            <span>Work Experience</span>
          </Link>
          <Link
            target="_blank"
            href="https://github.com/makavelisoftwares"
            className="flex items-center  space-x-2 text-sm"
          >
            <Github className="" />
            <span>Github</span>
          </Link>
          <Link
            target="_blank"
            href="https://linkedin.com/in/omar-maulid"
            className="flex items-center  space-x-2 text-sm"
          >
            <Linkedin className="" />
            <span>LinkedIn</span>
          </Link>
          <Link href="#" className="flex items-center  space-x-2 text-sm">
            <PhoneCall className="" />
            <span>+254112922255</span>
          </Link>
          <Link
            target="_blank"
            href="https://wa.me/254780679077"
            className="flex items-center  space-x-2 text-sm"
          >
            <Phone className="" />
            <span>Whatsapp</span>
          </Link>
        </div>

        
      </div>
    </div>
  );
};
