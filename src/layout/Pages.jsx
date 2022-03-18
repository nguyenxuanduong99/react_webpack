import React, {Component} from "react";
import withStyles from "react-jss";
import pageStyles from "./PageStyles.jsx";
import {Dropdown} from "primereact/dropdown";
import {SelectButton} from "primereact/selectbutton";
import Logo from "../assets/images/logo.png";
import QrCode from "../assets/images/qrCode.png";
import {Card} from "primereact/card";
import {Button} from "primereact/button";

class Pages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            warningMessage: "Vui lòng không tắt trình duyệt cho đến khi đơn đặt hàng được xác nhận.",
            openMobipayOptions : [
                {name: "Quét mã QR", value: 1},
                {name: "Ứng dụng Mobipay", value: 2}
            ],
            timer: true,
            minutes: "5",
            seconds: "10",
            amount: "26450",
            serviceCode: "1243748",
            description: "Thanh toán tại Mobipay",
            selectedLanguage: "",
            selectedOpenMobipay: "Quét mã QR",
        };
        this.language = [
            {name: "Việt Nam",},
            {name: "English",}
        ];

        this.intervalId = null;
        this.onLanguageChange = this.onLanguageChange.bind(this);
        this.itemSelect = this.itemSelect.bind(this);
        this.timer = this.timer.bind(this);
    }
    componentDidMount() {
        this.intervalId = setInterval(this.timer, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    timer() {
        let seconds = this.state.seconds;
        let minutes = this.state.minutes;
        if (seconds > 0) {
            this.setState({seconds: seconds - 1});
        }
        if (seconds === 0) {
            if (minutes <= 0) {
                clearInterval(this.intervalId);
                this.setState({timer: false});
            } else {
                this.setState({minutes: minutes - 1});
                this.setState({seconds: 59});
            }
        }
    }


    onLanguageChange(e) {
        this.setState({selectedLanguage: e.value});
    }

    itemSelect(option) {
        return <div>{option.name}</div>
    }

    render() {
        const {classes} = this.props;
        return (
            <div className={"w-screen"}>
                {/*heaader*/}
                <div className={"p-1"}>
                    <div className={"flex"}>
                        <a className={"col-6 align-items-end"}>
                            <img className={classes.imgLog}
                                 src={Logo}/>
                            <span className={"font-semibold text-3xl"}>| GATEWAY</span>
                        </a>
                        <div className={"col-4"}/>
                        <div className="col-2">
                            <Dropdown value={this.state.selectedLanguage} optionLabel={"name"}
                                      options={this.language} onChange={this.onLanguageChange}
                                      placeholder={"Việt Nam"}/>
                        </div>
                    </div>
                </div>

                {/*body*/}
                <div>
                    <div className={classes.bgWarnMessage}>
                        <div className={"flex justify-content-center"}>
                            <p className={"text-lg font-medium"}>{this.state.warningMessage}</p>
                        </div>
                    </div>

                    <div className={"flex"}>
                        <div className={"col-1"}/>
                        {/*fragment left*/}
                        <div className={"col-7"}>
                            <Card className={"justify-content-center"}>
                                {/*quet ung dung*/}
                                <div className={""}>
                                    <div className={"flex flex-nowrap justify-content-center"}>
                                        {/*<SelectButton value={this.state.selectedOpenMobipay}*/}
                                        {/*              options={this.openMobipayOptions}*/}
                                        {/*              onChange={(e) => this.setState({selectedOpenMobipay: e.value})}*/}
                                        {/*              itemTemplate={this.itemSelect}/>*/}
                                        <div className={"col-6 "}>
                                            <Button label={this.state.openMobipayOptions[0].name} className="p-button-text text-2xl font-semibold  w-full" />
                                        </div>
                                        <div className={"col-6"}>
                                            <Button label={this.state.openMobipayOptions[1].name} className="p-button-text text-2xl font-semibold w-full" />
                                        </div>

                                    </div>

                                    <div className={"w-full"}>
                                        <div>
                                            <div className={"flex justify-content-center"}>
                                                <img src={Logo} className={classes.imgLog2}/>
                                            </div>

                                            {/*ảnh quét QR*/}
                                            <div className={"flex justify-content-center "}>
                                                <img src={QrCode} />
                                            </div>
                                        </div>

                                        <div className={"w-full"}>
                                            <h1>Hướng dẫn thanh toán</h1>
                                            <div className={"flex"}>
                                                <div className={"col-4"}>
                                                    <div className={"flex justify-content-center"}>
                                                        <img src={"dd"}/>
                                                    </div>
                                                    <p>Bước 1</p>
                                                    <p>Mở ứng dụng Mobipay</p>
                                                </div>
                                                <div className={"col-4"}>
                                                    <div className={"flex justify-content-center"}>
                                                        <img src={"dd"}/>
                                                    </div>
                                                    <p>Bước 2</p>
                                                    <p>
                                                        "Trên Mobipay chọn biểu tượng"
                                                        <img src={"dd"}/>
                                                    </p>
                                                </div>
                                                <div className={"col-4"}>
                                                    <div className={"flex justify-content-center"}>
                                                        <img src={"dd"}/>
                                                    </div>
                                                    <p>Bước 3</p>
                                                    <p>Mở ứng dụng Mobipay</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                            {/*cancel-transaction*/}

                            <Card className={"mt-3 mb-3"}>
                                <a>
                                    <i className={"pi-spin pi-times"}/>
                                    Hủy giao dịch
                                </a>
                            </Card>

                            {/*download mobipay*/}
                            <Card className={classes.bgDownload}>
                                <div className={"flex align-content-center"}>
                                    <div className={"col-1"}>
                                        <i className={"pi pi-info-circle"}/>
                                    </div>
                                    <p className={"col-11"}>
                                        "Thiết bị này cần có ứng dụng Mobipay để thanh toán."
                                        <br/>
                                        <a style={{color: "#008fe5"}}>Tải ứng dụng Mobipay tại đây</a>
                                    </p>
                                </div>
                            </Card>


                        </div>

                        {/*fragment right*/}
                        <div className={"col-3"}>
                            <div className={"justify-content-center"}>
                                <Card>
                                    <h1>Thông tin đơn hàng</h1>
                                    <div>
                                        {/*logo*/}
                                        {/*<img src={Logo}/>*/}
                                        <h2>Nhà cung cấp</h2>
                                        <p className={"font-medium"}>Dominos HN</p>
                                    </div>
                                    <div>
                                        <h3>Số tiền thanh toán</h3>
                                        <p>{this.state.amount}</p>
                                    </div>
                                    <div>
                                        <div>
                                            <h3>Mã giao dịch</h3>
                                            <p>{this.state.serviceCode}</p>
                                        </div>
                                        <div>
                                            <h3>Nội dung</h3>
                                            <p>{this.state.description}</p>
                                        </div>
                                    </div>
                                </Card>
                                {/*thoi gian giao dich*/}
                                <Card className={"mt-4"}>
                                    <p className={"text-center"}>Giao dịch kết thúc trong</p>
                                    <div className={"text-center"}>
                                        <span> {"0" + this.state.minutes} </span>
                                        <span> : </span>
                                        <span> {this.state.seconds >= 10
                                            ?this.state.seconds
                                            :"0" + this.state.seconds} </span>
                                    </div>

                                </Card>

                            </div>
                        </div>
                    </div>
                </div>

                {/*safety and security*/}
                <Card className={"mt-3"}>
                    <div className={"flex flex-wrap"}>
                        <div className={"flex col-6"}>
                            <div className={"col-1"}>
                                <i className={"pi pi-lock"}/>
                            </div>

                            <div className={"col-11"}>
                                <h3>An toàn thông tin</h3>
                                <p>Chúng tôi cam kết mọi thông tin thanh toán của bạn được bảo mật và mã hóa.</p>
                            </div>
                        </div>
                        <div className={"flex col-6"}>
                            <div className={"col-1"}>
                                <i className={"pi pi-shield"}/>
                            </div>
                            <div className={"col-11"}>
                                <h3>Tiêu chuẩn bảo mật</h3>
                                <p>Mobipay đảm bảo an toàn dữ liệu, đạt tiêu chuẩn bảo mật quốc tế.</p>
                            </div>
                        </div>
                    </div>
                </Card>

                {/*footer*/}
                <div className={"mt-3"}>
                    <Card>
                        <div>
                            <div>
                                <img src={""}/>
                            </div>
                            <div>
                                <div>
                                    <p>
                                        <strong>Mobipay Gateway</strong>
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        <strong>Dịch vụ công thanh toán của tập đoàn Mobifone</strong>
                                    </p>
                                    <p>
                                        <strong>Giấy phép hoạt động cung ứng dịch vụ Trung gian thanh toán số do Nhà
                                            nước cấp ngày 18/1/2020 </strong>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <a>
                                    <div>
                                        <i className={"pi pi-phone"}/>
                                        <p>1900 54 13 12</p>
                                        <p>(Cước phí 1000đ/phút)</p>
                                    </div>
                                </a>
                                <a>
                                    <div>
                                        {/*<i className={"pi pi-envelope"}></i>*/}
                                        <i className={"pi pi-phone"} color={"#F27"}/>
                                        <p>hotro@mobipay.vn</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div>
                            <p>
                                2022
                                <a href={"https://telsoft.com.vn"}>TELSOFT</a>
                                - Copyright by TELSOFT, All right is reserved
                            </p>
                        </div>
                    </Card>
                </div>
            </div>
        );
    }
}

export default withStyles(pageStyles)(Pages);