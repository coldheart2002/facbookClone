const WhatsOnYourMind = () => {
  return (
    <div className="whatsOnYourMind">
      <div className="upperContents">
        <div className="profileIcon"></div>
        <input
          className="whatsOnYourMindInput"
          placeholder="What's on your mind, Neo?"
          type="text"
        />
      </div>
      <div className="lowerContents">
        <ul>
          <li>
            <div className="lowerContentsIconContainer">
              <a href="#">
                <i className="video lowerContentsIcon fi fi-ss-video-camera-alt"></i>
              </a>
              <div className="iconLabel">Live video</div>
            </div>
          </li>
          <li>
            <div className="lowerContentsIconContainer">
              <a href="#">
                <i className="picture lowerContentsIcon fi fi-ss-picture"></i>
              </a>
              <div className="iconLabel">Live video</div>
            </div>
          </li>
          <li>
            <div className="lowerContentsIconContainer">
              <a href="#">
                <i className="activity lowerContentsIcon fi fi-ss-grin"></i>
              </a>
              <div className="iconLabel">Live video</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WhatsOnYourMind;
