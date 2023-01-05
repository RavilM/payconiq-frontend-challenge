import React, { FC, memo } from 'react';
import './styles.scss';
import Typography from '@mui/material/Typography';
import { TPageWrapperProps } from './types';

export const PageWrapper: FC<TPageWrapperProps> = memo<TPageWrapperProps>(
  ({ children, pageName }) => (
    <div className="page-wrapper">
      <Typography className="page-wrapper-title" variant="h3">
        {pageName}
      </Typography>
      {children}
    </div>
  ),
);
