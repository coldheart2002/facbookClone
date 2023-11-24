import CreateStory from "./CreateStory";
import { stories } from "./StoriesContainer";

const MainContentHeader = () => {
  return (
    <>
      <div className="mainContentHeader">
        <div className="createStory">
          <div className="profile"></div>
          <i className="addIcon fi fi-ss-add"></i>
          <p className="storyText">Create story</p>
        </div>
        <div className="storyContainer">
          {stories.map((story, index) => (
            <CreateStory key={index} {...story} />
          ))}
        </div>
      </div>
    </>
  );
};

export default MainContentHeader;
