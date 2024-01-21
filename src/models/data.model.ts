import { FileWithPath } from "@mantine/dropzone";

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
