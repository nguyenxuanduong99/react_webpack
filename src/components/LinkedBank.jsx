import React, {Component} from "react";
import withStyles from "react-jss";
import linkedBankStyle from "../styles/LinkedBankStyle";
import {map} from "../intl/Message";
import Logo from "../assets/images/qrCode.jpg";
import DataListView from "./DataListView";
import BankOtp from "./BankOtp";

class LinkedBank extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedBank: null,
            type: 0,

        };
        this.directBankOption = [
            {value: "Vietcombank", key: "0", icon: Logo},
            {value: "Vietinbank", key: "1", icon: Logo},
            {value: "BIDV", key: "2", icon: Logo},
            {value: "Agribanl", key: "3", icon: Logo},
            {value: "MBBank", key: "4", icon: Logo},
            {value: "Techcombank", key: "5", icon: Logo},
            {value: "VPBank", key: "6", icon: Logo},
            {value: "Vietcombank", key: "7", icon: Logo},
            {value: "Vietinbank", key: "8", icon: Logo},
            {value: "BIDV", key: "9", icon: Logo},
            {value: "Agribanl", key: "10", icon: Logo},
            {value: "MBBank", key: "11", icon: Logo},
            {value: "Techcombank", key: "12", icon: Logo},
            {value: "VPBank", key: "13", icon: Logo},
        ];
        this.domesticATMOption = [
            {value: "Vietcombank", key: "0", icon: Logo},
            {value: "Vietinbank", key: "1", icon: Logo},
            {value: "BIDV", key: "2", icon: Logo},
            {value: "Agribanl", key: "3", icon: Logo},
            {value: "MBBank", key: "4", icon: Logo},
            {value: "Techcombank", key: "5", icon: Logo},
            {value: "VPBank", key: "6", icon: Logo},
            {value: "Vietcombank", key: "7", icon: Logo},
            {value: "Vietinbank", key: "8", icon: Logo},
            {value: "BIDV", key: "9", icon: Logo},
            {value: "Agribanl", key: "10", icon: Logo},
            {value: "MBBank", key: "11", icon: Logo},
            {value: "Techcombank", key: "12", icon: Logo},
            {value: "VPBank", key: "13", icon: Logo},
        ];
        this.onChooseBankDirect = this.onChooseBankDirect.bind(this);
        this.onChooseBankDomestic = this.onChooseBankDomestic.bind(this);
        this.comeBack = this.comeBack.bind(this);
        this.comeBackLinkedBank = this.comeBackLinkedBank.bind(this);

    }

    comeBack() {
        let {comeBack} = this.props;
        if ((comeBack !== undefined)) {
            comeBack();
        }
    }

    comeBackLinkedBank(){
        this.setState({
            selectedBank: null,
            type: 0
        });
    }

    onChooseBankDirect(bank) {
        this.setState({
            selectedBank: bank,
            type: "direct"
        });
    }

    onChooseBankDomestic(bank) {
        this.setState({
            selectedBank: bank,
            type: "domestic"
        });
    }

    render() {
        return (
            <div className={"w-full"}>
                {
                    this.state.type === 0
                        ? <div className={"w-full"}>
                            <div className={""}>
                                <i className={"pi pi-arrow-left"} onClick={this.comeBack}/>
                                <h2 className={"flex justify-content-center"}>{map("LinkedBank.Choose")}</h2>
                            </div>
                            <div className={""}>
                                <h2>{map("LinkedBank.DirectLinkBank")}</h2>
                            </div>
                            <div>
                                <DataListView
                                    list={this.directBankOption}
                                    onChooseBank={this.onChooseBankDirect}
                                />
                            </div>
                            <div className={""}>
                                <h2>{map("LinkedBank.DomesticATM")}</h2>
                            </div>
                            <div>
                                <DataListView
                                    list={this.domesticATMOption}
                                    onChooseBank={this.onChooseBankDomestic}
                                />
                            </div>
                        </div>
                        : <BankOtp bank={this.state.selectedBank}
                                   comeBack={this.comeBackLinkedBank}
                        />
                }

            </div>
        );
    }
}

export default withStyles(linkedBankStyle)(LinkedBank);