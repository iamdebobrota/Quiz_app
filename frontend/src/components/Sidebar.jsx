import React from "react";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getAll, getOthers } from "../Redux/action";

const Sidebar = () => {
  const { token, name } = useSelector((state) => state.authReducer);
 const dispatch = useDispatch();

  const handleClick = (e) => {
    // const value = e.target.innerHTML.toLowerCase();
    // if(value === "all") {
    //   dispatch(getAll())
    // } else {
    //   dispatch(getOthers(value))
    // }
  };
  return (
    <div className="bg-gray-100 w-1/6">
      <div>
        <p className="bg-teal-600 py-4 text-white text-2xl">{name}</p>
      </div>
      <div className="my-10">
        <p
          className="cursor-pointer bg-blue-200 py-2 px-4 mt-1 rounded"
          onClick={handleClick}
        >
          All
        </p>
        <p
          className="cursor-pointer bg-green-200 py-2 px-4 mt-1 rounded"
          onClick={handleClick}
        >
          Personal
        </p>
        <p
          className="cursor-pointer bg-purple-200 py-2 px-4 mt-1 rounded"
          onClick={handleClick}
        >
          Official
        </p>
        <p
          className="cursor-pointer bg-orange-200 py-2 px-4 mt-1 rounded"
          onClick={handleClick}
        >
          Others
        </p>
      </div>
      <div className="mt-[400px] py-10 bg-blue-100">
        <Button
          className="text-3xl"
          varient="outlined"
          onClick={() => {
            localStorage.setItem("user", JSON.stringify(""));
            window.location.reload();
          }}
        >
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
