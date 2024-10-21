import { createEditableNotes, setupEditorListeners } from './utils/editableNotes.js';
import { saveNotesToLocalStorage } from './utils/saveNotesToLocalStorage.js';
import { showAlertPopUp } from './utils/showAlertPopUp.js';

const setupEditorListenersForAll = () => {
  const editorContainers = document.querySelectorAll('#editorContainer');
  editorContainers.forEach((editorContainer) => {
    const noteOptionTab = editorContainer.querySelector('#noteOptionTab');

    const deleteNoteBtn = noteOptionTab.querySelector('#deleteNote');
    if (deleteNoteBtn) {
      deleteNoteBtn.addEventListener('click', (e) => {
        const noteToDelete = e.target.closest('#editorContainer');
        if (noteToDelete) {
          noteToDelete.remove();
          saveNotesToLocalStorage();
        }
      });
    }

    setupEditorListeners(editorContainer, noteOptionTab);
  });
};

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/static/scripts/service-worker.js')
      .then((registration) => {
        console.log('Service worker registered.');
      })
      .catch((error) => {
        console.error('Service worker registration failed: ', error);
      });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const mainContainer = document.getElementById('mainContainer');
  const addNotesBtn = document.getElementById('addNotes');
  const saveNotesBtn = document.getElementById('saveNotes');
  const resetAllNotesBtn = document.getElementById('resetAllNotes');

  const savedContent = localStorage.getItem('mainContainerContent');
  if (savedContent) {
    mainContainer.innerHTML = savedContent;
  }

  setupEditorListenersForAll();

  addNotesBtn.addEventListener('click', () => {
    createEditableNotes(mainContainer);
    setupEditorListenersForAll();
  });

  saveNotesBtn.addEventListener('click', () => {
    // saveNotesToLocalStorage();
    console.log('jepret');
  });

  resetAllNotesBtn.addEventListener('click', () => {
    showAlertPopUp(document.body, mainContainer);
  });
});
