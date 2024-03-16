import React from "react";
import spinnerImage from "@/assets/spinner/spinner.svg";
import Image from "next/image";

const Spinner = () => {
  return (
    <div>
      <Image src={spinnerImage} width={30} height={30} alt="loading" />
    </div>
  );
};

export default Spinner;
