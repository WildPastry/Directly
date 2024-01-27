import { UniqueIdentifier } from "@dnd-kit/core";
import { DropzoneProps, FileWithPath } from "@mantine/dropzone";

export interface ILoading {
  isLoading: boolean;
  isError: boolean;
}

export type ISortableItems = ISortableItem[];

export interface ISortableItem {
  id: UniqueIdentifier;
  name: string;
  data: {
    size: number;
    type: string;
    lastModified: number;
  };
  children: ISortableItem[];
  collapsed?: boolean;
}

export interface IFileUploaded {
  onFileUploaded: (files: FileWithPath[]) => void;
}

export interface IDropzoneProps extends IFileUploaded, Partial<DropzoneProps> {
  onFileUploaded: (files: FileWithPath[]) => void;
}
