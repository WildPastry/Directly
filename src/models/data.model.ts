import { DropzoneProps, FileWithPath } from "@mantine/dropzone";

export interface ILoading {
  isLoading: boolean;
  isError: boolean;
}

export interface ISortableItem {
  id: number;
  name: string;
  size: number;
  type: string;
  lastModified: number;
}

export interface ISortableItems {
  files: FileWithPath[];
}

export interface IFileUploaded {
  onFileUploaded: (files: FileWithPath[]) => void;
}

export interface IDropzoneProps extends IFileUploaded, Partial<DropzoneProps> {
  onFileUploaded: (files: FileWithPath[]) => void;
}
