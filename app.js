document.addEventListener('DOMContentLoaded', function () {
  const parentWidthInput = document.getElementById('parent-width');
  const parent = document.getElementById('parent');
  const widthValue = document.getElementById('width-value');
  const fontSizeInput = document.getElementById('font-size');
  const textParent = document.getElementById('text-parent');
  const fontValue = document.getElementById('font-value');

  function updateParentWidth() {
    parent.style.width = parentWidthInput.value + 'px';
    widthValue.textContent = parentWidthInput.value + 'px';
  }

  function updateFontSize() {
    textParent.style.fontSize = fontSizeInput.value + 'px';
    fontValue.textContent = fontSizeInput.value + 'px';
  }

  parentWidthInput.addEventListener('input', updateParentWidth);
  fontSizeInput.addEventListener('input', updateFontSize);

  updateParentWidth();
  updateFontSize();
});
