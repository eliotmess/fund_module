//* third party packages
import React, { useCallback, useEffect, useState } from "react";
//* components
import { ButtonsContainer, ModuleContainer } from "./FundModule.style";
import FeedbackTooltip from "./FeedbackTooltip/FeedbackTooltip";
import ProgressBar from "components/common/ProgressBar";
import ContainerColumn from "components/common/ContainerColumn";
import FundForm from "./FundForm/FundForm";
import DefaultButton from "components/common/buttons/DefaultButton";

const FundModule: React.FunctionComponent = () => {
  const [fundGoal] = useState<number>(500);
  const [noOfFunders, setNoOfFunders] = useState<number>(42);
  const [fundRaised, setFundRaised] = useState<number>(57);
  const [fundSubmitted, setFundSubmitted] = useState(false);

  //* first hydrate with data from Local Storage (if exist)
  useEffect(() => {}, []);

  useEffect(() => {
    if (fundSubmitted) {
      setTimeout(() => setFundSubmitted(false), 2000);
    }
  }, [fundSubmitted]);

  const handleSubmitFund = useCallback((v: number, resolve: () => void) => {
    setFundRaised((prevState) => prevState + v);
    setNoOfFunders((prevState) => ++prevState);
    resolve();
    setFundSubmitted(true);
  }, []);

  return (
    <ModuleContainer>
      <FeedbackTooltip
        fundGoal={fundGoal}
        fundRaised={fundRaised}
        fundSubmitted={fundSubmitted}
      />
      <ContainerColumn>
        <ProgressBar goal={fundGoal} progress={fundRaised} />
        <FundForm
          noOfFunders={noOfFunders}
          handleSubmitFund={handleSubmitFund}
        />
      </ContainerColumn>
      <ButtonsContainer>
        <DefaultButton msg={"Save for later"} clickHandler={() => {}} />
        <DefaultButton msg={"Tell your friends"} clickHandler={() => {}} />
      </ButtonsContainer>
    </ModuleContainer>
  );
};

export default FundModule;
