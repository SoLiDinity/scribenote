import { createEditableNotes, setupEditorListeners } from './utils/editableNotes.js';
import { saveNotesToLocalStorage } from './utils/saveNotesToLocalStorage.js';
import { showAlertPopUp } from "./utils/showAlertPopUp.js";

const setupEditorListenersForAll = () => {
  const editorContainers = document.querySelectorAll('#editorContainer');

  editorContainers.forEach((editorContainer) => {
    const deleteNoteBtn = editorContainer.querySelector('#deleteNote');
    if (deleteNoteBtn) {
      deleteNoteBtn.addEventListener('click', (e) => {
        const noteToDelete = e.target.closest('#editorContainer');
        if (noteToDelete) {
          noteToDelete.remove();
          saveNotesToLocalStorage();
        }
      });
    }
    setupEditorListeners(editorContainer, deleteNoteBtn);
  });
};

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
    saveNotesToLocalStorage();
  });

  resetAllNotesBtn.addEventListener('click', () => {
    showAlertPopUp(document.body, mainContainer);
  });
});
