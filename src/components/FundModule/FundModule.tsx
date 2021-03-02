//* third party packages
import React, { useCallback, useContext, useEffect, useState } from "react";
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
//* other
import emailTemplate from "templates/email";
import LocalStorageService from "services/LocalStorageService";
import { ELocalStorage } from "constants/index";
import { FormContext } from "FormContext";

const FundModule: React.FunctionComponent = () => {
  const t = useTheme();
  const {
    userFund,
    fundGoal,
    noOfFunders,
    setNoOfFunders,
    fundRaised,
    setFundRaised,
  } = useContext(FormContext);
  const [fundSubmitted, setFundSubmitted] = useState(false);

  //* first hydrate with data from Local Storage (if exist)
  //* if not – save initial values to Local Storage
  useEffect(() => {
    const raisedFund = LocalStorageService.get(ELocalStorage.FUND_RAISED);
    const fundersNumber = LocalStorageService.get(ELocalStorage.NO_OF_FUNDERS);
    if (raisedFund) {
      console.log("save raised fund");
      LocalStorageService.set(ELocalStorage.FUND_RAISED, fundRaised.toString());
    }
  }, [fundRaised, noOfFunders]);

  useEffect(() => {
    if (fundSubmitted) {
      setTimeout(() => setFundSubmitted(false), 1000);
    }
  }, [fundSubmitted]);

  const handleSubmitFund = useCallback(
    (v: number, resolve: () => void) => {
      setFundRaised(fundRaised + v);
      setNoOfFunders(noOfFunders + 1);
      resolve();
      setFundSubmitted(true);
    },
    [fundRaised, setFundRaised, noOfFunders, setNoOfFunders]
  );

  return (
    <ModuleContainer>
      <FeedbackTooltip fundSubmitted={fundSubmitted} />
      <ContainerColumn>
        <ProgressBar goal={fundGoal} progress={fundRaised} />
        <FundForm handleSubmitFund={handleSubmitFund} />
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
          <DefaultButton msg={"Tell your friends"} width={t.width.fullWidth} />
        </MailTo>
      </ButtonsContainer>
    </ModuleContainer>
  );
};

export default FundModule;
