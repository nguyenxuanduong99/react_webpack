import React, {Component} from "react";
import withStyles from "react-jss";
import pageStyles from "./PageStyles.jsx";
import {Dropdown} from "primereact/dropdown";
import Logo from "../assets/images/logo.png";
import QrCode from "../assets/images/qrCode.png";
import {Card} from "primereact/card";
import {Button} from "primereact/button";

class Pages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            warningMessage: "Vui lòng không tắt trình duyệt cho đến khi đơn đặt hàng được xác nhận.",
            selectedLanguage: "",
            selectedOpenMobipay: 0,
            openMobipayOptions: [
                {name: "Quét mã QR", value: 0},
                {name: "Ứng dụng Mobipay", value: 1}
            ],

            timeunix: 75,
            time: {},

            amount: "26450",
            serviceCode: "1243748",
            description: "Thanh toán tại Mobipay",

        };
        this.language = [
            {name: "Việt Nam", key: 0},
            {name: "English", key: 1}
        ];

        this.onLanguageChange = this.onLanguageChange.bind(this);
        this.openQrCode = this.openQrCode.bind(this);
        this.openMobipay = this.openMobipay.bind(this);
        this.timer = 0;
        this.countDown = this.countDown.bind(this);
    }

    componentDidMount() {
        //TODO: call API get response contain time
        let response = {
            time: new Date().getTime() + 70,
        };
        let timeLeftVar = response.time - new Date().getTime();
        this.setState({timeunix: timeLeftVar});

        timeLeftVar = this.secondsToTime(this.state.timeunix);
        this.setState({time: timeLeftVar});
        // this.intervalId = setInterval(this.timer, 1000);
        this.timer = setInterval(this.countDown, 1000);
    }

    // componentWillUnmount() {
    //     clearInterval(this.intervalId);
    // }
    // timer() {
    //     let seconds = this.state.seconds;
    //     let minutes = this.state.minutes;
    //     if (seconds > 0) {
    //         this.setState({seconds: seconds - 1});
    //     }
    //     if (seconds === 0) {
    //         if (minutes <= 0) {
    //             clearInterval(this.intervalId);
    //             // redirect to expired transaction page
    //
    //         } else {
    //             this.setState({minutes: minutes - 1});
    //             this.setState({seconds: 59});
    //         }
    //     }
    // }

    secondsToTime(secs) {
        let hours = Math.floor(secs / (60 * 60));

        let divisor_for_minutes = secs % (60 * 60);
        let minutes = Math.floor(divisor_for_minutes / 60);

        let divisor_for_seconds = divisor_for_minutes % 60;
        let seconds = Math.ceil(divisor_for_seconds);

        let obj = {
            "h": hours,
            "m": minutes,
            "s": seconds
        };
        return obj;
    }

    countDown() {
        // Remove one second, set state so a re-render happens.
        let timeunix = this.state.timeunix - 1;
        this.setState({
            time: this.secondsToTime(timeunix),
            timeunix: timeunix,
        });

        // Check if we're at zero.
        if (timeunix == 0) {
            clearInterval(this.timer);
        }
    }

    openQrCode() {
        this.setState({selectedOpenMobipay: 0})
    }

    openMobipay() {
        this.setState({selectedOpenMobipay: 1})
    }

    onLanguageChange(e) {
        this.setState({selectedLanguage: e.value});
    }

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.container}>
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
                            <div className={"flex justify-content-center"}>
                                <Dropdown value={this.state.selectedLanguage} optionLabel={"name"}
                                          options={this.language} onChange={this.onLanguageChange}
                                          placeholder={"Việt Nam"}/>
                            </div>


                        </div>
                    </div>
                </div>

                {/*body*/}
                <div>
                    {/*Warn Message*/}
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
                                <div className={"flex flex-nowrap justify-content-center"}>
                                    <div className={"col-6 "}>
                                        <Button label={this.state.openMobipayOptions[0].name}
                                                className="text-2xl font-semibold  w-full"
                                                onClick={this.openQrCode}
                                                style={{
                                                    backgroundColor: this.state.selectedOpenMobipay == 1 ? "white" : "#007ad9",
                                                    color: this.state.selectedOpenMobipay == 1 ? "#000000" : "white"
                                                }}/>
                                    </div>
                                    <div className={"col-6"}>
                                        <Button label={this.state.openMobipayOptions[1].name}
                                                className="text-2xl font-semibold w-full"
                                                onClick={this.openMobipay}
                                                style={{
                                                    backgroundColor: this.state.selectedOpenMobipay == 0 ? "white" : "#007ad9",
                                                    color: this.state.selectedOpenMobipay == 0 ? "#000000" : "white"
                                                }}/>
                                    </div>
                                </div>
                                <div>
                                    {
                                        this.state.selectedOpenMobipay == 0
                                            ?
                                            <div className={"w-full"}>
                                                <div>
                                                    <div className={"flex justify-content-center"}>
                                                        <img src={Logo} className={classes.imgLog2}/>
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
                                                        <h1>Hướng dẫn thanh toán</h1>
                                                    </div>

                                                    <div className={"flex"}>
                                                        <div className={"col-4"}>
                                                            <div className={"flex"}>
                                                                <img src={""}/>
                                                            </div>
                                                            <p>Bước 1</p>
                                                            <p>Mở ứng dụng Mobipay</p>
                                                        </div>
                                                        <div className={"col-4"}>
                                                            <div className={"flex"}>
                                                                <img src={""}/>
                                                            </div>
                                                            <p>Bước 2</p>
                                                            <p>
                                                                "Trên Mobipay chọn biểu tượng"
                                                                <img src={""}/>
                                                            </p>
                                                        </div>
                                                        <div className={"col-4"}>
                                                            <div className={"flex"}>
                                                                <img src={""}/>
                                                            </div>
                                                            <p>Bước 3</p>
                                                            <p>Mở ứng dụng Mobipay</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            :
                                            <div className={""}>
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

                            </Card>
                            {/*cancel-transaction*/}

                            <div className={"mt-3 mb-6"} style={{color: "#ff4f31"}}>
                                <a style={{fontSize: "1.3em"}}>
                                    <i className={"pi pi-times mr-1"}/>
                                    Hủy giao dịch
                                </a>
                            </div>

                            {/*download mobipay*/}
                            <Card className={classes.bgDownload}>
                                <div className={"flex align-items-center"}>
                                    <div className={"flex col-1 justify-content-center"}>
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
                            <Card className={"mt-3"}>
                                <p className={"text-center"}>Giao dịch kết thúc trong</p>
                                <div className={"text-center"}>
                                    {this.state.time.m} : {this.state.time.s}
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>

                {/*safety and security*/}
                <div className={classes.bgSercuritySafe}>
                    <div className={"flex flex-wrap"}>
                        <div className={"col-1"}/>
                        <div className={"flex col-5 align-items-center"}>
                            <div className={"flex col-1 justify-content-center"}>
                                <i className={"pi pi-lock"}/>
                            </div>

                            <div className={"col-11"}>
                                <h3>An toàn thông tin</h3>
                                <p>Chúng tôi cam kết mọi thông tin thanh toán của bạn được bảo mật và mã hóa.</p>
                            </div>
                        </div>
                        <div className={"flex col-5 align-items-center"}>
                            <div className={"flex col-1 justify-content-center"}>
                                <i className={"pi pi-shield"}/>
                            </div>
                            <div className={"col-11"}>
                                <h3>Tiêu chuẩn bảo mật</h3>
                                <p>Mobipay đảm bảo an toàn dữ liệu, đạt tiêu chuẩn bảo mật quốc tế.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/*footer*/}
                <div className={"flex"}>
                    <div className={classes.bgFooter} style={{color: "white"}}>
                        <div className={"flex"}>
                            <div className={"col-1"}/>
                            <div className={"col-5"}>
                                <div className={"flex"}>
                                    <div className={"col-2"}>
                                        <img src={Logo}/>
                                    </div>
                                    <div className={"col-10"}>
                                        <p>
                                            <strong>Mobipay Gateway</strong>
                                        </p>
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
                            <div className={"col-5"}>
                                <h2>Hỗ trợ khách hàng</h2>
                                <div className={"flex"}>
                                    <Button className={"col-5"} style={{borderRadius: 70, height: 40}}>
                                        <i className={"pi pi-phone col-1"}/>
                                        <div className={"col-11"}>
                                            <span>1900 54 13 12</span>
                                            <br/>
                                            <span>(Cước phí 1000đ/phút)</span>
                                        </div>
                                    </Button>
                                    <Button className={"col-5 ml-3"} style={{borderRadius: 70, height: 40}}>
                                        <i className={"pi pi-phone col-1"} color={"#F27"}/>
                                        <div className={"col-11"}>
                                            <p>hotro@mobipay.vn</p>
                                        </div>
                                    </Button>
                                </div>
                            </div>
                        </div>

                        <div className={"flex justify-content-end"}>
                            <p>
                                2022
                                <a href={"https://telsoft.com.vn"}>TELSOFT</a>
                                - Copyright by TELSOFT, All right is reserved
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(pageStyles)(Pages);