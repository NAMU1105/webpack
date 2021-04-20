import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const ProgressBarWrapper = styled.div<any>`
  ${tw`h-1 absolute bg-primary-2`}

  --percentage: ${(props) => props.progress};
  width: calc(var(--percentage) * 1%);
`;

interface ProgressBarProps {
  progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = (props: ProgressBarProps) => {
  return (
    <div className="progress">
      <ProgressBarWrapper progress={props.progress}></ProgressBarWrapper>
    </div>
  );
};
export default ProgressBar;
