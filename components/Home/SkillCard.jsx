import * as React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import ReactIcons from "@/public/asstes/react.png"

export function SkillCard() {
  return (
    <Card className="w-[100px]">
      <h1 className="text-center font-bold py-2">React</h1>
      <CardContent>
        <Image
          src={ReactIcons}
          alt="React logo"
          width={60}
          height={60}
        />
      </CardContent>
    </Card>
  );
}
