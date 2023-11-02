function Container(props)
{
return(
<div className="container">
    {/*--------------Left Sidebar---------------------*/}
    <div className="left-sidebar">
      <div className="imp-links">
        <a href="abc">
          <img alt="img" src="https://i.postimg.cc/RCj4MjnC/news.png" />
          Latest News
        </a>
        <a href="abc">
          <img alt="img" src="https://i.postimg.cc/MpBwMtV0/friends.png" />
          Friendss
        </a>
        <a href="abc">
          <img alt="img" src="https://i.postimg.cc/44FRWj1b/group.png" />
          Group
        </a>
        <a href="abc">
          <img alt="img" src="https://i.postimg.cc/0jh39RtT/marketplace.png" />
          Marketplace
        </a>
        <a href="abc">
          <img alt="img" src="https://i.postimg.cc/VsXHCTVk/watch.png" />
          Watch
        </a>
        <a href="abc">See More</a>
      </div>
      <div className="shortcut-link">
        <p>{props.ct}</p>
        <a href="abc">
          <img alt="img" src="https://i.postimg.cc/3JHVf7vG/shortcut-1.png" />
          Web Developers
        </a>
        <a href="abc">
          <img alt="img" src="https://i.postimg.cc/rFCbvb1P/shortcut-2.png" />
          Web Design course
        </a>
        <a href="abc">
          <img alt="img" src="https://i.postimg.cc/0yk3xfZ2/shortcut-3.png" />
          Full Strack Development
        </a>
        <a href="abc">
          <img alt="img" src="https://i.postimg.cc/Z5wQqdDP/shortcut-4.png" />
          Website Experts
        </a>
      </div>
    </div>
    {/*--------------Main Sidebar---------------------*/}
    <div className="main-content">
      <div className="story-gallery">
        <div className="story story1">
          <img alt="img" src="https://i.postimg.cc/TPh453Zz/upload.png" />
          <p>Post Story</p>
        </div>
        <div className="story story2">
          <img alt="img" src="https://i.postimg.cc/XNPtfdVs/member-1.png" />
          <p>Alison</p>
        </div>
        <div className="story story3">
          <img alt="img" src="https://i.postimg.cc/4NhqByys/member-2.png" />
          <p>Jackson</p>
        </div>
        <div className="story story4">
          <img alt="img" src="https://i.postimg.cc/FH5qqvkc/member-3.png" />
          <p>Samona</p>
        </div>
        <div className="story story5">
          <img alt="img" src="https://i.postimg.cc/Sx65bPcP/member-4.png" />
          <p>John Doe</p>
        </div>
      </div>
      <div className="write-post-container">
        <div className="user-profile">
          <img alt="img" src="https://i.postimg.cc/cHg22LhR/profile-pic.png" />
          <div>
            <p>John Nicholson</p>
            <small>
              Public <i className="fas fa-caret-down" />
            </small>
          </div>
        </div>
        <div className="post-input-container">
          <textarea
            rows={3}
            placeholder="What's on your mind, John?"
            defaultValue={""}
          />
          <div className="add-post-links">
            <a href="abc">
              <img alt="img" src="https://i.postimg.cc/QMD2BDXs/live-video.png" />
              Live Video
            </a>
            <a href="abc">
              <img alt="img" src="https://i.postimg.cc/6pKKZn0D/photo.png" />
              Photo/Video
            </a>
            <a href="abc">
              <img alt="img" src="https://i.postimg.cc/Pf6TBCdD/feeling.png" />
              Feling/Activity
            </a>
          </div>
        </div>
      </div>
      <div className="post-container">
        <dic className="post-row">
          <div className="user-profile">
            <img alt="img" src="https://i.postimg.cc/cHg22LhR/profile-pic.png" />
            <div>
              <p>John Nicholson</p>
              <span>June 24 2021, 13:40 pm</span>
            </div>
          </div>
          <a href="abc">
            <i className="fas fa-ellipsis-v" />
          </a>
        </dic>
        <p className="post-text">
          Subscribe <span>@Vkive Tutorials</span> Youtube Channel to watch more
          videos on website development and UI desings.{" "}
          <a href="abc">#VkiveTutorials</a> <a href="abc">#YoutubeChannel</a>
        </p>
        <img alt="img"
          src="https://i.postimg.cc/9fjhGTY6/feed-image-1.png"
          className="post-img"
        />
        <div className="post-row">
          <div className="activity-icons">
            <div>
              <img alt="img" src="https://i.postimg.cc/pLKNXrMq/like-blue.png" />
              120
            </div>
            <div>
              <img alt="img" src="https://i.postimg.cc/rmjMymWv/comments.png" />
              45
            </div>
            <div>
              <img alt="img" src="https://i.postimg.cc/T2bBchpG/share.png" />
              20
            </div>
          </div>
          <div className="post-porfile-icon">
            <img alt="img" src="https://i.postimg.cc/cHg22LhR/profile-pic.png" />
            <i className="fas fa-caret-down" />
          </div>
        </div>
      </div>
      <div className="post-container">
        <dic className="post-row">
          <div className="user-profile">
            <img alt="img" src="https://i.postimg.cc/cHg22LhR/profile-pic.png" />
            <div>
              <p>John Nicholson</p>
              <span>June 24 2021, 13:40 pm</span>
            </div>
          </div>
          <a href="abc">
            <i className="fas fa-ellipsis-v" />
          </a>
        </dic>
        <p className="post-text">
          Like and share this video with friends, tag
          <span>@Vkive Tutorials</span>facebook page on your post. Ask your
          dobuts in the comments. <a href="abc">#VkiveTutorials</a>{" "}
          <a href="abc">#YoutubeChannel</a>
        </p>
        <img alt="img"
          src="https://i.postimg.cc/Xvc0xJ2p/feed-image-2.png"
          className="post-img"
        />
        <div className="post-row">
          <div className="activity-icons">
            <div>
              <img alt="img" src="https://i.postimg.cc/pLKNXrMq/like-blue.png" />
              120
            </div>
            <div>
              <img alt="img" src="https://i.postimg.cc/rmjMymWv/comments.png" />
              45
            </div>
            <div>
              <img alt="img" src="https://i.postimg.cc/T2bBchpG/share.png" />
              20
            </div>
          </div>
          <div className="post-porfile-icon">
            <img alt="img" src="https://i.postimg.cc/cHg22LhR/profile-pic.png" />
            <i className="fas fa-caret-down" />
          </div>
        </div>
      </div>
      <div className="post-container">
        <dic className="post-row">
          <div className="user-profile">
            <img alt="img" src="https://i.postimg.cc/cHg22LhR/profile-pic.png" />
            <div>
              <p>John Nicholson</p>
              <span>June 24 2021, 13:40 pm</span>
            </div>
          </div>
          <a href="abc">
            <i className="fas fa-ellipsis-v" />
          </a>
        </dic>
        <p className="post-text">
          Like and share this video with friends, tag
          <span>@Vkive Tutorials</span>facebook page on your post. Ask your
          dobuts in the comments. <a href="abc">#VkiveTutorials</a>{" "}
          <a href="abc">#YoutubeChannel</a>
        </p>
        <img alt="img"
          src="https://i.postimg.cc/tJ7QXz9x/feed-image-3.png"
          className="post-img"
        />
        <div className="post-row">
          <div className="activity-icons">
            <div>
              <img alt="img" src="https://i.postimg.cc/pLKNXrMq/like-blue.png" />
              120
            </div>
            <div>
              <img alt="img" src="https://i.postimg.cc/rmjMymWv/comments.png" />
              45
            </div>
            <div>
              <img alt="img" src="https://i.postimg.cc/T2bBchpG/share.png" />
              20
            </div>
          </div>
          <div className="post-porfile-icon">
            <img alt="img" src="https://i.postimg.cc/cHg22LhR/profile-pic.png" />
            <i className="fas fa-caret-down" />
          </div>
        </div>
      </div>
      <div className="post-container">
        <dic className="post-row">
          <div className="user-profile">
            <img alt="img" src="https://i.postimg.cc/cHg22LhR/profile-pic.png" />
            <div>
              <p>John Nicholson</p>
              <span>June 24 2021, 13:40 pm</span>
            </div>
          </div>
          <a href="abc">
            <i className="fas fa-ellipsis-v" />
          </a>
        </dic>
        <p className="post-text">
          Like and share this video with friends, tag
          <span>@Vkive Tutorials</span>facebook page on your post. Ask your
          dobuts in the comments. <a href="abc">#VkiveTutorials</a>{" "}
          <a href="abc">#YoutubeChannel</a>
        </p>
        <img alt="img"
          src="https://i.postimg.cc/hjDRYBwM/feed-image-4.png"
          className="post-img"
        />
        <div className="post-row">
          <div className="activity-icons">
            <div>
              <img alt="img" src="https://i.postimg.cc/pLKNXrMq/like-blue.png" />
              120
            </div>
            <div>
              <img alt="img" src="https://i.postimg.cc/rmjMymWv/comments.png" />
              45
            </div>
            <div>
              <img alt="img" src="https://i.postimg.cc/T2bBchpG/share.png" />
              20
            </div>
          </div>
          <div className="post-porfile-icon">
            <img alt="img" src="https://i.postimg.cc/cHg22LhR/profile-pic.png" />
            <i className="fas fa-caret-down" />
          </div>
        </div>
      </div>
      <div className="post-container">
        <dic className="post-row">
          <div className="user-profile">
            <img alt="img" src="https://i.postimg.cc/cHg22LhR/profile-pic.png" />
            <div>
              <p>John Nicholson</p>
              <span>June 24 2021, 13:40 pm</span>
            </div>
          </div>
          <a href="abc">
            <i className="fas fa-ellipsis-v" />
          </a>
        </dic>
        <p className="post-text">
          Like and share this video with friends, tag
          <span>@Vkive Tutorials</span>facebook page on your post. Ask your
          dobuts in the comments. <a href="abc">#VkiveTutorials</a>{" "}
          <a href="abc">#YoutubeChannel</a>
        </p>
        <img alt="img"
          src="https://i.postimg.cc/ZRwztQzm/feed-image-5.png"
          className="post-img"
        />
        <div className="post-row">
          <div className="activity-icons">
            <div>
              <img alt="img" src="https://i.postimg.cc/pLKNXrMq/like-blue.png" />
              120
            </div>
            <div>
              <img alt="img" src="https://i.postimg.cc/rmjMymWv/comments.png" />
              45
            </div>
            <div>
              <img alt="img" src="https://i.postimg.cc/T2bBchpG/share.png" />
              20
            </div>
          </div>
          <div className="post-porfile-icon">
            <img alt="img" src="https://i.postimg.cc/cHg22LhR/profile-pic.png" />
            <i className="fas fa-caret-down" />
          </div>
        </div>
      </div>
      <button type="button" className="load-more-btn">
        Load More
      </button>
    </div>
    {/*--------------Right Sidebar---------------------*/}
    <div className="right-sidebar">
      <div className="sidebar-title">
        <h4>Events</h4>
        <a href="abc">See All</a>
      </div>
      <div className="event">
        <div className="left-event">
          <h3>18</h3>
          <span>March</span>
        </div>
        <div className="right-event">
          <h4>Social Media</h4>
          <p>
            <i className="fas fa-map-marker-alt" /> Willson Tech Park
          </p>
          <a href="abc">More Info</a>
        </div>
      </div>
      <div className="event">
        <div className="left-event">
          <h3>22</h3>
          <span>June</span>
        </div>
        <div className="right-event">
          <h4>Mobile Marketing</h4>
          <p>
            <i className="fas fa-map-marker-alt" /> Willson Tech Park
          </p>
          <a href="abc">More Info</a>
        </div>
      </div>
      <div className="sidebar-title">
        <h4>Advertisement</h4>
        <a href="abc">close</a>
      </div>
      <img alt="img"
        src="https://i.postimg.cc/CLXYx9BL/advertisement.png"
        className="siderbar-ads"
      />
      <div className="sidebar-title">
        <h4>Conversation</h4>
        <a href="abc">Hide Chat</a>
      </div>
      <div className="online-list">
        <div className="online">
          <img alt="img" src="https://i.postimg.cc/XNPtfdVs/member-1.png" />
        </div>
        <p>{ props.ct1 }</p>
      </div>
      <div className="online-list">
        <div className="online">
          <img alt="img" src="https://i.postimg.cc/4NhqByys/member-2.png" />
        </div>
        <p>Jackson Aston</p>
      </div>
      <div className="online-list">
        <div className="online">
          <img alt="img" src="https://i.postimg.cc/FH5qqvkc/member-3.png" />
        </div>
        <p>Samona Rose</p>
      </div>
      <div className="online-list">
        <div className="online">
          <img alt="img" src="https://i.postimg.cc/Sx65bPcP/member-4.png" />
        </div>
        <p>Mike Pérez</p>
      </div>
    </div>
  </div>
);
}

export default Container;