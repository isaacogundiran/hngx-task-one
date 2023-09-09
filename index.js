
const slackUsername = "Isaacogundiran";
const slackNameElement = document.querySelector('[data-testid="slackUserName"]');
if (slackNameElement) {
  slackNameElement.textContent = `Slack Name: ${slackUsername}`;
}


const slackProfilePictureUrl = "https://ca.slack-edge.com/T05FFAA91JP-U05S0KL1K2L-b4ce560f1a66-48";
const slackDisplayImageElement = document.querySelector('[data-testid="slackDisplayImage"]');
if (slackDisplayImageElement) {
  slackDisplayImageElement.src = slackProfilePictureUrl;
  slackDisplayImageElement.alt = slackUsername; 
}


const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const currentDate = new Date();
const currentDayIndex = currentDate.getDay();
const currentDayOfTheWeek = daysOfWeek[currentDayIndex];
const currentDayElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
if (currentDayElement) {
  currentDayElement.textContent = `Current Day of the Week: ${currentDayOfTheWeek}`;
}


const currentUTCTimeMillis = Date.now();
const currentUTCTimeElement = document.querySelector('[data-testid="currentUTCTime"]');
if (currentUTCTimeElement) {
  currentUTCTimeElement.textContent = `Current UTC Time: ${currentUTCTimeMillis}`;
}



const myTrack = "Frontend";
const myTrackElement = document.querySelector('[data-testid="myTrack"]');
if (myTrackElement) {
  myTrackElement.textContent = `Track: ${myTrack}`;
}



const githubRepoURL = "https://github.com/isaacogundiran/hngx-task-one.git";
const githubURLElement = document.querySelector('[data-testid="githubURL"]');
if (githubURLElement) {
  githubURLElement.href = githubRepoURL;
  githubURLElement.textContent = githubRepoURL;
}



