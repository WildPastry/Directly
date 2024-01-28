import type { MutableRefObject } from 'react';
import type { UniqueIdentifier } from '@dnd-kit/core';
import { FlattenedItem } from '../../../models/data.model';

export interface TreeItem {
  id: UniqueIdentifier;
  name: string;
  data: {
    size: number;
    type: string;
    lastModified: number;
  };
  children: TreeItem[];
  collapsed?: boolean;
}

export type TreeItems = TreeItem[];

// export interface FlattenedItem extends TreeItem {
//   parentId: UniqueIdentifier | null;
//   depth: number;
//   index: number;
// }

// export type SensorContext = MutableRefObject<{
//   items: FlattenedItem[];
//   offset: number;
// }>;
