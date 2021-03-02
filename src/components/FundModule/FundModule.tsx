//* third party packages
import React, { useCallback, useEffect, useState } from "react";
//* components
import { ButtonsContainer, ModuleContainer } from "./FundModule.style";
import FeedbackTooltip from "./FeedbackTooltip/FeedbackTooltip";
import ProgressBar from "components/common/ProgressBar";
import ContainerColumn from "components/common/ContainerColumn";
import FundForm from "components/FundModule/FundForm/FundForm";
import DefaultButton from "components/common/buttons/DefaultButton";
import MailTo from "components/common/MailTo";
//* hooks
import { useTheme } from "theme/styled-components";
//*
import emailTemplate from "templates/email";

const FundModule: React.FunctionComponent = () => {
  const t = useTheme();
  const [fundGoal] = useState<number>(500);
  const [noOfFunders, setNoOfFunders] = useState<number>(42);
  const [fundRaised, setFundRaised] = useState<number>(57);
  const [fundSubmitted, setFundSubmitted] = useState(false);

  //* first hydrate with data from Local Storage (if exist)
  useEffect(() => {}, []);

  useEffect(() => {
    if (fundSubmitted) {
      setTimeout(() => setFundSubmitted(false), 1000);
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
        <DefaultButton
          msg={"Save for later"}
          clickHandler={() => {}}
          width={t.width.halfWidthWithSpacing}
        />
        <MailTo
          width={t.width.halfWidthWithSpacing}
          subject={emailTemplate.subject}
          body={emailTemplate.body}
        >
          <DefaultButton
            msg={"Tell your friends"}
            clickHandler={() => {}}
            width={t.width.fullWidth}
          />
        </MailTo>
      </ButtonsContainer>
    </ModuleContainer>
  );
};

export default FundModule;
