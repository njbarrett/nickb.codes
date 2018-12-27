/* global tw */
import React from 'react';
import styled from 'react-emotion';
import 'typeface-cantata-one';
import 'typeface-open-sans';
import { Parallax, ParallaxLayer } from 'react-spring/dist/addons';
import SEO from '../components/SEO';
import SVG from '../components/SVG';
import ProjectCard from '../components/ProjectCard';
import { rotate, UpDown, UpDownWide, waveAnimation } from '../styles/animations';
import { hidden } from '../styles/utils';
import { colors } from '../../tailwind';
import triangle from '../images/triangle.svg';
import avatar from '../images/avatar.jpg';
import '../styles/global';

const Divider = styled(ParallaxLayer)`
  ${tw('absolute w-full h-full')};
  background: ${props => props.bg};
  svg {
    fill: ${props => props.fill};
  }
  clip-path: ${props => props.clipPath};
`;

const AvatarWrapper = styled.div`
  ${tw('flex items-center')};
`;

const Avatar = styled.img`
  border-radius: 50%;
  width: 150px;
  margin-right: 2rem;
`;

const Content = styled(ParallaxLayer)`
  ${tw('p-6 md:p-12 lg:p-24 justify-center items-center flex z-50')};
`;

const Hero = styled.div`
  ${tw('w-full xl:w-2/3')};
`;

const BigTitle = styled.h1`
  ${tw('text-5xl lg:text-6xl font-mono text-white mb-6 tracking-wide')};
  text-shadow: 0 5px 35px rgba(255, 255, 255, 0.15);
`;

const Subtitle = styled.p`
  ${tw('text-xl lg:text-xl leading-normal font-mono text-white mt-8 xxl:w-3/4')};
  text-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
`;

const ContactText = styled.p`
  ${tw('text-grey-light font-mono text-xl md:text-2xl lg:text-3xl')};
  a {
    color: #e07628;
    text-decoration: none;
  }
`;

const LinkIcon = styled.a`
  ${tw('inline-block mr-8')}
`;

const Index = () => (
  <React.Fragment>
    <SEO />
    <Parallax pages={1}>
      <Divider speed={0.2} offset={0}>
        <UpDown>
          <SVG icon="javascript" className={hidden} width={24} fill="#F0DB4F" left="10%" top="20%" />
          <SVG icon="laravel" width={48} fill="rgba(255,255,255,0.4)" left="60%" top="70%" />
          <SVG icon="dev" width={64} fill="rgba(255,255,255,0.4)" left="85%" top="40%" />
          <SVG icon="git" width={12} fill="rgba(255,255,255,0.4)" left="60%" top="15%" />
        </UpDown>
        <UpDownWide>
          <SVG icon="php" className={hidden} width={24} fill="rgba(255,255,255,0.4)" left="80%" top="10%" />
          <SVG icon="react" width={48} fill="#61DAFB" left="70%" top="30%" />
          <SVG icon="git" width={16} fill="rgba(255,255,255,0.4)" left="30%" top="65%" />
          <SVG icon="wordpress" width={12} fill="rgba(255,255,255,0.4)" left="70%" top="10%" />
          <SVG icon="react" className={hidden} width={8} fill="rgba(255,255,255,0.4)" left="45%" top="10%" />
        </UpDownWide>
        <SVG icon="aws" className={hidden} width={24} fill="rgba(255,255,255,0.4)" left="5%" top="70%" />
        <SVG icon="redis" width={6} fill="rgba(255,255,255,0.4)" left="4%" top="20%" />
        <SVG icon="webpack" width={12} fill="rgba(255,255,255,0.4)" left="50%" top="65%" />
        <SVG icon="upDown" width={8} fill="rgba(255,255,255,0.4)" left="95%" top="90%" />
        <SVG icon="upDown" className={hidden} width={24} fill="rgba(255,255,255,0.4)" left="40%" top="80%" />
        <SVG icon="triangle" width={8} stroke="rgba(255,255,255,0.4)" left="25%" top="5%" />
        <SVG icon="mysql" className={hidden} width={64} fill="rgba(255,255,255,0.4)" left="5%" top="90%" />
        <SVG icon="box" width={6} fill="rgba(255,255,255,0.4)" left="10%" top="5%" />
        <SVG icon="box" width={12} fill="rgba(255,255,255,0.4)" left="40%" top="10%" />
        <SVG icon="hexa" width={16} stroke="rgba(255,255,255,0.4)" left="10%" top="50%" />
        <SVG icon="hexa" width={8} stroke="rgba(255,255,255,0.4)" left="80%" top="70%" />
      </Divider>
      <Content speed={0.4} offset={0}>
        <Hero>
          <AvatarWrapper>
            <div>
              <Avatar src={avatar} />
            </div>
            <BigTitle>
              Hey, <br /> I'm Nick Barrett.
            </BigTitle>
          </AvatarWrapper>
            <Subtitle>
              I'm a full stack software developer from<br />Perth, Western Australia.<br /><br />I have a passion for the web and I enjoy creating<br />elegant solutions to real world problems.
            </Subtitle>
          <ContactText>
            <LinkIcon href="https://github.com/njbarrett">
              <SVG icon="github" position="static" width={16} fill={colors.white} />
            </LinkIcon>
            <LinkIcon href="https://www.linkedin.com/in/nicholas-barrett-78653460/">
              <SVG icon="linkedin" width={16} position="static" fill={colors.white} />
            </LinkIcon>
          </ContactText>
        </Hero>
      </Content>
      <Divider bg="#23262b" clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)" speed={0.2} offset={3} />
      <Divider speed={0.1} offset={3}>
        <UpDown>
          <SVG icon="box" className={hidden} width={6} fill={colors.blue} left="50%" top="75%" />
          <SVG icon="upDown" className={hidden} width={8} fill={colors['grey-darkest']} left="70%" top="20%" />
          <SVG icon="triangle" width={8} stroke={colors['grey-darkest']} left="25%" top="5%" />
          <SVG icon="upDown" className={hidden} width={24} fill={colors.orange} left="80%" top="80%" />
        </UpDown>
        <UpDownWide>
          <SVG icon="arrowUp" className={hidden} width={16} fill={colors.purple} left="5%" top="80%" />
          <SVG icon="triangle" width={12} stroke={colors.white} left="95%" top="50%" />
          <SVG icon="circle" width={6} fill={colors.white} left="85%" top="15%" />
          <SVG icon="upDown" className={hidden} width={8} fill={colors['grey-darkest']} left="45%" top="10%" />
        </UpDownWide>
        <SVG icon="circle" width={6} fill={colors.white} left="4%" top="20%" />
        <SVG icon="circle" width={12} fill={colors['grey-darkest']} left="70%" top="60%" />
        <SVG icon="box" width={6} fill={colors.orange} left="10%" top="10%" />
        <SVG icon="box" width={12} fill={colors['grey-darkest']} left="20%" top="30%" />
        <SVG icon="hexa" width={8} stroke={colors['grey-darkest']} left="80%" top="70%" />
      </Divider>
    </Parallax>
  </React.Fragment>
);

export default Index;
