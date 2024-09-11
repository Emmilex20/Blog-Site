import React from "react";
import { formatDate } from "../../../utils/formatDate";
import EditorJSHTML from 'editorjs-html'

const editorJSHTML = EditorJSHTML();


const SingleBlogCard = ({ blog }) => {
  const { title, description, content, author, coverImg, category, rating, createdAt } =
    blog || {};
    const htmlContent = editorJSHTML.parse(content).join('');

  return (
    <>
      <div className="bg-white p-8">
        {/* blog header */}
        <div>
          <h1 className="md:text-4xl text-3xl font-medium mb-4">{title}</h1>
          {/* TODO: Need to change author */}
          <p className="mb-6">{formatDate(createdAt)} by <span className="text-blue-400 cursor-pointer">Admin 1</span></p>
        </div>

        {/* blog cover image */}
        <div>
        <img src={coverImg} alt="Cover Image" className="w-full md:h-[520px] bg-cover"/>
        </div>

        {/* blog content */}
        <div className="mt-8 space-y-4">
            <div dangerouslySetInnerHTML={{__html: htmlContent}} className="space-y-3 editorjsdiv" />

            <div>
                <span className="text-lg font-medium">Rating: </span>
                <span>{rating} (based on 2,320 reviews)</span>
            </div>            
        </div>
      </div>
    </>
  );
};

export default SingleBlogCard;
