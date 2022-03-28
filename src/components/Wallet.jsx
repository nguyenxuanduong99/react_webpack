import React, {Component} from "react";
import {map} from "../intl/Message";
import withStyles from "react-jss";
import walletStyle from "../styles/WalletStyle";
import PhoneInput from "react-phone-number-input/input";
import {Button} from "primereact/button";
import OTPInput from "otp-input-react";
import SuccessNotify from "./SuccessNotify";

class Wallet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            wallet: "",
            otp: "",
            isSendOTP: false,
            numberPhone: "",
            success: false,
        };
        this.comeBack = this.comeBack.bind(this);
        this.comeBackNotify = this.comeBackNotify.bind(this);
        this.sendOTP = this.sendOTP.bind(this);
        this.confirmOTP = this.confirmOTP.bind(this);
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({wallet: this.props.wallet});
        }, 1000);

    }

    comeBack() {
        let {comeBack} = this.props;
        if ((comeBack !== undefined)) {
            comeBack();
        }
    }
    comeBackNotify(){
        this.setState({
            wallet: "",
            otp: "",
            isSendOTP: false,
            numberPhone: "",
            success: false,

        });
    }

    sendOTP() {
        this.setState({isSendOTP: true});
    }

    confirmOTP() {
        this.setState({
            success: true,
        });
    }

    render() {
        return (
            <div>
                {
                    this.state.success === false
                        ? <div className={"w-full"}>
                            <div className={""}>
                                <i className={"pi pi-arrow-left"} onClick={this.comeBack}/>
                                <h2 className={"flex justify-content-center"}>{map("Wallet.Choose") + map(this.state.wallet)}</h2>
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
                                                    onClick={this.confirmOTP}/>
                                            </div>
                                        </div>
                                        : <div/>
                                }

                            </div>

                        </div>
                        : <SuccessNotify comeBack = {this.comeBackNotify}/>
                }

            </div>

        );
    }
}

export default withStyles(walletStyle)(Wallet);