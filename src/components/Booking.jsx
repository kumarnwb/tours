import React from "react";

const Booking = () => (
    <div>
        <section className="section-booking">
            <div className="row">
                <div className="book">
                    <div className="book__form">
                        <form action="#" className="form">
                            <div className="u-margin-bottom-medium">
                                <h2 className="heading-secondary">Start booking now</h2>
                            </div>
                            <div className="form__group">
                                <input type="text" name="fullname" placeholder="Full Name" id="fullname" className="form__input" required={true} />
                                <label htmlFor="fullname" className="form__label">Full Name </label>
                            </div>
                            <div className="form__group">
                                <input type="email" name="email" placeholder="Email address" id="email" className="form__input" required={true} />
                                <label htmlFor="email" className="form__label">Email address </label>
                            </div>
                            <div className="from__group u-margin-bottom-medium">
                                <div className="form__group-radio">
                                    <input type="radio" id="small" className="form__radio-input" name="size" />
                                    <label htmlFor="small" className="form__radio-label">
                                        {/* In CSS radio buttons cannot be styled , so adding a span element just to style it  */}
                                        <span className="form__radio-button"></span>
                                        Small tour group
                                        </label>
                                </div>
                                <div className="form__group-radio">
                                    <input type="radio" name="" id="large" className="form__radio-input" name="size" />

                                    <label htmlFor="large" className="form__radio-label">
                                        <span className="form__radio-button"></span>
                                        Large group tour
                                        </label>

                                </div>

                            </div>
                            <div className="form__group ">
                                <button className="btn btn--green">Next step &rarr;</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
)



export default Booking;
