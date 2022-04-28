const menuItem = document.querySelector('.data-list__menu-item');
const comment = document.querySelector('.data-list__table-comment-text');
const commentInput = document.querySelector('.data-list__table-comment-input');
const commentButton = document.querySelector('.data-list__table-comment-link');
const addCommentButton = document.querySelector('.data-list__table-comment-button');

const menuButtons = document.querySelectorAll('.data-list__item-box');
const deleteButtons = document.querySelectorAll('.data-list__table-button');

const openMenuItem = (evt) => {
  const element = evt.currentTarget;
  const menuPicture = element.querySelector('.data-list__icon');

  element.parentNode.classList.toggle('data-list__menu-item_active');
  element.classList.toggle('data-list__item-box_active');

  if (element.classList.contains('data-list__item-box_active')) {
    menuPicture.src = './img/data-list-icon-active.svg';
  } else {
    menuPicture.src = './img/data-list-icon.svg';
  }
}

const handleCommentOptions = () => {
  commentInput.classList.toggle('data-list__table-comment-input_active');
  addCommentButton.classList.toggle('data-list__table-comment-button_active');
  comment.classList.toggle('data-list__table-comment-text_disactive');
  commentButton.classList.toggle('data-list__table-comment-link_active');
}

const confirmComment = () => {
  if (commentInput.value === '') {
    comment.textContent = 'Нет комментариев.';
  } else {
    comment.textContent = commentInput.value;
  }

  handleCommentOptions();
  commentInput.value = '';
}

const deleteDomainElement = (evt) => {
  const deleteDomainBox = evt.currentTarget.closest('.data-list__table-domain-cell');
  const domainsList = evt.currentTarget.closest('.data-list__table-body-domains');
  const deleteButton = deleteDomainBox.querySelector('.data-list__table-button');

  let domainTitle;

  if (evt.currentTarget.classList.contains('data-list__table-button_middle')) {
    domainTitle = domainsList.querySelector('.data-list__table-domain-cell_type_domain-second-title');
  } else if (evt.currentTarget.classList.contains('data-list__table-button_last')) {
    domainTitle = domainsList.querySelector('.data-list__table-domain-cell_type_domain-third-title');
  } else {
    domainTitle = domainsList.querySelector('.data-list__table-domain-cell_type_domain-title');
  }

  deleteButton.removeEventListener('click', deleteDomainElement);

  deleteDomainBox.remove();
  domainTitle.remove();
}

menuButtons.forEach((item) => item.addEventListener('click', openMenuItem));
deleteButtons.forEach((item) => item.addEventListener('click', deleteDomainElement));

commentButton.addEventListener('click', handleCommentOptions);
addCommentButton.addEventListener('click', confirmComment);

