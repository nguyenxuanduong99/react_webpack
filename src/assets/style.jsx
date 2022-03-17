const container = {
    paddingRight: "0",
    paddingLeft: "0",
    marginRight: "auto",
    marginLeft: "auto",

    width: "100%",

    "&:before,&:after": {
        display: "table",
        content: '" "'
    },
    "&:after": {
        clear: "both"
    }
};

const dialog = {
    paddingRight: "0",
    paddingLeft: "0",
    marginRight: "auto",
    marginLeft: "auto",
    "@media (min-width: 768px)": {
        width: "710px"
    },
    "@media (min-width: 992px)": {
        width: "930px"
    },
    "@media (min-width: 1200px)": {
        width: "1130px"
    },
    "&:before,&:after": {
        display: "table",
        content: '" "'
    },
    "&:after": {
        clear: "both"
    }
};

const primaryColor = "#9c27b0";
const warningColor = "#ff9800";
const dangerColor = "#f44336";
const successColor = "#4caf50";
const infoColor = "#00acc1";

const fontSize = {
    fontSize: "1rem"
};

const padding = {
    padding: "0.15rem"
};

const defaultStyle = {
    padding: {
        ...padding
    }
};

export default defaultStyle;

export {
    container,
    primaryColor,
    warningColor,
    dangerColor,
    infoColor,
    successColor,
    fontSize,
    padding,
    dialog
}