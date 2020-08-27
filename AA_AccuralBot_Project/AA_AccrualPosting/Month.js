var Month = WScript.Arguments.item(0);
var months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];
var charMonth = '';
var convMonth = parseInt(Month);
convMonth = convMonth - 1; 
charMonth = months[convMonth];
WScript.StdOut.WriteLine(charMonth);
