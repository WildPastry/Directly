import { ISortableItem, ISortableItems } from '../../../models/data.model';
import React, { useState } from 'react';
import { ReactSortable } from 'react-sortablejs';
import { Text } from '@mantine/core';
import styles from './List.module.css';

const SortableList: React.FC<ISortableItems> = (
  props: ISortableItems
): JSX.Element => {
  const [state, setState] = useState<ISortableItem[]>(() => {
    return props.files.map((file, index) => ({
      id: index + 1,
      name: file.name || 'Not available',
      size: file.size || 0,
      type: file.type || 'Not available',
      lastModified: file.lastModified || 0
    }));
  });

  return (
    <div className='flex flex-col'>
      <ReactSortable list={state} setList={setState}>
        {state.map((item) => (
          <div className={styles.item} key={item.id}>
            <Text className={styles.symbol}>{item.id}</Text>
            <div>
              <Text>{item.name}</Text>
              <Text c='dimmed' size='sm'>
                Size: {item.size} • Type: {item.type} • Last Modified:{' '}
                {item.lastModified}
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
