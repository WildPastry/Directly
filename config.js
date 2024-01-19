/* eslint-disable */
// config.js executed inside the iframe
instance.UI.addEventListener(instance.UI.Events.VIEWER_LOADED, () => {
  const { documentViewer, annotationManager } = instance.Core;

  // Add customization here
  documentViewer.setMargin(20);
  documentViewer.addEventListener('fitModeUpdated', (fitMode) => {
    console.log('fit mode changed');
  });

  // instance.UI.disableElement('searchButton');
  instance.UI.setTheme('dark');
  instance.UI.enableFeatures([instance.UI.Feature.Portfolio])

});

instance.UI.addEventListener(instance.UI.Events.DOCUMENT_LOADED, () => {
  // const { documentViewer, annotationManager } = instance.Core;

  // Add customization here
  // Draw rectangle annotation on first page
  // "Annotations" can be directly accessed since we're inside the iframe
  // const rectangle = new Annotations.RectangleAnnotation();
  // rectangle.PageNumber = 1;
  // rectangle.X = 100;
  // rectangle.Y = 100;
  // rectangle.Width = 250;
  // rectangle.Height = 250;
  // rectangle.Author = annotationManager.getCurrentUser();
  // annotationManager.addAnnotation(rectangle);
  // annotationManager.drawAnnotations(rectangle.PageNumber);
});
