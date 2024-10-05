import React from "react";
import { ProfileDetails } from "./_components/profile-details";
import { WorkExperience } from "./_components/work-experience";

function AboutPage() {
  return (
    <div>
      <div>
        <ProfileDetails />
      </div>
      <div>
        <WorkExperience />
      </div>
    </div>
  );
}

export default AboutPage;
