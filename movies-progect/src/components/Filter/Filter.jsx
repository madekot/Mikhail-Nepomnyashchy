import { useState, useEffect } from 'react';

import Label from './Label';
import labelsData from './labelsData';

function Filter({ onChangeType }) {
  const [checkedType, setCheckedType] = useState('all');

  const FormStyle = {
    display: 'flex',
    justifyContent: 'space-between',
  };

  const labels = labelsData.map((label) => (
    <Label
      key={label.name}
      {...label}
      checkedType={checkedType}
      setCheckedType={setCheckedType}
      onChangeType={onChangeType}
    />
  ));

  useEffect(() => {
    onChangeType(checkedType);
  }, [checkedType, onChangeType]);

  return (
    <form action="#" style={FormStyle}>
      {labels}
    </form>
  );
}

export default Filter;
