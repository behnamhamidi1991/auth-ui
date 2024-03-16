import React from "react";
import "./dashboard.css";
import Image from "next/image";
import profileImg from "@/assets/profile-image.webp";
import Link from "next/link";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-header mb-20">
        <h1>Welcome to your dashboard</h1>
      </div>
      <div className="dashboard-body-container">
        <div className="dashboard-sidebar">
          <div className="dashboard-image-container">
            <Image src={profileImg} alt="profile-image" />
          </div>
          <div className="dashboard-sidebar-info">
            <h4>Welcome Dear User</h4>
            <ul className="flex flex-col gap-2 my-4">
              <li>
                <Link href="/">Messages</Link>
              </li>
              <li>
                <Link href="/">Feedbacks</Link>
              </li>
              <li>
                <Link href="/">Comments</Link>
              </li>
            </ul>

            <div className="post-counts">You have 24 posts</div>
          </div>
        </div>

        <div className="dashboard-blog-content">
          <form>
            <h4>Write your blog post here ...</h4>
            <input type="text" placeholder="Your blog title ..." />
            <textarea placeholder="Your blog content ..." />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
