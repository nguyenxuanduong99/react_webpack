import React, {Component} from "react";
import withStyles from "react-jss";
import pageStyles from "../layout/PageStyles";
import {map} from "../intl/Message";
import {ListBox} from "primereact/listbox";

class Payment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedPayment: null,
        };
        this.PaymentOption = [
            {value: "Payment.MP", key: "MP"},
            {value: "Payment.MM", key: "MM"},
            {value: "Payment.NHLK", key: "NHLK"},
            {value: "Payment.NH", key: "NH"},
        ];
        this.paymentTemplate = this.paymentTemplate.bind(this);
        this.onChoosePayment = this.onChoosePayment.bind(this);

    }

    paymentTemplate(option) {
        return (
            <div className="w-full">
                <div>{map(option.value)}</div>
            </div>
        );
    }

    onChoosePayment(option){
        this.setState({selectedPayment: option.value});

    }

    render() {
        const {classes = {}} = this.props;
        return (
            <div className={"w-full"}>
                <div className={"flex justify-content-center"}>
                    <h2>{map("Payment.Choose")}</h2>
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
}

export default withStyles(pageStyles)(Payment);