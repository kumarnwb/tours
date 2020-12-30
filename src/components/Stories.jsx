import React from "react";
import image8 from '../assets/nat-8.jpg';
import image9 from '../assets/nat-9.jpg';
import videoMp4 from '../assets/video.mp4';
import videowebm from '../assets/video.webm';


const Stories = () => (

    <div>
        <section className="section-stories">

            <div className="bg-video">
                <video className="bg-video__content" autoPlay={true} muted={true} loop={true}>
                    <source src={videoMp4} type="video/mp4" />
                    <source src={videowebm} type="video/webm" />
                            Your browser is not supported!
                </video>
            </div>

            <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">we make people geniunely happy</h2>
            </div>
            <div className="row">
                <div className="story">
                    <figure className="story__shape" >
                        <img src={image8} alt="person on a tour" className="story__image" />
                        <figcaption className="story__caption">
                            Mary Smith
                        </figcaption>
                    </figure>
                    <div className="story__text">
                        <h3 className="heading-tertiary u-margin-bottom-small">
                            I had the best week with my family
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Assumenda saepe hic omnis est maxime possimus odit,  Assumenda saepe hic omnis est maxime possimus odit,
                            facere accusantium in placeat laudantium tempora soluta. Molestiae omnis, iure distinctio ab ad possimus?
                        </p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="story">
                    <figure className="story__shape" >
                        <img src={image9} alt="person on a tour" className="story__image" />
                        <figcaption className="story__caption">
                            Jack Wilson
                        </figcaption>
                    </figure>
                    <div className="story__text">
                        <h3 className="heading-tertiary u-margin-bottom-small">
                            wow! my life is completly different now
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Assumenda saepe hic omnis est maxime possimus odit,  Assumenda saepe hic omnis est maxime possimus odit,
                            facere accusantium in placeat laudantium tempora soluta. Molestiae omnis, iure distinctio ab ad possimus?
                        </p>
                    </div>
                </div>
                <div className="u-center-text u-margin-top-medium">
                    <a href="#" className="btn-text">Read all stories &rarr;</a>
                </div>

            </div>

        </section>
    </div>
);


export default Stories;