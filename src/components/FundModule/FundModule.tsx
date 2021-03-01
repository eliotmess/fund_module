//* third party packages
import React, { useEffect, useState } from "react";
//* components
import { ModuleContainer } from "./FundModule.style";
import FeedbackTooltip from "./FeedbackTooltip/FeedbackTooltip";
import ProgressBar from "components/common/ProgressBar";
import ContainerColumn from "components/common/ContainerColumn";
import FundForm from "./FundForm/FundForm";
//* hooks
import { useTheme } from "theme/styled-components";

const FundModule: React.FunctionComponent = () => {
  const t = useTheme();
  const [fundGoal] = useState<number>(500);
  const [fundRaised, setFundRaised] = useState<number>(57);
  const [userPayment, setUserPayment] = useState<number>(50);
  const [fundSubmitted, setFundSubmitted] = useState(false);

  //* first hydrate with data from Local Storage (if exist)
  useEffect(() => {}, []);

  return (
    <ModuleContainer>
      <FeedbackTooltip fundGoal={fundGoal} fundRaised={fundRaised} fundSubmitted={fundSubmitted} />
      <ContainerColumn>
        <ProgressBar goal={fundGoal} progress={fundRaised} />
        <FundForm />
      </ContainerColumn>
    </ModuleContainer>
  );
};

export default FundModule;
