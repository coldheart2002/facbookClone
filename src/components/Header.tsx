const Header = () => {
  return (
    <div className="header">
      <div className="leftHeader">
        <i className="leftHeaderIcon fi fi-ss-circle-f"></i>
        <div className="searchContainer">
          <input
            className="searchInput"
            type="text"
            placeholder="Search Facebook"
          />
        </div>
      </div>
      <div className="middleHeader">
        <div className="middleHeaderIconContainer">
          <ul>
            <li>
              <a href="#">
                <i className="middleHeaderIcon fi fi-ss-house-chimney"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="middleHeaderIcon fi fi-ss-following"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="middleHeaderIcon fi fi-ss-clapperboard-play"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="middleHeaderIcon fi fi-ss-joystick"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="rightHeader">
        <nav>
          <ul>
            <li>
              <a href="#">
                <i className="rightHeaderIcon fi fi-ss-grid"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="rightHeaderIcon fi fi-ss-comment-dots"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="rightHeaderIcon fi fi-ss-bell"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="rightHeaderIcon fi fi-ss-user"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
