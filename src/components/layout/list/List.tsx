import React, { FC, useState } from 'react';
import { ReactSortable } from 'react-sortablejs';
import styles from './List.module.css';
import { Text } from '@mantine/core';

interface ItemType {
  id: number;
  name: string;
  position: number;
  symbol: string;
  mass: number;
}

const SortableList: React.FC = (props): JSX.Element => {
  console.log(props);
  const [state, setState] = useState<ItemType[]>([
    { id: 1, position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
    { id: 2, position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
    { id: 3, position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
    { id: 4, position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
    { id: 5, position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' }
  ]);

  return (
    <div className='flex flex-col'>
      <ReactSortable list={state} setList={setState}>
        {state.map((item) => (
          <div className={styles.item}>
            <Text className={styles.symbol}>{item.symbol}</Text>
            <div>
              <Text>{item.name}</Text>
              <Text c='dimmed' size='sm'>
                Position: {item.position} • Mass: {item.mass}
              </Text>
            </div>
          </div>
        ))}
      </ReactSortable>
    </div>
  );
};

// EXPORT SortableList
SortableList.displayName = 'DIRECTLY | SortableList';
export default SortableList;

// <ReactSortable list={state} setList={setState}>
// {state.map((item) => (
//   <div key={item.id}>{item.name}</div>
// ))}
// </ReactSortable>
