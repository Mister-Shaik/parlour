import React from 'react';
import './Home.css';
import Card from './Card';
const content =  require('./content.json');

const Home = () => {
    const UserArray = content.map((head, i) => {
        return <Card head={content[i].head} image = {content[i].id} content={content[i].content}/>;
    });

    return(
        <div className="row justify-around mt4 mh1">
            {UserArray}
        </div>
    )
};

export default Home;