"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { BlogForm } from "@/validator/schema";
import { Input } from "@/components/ui/input";
import { useState, useTransition } from "react";
import { Textarea } from "@/components/ui/textarea";
import { UploadDropzone } from "../../../lib/uploadthing";
import Image from "next/image";
import { X } from "lucide-react";
import { CreateABlogPost } from "@/actions/blog.action";

export const CreateBlogForm = () => {
  const [image, setimage] = useState("");
  const [pending, startTransition] = useTransition();
  const [error, seterror] = useState("");
  const [succ, setsucc] = useState("");
  const form = useForm({
    resolver: zodResolver(BlogForm),
  });

  function onSubmit(values) {
    console.log(values);
    startTransition(async () => {
      const { err, success } = await CreateABlogPost(
        values.heading,
        values.description,
        image
      );

      if (err) {
        setsucc("");
        seterror(err);
      }

      if (!err) {
        seterror("");
        setsucc(success);
      }
    });
  }

  return (
    <Form {...form}>
      {error ? (
        <div className="text-rose-500 bg-rose-100 p-2">{error}</div>
      ) : (
        <div className="text-emerald-500 bg-emerald-100 p-2">{succ}</div>
      )}
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="heading"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input disabled={pending} placeholder="Blog Title" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  disabled={pending}
                  placeholder="Blog Desription"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <div>
          {image ? (
            <div className="relative aspect-video">
              <div
                onClick={() => setimage("")}
                className="bg-rose-500 absolute top-0 right-4 text-white h-[50px] w-[50px] flex items-center justify-center cursor-pointer"
              >
                <X />
              </div>
              <Image src={image} alt="image" className="object-contain" />
            </div>
          ) : (
            <UploadDropzone
              endpoint="blogimage"
              onClientUploadComplete={(res) => {
                alert("image uploaded");
                setimage(res[0].url);
              }}
              onUploadError={(err) => {
                alert("failed to upload image");
                toast.error(`Error: ${err.message}`);
              }}
            />
          )}
        </div>
        <Button disabled={pending} type="submit">
          Publish
        </Button>
      </form>
    </Form>
  );
};
