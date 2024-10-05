import { Briefcase, Github, Linkedin, Phone, PhoneCall } from "lucide-react";
import { LandingPageInfo } from "./_components/landing-page-info";
import Link from "next/link";

export default async function Home() {
  return (
    <div className="w-full">
      <div className="md:w-[800px] m-auto  p-4 md:text-4xl text-xl font-bold text-center">
        <LandingPageInfo />
      </div>

      <div className="md:hidden ">
        <div className="text-center font-bold text-sm">Contact Us</div>

        <div className="mt-2">
          <div className="flex items-center justify-center">
            <Link href="#" className="flex items-center  space-x-2 text-sm">
              <span>+254112922255</span>
            </Link>
          </div>
          <div className="flex text-muted-foreground items-center justify-between px-10 mb-10 space-y-3">
            <Link
              href="/about"
              className="flex items-center  space-x-2 text-sm"
            >
              <Briefcase className="" />
            </Link>
            <Link
              target="_blank"
              href="https://github.com/makavelisoftwares"
              className="flex items-center  space-x-2 text-sm"
            >
              <Github className="" />
            </Link>
            <Link
              target="_blank"
              href="https://linkedin.com/in/omar-maulid"
              className="flex items-center  space-x-2 text-sm"
            >
              <Linkedin className="" />
            </Link>

            <Link
              target="_blank"
              href="https://wa.me/254780679077"
              className="flex items-center  space-x-2 text-sm"
            >
              <Phone className="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
