import React from "react";
import { GrAdd } from "react-icons/gr";
import Eachpage from "./Eachpage";

export default function Pages() {
  return (
    <section className="mainbody">
      <div className="first">
        <button>
          <GrAdd className="addbtn" />
          <p>Add a new page</p>
        </button>
      </div>
        {["", "", "", "", "", "", "", ""].map((page, index) => {
          return <Eachpage page={page} />;
        })}
    </section>
  );
}
