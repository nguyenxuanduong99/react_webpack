import React, {Component} from "react";
import withStyles from "react-jss";
import pageStyles from "../layout/PageStyles";
import {map} from "../intl/Message";
import {ListBox} from "primereact/listbox";
import {paymentKey} from "../assets/enum";
import Wallet from "./Wallet";
import LinkedBank from "./LinkedBank";
import OtherBank from "./OtherBank";

class Payment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedPayment: "body",
        };

        this.PaymentOption = [
            {value: "Payment.MP", key: paymentKey.MP},
            {value: "Payment.MM", key: paymentKey.MM},
            {value: "Payment.NHLK", key: paymentKey.NHLK},
            {value: "Payment.NH", key: paymentKey.NH},
        ];
        this.paymentTemplate = this.paymentTemplate.bind(this);
        this.onChoosePayment = this.onChoosePayment.bind(this);
        this.comeBack = this.comeBack.bind(this);
    }

    paymentTemplate(option) {
        return (
            <div className="w-full">
                <div>{map(option.value)}</div>
            </div>
        );
    }

    onChoosePayment(option) {
        this.setState({selectedPayment: option.value});
    }

    renderSwitch(value) {
        switch (value) {
            case "body":
                return this.bodyPayment();
            case "Payment.MP":
            case "Payment.MM":
                return <Wallet wallet={value} comeBack = {this.comeBack}/>
            case "Payment.NHLK":
                return <LinkedBank comeBack = {this.comeBack}/>
            case "Payment.NH":
                return <OtherBank comeBack = {this.comeBack}/>
        }
    }
    comeBack(){
        setTimeout(
            ()=>{
                this.setState({selectedPayment: "body"});
            },1000
        );
    }
    bodyPayment() {
        return (
            <div className={"w-full"}>
                <div className={""}>
                    {/*<i className={"pi pi-arrow-left"} onClick={this.comeBack}/>*/}
                    <h2 className={"flex justify-content-center"}>{map("Payment.Choose")}</h2>
                </div>
                <div>
                    <ListBox className={"w-full"}
                             value={this.state.selectedPayment}
                             options={this.PaymentOption}
                             onChange={this.onChoosePayment}
                             optionLabel="value"
                             itemTemplate={this.paymentTemplate}
                    />
                </div>
            </div>
        );
    }

    render() {
        const {classes = {}} = this.props;
        return (
            this.renderSwitch(this.state.selectedPayment)
        );
    }
}


export default withStyles(pageStyles)(Payment);