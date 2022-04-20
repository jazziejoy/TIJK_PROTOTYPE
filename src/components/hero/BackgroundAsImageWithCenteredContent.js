import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import Header, { NavLink, NavLinks, PrimaryLink as PrimaryLinkBase, LogoLink, NavToggle, DesktopNavLinks } from "../headers/light.js";

const StyledHeader = styled(Header)`
  ${tw`w-full pt-8 max-w-none`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-white hover:border-gray-300 hover:text-gray-300`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`;

const PrimaryLink = tw(PrimaryLinkBase)`rounded-full`
const Container = styled.div`
  ${tw`relative h-screen -mx-8 -mt-8 bg-center bg-cover min-h-144`}
  background-image: url("http://localhost:8080/ipfs/QmSwTnbNk17yo9Q4VVMzrFDQ9174TBRSeZtPxcHK16x622?filename=bg-masterhead.png");
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-black opacity-25`;

const HeroContainer = tw.div`z-20 relative px-6 sm:px-8 mx-auto h-full flex flex-col`;
const Content = tw.div`px-4 flex flex-1 flex-col justify-center items-center`;

const Heading = styled.h1`
  ${tw`-mt-24 text-6xl font-black leading-snug text-center text-white sm:text-4xl lg:text-5xl xl:text-6xl sm:mt-0`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

const PrimaryAction = tw.button`rounded-l-lg rounded-r-lg px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 bg-gray-100 font-bold shadow transition duration-300 bg-blue-600 text-gray-100 hocus:bg-green-700 hocus:text-gray-200 focus:outline-none focus:shadow-outline`;

export const navLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default () => {
  const navLinks = [
    <NavLinks key={1}>
      <NavLink href="#">
        USDT PAIRS
      </NavLink>
      <NavLink href="#">
        DEPOSIT
      </NavLink>
      <NavLink href="#">
        WIDTHDRAW
      </NavLink>
      <NavLink href="AboutUs">
        ABOUT
      </NavLink>
    </NavLinks>,
    
  ];

  return (
    <Container>
      <OpacityOverlay />
      <HeroContainer>
        <StyledHeader links={navLinks} />
        <Content>
        <p>
        <img
  src="http://localhost:8080/ipfs/QmbV2CNzp2owXuEFUPxk1D62cQYTwuz8gCYv9j6kG9U1xP?filename=ticjk_sm_logo.png"
  class="p-1 bg-white border rounded max-w-sm" alt="logo"/>
</p>
          <Heading>
          TIJK FINANCE
          </Heading>
          <p class="text-xxl text-white">
          A SYSTEMATIC INVESTMENT PLAN (SIP) THAT MAKES DECENTRALIZED FINANCE EASY...<br></br>
<center>BECAUSE LIFE’S COMPLICATED ENOUGH</center>
</p>
          <PrimaryAction>CONNECT YOUR WALLET</PrimaryAction> 
          
        </Content>
      </HeroContainer>
    </Container>
  );
};
