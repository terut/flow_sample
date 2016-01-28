var flow = new Flow({
  target: 'http://localhost:3000/upload',
  query:{ token: 'abcdef', dir: 'aa/bb' }
});
flow.assignBrowse(document.getElementById('file'));
flow.on('fileAdded', function(file, event) {
  console.log("fileAdded");
  console.log(file, event);
});
flow.on('filesSubmitted', function(file) {
  console.log("filesSubmitted");
  flow.upload();
});
flow.on('fileSuccess', function(file, message) {
  console.log("fileSuccess");
  console.log(file, message);
});
flow.on('fileError', function(file, message) {
  console.log("fileError");
  console.log(file, message);
});
