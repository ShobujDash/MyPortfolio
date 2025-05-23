import { cn } from "@/lib/utils";
import { Spotlight } from "../ui/spotlight";
import { SkillCard } from "./SkillCard";

export function Skills() {
  const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="relative flex min-h-[25rem] w-full overflow-hidden rounded-md bg-black/[0.96] antialiased md:justify-center">
      <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
          "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]"
        )}
      />
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
      <div className="relative z-10 mx-auto w-full max-w-7xl p-4  md:pt-0">
        <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl py-2">
          My Skills
        </h1>
        <div className="max-w-6xl mx-auto flex flex-row flex-wrap  gap-2 mt-4">
          {myArray.map((item) => (
            <div key={item}>
              <SkillCard />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
