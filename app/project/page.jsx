import React from "react";
import { ProjectCard } from "./_components/project-card";

function ProjectPage() {
  return (
    <div>
      <div className="text-2xl font-bold mb-2">Projects</div>
      <div className="text-sm text-muted-foreground">
        This section provides an overview of all projects i've successfully
        worked on .The links are provided and also a short description about the
        project is written ,Technologies used in developing the projects are
        highlighted in badges .Feel free and have fun interacting with the
        projects
      </div>

      <div>
        <ProjectCard />
      </div>
    </div>
  );
}

export default ProjectPage;
