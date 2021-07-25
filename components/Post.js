import Image from "next/image";
import { ChatAltIcon, ShareIcon, ThumbUpIcon } from "@heroicons/react/outline";

export const Post = ({ name, message, email, postImage, image, timestamp }) => {
  return (
    <div className="flex flex-col">
      <div className="p-5 bg-white mt-5 rounded-t-2xl shadow-md">
        {/* Header of post */}
        <div className="flex items-center space-x-2">
          <Image
            className="rounded-full"
            src={`https://links.papareact.com/4zn`}
            width={40}
            height={40}
            layout="fixed"
          />
          <div>
            <p className="font-medium">{name}</p>
            <p className="text-xs text-gray-400">
              {new Date(timestamp?.toDate()).toLocaleString()}
            </p>
          </div>
        </div>

        {/* */}

        <p className="pt-4 font-medium">{message}</p>
      </div>

      {postImage && (
        <div className="relative h-56 md:h-96 bg-white">
          <Image src={postImage} objectFit="cover" layout="fill" />
        </div>
      )}

      {/* Footer of post */}

      <div className="flex justify-between items-center rounded-b-2x bg-white shadow-md text-gray-400 border-t rounded-bl-2xl rounded-br-2xl">
        <div className="inputIcon rounded-bl-2xl">
          <ThumbUpIcon className="h-5" />
          <p className="text-xs sm:text-base">Like</p>
        </div>

        <div className="inputIcon rounded-none">
          <ChatAltIcon className="h-5" />
          <p className="text-xs sm:text-base">Comment</p>
        </div>

        <div className="inputIcon rounded-br-2xl">
          <ShareIcon className="h-5" />
          <p className="text-xs sm:text-base">Share</p>
        </div>
      </div>
    </div>
  );
};
