import React from 'react';
import content from './content.json';

const card = ({props}) => {
    return(
        <div className="col-xl-5 col-lg-5 col-md-11 col-sm-12 col-xs-12 card shadow-3">
            <div className="row">
                <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12 col-xs-12">
                    <h2 className="card-head">COLOURING</h2>
                    <div className="tl">
                        <p>
                            Whether you’re covering up greys or you just love to experiment, hair coloring is the simplest way to reinvent your look.
                        </p>
                        <p>
                            We use henna for all our coloring services, which include root touch up and global colouring. We will transform your hair from plain to vibrant colour.
                        </p>
                    </div>
                </div>
                <div className=" col-xl-5 col-lg-5 col-md-5 d-flex align-items-center justify-content-center">
                    <img className="img-home d-none d-md-block" src={colour}/>
                </div>
            </div>
        </div>
    );
};

export default card;