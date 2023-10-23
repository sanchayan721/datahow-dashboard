import React, { createContext, useContext } from "react";

type GraphConfigContextType = {
  movingAverageWindow: number;
  setMovingAverageWindow: (window: number) => void;
  forecastDays: number;
  setForecastDays: (days: number) => void;
};


export const GraphConfigContext = createContext<GraphConfigContextType>(
  null as unknown as GraphConfigContextType
);

export const useGraphConfig = () => useContext(GraphConfigContext);

export const GraphConfigProvider = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const [movingAverageWindow, setMovingAverageWindow] = React.useState(3);
  const [forecastDays, setForecastDays] = React.useState(10);

  return (
    <GraphConfigContext.Provider
      value={{
        movingAverageWindow,
        setMovingAverageWindow,
        forecastDays,
        setForecastDays
      }}
    >
      {children}
    </GraphConfigContext.Provider>
  );
};
