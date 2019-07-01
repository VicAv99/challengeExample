module.exports = {
  name: 'employee-contacts',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/employee-contacts/',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
