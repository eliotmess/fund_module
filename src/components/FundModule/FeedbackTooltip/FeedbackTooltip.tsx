//* third party packages
import React, { useContext, useMemo } from "react";
//* components
import { Text, BoldSpan } from "components/common/Text";
import TooltipComponent from "components/common/Tooltip";
//* hooks
import { useTheme } from "theme/styled-components";
//* other
import { FormContext } from "FormContext";

interface IProps {
  fundSubmitted: boolean;
}

const FeedbackTooltip: React.FunctionComponent<IProps> = ({
  fundSubmitted,
}) => {
  const t = useTheme();
  const { fundGoal, fundRaised } = useContext(FormContext);

  const tooltipColor = useMemo(() => {
    if (fundSubmitted || fundRaised >= fundGoal) {
      return t.colors.green;
    }
    return t.colors.lightBlack;
  }, [fundGoal, fundRaised, fundSubmitted, t]);

  const tooltipMsg = useMemo(() => {
    if (fundSubmitted) {
      return <Text $color={t.colors.white}>Thank you for your payment!</Text>;
    } else if (fundRaised >= fundGoal) {
      return (
        <Text $color={t.colors.white}>
          It's already <BoldSpan>${fundRaised}</BoldSpan> but can be more!
        </Text>
      );
    } else {
      return (
        <Text $color={t.colors.white}>
          <BoldSpan>${fundGoal - fundRaised}</BoldSpan> still needed for this
          project
        </Text>
      );
    }
  }, [fundGoal, fundRaised, fundSubmitted, t]);

  return (
    <TooltipComponent bgColor={tooltipColor}>{tooltipMsg}</TooltipComponent>
  );
};

export default FeedbackTooltip;
