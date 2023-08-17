import React from 'react';

import IntersectImage from '../assets/Intersect.svg';

import Frame2Image from '../assets/arrow.svg';

import { styled } from '@mui/styles';


const Frame31 = styled("div")({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: `1091px`,
  height: `523px`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
});

const ShowCase = styled("div")({
  backgroundColor: `rgba(217, 217, 217, 1)`,
  width: `711px`,
  height: `510px`,
  position: `absolute`,
  left: `0px`,
  top: `13px`,
});

const NextMovies = styled("div")({
  backgroundColor: `rgba(69, 69, 69, 1)`,
  width: `346px`,
  height: `435px`,
  position: `absolute`,
  left: `745px`,
  top: `50px`,
});

const PreviousButton = styled("div")({
  backgroundColor: `rgba(69, 69, 69, 0.7)`,
  borderRadius: `5px`,
  width: `75px`,
  height: `115px`,
  position: `absolute`,
  left: `13px`,
  top: `210px`,
});

const Intersect = styled("img")({
  height: `297.56px`,
  width: `711.41px`,
  position: `absolute`,
  left: `0px`,
  top: `225px`,
});

const NextButton = styled("div")({
  backgroundColor: `rgba(69, 69, 69, 0.7)`,
  borderRadius: `5px`,
  width: `75px`,
  height: `115px`,
  position: `absolute`,
  left: `620px`,
  top: `210px`,
});

const UpNextLabel = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `700`,
  fontSize: `24px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `168px`,
  height: `38px`,
  position: `absolute`,
  left: `745px`,
  top: `0px`,
});

const Frame1 = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `43px`,
  height: `94px`,
  left: `636px`,
  top: `221px`,
});

const Line1 = styled("div")({
  border: `1px solid rgba(247, 247, 247, 1)`,
  width: `65.95px`,
  height: `0px`,
  position: `absolute`,
  left: `11px`,
  top: `25px`,
});

const Line2 = styled("div")({
  backgroundColor: `rgba(217, 217, 217, 1)`,
  border: `1px solid rgba(247, 247, 247, 1)`,
  width: `62.24px`,
  height: `0px`,
  position: `absolute`,
  left: `96px`,
  top: `71px`,
});

const Line6 = styled("div")({
  backgroundColor: `rgba(217, 217, 217, 1)`,
  border: `1px solid rgba(247, 247, 247, 1)`,
  width: `56.59px`,
  height: `0px`,
  position: `absolute`,
  left: `87px`,
  top: `65px`,
});

const Line4 = styled("div")({
  border: `1px solid rgba(247, 247, 247, 1)`,
  width: `8px`,
  height: `0px`,
  position: `absolute`,
  left: `4px`,
  top: `90px`,
});

const Line7 = styled("div")({
  border: `1px solid rgba(255, 255, 255, 1)`,
  width: `54.56px`,
  height: `0px`,
  position: `absolute`,
  left: `9px`,
  top: `29px`,
});

const Line3 = styled("div")({
  border: `1px solid rgba(247, 247, 247, 1)`,
  width: `8px`,
  height: `0px`,
  position: `absolute`,
  left: `4px`,
  top: `4px`,
});

const Frame2 = styled("img")({
  height: `94px`,
  width: `43px`,
  position: `absolute`,
  left: `115px`,
  top: `315px`,
});


function Frame3() {
  return (
    <Frame31>
      <ShowCase>
      </ShowCase>
      <NextMovies>
      </NextMovies>
      <PreviousButton>
      </PreviousButton>
      <Intersect src={IntersectImage} loading='lazy' alt={"Intersect"}/>
      <NextButton>
      </NextButton>
      <UpNextLabel>
        {`Up next`}
      </UpNextLabel>
      <Frame1>
        <Line1>
        </Line1>
        <Line2>
        </Line2>
        <Line6>
        </Line6>
        <Line4>
        </Line4>
        <Line7>
        </Line7>
        <Line3>
        </Line3>
      </Frame1>
      <Frame2 src={Frame2Image} loading='lazy' alt={"Frame 2"}/>
    </Frame31>);

  }

export default Frame3;

  