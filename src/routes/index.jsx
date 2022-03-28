import * as React from "react";
import QRCodeLayout from "../layout/Pages.jsx";
import PaymentLayout from "../layout/PaymentLayout";

const indexRoutes = [
    {path: "/qrCode", component: QRCodeLayout},
    {path: "/payment", component: PaymentLayout},
];

export default indexRoutes;