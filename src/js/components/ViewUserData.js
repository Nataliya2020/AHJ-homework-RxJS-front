function ViewUserData(res) {
  const listMessages = document.querySelector('.list');
  const itemLi = document.createElement('li');
  itemLi.className = 'list-item';

  if (res === undefined || res === null) return;

  const userMail = document.createElement('div');
  userMail.textContent = res.messages[0].from;
  userMail.className = 'dataMail';

  const userSubject = document.createElement('div');
  const userSubjectParagraph = document.createElement('p');
  userSubject.className = 'dataSubject';
  userSubjectParagraph.className = 'subject';

  const userFullSubject = res.messages[0].subject;

  userSubjectParagraph.textContent = userFullSubject.length > 15 ? `${userFullSubject.slice(0, 15)}...` : userFullSubject;

  const userTimeMessage = document.createElement('div');
  const userTimeParagraph = document.createElement('p');
  userTimeParagraph.className = 'subject';
  userTimeMessage.className = 'dataTime';

  // noinspection JSUnresolvedVariable
  const userFullDate = new Date(res.messages[0].received);

  const userTime = [userFullDate.getHours(), userFullDate.getMinutes()].map((item) => (item < 10 ? `0${item}` : item)).join(':');

  const userDate = [userFullDate.getDate(), userFullDate.getMonth(), userFullDate.getFullYear()]
    .map((item) => (item < 10 ? `0${item}` : item)).join('.');

  userTimeParagraph.textContent = `${userTime}  ${userDate}`;

  userSubject.appendChild(userSubjectParagraph);
  userTimeMessage.appendChild(userTimeParagraph);

  itemLi.appendChild(userMail);
  itemLi.appendChild(userSubject);
  itemLi.appendChild(userTimeMessage);

  listMessages.prepend(itemLi);
}

export default ViewUserData;
