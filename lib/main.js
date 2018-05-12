module.exports = {
  activate: state => {
    atom.config.observe('pie-ui.font.fontSize', value => {
      return set.fontSize(value);
    });
  },
  deactivate: () => {
    unset.fontSize();
  }
};

set = {
  fontSize: size => {
    return (document.documentElement.style.fontSize = `${size}px`);
  }
}

unset = {
  fontSize: () => {
    return (document.documentElement.style.fontSize = '');
  }
}
