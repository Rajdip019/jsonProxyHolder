import Link from "next/link";
import React from "react";

const Card = ({ title, body, id , userId }) => {

  return (
    <Link href={"post/[post]"} as={`post/${id}`}>
      <div className="xl:w-1/3 md:w-1/2 p-4 cursor-pointer hover:-translate-y-2 transition-all  ">
        <div className="border border-gray-200 p-6 rounded-lg min-h-[325px] hover:shadow-md hover:bg-gray-50 transition-all dark:bg-slate-600">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
            <img
              src={`https://avatars.dicebear.com/api/bottts/${title}.svg`}
              alt=""
            />
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2 dark:text-slate-100 transition-all">
            {title}
          </h2>
          <p className="leading-relaxed text-base dark:text-slate-300 transition-all">{body}</p>
          <p className="my-5 text-slate-500 hover:underline dark:text-slate-200 transition-all">by User - {userId}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
