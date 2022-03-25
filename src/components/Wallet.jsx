import React, {Component} from "react";
import {map} from "../intl/Message";
import withStyles from "react-jss";
import walletStyle from "../styles/WalletStyle";
import PhoneInput from "react-phone-number-input/input";
import {Button} from "primereact/button";
import OTPInput from "otp-input-react";

class Wallet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            wallet: "",
            otp: "",
            isSendOTP: false,
            numberPhone: ""
        };
        this.sendOTP = this.sendOTP.bind(this);

    }

    componentDidMount() {
        setTimeout(()=>{
            this.setState({wallet: this.props.wallet});
        },1000);

    }

    sendOTP() {
        this.setState({isSendOTP: true});
    }

    render() {
        return (
            <div className={"w-full"}>
                <div className={"flex justify-content-center"}>

                    <h1>{map("Wallet.Choose") + map(this.state.wallet)}</h1>
                </div>
                <div className={"flex mt-4"}>
                    <h2>{map("Wallet.Notification")}</h2>
                    <div className={"flex ml-4 align-items-center col-6"}>
                        <PhoneInput
                            className={"h-3rem"}
                            country="VN"
                            autoFocus
                            value={this.state.numberPhone}
                            onChange={(value) => {
                                this.setState({numberPhone: value})
                            }}
                        />
                        <div className={"ml-5"}>
                            <Button label={map("Wallet.Send")} onClick={this.sendOTP}/>
                        </div>
                    </div>
                </div>
                <div className={"flex justify-content-center mt-8"}>
                    {
                        this.state.isSendOTP
                            ? <div className={""}>
                                <OTPInput
                                    value={this.state.otp}
                                    onChange={(value) => {
                                        this.setState({otp: value})
                                    }}
                                    autoFocus
                                    OTPLength={6}
                                    otpType="number"
                                    disabled={false}/>
                                <div className={"flex justify-content-center mt-8"}>
                                    <Button
                                    className={"pl-5 pr-5"}
                                        label={map("Wallet.Confirm")}
                                        onClick={this.sendOTP}/>
                                </div>
                            </div>
                            : <div/>
                    }

                </div>

            </div>
        );
    }
}

export default withStyles(walletStyle)(Wallet);