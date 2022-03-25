import React, {Component} from "react";
import withStyles from "react-jss";
import otherBankStyle from "../styles/OtherBankStyle";
import Logo from "../assets/images/qrCode.jpg";
import {map} from "../intl/Message";
import DataListView from "./DataListView";

class OtherBank extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
        this.bankOption = [
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
        this.onChooseBank = this.onChooseBank.bind(this);
    }
    onChooseBank(bank){

    }
    render() {
        return (
            <div className={"w-full"}>
                <div className={"w-full"}>
                    <div className={"flex justify-content-center"}>
                        <h2>{map("OtherBank.Choose")}</h2>
                    </div>
                    <div>
                        <DataListView
                            list={this.bankOption}
                            onChooseBank={this.onChooseBankDirect}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(otherBankStyle)(OtherBank);