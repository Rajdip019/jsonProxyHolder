import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Comments from "../../components/Comments";
import { template } from "../../../helpers/template";

const Post = ({ postData, postComments }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="lg:w-10/12 w-11/12 text-center my-36 mx-auto">
        <h1 className="font-semibold text-3xl">{postData.title}</h1>
        <p className="text-xl w-6/12 mx-auto my-10">{postData.body}</p>
        <p className="ml-5 text-slate-400">by User - {postData.userId} </p>
        <h1 className="font-bold my-10 text-xl">Commnets 👇</h1>
        <div className="mt-16">
          {postComments.map((comment) => {
            return (
              <Comments
                name={comment.name}
                email={comment.email}
                body={comment.body}
              />
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export async function getServerSideProps({ params: { post } }) {
  try {
    const {templateString} = template 
    const res1 = await fetch(`${templateString}/api/${post}`);
    const data = await res1.json();
    const res2 = await fetch(`${templateString}/api/${post}/comments`);
    const data2 = await res2.json();
    return {
      props: {
        postData: data,
        postComments: data2,
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
}

export default Post;
