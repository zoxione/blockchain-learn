import React from "react";

const GlobalStateContext = React.createContext({
    page: 0,
    setPage: () => {},
    language: "rus",
    toggleLanguage: () => {},
    isSound: true,
    toggleSound: () => {},
});

export default GlobalStateContext;