import styled, { keyframes } from "styled-components";

const KeyFrameLoading = keyframes`
    0%{
        opacity: 0.25;
    }
    50%{
        opacity: 0.50;
    }
    100%{
        opacity: 1;
    }

`;

const LoadingSkeleton = styled.div`
  background-color: gray;
  border-radius: 6px;
  margin-bottom: 10px;
  min-width: ${(props) => props.width};
  height: ${(props) => props.height};
  animation: ${KeyFrameLoading} 500ms infinite alternate;
`;

const skeleton = ({ width, height }) => (
  <LoadingSkeleton width={width} height={height} />
);

export default skeleton;
