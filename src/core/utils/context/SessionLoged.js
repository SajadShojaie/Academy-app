import React from "react";

const SessionLoged = React.createContext();

const SessionLogedProvider = SessionLoged.Provider;
const SessionLogedConsumer = SessionLoged.Consumer;

export { SessionLoged, SessionLogedProvider, SessionLogedConsumer };
