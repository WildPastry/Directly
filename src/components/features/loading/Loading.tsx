import { LoadingOverlay } from '@mantine/core';

const Loading: React.FC = (): JSX.Element => {
  return (
    <LoadingOverlay
      visible={true}
      zIndex={1000}
      overlayProps={{ radius: 'sm', blur: 2 }}
      loaderProps={{ color: 'cyan', type: 'bars' }}
    />
  );
};

// EXPORT Loading
Loading.displayName = 'DIRECTLY | Loading';
export default Loading;
