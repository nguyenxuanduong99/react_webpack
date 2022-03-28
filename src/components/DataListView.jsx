import React, {Component} from "react";
import {DataView} from "primereact/dataview";
import {Button} from "primereact/button";

class DataListView extends Component {
    constructor(props) {
        super(props);
        let {list} = props;
        this.state = {
            list: list,
            products: null,
            loading: false,
            first: 0,
            totalRecords: 0,
        };
        this.rows = 12;
        this.bankTemplate = this.bankTemplate.bind(this);
        this.onPage = this.onPage.bind(this);
        this.onClickBank = this.onClickBank.bind(this);
    }

    componentDidMount() {
        setTimeout(() => {
                this.setState({
                    totalRecords: this.state.list.length,
                    products: this.state.list.slice(0, this.rows),
                });
        }, 1000);
    }
    onPage(event) {
        this.setState({
            loading: true
        });

        //imitate delay of a backend call
        setTimeout(() => {
            const startIndex = event.first;
            const endIndex = Math.min(event.first + this.rows, this.state.totalRecords);
            const newProducts = startIndex === endIndex
                ? this.state.list.slice(startIndex)
                : this.state.list.slice(startIndex, endIndex);

            this.setState({
                first: startIndex,
                products: newProducts,
                loading: false
            });
        }, 1000);

    }

    bankTemplate(bank) {
        return (
            <Button
                className={"w-3 bg-white-alpha-10 border-0 text-black-alpha-90 justify-content-center"}
                onClick = {(e)=>this.onClickBank(e,bank)}
            >
                <div>
                    <div className={"flex justify-content-center"}>
                        <img src={bank.icon} style={{width: "12rem"}}/>
                    </div>
                    <div className={"flex justify-content-center"}>{bank.value}</div>
                </div>
            </Button>
        );
    }

    onClickBank(e,bank){
        let{onChooseBank} = this.props;
        if((onChooseBank !== undefined)){
            onChooseBank(bank);
        }
    }

    render() {
        return (
            <div className={"w-full"}>
                <DataView
                    value={this.state.products}
                    itemTemplate={this.bankTemplate}
                    lazy paginator
                    paginatorPosition={'bottom'}
                    rows={this.rows}
                    totalRecords={this.state.totalRecords}
                    first={this.state.first}
                    onPage={this.onPage}
                    loading={this.state.loading}
                />
            </div>
        );
    }
}
export default DataListView;