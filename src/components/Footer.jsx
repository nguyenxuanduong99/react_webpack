import React, {Component} from "react";
import Logo from "../assets/images/logo.png";
import {Button} from "primereact/button";
import withStyles from "react-jss";
import footerStyles from "../styles/FooterStyle";
import {map} from "../intl/Message";

class Footer extends Component{

    constructor(props) {
        super(props);
    }
    render() {
        const {classes:{bgFooter,bgSercuritySafe}} = this.props;
        return(
            <div className={"w-full"}>
                {/*safety and security*/}
                <div className={bgSercuritySafe}>
                    <div className={"flex flex-wrap"}>
                        <div className={"col-1"}/>
                        <div className={"flex col-5 align-items-center"}>
                            <div className={"flex col-1 justify-content-center"}>
                                <i className={"pi pi-lock"}/>
                            </div>

                            <div className={"col-11"}>
                                <h3>{map("Footer.Safe")}</h3>
                                <p>{map("Footer.Guarantee")}</p>
                            </div>
                        </div>
                        <div className={"flex col-5 align-items-center"}>
                            <div className={"flex col-1 justify-content-center"}>
                                <i className={"pi pi-shield"}/>
                            </div>
                            <div className={"col-11"}>
                                <h3>{map("Footer.Sercurity")}</h3>
                                <p>{map("Footer.Ensure")}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"flex"}>
                    <div className={bgFooter} style={{color: "white"}}>
                        <div className={"flex"}>
                            <div className={"col-1"}/>
                            <div className={"flex col-5"}>
                                <div className={"col-2"}>
                                    <img src={Logo} className={"w-full"}/>
                                </div>
                                <div className={" col-10"}>
                                    <div>
                                        <p>
                                            <strong>Mobipay Gateway</strong>
                                        </p>
                                        <p>
                                            <strong>{map("Footer.Corporation")}</strong>
                                        </p>
                                        <p>
                                            <strong>{map("Footer.License")}</strong>
                                        </p>
                                    </div>

                                </div>

                            </div>
                            <div className={"col-5"}>
                                <h2>Hỗ trợ khách hàng</h2>
                                <div className={"flex"}>
                                    <Button className={"flex col-6 align-items-center"}
                                            style={{borderRadius: 20, height: 40}}>
                                        <i className={"pi pi-phone col-1"}/>
                                        <div className={"col-11"}>
                                            <span>1900 54 13 12</span>
                                            <br/>
                                            <span>({map("Footer.Postage")})</span>
                                        </div>
                                    </Button>
                                    <Button className={"flex col-6 ml-3 align-items-center"}
                                            style={{borderRadius: 70, height: 40}}>
                                        <i className={"pi pi-phone col-1"} color={"#F27"}/>
                                        <div className={"col-11"}>
                                            <p>hotro@mobipay.vn</p>
                                        </div>
                                    </Button>
                                </div>
                            </div>
                        </div>

                        <div className={"flex justify-content-end"}>
                            <p>
                                2022
                                <a href={"https://telsoft.com.vn"}>MOBIFONE</a>
                                - Copyright by MobiMoney, All right is reserved
                            </p>
                        </div>

                    </div>
                </div>
            </div>

        );
    }
}
export default withStyles(footerStyles)(Footer);