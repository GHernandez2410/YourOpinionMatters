import React from 'react';
import ErrorIcon from '@material-ui/icons/Error';

export default function Error() {
  return (
    <div>
      <ErrorIcon color='red' /> Sorry we didn't find product information at this URL.
    </div>
  );
}
