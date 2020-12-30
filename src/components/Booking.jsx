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
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
)



export default Booking;
