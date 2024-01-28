/* eslint-disable */
import DropzoneArea from '../../components/features/dropzone/Dropzone';
import { FileWithPath } from '@mantine/dropzone';
import { ISortableItem } from '../../models/data.model';
import { setFiles } from '../../redux/slices/fileSlice';
import { useAppDispatch } from '../../redux/hooks';
import { SortableTree } from '../../components/layout/list/List';

const Books: React.FC = (): JSX.Element => {
  // Set up dispatch and states
  const dispatch = useAppDispatch();

  const convertFiles = (files: FileWithPath[]): ISortableItem[] => {
    return files.map((file) => ({
      id: self.crypto.randomUUID(),
      name: file.name || 'Not available',
      data: {
        size: file.size || 0,
        type: file.type || 'Not available',
        lastModified: file.lastModified || 0
      },
      children: [],
      collapsed: false
    }));
  };

  // Handle files
  const handleFiles = (files: FileWithPath[]): void => {
    const currentFiles: ISortableItem[] = convertFiles(files);
    dispatch(setFiles(currentFiles));
  };

  return (
    <section aria-label='Books Section'>
      <DropzoneArea onFileUploaded={handleFiles} className='mb-3' />
      {/* <Group gap='md' className='mb-3'>
        <Button
          leftSection={<IconLiveView size={14} />}
          size='sm'
          variant='outline'>
          Preview
        </Button>
      </Group> */}
      <SortableTree />
    </section>
  );
};

// EXPORT Books
Books.displayName = 'DIRECTLY | Books';
export default Books;
