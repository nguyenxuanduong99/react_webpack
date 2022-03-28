import React, {Component} from "react";
import withStyles from "react-jss";
import pageStyles from "./PageStyles.jsx";
import {Dropdown} from "primereact/dropdown";
import Logo from "../assets/images/logo.png";
import {map} from "../intl/Message.jsx";
import Session from "../variables/session";
import Footer from "../components/Footer.jsx";
import {Card} from "primereact/card";
import QRCode from "../components/QRCode";
import Payment from "../components/Payment";

class PaymentLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedLanguage: Session.getLocale(),
            timeunix: 0,
            time: {},

            amount: "26450",
            serviceCode: "1243748",
            description: "Thanh toán tại Mobipay",

        };
        this.component = [
            {value: "QRCode", key: 0},
            {value: "Payment", key: 1},
            {value: "WalletPayment", key: 2},
            {value: "LinkedBank", key: 3},
            {value: "OtherBank", key: 0},
        ];
        this.language = [
            {value: "Việt Nam", key: "vn"},
            {value: "English", key: "en"}
        ];

        this.onLanguageChange = this.onLanguageChange.bind(this);
        this.timer = 0;
        this.countDown = this.countDown.bind(this);
    }

    componentDidMount() {
        //TODO: call API get response contain time
        let response = {
            time: new Date().getTime() + 70,
        };
        let timeLeftVar = response.time - new Date().getTime();
        this.setState({timeunix: timeLeftVar});

        timeLeftVar = this.secondsToTime(this.state.timeunix);
        this.setState({time: timeLeftVar});
        // this.intervalId = setInterval(this.timer, 1000);
        this.timer = setInterval(this.countDown, 1000);
    }

    secondsToTime(secs) {
        let hours = Math.floor(secs / (60 * 60));

        let divisor_for_minutes = secs % (60 * 60);
        let minutes = Math.floor(divisor_for_minutes / 60);

        let divisor_for_seconds = divisor_for_minutes % 60;
        let seconds = Math.ceil(divisor_for_seconds);

        return {
            "h": hours,
            "m": minutes,
            "s": seconds
        };
    }

    countDown() {
        let timeunix = this.state.timeunix - 1;
        this.setState({timeunix: timeunix});

        this.setState({
            time: this.secondsToTime(this.state.timeunix),
        });

        // Check if we're at zero.
        if (timeunix <= 0) {
            clearInterval(this.timer);
        }
    }

    onLanguageChange(e) {
        Session.setLocale(e.value);
        this.setState({selectedLanguage: e.value});
    }


    render() {
        const {classes: {bgWarnMessage, container, imgLog}} = this.props;
        return (
            <div className={container}>
                {/*heaader*/}
                <div className={"flex"}>
                    <a className={"col-6 align-items-end"}>
                        <img className={imgLog}
                             src={Logo}/>
                        <span className={"font-semibold text-3xl"}>| GATEWAY</span>
                    </a>
                    <div className={"col-4"}/>
                    <div className="flex col-2 justify-content-end">
                        <div>
                            <Dropdown value={this.state.selectedLanguage}
                                      optionLabel={"value"}
                                      optionValue={"key"}
                                      options={this.language}
                                      onChange={this.onLanguageChange}
                            />
                        </div>

                    </div>
                </div>

                {/*Warn Message*/}
                <div className={bgWarnMessage}>
                    <div className={"flex justify-content-center"}>
                        <p className={"text-lg font-medium"}>{map("Page.WarningMessage")}</p>
                    </div>
                </div>

                {/*body*/}
                <div className={"flex"}>
                    <div className={"col-1"}/>

                    {/*fragment left multiple component*/}
                    <div className={"col-7"}>
                        <Payment/>
                    </div>

                    {/*fragment right*/}
                    <div className={"col-3"}>
                        {/*info order*/}
                        <div>
                            <div className={"flex justify-content-center"}>
                                <h1>{map("Page.InfoOrder")}</h1>
                            </div>
                            <div>
                                {/*logo*/}
                                {/*<img src={Logo}/>*/}
                                <h2>{map("Page.Manufacture")}</h2>
                                <p className={"font-medium"}>Dominos HN</p>
                            </div>
                            <div>
                                <h2>{map("Page.Amount")}</h2>
                                <p>{this.state.amount}</p>
                            </div>
                            <div>
                                <div>
                                    <h2>{map("Page.ServiceCode")}</h2>
                                    <p>{this.state.serviceCode}</p>
                                </div>
                                <div>
                                    <h2>{map("Page.Description")}</h2>
                                    <p>{this.state.description}</p>
                                </div>
                            </div>
                            {/*cancel-transaction*/}
                            <div className={"mt-6"}>
                                <a href={"#"} style={{fontSize: "1.2em", color: "#ff4f31"}}>
                                    <i className={"pi pi-times mr-1"}/>
                                    {map("Page.CancelTransaction")}

                                </a>
                            </div>
                        </div>
                        {/*thoi gian giao dich*/}
                        <Card className={"mt-3"} style={{backgroundColor: "#FBF1DB"}}>
                            <div>
                                <p className={"text-center text-xl"}>{map("Page.TransactionTime")}</p>
                                <div className={"text-center text-5xl"}>
                                    {this.state.time.m} : {this.state.time.s}
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>

                {/*footer*/}
                <Footer/>
            </div>
        );
    }
}

export default withStyles(pageStyles)(PaymentLayout);
