import React from 'react';
import natone from '../assets/nat-1-large.jpg';
import nattwo from '../assets/nat-2-large.jpg';
import natthree from '../assets/nat-3-large.jpg';

const About = () => (
    <div>
        <section className="section-about">
            <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">
                    Exciting tours for adventours people
            </h2>

            </div>
            <div className="row">
                <div className="col-1-of-2">
                    <h3 className='heading-tertiary'>
                        You're going to fall in love with nature
                    </h3>
                    <p className="paragraph">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Saepe doloremque architecto itaque nulla eveniet. Explicabo at quo, id minus sequi in obcaecati necessitatibus ipsa? Quia libero ea neque. Porro, repudiandae!
                    </p>
                    <h3 className="heading-tertiary">
                        Live adventours like you never have before
                    </h3>
                    <p className="paragraph">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Magnam nam consectetur molestias modi consequatur minima incidunt, iste blanditiis voluptates saepe, voluptas amet eveniet inventore omnis placeat libero, adipisci illum quidem.
                    </p>
                    <a href="#" className="btn-text">Learn more &rarr;</a>
                </div>
                <div className="col-1-of-2">
                    <div className="composition">
                        <img src={natone} alt="image-one" className="composition__photo composition__photo--p1" />
                        <img src={nattwo} alt="image-two" className="composition__photo composition__photo--p2" />
                        <img src={natthree} alt="image-three" className="composition__photo composition__photo--p3" />
                    </div>
                </div>
            </div>
        </section>
    </div>
)


export default About;