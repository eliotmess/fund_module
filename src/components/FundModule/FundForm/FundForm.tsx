//* third party packages
import React, { useState } from "react";
//* components
import { FundFormContainer, InfoContainer } from "./FundForm.style";
import { Text, BoldSpan } from "components/common/Text";
import GiveFundForm from "components/FundModule/FundForm/Form";
//* hooks
import { useTheme } from "theme/styled-components";
import DefaultButton from "components/common/buttons/DefaultButton";

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

  return (
    <FundFormContainer>
      <Text $spanColor={t.colors.orange} $marginBottom={15}>
        <BoldSpan>Only 3 days left</BoldSpan> to fund this project.
      </Text>
      <Text $spanColor={t.colors.orange} $marginBottom={15}>
        Join the <BoldSpan>{noOfFunders}</BoldSpan> other donors who have
        already supported this project. Every dollar helps.
      </Text>
      <GiveFundForm submitHandler={handleSubmitFund} />
      <DefaultButton
        msg="click"
        clickHandler={() => setInfoExpanded(!infoExpanded)}
      />
      <InfoContainer $expanded={infoExpanded}>
        <Text $color={t.colors.blue} $size={10} $marginBottom={15}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
          vel elit condimentum gravida. Cras sed urna at elit molestie
          pellentesque sed vulputate dui. Praesent et eleifend ipsum. Cras nec
          elit diam. Donec non lobortis neque. Duis consequat condimentum
          blandit. Nulla auctor sagittis dolor a pretium. Curabitur a porta sem.
          Integer congue lorem urna, eget luctus nisi laoreet nec. Nullam et
          lacus vitae felis tincidunt vehicula et sed augue.
        </Text>
      </InfoContainer>
    </FundFormContainer>
  );
};

export default FundForm;
