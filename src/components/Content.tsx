// import profile from "./others/profile.jpg";

import CreatePosts from "./Contents/CreatePosts";
import MainContentHeader from "./Contents/MainContentHeader";
import WhatsOnYourMind from "./Contents/WhatsOnYourMind";
import { posts } from "./PostsContainer";
const Content = () => {
  return (
    <div className="content">
      <div className="contents">
        <div className="leftSidebar">Column 1</div>
        <div className="mainContentContainer">
          <div className="mainContent">
            <MainContentHeader />
            <WhatsOnYourMind />

            {posts.length === 0
              ? "No posts available"
              : posts.map((post, index) => (
                  <CreatePosts key={index} {...post} />
                ))}
          </div>
        </div>
        <div className="rightSidebar">Column 3</div>
      </div>
    </div>
  );
};

export default Content;
