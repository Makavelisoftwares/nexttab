import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { db } from "@/lib/db";
import { List } from "lucide-react";
import Image from "next/image";

export const Posts = async () => {
  const blogs = await db.blog.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return (
    <div>
      {blogs?.length < 1 ? (
        <div className="text-muted-foreground w-[400px] flex flex-col items-center space-y-3 m-auto min-h-[50vh]">
          <List className="w-[250px] h-[250px]" />
          <div>No post has been pulished yet.</div>
        </div>
      ) : (
        <>
          {blogs?.map((blog, i) => (
            <Card key={i} className="mt-2 shadow-none border-none">
              <CardHeader>
                <CardTitle>{blog?.title}</CardTitle>
                <CardDescription>{blog?.description}</CardDescription>
              </CardHeader>
              <CardContent>
                {blog?.image && (
                  <div className="relative aspect-square">
                    <Image
                      fill
                      src="/profile.jpg"
                      className="object-cover z-30"
                    />
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </>
      )}
    </div>
  );
};
