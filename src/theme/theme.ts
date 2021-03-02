const theme = {
    colors: {
        lightBlack: "#424242",
        lightGray: "#FAFAFA",
        white: "#ffffff",
        orange: "#F05F34",
        green: "#04BE1C",
        darkGreen: "#009914",
        blue: "#149FD6",
        lightText: "#FCFCFC",
        darkText: "#828282",
        borderColor: "#DDDDDD",
        error: "#ff1919"
    },
    fontSize: {
        xs: "10px",
        s: "14px",
        m: "18px",
        l: "20px"
    },
    spacing: {
        normal: '15px'
    },
    width: {
        halfWidthWithSpacing: "calc(50% - 7.5px)",
        fullWidth: "100%",
    }
};

export default theme;

export type TTheme = typeof theme;