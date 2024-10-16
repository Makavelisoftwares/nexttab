"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState, useTransition } from "react";
import { createSub } from "./actions/subscribe.action";
import { toast } from "sonner";

export const NewsLetter = () => {
  const [email, setemail] = useState("");
  const [name, setname] = useState("");
  const [open, setopen] = useState(false);

  const [pending, startTtansition] = useTransition(false);

  const handleSubscribe = () => {
    startTtansition(async () => {
      const { err } = await createSub(name, email);
      if (err) {
        return;
      }

      setopen(false);
      toast.success("thank you for subscribing");
    });
  };
  return (
    <section className="py-20 bg-sky-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-sky-900">
          Stay Ahead of the Curve
        </h2>
        <p className="text-xl mb-10 text-sky-700 max-w-2xl mx-auto">
          Subscribe to our newsletter for the latest tech insights, industry
          trends, and innovation updates.
        </p>
        <Dialog open={open} onOpenChange={setopen}>
          <DialogTrigger asChild>
            <Button
              size="lg"
              className="bg-sky-500 hover:bg-sky-600 text-white transition-colors duration-300 text-lg px-8 py-3 rounded-full"
            >
              Join Our Newsletter
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-sky-900">
                Subscribe to Our Newsletter
              </DialogTitle>
              <DialogDescription className="text-sky-700">
                Get weekly updates on technology trends and insights directly in
                your inbox.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <Input
                id="name"
                disabled={pending}
                onChange={(e) => setname(e.target.value)}
                placeholder="Your name"
                className="border-sky-300 focus:border-sky-500"
              />
              <Input
                disabled={pending}
                id="email"
                type="email"
                onChange={(e) => setemail(e.target.value)}
                placeholder="Your email"
                className="border-sky-300 focus:border-sky-500"
              />
              <Button
                disabled={pending}
                onClick={handleSubscribe}
                type="submit"
                className="bg-sky-500 hover:bg-sky-600 text-white transition-colors duration-300"
              >
                Subscribe
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};
