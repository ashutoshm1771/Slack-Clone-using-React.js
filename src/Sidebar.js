import React, { useState, useEffect } from 'react';
import './Sidebar.css';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from "@material-ui/icons/Create";
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import SidebarOption from './SidebarOption';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AppsIcon from "@material-ui/icons/Apps";
import AddIcon from '@material-ui/icons/Add';
import db from "./firebase";
import { useStateValue } from './StateProvider';

function Sidebar() {
    const [channels, setChannels] = useState([]);
    const [{ user }] = useStateValue();

    useEffect(() => {
        db.collection('rooms').onSnapshot(snapshot => (
            setChannels(
                snapshot.docs.map(doc => ({
                    id: doc.id,
                    name: doc.data().name
                }))
            )
        ))
    }, [])

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__info">
                    <h2>WorkSpace</h2>
                    <h3>
                        <FiberManualRecordIcon />
                            {user?.displayName}
                    </h3>
                </div>
                <CreateIcon />
            </div>
            <SidebarOption Icon={InsertCommentIcon} title="Threads"/>
            <SidebarOption Icon={InboxIcon} title="Mentions & reactions"/>
            <SidebarOption Icon={DraftsIcon} title="Saved items"/>
            <SidebarOption Icon={BookmarkBorderIcon} title="Channel browser"/>
            <SidebarOption Icon={PeopleAltIcon} title="People & user groups"/>
            <SidebarOption Icon={AppsIcon} title="Apps"/>
            <SidebarOption Icon={FileCopyIcon} title="File Browser"/>
            <SidebarOption Icon={ExpandLessIcon} title="Show less"/>
            <hr />
            <SidebarOption Icon={ExpandMoreIcon} title="Channels"/>
            <hr />
            <SidebarOption Icon={AddIcon} addChannelOption title="Add Channel" />

            { /* Connect to dB and list all the channels*/ }
            { /* <SidebarOption ... */ }
            {channels.map(channel => (
                <SidebarOption title={channel.name} id={channel.id}/>
            ))}
        </div>
    )
}

export default Sidebar
