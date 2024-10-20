import { convertToHTML, convertToMarkdown } from './htmlMarkdownConversion.js';
import { getRandomPastelColor } from './getRandomColor.js';
import { saveNotesToLocalStorage } from './saveNotesToLocalStorage.js';

const createEditableNotes = (mainContainer) => {
  const container = document.createElement('div');
  const div = document.createElement('div');
  const placeholder = document.createElement('p');
  const deleteBtn = document.createElement('button');

  container.setAttribute('id', 'editorContainer');
  container.classList.add('note', 'no-border', 'no-outline', 'shadow');

  div.setAttribute('contenteditable', 'false');
  div.setAttribute('id', 'editor');

  placeholder.innerText = 'Ketik catatan...';

  deleteBtn.setAttribute('id', 'deleteNote');
  deleteBtn.classList.add('circle', 'no-border', 'no-outline', 'invisible');
  deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';

  div.appendChild(placeholder);
  container.appendChild(deleteBtn);
  container.appendChild(div);
  mainContainer.appendChild(container);

  container.style.backgroundColor = getRandomPastelColor();

  setupEditorListeners(container, deleteBtn);
};

const setupEditorListeners = (container, deleteBtn) => {
  const divEditor = container.querySelector('#editor');
  let isDragging = false;
  let offsetX, offsetY;
  let lastTapTime = 0;

  const toggleEditable = () => {
    if (divEditor.getAttribute('contenteditable') === 'true') {
      return;
    }

    divEditor.setAttribute('contenteditable', 'true');
    divEditor.style.cursor = 'text';
    divEditor.addEventListener('mousedown', () => {
      divEditor.style.cursor = 'text';
    });

    divEditor.addEventListener('mouseup', () => {
      divEditor.style.cursor = 'text';
    });

    divEditor.addEventListener('mouseenter', () => {
      divEditor.style.cursor = 'text';
    });
    convertToMarkdown(divEditor);

    if (deleteBtn.classList.contains('invisible')) {
      deleteBtn.classList.remove('invisible');
      deleteBtn.classList.add('visible');
    }
  };

  const toggleUnEditable = () => {
    if (divEditor.getAttribute('contenteditable') !== 'true') {
      return;
    }

    divEditor.setAttribute('contenteditable', 'false');
    divEditor.style.userSelect = 'none';
    divEditor.addEventListener('mousedown', () => {
      divEditor.style.cursor = 'grabbing';
    });

    divEditor.addEventListener('mouseup', () => {
      divEditor.style.cursor = 'grab';
    });

    divEditor.addEventListener('mouseenter', () => {
      divEditor.style.cursor = 'grab';
    });
    convertToHTML(divEditor);

    if (deleteBtn.classList.contains('visible')) {
      deleteBtn.classList.remove('visible');
      deleteBtn.classList.add('invisible');
    }
  };

  const handleMobileDoubleTouch = (e) => {
    const currentTime = new Date().getTime();
    const tapLength = currentTime - lastTapTime;

    if (tapLength < 500 && tapLength > 0) {
      e.preventDefault();
      toggleEditable();
    }

    lastTapTime = currentTime;
  };

  const startDrag = (e) => {
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;

    const isTextSelected = window.getSelection().toString().length > 0;
    if (!isTextSelected && divEditor.getAttribute('contenteditable') === 'false') {
      isDragging = true;
      offsetX = clientX - container.getBoundingClientRect().left;
      offsetY = clientY - container.getBoundingClientRect().top;
      container.style.cursor = 'grabbing';
      e.preventDefault();
    }
  };

  const onDrag = (e) => {
    if (isDragging) {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      container.style.left = `${clientX - offsetX}px`;
      container.style.top = `${clientY - offsetY}px`;
    }
  };

  const stopDrag = () => {
    isDragging = false;
    container.style.cursor = 'grab';
    saveNotesToLocalStorage()
  };

  divEditor.addEventListener('blur', () => {
    toggleUnEditable();
    saveNotesToLocalStorage();
  });

  container.addEventListener('dblclick', () => {
    toggleEditable();
  });

  container.addEventListener('touchstart', (e) => {
    handleMobileDoubleTouch(e);
  });

  container.addEventListener('mousedown', startDrag);
  document.addEventListener('mousemove', onDrag);
  document.addEventListener('mouseup', stopDrag);

  container.addEventListener('touchstart', startDrag);
  document.addEventListener('touchmove', onDrag);
  document.addEventListener('touchend', stopDrag);

  container.addEventListener('mouseenter', () => {
    container.style.cursor = 'grab';
  });

  container.addEventListener('mouseleave', () => {
    container.style.cursor = 'text';
  });

  deleteBtn.addEventListener('click', () => {
    container.remove();
  });
};

export { createEditableNotes, setupEditorListeners };
