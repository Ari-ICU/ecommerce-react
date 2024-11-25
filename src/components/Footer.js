import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="footer-section">
            <div className="container relative">
                <div className="sofa-img">
                    <img src="images/men.png" alt="Sofa" className="img-fluid" />
                </div>

                <div className="row">
                    <div className="col-lg-8">
                        <div className="subscription-form">
                            <h3 className="d-flex align-items-center">
                                <span className="me-1">
                                    <img
                                        src="images/envelope-outline.svg"
                                        alt="Envelope"
                                        className="img-fluid"
                                    />
                                </span>
                                <span>Subscribe to Newsletter</span>
                            </h3>

                            <form action="/explore" className="row g-3">
                                <div className="col-auto">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter your name"
                                    />
                                </div>
                                <div className="col-auto">
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Enter your email"
                                    />
                                </div>
                                <div className="col-auto">
                                    <button className="btn btn-primary">
                                        <span className="fa fa-paper-plane"></span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="row g-5 mb-5">
                    <div className="col-lg-4">
                        <div className="mb-4 footer-logo-wrap">
                            <Link to="/" className="footer-logo">
                                Furni<span>.</span>
                            </Link>
                        </div>
                        <p className="mb-4">
                            Donec facilisis quam ut purus rutrum lobortis. Donec vitae
                            odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
                            Aliquam vulputate velit imperdiet dolor tempor tristique.
                            Pellentesque habitant
                        </p>

                        <ul className="list-unstyled custom-social">
                            <li>
                                <Link to="/">
                                    <span className="fa fa-brands fa-facebook-f"></span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <span className="fa fa-brands fa-twitter"></span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <span className="fa fa-brands fa-instagram"></span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <span className="fa fa-brands fa-linkedin"></span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-8">
                        <div className="row links-wrap">
                            <div className="col-6 col-sm-6 col-md-3">
                                <ul className="list-unstyled">
                                    <li>
                                        <Link to="/about">About us</Link>
                                    </li>
                                    <li>
                                        <Link to="/service">Services</Link>
                                    </li>
                                    <li>
                                        <Link to="/blog">Blog</Link>
                                    </li>
                                    <li>
                                        <Link to="/contact">Contact us</Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-6 col-sm-6 col-md-3">
                                <ul className="list-unstyled">
                                    <li>
                                        <Link to="/support">Support</Link>
                                    </li>
                                    <li>
                                        <Link to="/knowledge-base">Knowledge base</Link>
                                    </li>
                                    <li>
                                        <Link to="/live-chat">Live chat</Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-6 col-sm-6 col-md-3">
                                <ul className="list-unstyled">
                                    <li>
                                        <Link to="/jobs">Jobs</Link>
                                    </li>
                                    <li>
                                        <Link to="/team">Our team</Link>
                                    </li>
                                    <li>
                                        <Link to="/leadership">Leadership</Link>
                                    </li>
                                    <li>
                                        <Link to="/privacy-policy">Privacy Policy</Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-6 col-sm-6 col-md-3">
                                <ul className="list-unstyled">
                                    <li>
                                        <Link to="/nordic-chair">Nordic Chair</Link>
                                    </li>
                                    <li>
                                        <Link to="/kruzo-aero">Kruzo Aero</Link>
                                    </li>
                                    <li>
                                        <Link to="/ergonomic-chair">Ergonomic Chair</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-top copyright">
                    <div className="row pt-4">
                        <div className="col-lg-6">
                            <p className="mb-2 text-center text-lg-start">
                                Copyright &copy; {new Date().getFullYear()}. All Rights
                                Reserved. &mdash; Designed with love by{" "}
                                <Link to="https://untree.co" target="_blank" rel="noopener noreferrer">
                                    Untree.co
                                </Link>{" "}
                                Distributed By{" "}
                                <Link to="https://themewagon.com" target="_blank" rel="noopener noreferrer">
                                    ThemeWagon
                                </Link>{" "}
                                {/* License information: https://untree.co/license/ */}
                            </p>
                        </div>

                        <div className="col-lg-6 text-center text-lg-end">
                            <ul className="list-unstyled d-inline-flex ms-auto">
                                <li className="me-4">
                                    <Link to="/terms-and-conditions">Terms &amp; Conditions</Link>
                                </li>
                                <li>
                                    <Link to="/privacy-policy">Privacy Policy</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;