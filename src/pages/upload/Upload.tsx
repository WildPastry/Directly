import DropzoneArea from '../../components/features/dropzone/Dropzone';
import { FileWithPath } from '@mantine/dropzone';
import { ISortableItem } from '../../models/data.model';
import { notifications } from '@mantine/notifications';
import { setFiles } from '../../redux/slices/fileSlice';
import { useAppDispatch } from '../../redux/hooks';

const Upload: React.FC = (): JSX.Element => {
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
    console.log(currentFiles);
    showNotification();
  };

  // Notification
  const showNotification = (): void => {
    notifications.show({
      title: 'Default notification',
      message: 'Hey there, your code is awesome! 🤥'
    });
  };

  return (
    <section aria-label='Upload Section'>
      <DropzoneArea onFileUploaded={handleFiles} className='mb-3' />
    </section>
  );
};

// EXPORT Upload
Upload.displayName = 'DIRECTLY | Upload';
export default Upload;
