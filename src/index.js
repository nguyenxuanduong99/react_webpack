import React from "react";
import ReactDom from "react-dom";
import {HashRouter, Route, Switch} from "react-router-dom";
import indexRoutes from "./routes/index.jsx";
import "/src/assets/style.css";
import "/src/assets/theme.css";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";

import 'primereact/resources/themes/lara-light-indigo/theme.css';

// Import primereact css, neu dung production thi dung primereact.min.css
import 'primereact/resources/primereact.css';

import Message from "./intl/Message.jsx";

Message.init();
ReactDom.render(
    <HashRouter>
        <Switch>
            {indexRoutes.map((prop, key) => {
                return <Route path={prop.path} component={prop.component} key={key}/>;
            })}
        </Switch>
    </HashRouter>,
    document.getElementById("root")
);