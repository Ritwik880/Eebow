import React, { Component } from "react";

export default class Login extends Component {
    render() {
        return (
            <section className="login">
                <form>
                    <h3 className="si_h3">Sign In</h3>

                    <div className="form-group">
                        <label>Email address <span>*</span></label>
                        <input type="email" className="form-control" placeholder="Enter email" />
                    </div>

                    <div className="form-group">
                        <label>Password <span>*</span></label>
                        <input type="password" className="form-control" placeholder="Enter password" />
                    </div>

                    <div className="form-group">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary btn-block">Submit</button>
                    <p className="forgot-password text-right">
                        Forgot <a href="#">password?</a>
                    </p>
                    <p className="forgot-password text-right">
                        Not registered <a href="/signup">Register?</a>
                    </p>
                </form>
            </section>
        );
    }
}