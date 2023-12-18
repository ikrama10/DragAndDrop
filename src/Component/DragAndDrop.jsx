  import React, { useRef } from "react";

  const DragAndDrop = () => {
    const fillRef = useRef();

    const handleDragStart = (e) => {
      e.dataTransfer.setData("text", fillRef.current.id);
    };

    const handleDragOver = (e) => {
      e.preventDefault();
    };

    const handleDrop = (e) => {
      e.preventDefault();
      const droppedItem = document.getElementById(e.dataTransfer.getData("text"));

      if (droppedItem) {
        e.target.appendChild(droppedItem);
      }
    };

    return (
      <div className="bg-gray-300 h-screen">
        <div className="">
          <h1 className="pt-20 text-3xl font-bold uppercase text-center text-black ">
            Welcome to Drag And Drop
          </h1>
          <p className="text-center text-lg mt-3 mb-6 font-semibold  text-gray-900">
            Pick the picture and drop it into any of the boxes
          </p>
          <div className="flex justify-between w-[90%] mx-auto">
            <div
              className=" empty bg-white h-52 w-52 shadow-xl "
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >
              <div
                id="draggableItem"
                className="fill cursor-pointer bg-[url('https://source.unsplash.com/random/200x200')] bg-cover h-full"
                draggable
                ref={fillRef}
                onDragStart={handleDragStart}
              ></div>
            </div>
            <div
              className=" empty bg-white h-52 w-52 shadow-xl "
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            ></div>
            <div
              className=" empty bg-white h-52 w-52 shadow-xl "
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            ></div>
            <div
              className=" empty bg-white h-52 w-52 shadow-xl "
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            ></div>
            <div
              className=" empty bg-white h-52 w-52 shadow-xl "
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            ></div>
          </div>
        </div>
      </div>
    );
  };

  export default DragAndDrop;
