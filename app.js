// Change the parent width of the percentage example.
document.getElementById('parent-width').oninput = function () {
  document.getElementById('parent').style.width = this.value + 'px';
  document.getElementById('width-value').textContent = this.value + 'px';
};

// Change the parent font size of the em example.
document.getElementById('font-size').oninput = function () {
  document.getElementById('text-parent').style.fontSize = this.value + 'px';
  document.getElementById('font-value').textContent = this.value + 'px';
};
