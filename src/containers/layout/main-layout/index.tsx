import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import Header from './header';
import Footer from './footer';
import Sidebar from './sidebar';
import Content from './content';
import { MainSection, StyledMainLayout, ContentSection } from './styled';
import requireAuth from 'hocs/require-auth';

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
          <PerfectScrollbar draggable>
            <Content>{children}</Content>
            <Footer />
          </PerfectScrollbar>
        </ContentSection>
      </MainSection>
    </StyledMainLayout>
  );
};

export default requireAuth(MainLayout);
