"use client";
import React from "react";

interface Props {
  data: {
    reason_title: string;
    reason_desc: string;
    reason_image: {
      name: string;
      width: number;
      height: number;
      url: string;
    }[];
  }[];
}

const reasons = [
  "Industry experts",
  "Dedicated team",
  "Outcome focused",
  "High Quality Service",
  "Cyber security service",
];

const SelectReason = (props: Props) => {
  const [active, setActive] = React.useState(0);

  const getImage = (index: number) => {
    console.log(props.data[index].reason_image[0].url);
    if (props.data[index].reason_image) {
      return process.env.STRAPI_URL + props.data[index].reason_image[0].url;
    }
    return "";
  };
  return (
    <div className="grid grid-cols-2 mt-20">
      <div className="relative flex items-center">
        <div className="w-72 aspect-square rounded-full bg-red-500/80 flex flex-col items-start justify-center px-8 translate-x-8 relative z-30">
          <p className="capitalize text-white font-semibold mb-2">
            {props.data[active].reason_title}
          </p>
          <p className="capitalize text-white text-sm">
            {props.data[active].reason_desc}
          </p>
        </div>
        <div
          style={{ backgroundImage: `url(${getImage(active)})` }}
          className={`w-72 aspect-square rounded-full flex flex-col items-start justify-center px-8 -translate-x-8  bg-center`}
        ></div>
        <div className="absolute w-8 aspect-square bg-red/50"></div>
      </div>
      <div>
        <div className="pl-40">
          <div className="flex flex-col gap-4">
            {props.data.map((reason, index) => (
              <div
                key={index}
                className={`w-full cursor-pointer ${
                  active === index ? "bg-red-500" : "bg-gray-200"
                } py-2 px-4 text-white rounded-s-full flex items-center justify-between`}
                onClick={() => setActive(index)}
              >
                <span
                  className={`text-xl ${
                    active === index ? "text-white" : "text-black"
                  } font-semibold`}
                >
                  &lt;
                </span>
                <span
                  className={`${
                    active === index ? "text-white" : "text-black"
                  } font-semibold`}
                >
                  {reason.reason_title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectReason;
