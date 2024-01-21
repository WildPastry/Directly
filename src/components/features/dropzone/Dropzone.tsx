/* eslint-disable no-console */
import {
  Dropzone,
  DropzoneProps,
  FileRejection,
  FileWithPath
} from '@mantine/dropzone';
import { Group, Text, rem } from '@mantine/core';
import { IconPhoto, IconUpload, IconX } from '@tabler/icons-react';
import { IFileUploaded } from '../../../models/data.model';

const DropzoneArea: React.FC<IFileUploaded & Partial<DropzoneProps>> = (
  props: IFileUploaded & Partial<DropzoneProps>
): JSX.Element => {
  return (
    <Dropzone
      onDrop={(files: FileWithPath[]) => props.fileUploaded(files)}
      onReject={(files: FileRejection[]) =>
        console.log('rejected files', files)
      }
      maxSize={5 * 1024 ** 2}
      {...props}>
      <Group
        className='flex justify-center'
        justify='center'
        gap='xl'
        mih={220}
        style={{ pointerEvents: 'none' }}>
        <Dropzone.Accept>
          <IconUpload
            style={{
              width: rem(52),
              height: rem(52),
              color: 'var(--mantine-color-blue-6)'
            }}
            stroke={1.5}
          />
        </Dropzone.Accept>
        <Dropzone.Reject>
          <IconX
            style={{
              width: rem(52),
              height: rem(52),
              color: 'var(--mantine-color-red-6)'
            }}
            stroke={1.5}
          />
        </Dropzone.Reject>
        <Dropzone.Idle>
          <IconPhoto
            style={{
              width: rem(52),
              height: rem(52),
              color: 'var(--mantine-color-dimmed)'
            }}
            stroke={1.5}
          />
        </Dropzone.Idle>

        <div>
          <Text size='xl' inline>
            Drag images here or click to select files
          </Text>
          <Text size='sm' c='dimmed' inline mt={7}>
            Attach as many files as you like, each file should not exceed 5mb
          </Text>
        </div>
      </Group>
    </Dropzone>
  );
};

// EXPORT DropzoneArea
DropzoneArea.displayName = 'DIRECTLY | DropzoneArea';
export default DropzoneArea;
