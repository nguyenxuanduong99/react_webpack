import React, {Component} from "react";
import withStyles from "react-jss";
import bankOtpStyle from "../styles/BankOtpStyle";
import {map} from "../intl/Message";
import {Button} from "primereact/button";
import OTPInput from "otp-input-react";
import PhoneInput from "react-phone-number-input/input";
import SuccessNotify from "./SuccessNotify";

class BankOtp extends Component {
    constructor(props) {
        super(props);
        let {bank} = this.props;
        this.state = {
            bank: bank,
            otp: "",
            isConfirm: false,
            success: false,
        };
        this.onClickConfirm = this.onClickConfirm.bind(this);
        this.sendOTP = this.sendOTP.bind(this);
        this.comeBack = this.comeBack.bind(this);
        this.comeBackNotify = this.comeBackNotify.bind(this);
    }

    comeBack() {
        let {comeBack} = this.props;
        if ((comeBack !== undefined)) {
            comeBack();
        }
    }
    comeBackNotify(){
        this.setState({
            otp: "",
            isConfirm: false,
            success: false,
        })
    }
    onClickConfirm() {
        this.setState({
            isConfirm: true
        })
    }

    sendOTP() {
        this.setState({success: true});
    }

    render() {
        return (
            <div>
                {
                    this.state.success === false
                        ? <div className={"w-full"}>
                            <div className={""}>
                                <i className={"pi pi-arrow-left"} onClick={this.comeBack}/>
                                <h2 className={"flex justify-content-center"}>{map("Bank.Choose") + this.state.bank.value}</h2>
                            </div>
                            <div>
                                <div className={"flex justify-content-center"}>
                                    <img src={this.state.bank.icon} style={{width: "12rem"}}/>
                                </div>
                            </div>
                            <div className={"flex justify-content-center mt-3"}>
                                {
                                    this.state.isConfirm === false
                                        ? <Button label={map("Bank.Confirm")} onClick={this.onClickConfirm}/>
                                        : <div className={""}>
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
                                                    label={map("Bank.SendOtp")}
                                                    onClick={this.sendOTP}/>
                                            </div>
                                        </div>
                                }
                            </div>
                        </div>
                        : <SuccessNotify comeBack={this.comeBackNotify}/>
                }

            </div>
        );
    }
}

export default withStyles(bankOtpStyle)(BankOtp);