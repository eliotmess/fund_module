//* third party packages
import React, { useCallback, useState } from "react";
//* components
import { FundFormContainer, InfoContainer } from "./FundForm.style";
import { Text, BoldSpan } from "components/common/Text";
import GiveFundForm from "components/FundModule/FundForm/Form";
//* hooks
import { useTheme } from "theme/styled-components";
import TextButton from "components/common/buttons/TextButton";

interface IProps {
  handleSubmitFund: (v: number, resolve: () => void) => void;
  noOfFunders: number;
}

const FundForm: React.FunctionComponent<IProps> = ({
  handleSubmitFund,
  noOfFunders,
}) => {
  const t = useTheme();
  const [infoExpanded, setInfoExpanded] = useState(false);

  const handleExpandInfo = useCallback(() => {
    setInfoExpanded((prevState) => !prevState);
  }, []);

  return (
    <FundFormContainer>
      <Text $spanColor={t.colors.orange} $marginBottom={t.spacing.normal}>
        <BoldSpan>Only 3 days left</BoldSpan> to fund this project.
      </Text>
      <Text $marginBottom={t.spacing.normal}>
        Join the <BoldSpan>{noOfFunders}</BoldSpan> other donors who have
        already supported this project. Every dollar helps.
      </Text>
      <GiveFundForm submitHandler={handleSubmitFund} />
      <TextButton msg="Why give $50?" clickHandler={handleExpandInfo} />
      <InfoContainer $expanded={infoExpanded}>
        <Text $color={t.colors.blue} $size={t.fontSize.xs}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
          vel elit condimentum gravida. Cras sed urna at elit molestie
          pellentesque sed vulputate dui. Praesent et eleifend ipsum. Cras nec
          elit diam. Donec non lobortis neque. Duis consequat condimentum
          blandit. Nulla auctor sagittis dolor a pretium. Curabitur a porta sem.
          Integer congue lorem urna, eget luctus nisi laoreet nec. Nullam et
          lacus vitae felis tincidunt vehicula et sed augue.
        </Text>
        <TextButton
          msg="Click to hide more info"
          clickHandler={handleExpandInfo}
        />
      </InfoContainer>
    </FundFormContainer>
  );
};

export default FundForm;
