import React from 'react';
import Header from './header';
import Footer from './footer';
import Sidebar from './sidebar';
import Content from './content';
import { MainSection, StyledMainLayout, ContentSection } from './styled';

interface Props {
  children: any;
}

const MainLayout: React.FC<Props> = props => {
  const { children } = props;

  return (
    <StyledMainLayout>
      <Sidebar />
      <MainSection>
        <Header />
        <ContentSection>
          <Content>{children}</Content>
          <Footer />
        </ContentSection>
      </MainSection>
    </StyledMainLayout>
  );
};

export default MainLayout;
