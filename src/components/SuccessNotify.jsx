import React, {Component} from "react";
import {map} from "../intl/Message";

class SuccessNotify extends Component {
    constructor(props) {
        super(props);
        this.comeBack = this.comeBack.bind(this);
    }
    comeBack(){
        let{comeBack} = this.props;
        if((comeBack !== undefined)){
            comeBack();
        }
    }
    render() {
        return (
            <div className={""}>
                <i className={"pi pi-arrow-left"} onClick={this.comeBack}/>
                <h1 className={"flex justify-content-center"}>{map("SuccessNotify.Notify")}</h1>
            </div>
        );
    }
}

export default SuccessNotify;