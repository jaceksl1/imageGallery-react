import React from "react";

const ImageCard = ({ image }) => {
  const tags = image.tags.split(",");

  return (
    <div className="bg-white flex flex-col space-y-4 px-4 py-4 rounded overflow-hidden shadow-2xl relative">
      <img src={image.webformatURL} alt="" className="w-full w-200 h-200" />
      <div className="px-6 py-10">
        <div className="font-bold text-purple-500 text-xl mb-2">
          Photo by <p className="font-bold text-red-500">{image.user}</p>
        </div>
        <ul className="mb-10">
          <li>
            <strong>Views: </strong>
            {image.views}
          </li>
          <li>
            <strong>Downloads: </strong>
            {image.downloads}
          </li>
          <li>
            <strong>Likes: </strong>
            {image.likes}
          </li>
        </ul>
      </div>
      <div className="py-20 absolute inset-x-0 bottom-0 h-5">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ImageCard;
