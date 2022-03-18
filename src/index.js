import React from "react";
import ReactDom from "react-dom";
import {HashRouter, Route, Switch} from "react-router-dom";
import indexRoutes from "./routes/index.jsx";
import "/src/assets/style.css";
import "/src/assets/theme.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "primereact/resources/primereact.min.css";
import "react-grid-layout/css/styles.css";

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