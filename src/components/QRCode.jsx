import React, {Component} from "react";
import withStyles from "react-jss";
import {Button} from "primereact/button";
import {map} from "../intl/Message";
import Logo from "../assets/images/logo.png";
import qrCodeStyle from "../styles/QRCodeStyle";
import QrCode from "../assets/images/qrCode.jpg";

class QRCode extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOpenMobipay: 0,
            openMobipayOptions: [
                {name: "QRCode.Scan", value: 0},
                {name: "QRCode.MobiMoney", value: 1}
            ],
        };
        this.openQrCode = this.openQrCode.bind(this);
        this.openMobipay = this.openMobipay.bind(this);
    }

    openQrCode() {
        this.setState({selectedOpenMobipay: 0})
    }

    openMobipay() {
        this.setState({selectedOpenMobipay: 1})
    }

    render() {
        const {classes: {bgDownload, imgLog2}} = this.props;
        return (
            <div className={"w-full"}>
                <div className={"justify-content-center"}>
                    {/*quet ung dung*/}
                    <div className={"flex flex-nowrap justify-content-center"}>
                        <div className={"col-6 "}>
                            <Button label={map(this.state.openMobipayOptions[0].name)}
                                    className="text-2xl font-semibold  w-full"
                                    onClick={this.openQrCode}
                                    style={{
                                        backgroundColor: this.state.selectedOpenMobipay === 1 ? "white" : "#007ad9",
                                        color: this.state.selectedOpenMobipay === 1 ? "#000000" : "white"
                                    }}/>
                        </div>
                        <div className={"col-6"}>
                            <Button label={map(this.state.openMobipayOptions[1].name)}
                                    className="text-2xl font-semibold w-full"
                                    onClick={this.openMobipay}
                                    style={{
                                        backgroundColor: this.state.selectedOpenMobipay === 0 ? "white" : "#007ad9",
                                        color: this.state.selectedOpenMobipay === 0 ? "#000000" : "white"
                                    }}/>
                        </div>
                    </div>
                    <div>
                        {
                            this.state.selectedOpenMobipay === 0
                                ?
                                <div className={"w-full"}>
                                    <div>
                                        <div className={"flex justify-content-center"}>
                                            <img src={Logo} className={imgLog2}/>
                                        </div>

                                        {/*ảnh quét QR*/}
                                        <div className={"flex justify-content-center "}>
                                            <img src={QrCode}/>
                                        </div>
                                    </div>

                                    <div className={"w-full"} style={{
                                        color: "white"
                                        ,
                                        backgroundImage: "linear-gradient(134deg, rgb(0, 141, 231) 30%, rgb(12, 197, 107))"
                                    }}>
                                        <div className={"flex justify-content-center"}>
                                            <h1>{map("QRCode.Payment_Guide")}</h1>
                                        </div>

                                        <div className={"flex"}>
                                            <div className={"col-4"}>
                                                <div className={"flex"}>
                                                    <img src={""}/>
                                                </div>
                                                <p>Bước 1</p>
                                                <p>{map("QRCode.OpenMobimoney")}</p>
                                            </div>
                                            <div className={"col-4"}>
                                                <div className={"flex"}>
                                                    <img src={""}/>
                                                </div>
                                                <p>Bước 2</p>
                                                <p>
                                                    {map("QRCode.MobiMoneyChoose")}
                                                    <img src={""}/>
                                                </p>
                                            </div>
                                            <div className={"col-4"}>
                                                <div className={"flex"}>
                                                    <img src={""}/>
                                                </div>
                                                <p>Bước 3</p>
                                                <p>{map("QRCode.QRCodeAndPayment")}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                :
                                //TODO: chua chuyen language en vn
                                <div className={"w-full"}>
                                    <div className={"flex justify-content-center mt-3 mb-3"}>
                                        Bạn có thể thanh toán bằng Mobipay
                                    </div>
                                    <div className={"flex"}>
                                        <div className={"col-3"}/>
                                        <Button label={"Mở ứng dụng Mobipay"}
                                                className="text-2xl font-semibold  w-full"
                                            // onClick={this.openQrCode}
                                                icon={"pi pi-check"}
                                                style={{
                                                    backgroundColor: "#007ad9",
                                                    color: "white"
                                                }}/>
                                        <div className={"col-3"}/>
                                    </div>
                                    <div className={"flex justify-content-center mt-3"}>
                                        Chưa có ứng dụng Mobipay?
                                        <a href={""} style={{color: "#0070c9"}}>
                                            Tải ngay tại đây
                                        </a>
                                    </div>
                                </div>
                        }
                    </div>
                </div>

                {/*download mobipay*/}
                <div className={bgDownload}>
                    <div className={"flex align-items-center"}>
                        <div className={"flex col-1 justify-content-center"}>
                            <i className={"pi pi-info-circle"}/>
                        </div>
                        <p className={"col-11"}>
                            {map("Page.RequireMobiMoney")}
                            <br/>
                            <a style={{color: "#008fe5"}}>{map("Page.MobiMoneyDownload")}</a>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(qrCodeStyle)(QRCode);