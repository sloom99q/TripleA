import React from 'react';
import { Badge, BadgeProps } from '@mantine/core';

type CustomBadgeProps = BadgeProps & {
    children: React.ReactNode;
};

const CustomBadge: React.FC<CustomBadgeProps> = ({ children, ...props }) => (
    <Badge bg={'black'} color='white' variant='filled' p={'md'} px={50} size="xl" style={{borderBottomLeftRadius: '16px', borderTopRightRadius: '16px'}} {...props}>
        {children}
    </Badge>
);

export default CustomBadge;