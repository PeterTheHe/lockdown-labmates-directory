var formResponseSheetName = 'Lockdown Labmate Matches (Responses)';

// Handle get request
function doGet() {
  return HtmlService
  .createTemplateFromFile('index')
  .evaluate()
  .setTitle('Lockdown Labmates')
  .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

// Pull data from the directory spreadsheet
function getDatabase() {
  var file, files = DriveApp
  .getFoldersByName('Lockdown Labmates')
  .next()
  .getFilesByName(formResponseSheetName); //Retrieve the ID
  
  //Check if the doc exists. If it doesn't, return nothing
  if (files.hasNext ()){
   file = files.next(); 
  } else {
    return "fuck";
  }
  
  var db = SpreadsheetApp
  .openById(file.getId())
  .getActiveSheet()
  .getDataRange()
  .getValues();
  return JSON.stringify(db);
}

// Allow include of html files in other html files
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
    .getContent();
}