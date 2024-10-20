import { saveNotesToLocalStorage } from './saveNotesToLocalStorage.js';

const showAlertPopUp = (body, mainContainer) => {
  const existingPopup = document.getElementById('popup');
  if (existingPopup) {
    existingPopup.remove();
  }

  const popup = document.createElement('div');
  popup.id = 'popup';

  const popupAlertContainer = document.createElement('div');
  popupAlertContainer.id = 'popupAlertContainer';

  const alertLogoContainer = document.createElement('div');
  alertLogoContainer.id = 'alertLogoContainer';
  const alertIcon = document.createElement('i');
  alertIcon.className = 'fa-solid fa-triangle-exclamation';
  alertLogoContainer.appendChild(alertIcon);

  const title = document.createElement('h1');
  title.textContent = 'Perhatian!';

  const message = document.createElement('p');
  message.textContent =
    'Anda akan membuang semua catatan anda, proses ini tidak akan dapat dikembalikan! Apakah anda yakin?';

  const buttonsContainer = document.createElement('div');
  buttonsContainer.id = 'confirmResetNotesButtons';

  const cancelResetBtn = document.createElement('button');
  cancelResetBtn.id = 'cancelResetAllNotes';
  cancelResetBtn.className = 'no-outline no-border';
  cancelResetBtn.textContent = 'Batalkan';

  const confirmResetBtn = document.createElement('button');
  confirmResetBtn.id = 'confirmResetAllnotes';
  confirmResetBtn.className = 'no-border no-outline';
  confirmResetBtn.textContent = 'Lanjutkan';

  buttonsContainer.append(cancelResetBtn, confirmResetBtn);
  popupAlertContainer.append(alertLogoContainer, title, message, buttonsContainer);
  popup.appendChild(popupAlertContainer);
  body.appendChild(popup);

  cancelResetBtn.addEventListener('click', () => {
    popup.remove();
  });

  confirmResetBtn.addEventListener('click', () => {
    mainContainer.innerHTML = '';
    popup.remove();
    saveNotesToLocalStorage();

    location.reload();
  });
};

export { showAlertPopUp }