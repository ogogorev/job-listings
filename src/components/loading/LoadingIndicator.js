import styled, { keyframes } from "styled-components";

const rotation = keyframes`
  0%, 30% { transform: rotate(0deg); }
  70%, 100% { transform: rotate(1080deg); };
`;
const splines = '.15, .82, .61, .78';
const SVG = styled.svg`
  animation: ${rotation} 2000ms infinite cubic-bezier(${splines});
  animation-delay: 200ms;
`;

const MainCircle = styled.circle`
  fill: var(--primary);
`;

const collapseExpandDur = '400ms';
const mainCircleR = 15;
const smallCircleR = 5;
const collapseBegin = '200ms; mainExpand.end+400ms';
const expandBegin = 'mainCollapse.end+800ms';
const w = 100;
const h = 100;
const centerX = w / 2;
const centerY = h / 2;
const smCircleOffset = 20;

const circles = [
  { color: 'hsl(180, 29%, 50%)', target: [centerX + smCircleOffset, centerY - smCircleOffset], },
  { color: 'hsl(180, 29%, 60%)', target: [centerX + smCircleOffset, centerY + smCircleOffset], },
  { color: 'hsl(180, 29%, 70%)', target: [centerX - smCircleOffset, centerY + smCircleOffset], },
  { color: 'hsl(180, 29%, 80%)', target: [centerX - smCircleOffset, centerY - smCircleOffset], },
].map(c => ({
  ...c,
  animates: [
    { attrName: 'cx', begin: collapseBegin, values: `${centerX}; ${c.target[0]}`, },
    { attrName: 'cy', begin: collapseBegin, values: `${centerY}; ${c.target[1]}`, },
    { attrName: 'cx', begin: expandBegin, values: `${c.target[0]}; ${centerX}`, },
    { attrName: 'cy', begin: expandBegin, values: `${c.target[1]}; ${centerY}`, },
  ],
}));

const LoadingIndicator = ({ width, height }) => {
  return (
    <SVG id="my" width={width} height={height} viewBox={`0 0 ${w} ${h}`} xmlns="http://www.w3.org/2000/svg">
      {circles.map(({ color, animates }) => (
        <circle cx={centerX} cy={centerY} r={smallCircleR} fill={color}>
          {animates.map(({ attrName, begin, values}) => (
            <animate
              attributeName={attrName}
              dur={collapseExpandDur}
              fill="freeze"
              begin={begin}
              values={values}
              calcMode="spline"
              keyTimes="0; 1"
              keySplines={splines}
            />
          ))}
        </circle>
      ))}
      
      <MainCircle cx={centerX} cy={centerY} r={mainCircleR}>
        <animate
          id="mainCollapse"
          attributeName="r"
          dur={collapseExpandDur}
          fill="freeze"
          begin={collapseBegin}
          values={`${mainCircleR}; 0`}
          calcMode="spline"
          keyTimes="0; 1"
          keySplines={splines}
        />
        <animate
          id="mainExpand"
          attributeName="r"
          dur={collapseExpandDur}
          begin={expandBegin}
          fill="freeze"
          values={`0; ${mainCircleR}`}
          calcMode="spline"
          keyTimes="0; 1"
          keySplines={splines}
        />
      </MainCircle>
    </SVG>
  );
}

export default LoadingIndicator;