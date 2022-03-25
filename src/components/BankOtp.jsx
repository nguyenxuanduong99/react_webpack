import React, {Component} from "react";
import withStyles from "react-jss";
import bankOtpStyle from "../styles/BankOtpStyle";
import {map} from "../intl/Message";
import {Button} from "primereact/button";
import OTPInput from "otp-input-react";

class BankOtp extends Component {
    constructor(props) {
        super(props);
        let {bank} = this.props;
        this.state = {
            bank: bank,
            otp: "",
            isConfirm: false,

        };
        this.onClickConfirm = this.onClickConfirm.bind(this);
        this.sendOTP = this.sendOTP.bind(this);

    }

    componentDidMount() {
        setTimeout(() => {

        }, 1000);
        console.log("bank: " + this.state.bank.value);
    }

    onClickConfirm() {
        this.setState({
            isConfirm: true
        })
    }

    sendOTP() {

    }

    render() {
        return (
            <div className={"w-full"}>
                <div className={"flex justify-content-center"}>
                    <h1>{map("Bank.Choose") + this.state.bank.value}</h1>
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
        );
    }
}

export default withStyles(bankOtpStyle)(BankOtp);