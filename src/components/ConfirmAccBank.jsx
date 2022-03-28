import React, {Component} from "react";
import withStyles from "react-jss";
import confirmAccBankStyle from "../styles/ConfirmAccBankStyle";
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import {map} from "../intl/Message";
import SuccessNotify from "./SuccessNotify";
class ConfirmAccBank extends Component {
    constructor(props) {
        super(props);
        let {bank} = this.props;
        this.state = {
            bank: bank,
            stk: "",
            success: false,
        };
        this.onContinue = this.onContinue.bind(this);
        this.comeBack = this.comeBack.bind(this);
        this.comeBackNotify = this.comeBackNotify.bind(this);
    }
    comeBack(){
        let{comeBack} = this.props;
        if((comeBack !== undefined)){
            comeBack();
        }
    }
    comeBackNotify(){
        this.setState({
            stk: "",
            success: false,
        })
    }
    onContinue(){
        this.setState({success: true})
    }
    render() {
        return (
            <div>
                {
                    this.state.success ===false
                    ?<div className={"w-full"}>
                            <div className={""}>
                                <i className={"pi pi-arrow-left"} onClick={this.comeBack}/>
                                <h2 className={"flex justify-content-center"}>{map("ConfirmAccBank.Confirm")}</h2>
                            </div>
                            <div className={"flex justify-content-center mt-5"}>
                                <InputText className={"w-5"}
                                           id="STK" value={this.state.stk}
                                           onChange={(e) => this.setState({stk: e.target.value})}
                                           placeholder={map("ConfirmAccBank.AccountNumber")}
                                />
                            </div>
                            <div className={"flex justify-content-center mt-5"}>
                                <InputText className={"w-5"}
                                           id="STK" value={this.state.stk}
                                           onChange={(e) => this.setState({stk: e.target.value})}
                                           placeholder={map("ConfirmAccBank.AccountUser")}
                                />
                            </div>
                            <div className={"flex justify-content-center mt-5"}>
                                <Button
                                    label={map("ConfirmAccBank.Continue")}
                                    onClick = {this.onContinue}
                                />
                            </div>
                        </div>
                        :<SuccessNotify comeBack = {this.comeBackNotify}/>
                }
            </div>

        );
    }
}

export default withStyles(confirmAccBankStyle)(ConfirmAccBank);