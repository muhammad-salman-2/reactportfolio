import React from "react";
import FooterFirst from "./FooterFirst";
import FooterSocialMedia from "./FooterSocialMedia";

const FooterTab = () => {
  return (
    <>
      <div className="flex items-center h-60 bg-blue-400 md:space-x-64  bg-opacity-30 rounded-3xl">
        <FooterFirst />
        <FooterSocialMedia />
      </div>
    </>
  );
};

export default FooterTab;
