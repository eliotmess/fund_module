//* third party packagess
import React from "react";
import styled from "theme/styled-components";

const StyledA = styled.a<{ $width: string }>`
  width: ${({ $width }) => $width};
`;

interface IProps {
  email?: string;
  subject?: string;
  body?: string;
  width: string;
}

const MailTo: React.FunctionComponent<IProps> = ({
  email = "",
  subject = "",
  body = "",
  width,
  children,
}) => {
  let params = subject || body ? "?" : "";
  if (subject) params += `subject=${encodeURIComponent(subject)}`;
  if (body) params += `${subject ? "&" : ""}body=${encodeURIComponent(body)}`;

  return (
    <StyledA $width={width} href={`mailto:${email}${params}`}>
      {children}
    </StyledA>
  );
};

export default MailTo;
