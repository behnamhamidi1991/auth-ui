import React from "react";
import "./homepage.css";
import { blogData, courses } from "@/data";
import Link from "next/link";
import Image from "next/image";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="homepage-left">
        <div className="homepage-left-header">
          <h1>Welcome To Devlingo</h1>
          <p>Dulingo is free and it always will be</p>
        </div>

        <div className="homepage-courses">
          {courses.map((item) => (
            <div key={item.id} className="course-box">
              <div className="homepage-courses-image-container">
                <Image
                  src={item.img}
                  alt={item.title}
                  className="home-page-courses-image"
                />
              </div>
              <div className="homepage-courses-content">
                <h3>{item.title}</h3>
                <p>{item.content.substring(0, 199)} ...</p>
                <button>Start The Course</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="homepage-right">
        <div className="homepage-right-header">
          <h2>Blog Section</h2>
          <p>Read our latest posts</p>
        </div>
        <div className="homepage-right-content">
          {blogData.map((item) => (
            <div key={item.id} className="homepage-right-box">
              <h3>{item.title}</h3>
              <p>
                {item.content.substring(0, 99)} ... <br />
                <Link href="/" className="readmoreBtn">
                  Read More
                </Link>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homepage;

// &#39;
