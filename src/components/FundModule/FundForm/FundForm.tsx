//* third party packages
import React, { useEffect, useState } from "react";
//* components
import { FundFormContainer, Form } from "./FundForm.style";
import { Text, BoldSpan } from "components/common/Text";
import SubmitButton from "components/common/buttons/SubmitButton";
import Input from "components/common/Input";
//* hooks
import { useTheme } from "theme/styled-components";

const FundForm: React.FunctionComponent = () => {
  const t = useTheme();

  return (
    <FundFormContainer>
      <Text $spanColor={t.colors.orange} $marginBottom={15}>
        <BoldSpan>Only 3 days left</BoldSpan> to fund this project.
      </Text>
      <Text $spanColor={t.colors.orange} $marginBottom={15}>
        Join the <BoldSpan>42</BoldSpan> other donors who have already supported
        this project. Every dollar helps.
      </Text>
      <Form>
        <Input value={"50"} />
        <SubmitButton msg={"Give Now"} />
      </Form>
    </FundFormContainer>
  );
};

export default FundForm;
