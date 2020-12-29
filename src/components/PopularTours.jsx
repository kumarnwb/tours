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
                                Back
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-1-of-3">
                    <div>
                        <div className="card">
                            <div className="card__side card__side--front">
                                Front
                            </div>

                        </div>
                    </div>
                </div>
                <div className="col-1-of-3">
                    <div>
                        <div className="card">
                            <div className="card__side card__side--front">
                                Front
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
)


export default PopularTours;