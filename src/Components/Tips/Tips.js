import React from 'react';
import Card from './Card';
const content =  require('./tips.json');

const Tips = () => {

    const TipsArray = content.map((head, i) => {
        return <Card head={content[i].head} image = {content[i].id} content={content[i].content}/>;
    });

    return(
        <div>
            {TipsArray}
        </div>
    )
};

export default Tips;