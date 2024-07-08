import * as React from 'react';
import { CategoryItem } from '@/components/category/CategoryItems';

export interface IconThemeProps {
  color?: string;
}

type IconWrapperProps = {
  category: CategoryItem | any;
  theme: boolean;
};

export function IconWrapper(props: IconWrapperProps) {
  const { icon } = props.category;
  return (
    <div style={{ margin: 'auto' }}>
      {/* {React.createElement(props.category.icon, { */}
      {/*  color: props.theme ? ICON_COLOR : ICON_COLOR_DARK, */}
      {/* })} */}
      {icon}
    </div>
  );
}
