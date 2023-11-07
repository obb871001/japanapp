import React from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const PageHeader = ({ title }) => {
  const navigate = useNavigate();
  return (
    <div className="h-[60px] bg-white flex items-center justify-between px-common-padding-x">
      <MdOutlineKeyboardArrowLeft
        className="text-2xl"
        onClick={() => {
          navigate(-1);
        }}
      />
      <span>{title}</span>
      <section></section>
    </div>
  );
};

export default PageHeader;
