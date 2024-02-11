import { UniqueIdentifier } from "@dnd-kit/core";
import { DropzoneProps, FileWithPath } from "@mantine/dropzone";
import { MutableRefObject } from "react";

export interface ILoading {
  isLoading: boolean;
  isError: boolean;
}

export type ISortableItems = ISortableItem[];

export interface ISortableItem {
  id: UniqueIdentifier;
  arrayBuffer: ArrayBuffer;
  name: string;
  data: {
    size: number;
    type: string;
    lastModified: number;
  };
  children: ISortableItem[];
  collapsed?: boolean;
}

export type SensorContext = MutableRefObject<{
  items: FlattenedItem[];
  offset: number;
}>;

export interface FlattenedItem extends ISortableItem {
  parentId: UniqueIdentifier | null;
  depth: number;
  index: number;
}

export interface IFileUploaded {
  onFileUploaded: (files: FileWithPath[]) => void;
}

export interface IDropzoneProps extends IFileUploaded, Partial<DropzoneProps> {
  onFileUploaded: (files: FileWithPath[]) => void;
}
