import { createUploadthing } from "uploadthing/next";

const f = createUploadthing();

const handleAuth = async () => {
  return {
    userId: "1",
  };
};

export const ourFileRouter = {
  blogimage: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
    .middleware(() => handleAuth())
    .onUploadComplete(({ metadata, file }) => {
      console.log(file.url, metadata);
    }),
};
