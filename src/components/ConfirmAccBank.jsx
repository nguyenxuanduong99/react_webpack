import React,{Component} from "react";
import withStyles from "react-jss";
import confirmAccBankStyle from "../styles/ConfirmAccBankStyle";
class ConfirmAccBank extends Component{
    constructor(props) {
        super(props);
        this.state = {

        };


    }

    render() {
        return(
            <div className={"w-full"}>
                <div className={"fex justify-content-center"}>

                </div>
            </div>
        );
    }
}
export default withStyles(confirmAccBankStyle)(ConfirmAccBank);