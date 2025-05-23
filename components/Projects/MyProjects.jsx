import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { ProjectsCardList } from "./ProjectsCardList";

export function MyProjects() {
  const projectsName = [
    "HTML",
    "Tailwind",
    "React",
    "Nextjs",
    "Full Stack",
    "Next & Typescript",
  ];

  return (
    <div className="relative flex flex-col items-center min-h-[50rem] w-full justify-center bg-white dark:bg-black">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      <p className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
        My Projects
      </p>
      <div className="relative z-20 w-full overflow-hidden py-4">
        <ul className="flex flex-row items-center justify-center flex-wrap px-4 sm:px-0 gap-4">
          {projectsName.map((item) => (
            <Button variant="outline">{item}</Button>
          ))}
        </ul>
      </div>
      <ProjectsCardList />
      <div className="my-4 ">
        <Button className="relative z-20 cursor-pointer" variant="outline">
          See More
        </Button>
      </div>
    </div>
  );
}
