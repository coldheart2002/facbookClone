interface Props {
  postContent: string;
  poserName: string;
  postTime: number;
  reactions: number;
  comments: number;
  shares: number;
}

function CreatePosts({
  poserName,
  postTime,
  postContent,
  reactions,
  comments,
  shares,
}: Props) {
  return (
    <>
      <div className="createPosts">
        <div className="posersInfo">
          <div className="posersProfile">
            <div className="activityStatus"></div>
          </div>
          <div className="poserProfileDetails">
            <div className="poserName">{poserName}</div>
            <div className="postAdditionalDetails">
              <div className="postTime">{postTime} hours ago</div>
              <i className="postdetails fi fi-ss-user-lock"></i>
            </div>
          </div>
          <div className="rightIconsContainer">
            <i className="rightIcons fi fi-ss-menu-dots"></i>
            <i className="rightIcons fi fi-ss-cross-small"></i>
          </div>
        </div>
        <div className="postsContent">{postContent}</div>
        <div className="postSatus">
          <div className="leftPostStatus">
            <i className="hearIcon fi fi-ss-heart"></i>
            <i className="likeIcon fi fi-ss-social-network"></i>
            <div className="postStatus">{reactions}</div>
          </div>
          <div className="rightPostStatus">
            <div className="commentsStatus">{comments} comments</div>
            <div className="shareStatus">{shares} shares</div>
          </div>
        </div>
        <div className="postFooter">
          <ul>
            <li>
              <div className="footerIconContainer">
                <i className="footerIcon fi fi-ss-social-network"></i>
                <div className="footerIconLabel">Like</div>
              </div>
            </li>
            <li>
              <div className="footerIconContainer">
                <i className="footerIcon fi fi-ss-comment-alt-dots"></i>
                <div className="footerIconLabel">Comment</div>
              </div>
            </li>
            <li>
              <div className="footerIconContainer">
                <i className="footerIcon fi fi-ss-share"></i>
                <div className="footerIconLabel">Share</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default CreatePosts;
