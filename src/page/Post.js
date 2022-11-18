import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import {faSmile,faPaperPlane} from "@fortawesome/free-solid-svg-icons"

const Post = () => {
  return (
    <div className="flex justify-center pt-6">
      <div className="flex flex-col justify-evenly p-4 border shadow-lg shadow-black  w-3/12">
        <div className="flex justify-start">
          <img
            src="https://images.pexels.com/photos/529782/pexels-photo-529782.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="..."
            className=" rounded-full h-14 w-14"
          />
          <div>
            <h1 className="pl-2 font-semibold">Anil Deep Singh</h1>
            <div className="pl-2  text-slate-500">July 17, 2018</div>
          </div>
        </div>
        <div>
          <p className="font-extrabold text-3xl pt-5">
            Web Design Templates Selection
          </p>
        </div>
        <div className="grid grid-cols-3 gap-1 pt-4">
          <img
            className="rounded-tl-xl"
            src="https://images.pexels.com/photos/819805/pexels-photo-819805.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <img
            className="h-24"
            src="https://images.pexels.com/photos/104842/bmw-vehicle-ride-bike-104842.jpeg?auto=compress&cs=tinysrgb&w=1600"
          />
          <img
            className="rounded-tr-xl"
            src="https://images.pexels.com/photos/1045535/pexels-photo-1045535.jpeg?auto=compress&cs=tinysrgb&w=1600"
          />
        </div>
        <div className="grid grid-cols-2 gap-1 pt-1">
          <img
            className="h-40 rounded-bl-xl"
            src="https://images.pexels.com/photos/34006/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <img
            className="rounded-br-xl h-40"
            src="https://images.pexels.com/photos/1161996/pexels-photo-1161996.jpeg?auto=compress&cs=tinysrgb&w=1600"
          />
        </div>
        <div className="pt-4">
          <p className="font-normal">
            Hey it's me Anil Deep Singh, Just flexing my designing skill as well
            as my both of the passion in one single frame which is Coding as
            well as riding bikes.
          </p>
        </div>
        <div className=" pt-4 pb-4 text-red-600">
          <FontAwesomeIcon icon={faHeart} />
          <span className="text-black pl-2 font-semibold text-lg">34</span>
        </div>
        <div className=" flex bg-slate-200 pt-2 rounded-md">
          <input
            className="bg-slate-200 p-2 w-full rounded-md outline-none border-none"
            placeholder="Write a Comment"
          /><FontAwesomeIcon className="pt-2 px1-2 text-slate-500" icon={faSmile} />
          <FontAwesomeIcon className="pt-2 px-3 text-blue-400" icon={faPaperPlane}/>
        </div>
        <div className="flex justify-start pt-4">
          <img
            src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="..."
            className=" rounded-full h-14 w-14"
          />
          <div>
            <span className="pl-2 font-semibold">Raja</span>
            <span className="pl-2  text-slate-500">July 17, 2018</span>
            <h1 className="pl-2">Work hard, you have a great passion .</h1>
            <div className="text-red-600 pt-2 pl-2">
              <FontAwesomeIcon icon={faHeart} />
              <span className="pl-3 text-black font-semibold">15</span>
              <span className="pl-5 text-black font-semibold">Reply</span>
            </div>
          </div>
        </div>
        <div className="flex justify-start pt-4">
          <img
            src="https://images.pexels.com/photos/91224/pexels-photo-91224.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="..."
            className=" rounded-full h-14 w-14"
          />
          <div>
            <span className="pl-2 font-semibold">Dilip</span>
            <span className="pl-2  text-slate-500">3 minutes ago</span>
            <h1 className="pl-2 ">Great work anil, keep working.</h1>
            <div className="text-red-600 pt-2 pl-2">
              <FontAwesomeIcon icon={faHeart} />
              <span className="pl-3 text-black font-semibold">9</span>
              <span className="pl-5 text-black font-semibold">Reply</span>
            </div>
          </div>
        </div>
        <div className="pt-4">
          <div className="font-bold bg-slate-200 text-center p-2">
            Show more comment
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
