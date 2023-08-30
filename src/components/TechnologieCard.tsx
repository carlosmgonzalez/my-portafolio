"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


const TechnologieCard = ({title, icon}: {title: string, icon: React.ReactElement}) => {
  return (
    <Card>
      <CardHeader  className="flex items-center justify-center p-2">
        <CardTitle className="text-base">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex items-center justify-center p-2">
        {icon}
      </CardContent>
    </Card>
  );
};

export default TechnologieCard