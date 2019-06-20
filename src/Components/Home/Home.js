import React from 'react';
import './Home.css';
import Card from './Card';
const content =  require('./content.json');
const telg =  require('./telugu.json');

const Home = () => {
    const UserArray = content.map((head, i) => {
        return <Card head={content[i].head} image = {content[i].id} content={content[i].content}/>;
    });

    const telugu = content.map((head, i) => {
        return <Card head={telg[i].head} image = {telg[i].id} content={telg[i].content}/>;
    });

    return(
        <div className="mv4">
            <div className="tab-content" id="myTabContent">
                <div className="mh0 tab-pane fade show active row justify-around" id="home" role="tabpanel" aria-labelledby="home-tab">{UserArray}</div>
                <div className="mh0 tab-pane fade row justify-around" id="profile" role="tabpanel" aria-labelledby="profile-tab">{telugu}</div>
            </div>
            <ul className="nav nav-tabs fixed-bottom justify-center" id="myTab" role="tablist">
                <li className="nav-item bg-purple">
                    <a className="gfd nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">English</a>
                </li>
                <li className="nav-item bg-purple">
                    <a className="gfd nav-link black" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">తెలుగు</a>
                </li>
            </ul>
        </div>
    )
};

export default Home;