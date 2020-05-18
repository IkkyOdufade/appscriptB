import React from "react";
import { FaEllipsisV } from "react-icons/fa";
import './style.css';

export default function Eachpage({ pageno, time }) {
  return (
    <div className="second">
      <button>
        <div className="upper"></div>
       <div className='page_time_ellips'>
       <div className="page_time">
          <p className="pageno">{pageno}</p>
          <p className="timecreated">{time}</p>
        </div>
        <FaEllipsisV className="ellipsis" />
       </div>
      </button>
    </div>
  );
}

Eachpage.defaultProps = {
  pageno: "New page",
  time: "Created 5 mins ago",
};
