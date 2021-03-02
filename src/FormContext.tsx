import React, { createContext, useState } from "react";

type TFormContext = {
  fundGoal: number;
  noOfFunders: number;
  setNoOfFunders: (v: number) => void;
  fundRaised: number;
  setFundRaised: (v: number) => void;
  userFund: number;
  setUserFund: (v: number) => void;
};

export const FormContext = createContext<TFormContext>({
  fundGoal: 500,
  noOfFunders: 42,
  setNoOfFunders: (v: number) => {},
  fundRaised: 57,
  setFundRaised: (v: number) => {},
  userFund: 50,
  setUserFund: (v: number) => {},
});

const FormContextComponent: React.FunctionComponent = ({ children }) => {
  const [fundGoal] = useState<number>(500);
  const [noOfFunders, setNoOfFunders] = useState<number>(42);
  const [fundRaised, setFundRaised] = useState<number>(57);
  const [userFund, setUserFund] = useState<number>(50);
  return (
    <FormContext.Provider
      value={{
        fundGoal,
        noOfFunders,
        setNoOfFunders,
        fundRaised,
        setFundRaised,
        userFund,
        setUserFund,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormContextComponent;
