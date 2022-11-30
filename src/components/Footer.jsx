import '../App.css';
import React from "react";
import { Button } from 'react-bootstrap';

export const Footer = () => {
    return (
        <div className="tugsgul">
            <footer className="footer">
                <div className="container-ftr">
                    <div className="social-links">
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                    <div className="roww">

                        <div className="footer-col">
                            <ul>
                                <li><a href="#">Audio Description</a></li>
                                <li><a href="#">Investor Relations</a></li>
                                <li><a href="#">Legal Notices</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <ul>
                                <li><a href="#">Help Center</a></li>
                                <li><a href="#">Jobs</a></li>
                                <li><a href="#">Cookie Preferences</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <ul>
                                <li><a href="#">Gift Cards</a></li>
                                <li><a href="#">Terms of Use</a></li>
                                <li><a href="#">Corporate Information</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <ul>
                                <li><a href="#">Media Center</a></li>
                                <li><a href="#">Privacy</a></li>
                                <li><a href="#">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="btn">
                        <Button type="button">Service Code</Button>
                    </div>
                </div>
            </footer>
        </div>
    );
}