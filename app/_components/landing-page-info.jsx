import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";

export const LandingPageInfo = () => {
  return (
    <div className="mt-4">
      <div>
        Build Your Next{" "}
        <span className=" text-rose-500">Enterprise Software</span> with NextTab
      </div>

      <div className="flex items-center flex-col justify-center mt-3">
        <Star className="text-amber-500" />
        <div className="text-muted-foreground text-xs">Top rated</div>
      </div>

      <div className="mt-10">
        <div className="text-xl mb-2">NextTab Services</div>

        <div className="grid grid-cols-1 gap-2">
          <Card className="col-span-1 shadow-none rounded-none ">
            <CardHeader>
              <CardTitle className="text-sm">
                Web Development & Design{" "}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-muted-foreground text-sm">
                Leverage the power of the web with our expertly crafted web
                application development services. Whether it's a simple website
                or a complex web platform, we've got you covered.
              </div>
            </CardContent>
          </Card>
          <Card className="col-span-1 shadow-none rounded-none ">
            <CardHeader>
              <CardTitle className="text-sm">
                Mobile Development & Design{" "}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-muted-foreground text-sm">
                Reach your audience on-the-go with our mobile app development
                services. We build engaging and user-friendly mobile
                applications for iOS and Android platforms.
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
