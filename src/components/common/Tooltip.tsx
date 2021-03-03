import styled from "theme/styled-components";

const Tooltip = styled.div<{ bgColor: string }>`
  position: relative;
  width: 100%;
  background-color: ${({ bgColor }) => bgColor};
  border-radius: 2px;
  padding: 15px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;

  &:after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-width: 7px;
    border-style: solid;
    border-color: ${({ bgColor }) => bgColor} transparent transparent
      transparent;
    top: 100%;
    right: 20%;
  }
`;

interface IProps {
  bgColor: string;
}

const TooltipComponent: React.FunctionComponent<IProps> = ({
  children,
  bgColor,
}) => (
  <Tooltip data-testid="tooltip" bgColor={bgColor}>
    {children}
  </Tooltip>
);

export default TooltipComponent;
