import React, {Component} from "react";
import withStyles from "react-jss";
import pageStyles from "./PageStyles.jsx";
import {Dropdown} from "primereact/dropdown";
import {SelectButton} from "primereact/selectbutton";
import Logo from "../assets/images/logo.png";
import {Card} from "primereact/card";

class Pages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            warningMessage: "Vui lòng không tắt trình duyệt cho đến khi đơn đặt hàng được xác nhận.",
            amount: "26450",
            serviceCode: "1243748",
            description: "Thanh toán tại Mobipay",
            selectedLanguage: "",
            language: [
                {
                    name: "Việt Nam",
                },
                {
                    name: "English",
                }
            ],
            selectedOpenMobipay: "",
            openMobipayOptions: [
                {name: "Quét mã QR", value: 1},
                {name: "Ứng dụng Mobipay", value: 2}
            ],
        };
        this.onLanguageChange = this.onLanguageChange.bind(this);

    }

    onLanguageChange(e) {
        this.setState({selectedLanguage: e.value});
    }

    render() {
        const {classes} = this.props;
        return (
            <div className={"w-screen"}>
                {/*heaader*/}
                <div className={"p-1"}>
                    <div className={"flex flex-nowrap "}>
                        <a className={"flex col-6 align-items-end"}>
                            <img className={classes.imgLog}
                                 src={Logo}/>
                            <span className={"font-semibold text-xs"}>| GATEWAY</span>
                        </a>
                        <div className={"col-3"}/>
                        <div className="col-3">
                            <Dropdown value={this.state.selectedLanguage} optionLabel={"name"}
                                      options={this.state.language} onChange={this.onLanguageChange}
                                      placeholder={"Việt Nam"}/>
                        </div>
                    </div>
                </div>

                {/*body*/}
                <div>
                    <div className={classes.bgWarnMessage}>
                        <div className={"flex flex-wrap justify-content-center"}>
                            <p>{this.state.warningMessage}</p>
                        </div>
                    </div>

                    <div className={"flex flex-wrap"}>
                        {/*fragment left*/}
                        <div className={"flex col-8 "}>
                            <Card className={"justify-content-center"}>
                                {/*quet ung dung*/}
                                <div className={""}>
                                    <div className={"flex flex-nowrap justify-content-center"}>
                                        <SelectButton value={this.state.selectedOpenMobipay}
                                                      options={this.state.openMobipayOptions}
                                                      onChange={(e) => this.setState({value: e.value})}
                                                      optionLabel="name"
                                                      multiple/>
                                    </div>

                                    <div>
                                        <div>
                                            <div className={"flex flex-nowrap justify-content-center"}>
                                                <img src={Logo} className={classes.imgLog2}/>
                                            </div>

                                            {/*ảnh quét QR*/}
                                            <div>
                                                <img
                                                    src={"data:image/png;base64,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"}/>
                                            </div>
                                        </div>

                                        <div>
                                            <h1>Hướng dẫn thanh toán</h1>
                                            <div>
                                                <div>
                                                    <img src={"dd"}/>
                                                    <p>Bước 1</p>
                                                    <p>Mở ứng dụng Mobipay</p>
                                                </div>
                                                <div>
                                                    <img src={"dd"}/>
                                                    <p>Bước 2</p>
                                                    <p>
                                                        "Trên Mobipay chọn biểu tượng"
                                                        <img src={"dd"}/>
                                                    </p>
                                                </div>
                                                <div>
                                                    <img src={"ddd"}/>
                                                    <p>Bước 3</p>
                                                    <p>Mở ứng dụng Mobipay</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/*cancel-transaction*/}
                                <div className={""}>
                                    <div className={""}>
                                        <a>
                                            <i className={"pi-spin pi-times"}/>
                                            Hủy giao dịch
                                        </a>
                                    </div>
                                </div>

                                {/*download mobipay*/}
                                <div>
                                    <div>
                                        <i className={"pi pi-info-circle"}/>
                                        <p>
                                            "Thiết bị này cần có ứng dụng Mobipay để thanh toán."
                                            <br/>
                                            <a>Tải ứng dụng Mobipay tại đây</a>
                                        </p>
                                    </div>
                                </div>
                            </Card>
                        </div>

                        {/*fragment right*/}
                        <div className={"flex col-4 justify-content-center"}>
                            <div className={""}>
                                <h1>Thông tin đơn hàng</h1>
                                <Card>
                                    <div>
                                        {/*logo*/}
                                        <img
                                            src={Logo}/>
                                        <h1>Dominos HN</h1>
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
                                <div className={"mt-4"}>
                                    <Card>
                                        <p>Giao dịch kết thúc trong</p>
                                        <div>
                                            <div>04</div>
                                            <div>:</div>
                                            <div>02</div>
                                        </div>
                                    </Card>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                {/*safety and security*/}
                <div>
                    <div>
                        <div>
                            <div className={"p-col-3"}>
                                <i className={"pi pi-lock"}/>
                            </div>

                            <div>
                                <h3>An toàn thông tin</h3>
                                <p>Chúng tôi cam kết mọi thông tin thanh toán của bạn được bảo mật và mã hóa.</p>
                            </div>
                        </div>
                        <div>
                            <i className={"pi pi-shield"}/>
                            <div>
                                <h3>Tiêu chuẩn bảo mật</h3>
                                <p>Mobipay đảm bảo an toàn dữ liệu, đạt tiêu chuẩn bảo mật quốc tế.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/*footer*/}
                <div>
                    <div>
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
                    </div>
                    <div>
                        <p>jhj</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(pageStyles)(Pages);