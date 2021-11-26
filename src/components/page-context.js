import React from "react";

export const PageContext = React.createContext({
    page: 0,
    togglePage: () => {},
});