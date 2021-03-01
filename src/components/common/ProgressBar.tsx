import React, { useMemo } from "react";
import styled from "theme/styled-components";

const ProgressBarContainer = styled.div`
  height: 15px;
  width: 100%;
  border: 0.5px solid ${({ theme }) => theme.colors.borderColor};
`;

const Bar = styled.div<{ $progress: number }>`
  height: 100%;
  width: ${({ $progress }) => $progress}%;
  background-color: ${({ theme }) => theme.colors.orange};
`;

interface IProps {
  progress: number;
  goal: number;
}

const ProgressBar: React.FunctionComponent<IProps> = ({ progress, goal }) => {
  const barProgress = useMemo(() => {
    const p = progress && goal && Math.round((progress * 100) / goal);
    if (!p) return 0;
    return p > 100 ? 100 : p;
  }, [progress, goal]);

  return (
    <ProgressBarContainer>
      <Bar $progress={barProgress} />
    </ProgressBarContainer>
  );
};

export default ProgressBar;
