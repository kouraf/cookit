import React from 'react';
import { Button } from 'reactstrap';
import NavOption from './components/NavigationOption';
import './SideBar.css'

const Cookit = () => <i class="fa fa-cutlery" aria-hidden="true"></i>;
const Home = () => <i class="fa fa-home" aria-hidden="true"></i>;
const Explore = () => <i class="fa fa-hashtag" aria-hidden="true"></i>;
const Notifications = () => <i class="fa fa-bell-o" aria-hidden="true"></i>;
const Messages = () => <i class="fa fa-envelope-o" aria-hidden="true"></i>;
const Bookmarks = () => <i class="fa fa-bookmark-o" aria-hidden="true"></i>;
const Lists = () => <i class="fa fa-list" aria-hidden="true"></i>;
const Profile = () => <i class="fa fa-user-o" aria-hidden="true"></i>;
const More = () => <i class="fa fa-ellipsis-h" aria-hidden="true"></i>;

function SideBar() {
    return (
        <div className="sidebar offset-md-1">

            <div className="cookit_icon">
                <Cookit />
            </div>
            <NavOption text="Home" Icon={Home} />
            <NavOption text="Explore" Icon={Explore} />
            <NavOption text="Notifications" Icon={Notifications} />
            <NavOption text="Messages" Icon={Messages} />
            <NavOption text="Bookmarks" Icon={Bookmarks} />
            <NavOption text="Lists" Icon={Lists} />
            <NavOption text="Profile" Icon={Profile} />
            <NavOption text="More" Icon={More} />

            {/*navigation option */}

            {/* button add your recipe*/}
            <Button color="primary">Tweet</Button>
        </div>
    )
}

export default SideBar
