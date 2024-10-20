const convertToHTML = (currentEditor) => {
  let input = currentEditor.innerText;

  input = input.replace(/^###### (.*)$/gm, '<h6>$1</h6>');
  input = input.replace(/^##### (.*)$/gm, '<h5>$1</h5>');
  input = input.replace(/^#### (.*)$/gm, '<h4>$1</h4>');
  input = input.replace(/^### (.*)$/gm, '<h3>$1</h3>');
  input = input.replace(/^## (.*)$/gm, '<h2>$1</h2>');
  input = input.replace(/^# (.*)$/gm, '<h1>$1</h1>');

  input = input.replace(/\*\*\*(.*?)\*\*\*/g, '<strong><em>$1</em></strong>');
  input = input.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  input = input.replace(/\*(.*?)\*/g, '<em>$1</em>');

  input = input
    .split('\n')
    .map((line) => {
      if (line.trim() === '') {
        return '';
      }
      return `<p>${line}</p>`;
    })
    .join('');

  input = input.replace(/<p><\/p>/g, '');
  input = input.replace(/\n/g, '<br>');
  currentEditor.innerHTML = input;
  placeCaretAtEnd(currentEditor);
};

const convertToMarkdown = (currentEditor) => {
  let input = currentEditor.innerHTML;

  input = input.replace(/<h1>(.*?)<\/h1>/g, '# $1');
  input = input.replace(/<h2>(.*?)<\/h2>/g, '## $1');
  input = input.replace(/<h3>(.*?)<\/h3>/g, '### $1');
  input = input.replace(/<h4>(.*?)<\/h4>/g, '#### $1');
  input = input.replace(/<h5>(.*?)<\/h5>/g, '##### $1');
  input = input.replace(/<h6>(.*?)<\/h6>/g, '###### $1');

  input = input.replace(/<strong>(.*?)<\/strong>/g, '**$1**');
  input = input.replace(/<em>(.*?)<\/em>/g, '*$1*');

  input = input.replace(/<p>\s*<\/p>/g, '\n');

  input = input.replace(/<p>(.*?)<\/p>/g, (match, p1) => p1 + '\n');
  input = input.replace(/<br>/g, '<br>');

  currentEditor.innerText = input.trim();
};

const placeCaretAtEnd = (el) => {
  el.focus();
  const range = document.createRange();
  range.selectNodeContents(el);
  range.collapse(false);
  const sel = window.getSelection();
  sel.removeAllRanges();
  sel.addRange(range);
};

export { convertToHTML, convertToMarkdown };
