import React from 'react';
function importAll(r) {
    return r.keys().map(r);
  }

const images = importAll(require.context('./../img/', false, /\.(png|jpe?g|svg)$/));

console.log(images);

const Card = (prop) => {

    const {head, image, content} = prop;

    return(
        <div className="ma3 col-xl-5 col-lg-5 col-md-11 col-sm-12 col-xs-12 card shadow-3">
            <div className="row">
                <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12 col-xs-12">
                    <h2 className="card-head">{head}</h2>
                    <div className="tl" dangerouslySetInnerHTML={ {__html: content} }>
                    </div>
                </div>
                <div className="col-xl-5 col-lg-5 col-md-5 d-flex align-items-center justify-content-center">
                    <img className="img-home d-none d-md-block" src={images[image]}/>
                </div>
            </div>
        </div>
    );
};

export default Card;