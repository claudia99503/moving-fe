import React from 'react';

const Sentinel = React.forwardRef<HTMLDivElement>((_, ref) => (
  <div
    ref={ref}
    data-testid="sentinel"
    style={{ height: '1px', visibility: 'hidden' }}
  />
));

Sentinel.displayName = 'Sentinel';

export default Sentinel;

