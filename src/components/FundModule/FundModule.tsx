import { Text, BoldSpan } from 'components/common/Text';
import TooltipComponent from 'components/common/Tooltip';
import React from 'react';
import { useTheme } from 'theme/styled-components';

const FundModule: React.FunctionComponent = () => {
  const t = useTheme();
  return (
    <>
        <TooltipComponent bgColor={t.colors.lightBlack}>
            <Text color={t.colors.white}>
                <BoldSpan>$167 </BoldSpan> 
                still needed for this project
            </Text>
        </TooltipComponent>
    </>
  );
}

export default FundModule;
