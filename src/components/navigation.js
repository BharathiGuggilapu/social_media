function Navigation(props)
{
return(
	<nav>
	<div className="nav-left">
		<a href="Index.html">
			<img alt="img" src="https://i.postimg.cc/Y9nZymQq/logo2.png" className="logo" />
		</a>
		<ul>
			<li>
				<img alt="img" src="https://i.postimg.cc/Fs3m1Djy/notification.png" />
			</li>
			<li>
				<img alt="img" src="https://i.postimg.cc/YqGKZ8nc/inbox.png" />
			</li>
			<li>
				<img alt="img" src="https://i.postimg.cc/xCzpgFjg/video.png" />
			</li>
		</ul>
	</div>
	<div className="nav-right">
		<div className="search-box">
			<img alt="img" src="https://i.postimg.cc/SKtHgM6Q/search.png" />
			<input type="text" placeholder="Search" />
		</div>
		<div className="nav-user-icon online" onclick="settingsMenuToggle()">
			<img alt="img" src="https://i.postimg.cc/cHg22LhR/profile-pic.png" />
		</div>
	</div>
	{/*--------------Settings Menu"---------------------*/}
	<div className="settings-menu">
		<div id="dark-btn">
			<span />
		</div>
		<div className="settings-menu-inner">
			<div className="user-profile">
				<img alt="img" src="https://i.postimg.cc/cHg22LhR/profile-pic.png" />
				<div>
					<p>{props.nt}</p>
					<a href="profile.html">See your profile</a>
				</div>
			</div>
			<hr />
			<div className="user-profile">
				<img alt="img" src="https://i.postimg.cc/hv3nx52s/feedback.png" />
				<div>
					<p>Give Feedback</p>
					<a href="abc">Help us to improve the new design</a>
				</div>
			</div>
			<hr />
			<div className="settings-links">
				<img alt="img"
					src="https://i.postimg.cc/QCcPNYRV/setting.png"
					className="settings-icon"
				/>
				<a href="abc">
					Settings &amp; Privacy{" "}
					<img alt="img" src="https://i.postimg.cc/RF1dBMWr/arrow.png" width="10px" />
				</a>
			</div>
			<div className="settings-links">
				<img alt="img"
					src="https://i.postimg.cc/C5tydfK6/help.png"
					className="settings-icon"
				/>
				<a href="abc">
					Help &amp; Support
					<img alt="img" src="https://i.postimg.cc/RF1dBMWr/arrow.png" width="10px" />
				</a>
			</div>
			<div className="settings-links">
				<img alt="img"
					src="https://i.postimg.cc/5yt1XVSj/display.png"
					className="settings-icon"
				/>
				<a href="abc">
					Display &amp; Accessibility{" "}
					<img alt="img" src="https://i.postimg.cc/RF1dBMWr/arrow.png" width="10px" />
				</a>
			</div>
			<div className="settings-links">
				<img alt="img"
					src="https://i.postimg.cc/PJC9GrMb/logout.png"
					className="settings-icon"
				/>
				<a href="abc">
					Logout{" "}
					<img alt="img" src="https://i.postimg.cc/RF1dBMWr/arrow.png" width="10px" />
				</a>
			</div>
		</div>
	</div>
</nav>
);
}

export default Navigation;