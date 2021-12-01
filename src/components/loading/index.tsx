import React from 'react';
import { CustomLoadingWrapper, CustomLoadingContent, Label } from './styled';

const Loading: React.FC = () => {
  return (
    <CustomLoadingWrapper>
      <CustomLoadingContent>
        Loading
        <Label />
      </CustomLoadingContent>
    </CustomLoadingWrapper>
  );
};

export default Loading;
