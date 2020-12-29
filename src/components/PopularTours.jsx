import React from "react";

const PopularTours = () => (
    <div>
        <section className="section-tours">
            <h2 className="heading-secondary u-center-text u-margin-bottom-big">Most popular tours</h2>
            <div className="row">
                <div className="col-1-of-3">
                    <div>
                        <div className="card">
                            <div className="card__side card__side--front">
                                <div className="card__picture card__picture--p1 ">
                                    &nbsp;
                                </div>
                                <h4 className="card__heading">
                                    <span className="card__heading-span card__heading-span--1"> The sea explorer</span>
                                </h4>
                                <div className="card__details">
                                    <ul>
                                        <li>3 days </li>
                                        <li>upto 30 people</li>
                                        <li>2 tours guide</li>
                                        <li>sleep in cozy hotels</li>
                                        <li>Difficulty: easy </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card__side card__side--back card__side--back--1">
                                <div className="card__cta">
                                    <div className="card__price-box">
                                        <div className="card__price-only">Only</div>
                                        <div className="card__price-value">$297</div>
                                    </div>
                                    <a href="#" className="btn btn--white">Book now </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-1-of-3">
                    <div>
                        <div className="card">
                            <div className="card__side card__side--front">
                                <  div className="card__picture card__picture--p2">
                                    &nbsp;
                                </div>
                                <h4 className="card__heading">
                                    <span className="card__heading-span card__heading-span--2"> The Forest hiker</span>
                                </h4>
                                <div className="card__details">
                                    <ul>
                                        <li>7 days </li>
                                        <li>upto 40 people</li>
                                        <li>6 tours guide</li>
                                        <li>sleep in provided tents</li>
                                        <li>Difficulty: medium </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card__side card__side--back card__side--back--2">
                                <div className="card__cta">
                                    <div className="card__price-box">
                                        <div className="card__price-only">Only</div>
                                        <div className="card__price-value">$497</div>
                                    </div>
                                    <a href="#" className="btn btn--white">Book now </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="col-1-of-3">
                    <div>
                        <div className="card">
                            <div className="card__side card__side--front">
                                <  div className="card__picture card__picture--p3">
                                    &nbsp;
                                </div>
                                <h4 className="card__heading">
                                    <span className="card__heading-span card__heading-span--3"> The snow adventurer</span>
                                </h4>
                                <div className="card__details">
                                    <ul>
                                        <li> 5 days </li>
                                        <li>upto 15 people</li>
                                        <li>3 tours guide</li>
                                        <li>sleep in provided tents</li>
                                        <li>Difficulty: hard </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card__side card__side--back card__side--back--3">
                                <div className="card__cta">
                                    <div className="card__price-box">
                                        <div className="card__price-only">Only</div>
                                        <div className="card__price-value">$897</div>
                                    </div>
                                    <a href="#" className="btn btn--white">Book now </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
)


export default PopularTours;