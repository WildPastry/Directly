/* eslint-disable no-console */
import { useEffect, useRef } from 'react';
import { Button } from '@mantine/core';
import { Link } from 'react-router-dom';
import WebViewer from '@pdftron/webviewer';

const Viewer: React.FC = (): JSX.Element => {
  const licenseKey = import.meta.env.ASPYRE_KEY;
  const webViewerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    WebViewer(
      {
        path: 'lib',
        licenseKey: licenseKey,
        enableFilePicker: true
      },
      webViewerRef.current as HTMLDivElement
    ).then((instance) => {
      console.log(instance.UI.contextMenuPopup);
    });
  }, []);

  return (
    <section aria-label='Viewer Section'>
      <div>
        <h1>VIEWER</h1>
        <Link to={`/books`}>
          <Button color='cyan' size='xs' variant='filled'>
            Back
          </Button>
        </Link>
      </div>
      <div ref={webViewerRef} />
    </section>
  );
};

// EXPORT Viewer
Viewer.displayName = 'DIRECTLY | Viewer';
export default Viewer;
