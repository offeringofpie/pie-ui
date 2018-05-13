module.exports = {
  activate: state => {
    atom.config.observe('pie-ui.fontSize', value => {
      return set.fontSize(value);
    });

    atom.config.observe('pie-ui.color', value => {
      return set.color(value);
    });
  },
  deactivate: () => {
    unset.fontSize();
    unset.color();
  }
};

set = {
  fontSize: size => {
    return (document.documentElement.style.fontSize = `${size}px`);
  },
  color: color => {
    return (document.documentElement.style.setProperty('--accent-color', color));
  }
}

unset = {
  fontSize: () => {
    return (document.documentElement.style.fontSize = '');
  },
  color: () => {
    return (document.documentElement.style.removeProperty('--accent-color'));
  }
}
