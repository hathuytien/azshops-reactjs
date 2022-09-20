export const messageBox = {
  show
};
export const TYPE = {
  CONFIRM:    'CONFIRM',
  ALERT:      'ALERT',
};

function show(code, param, type) {
  if (type === TYPE.CONFIRM) {
    return window.confirm(param);
  } else {
    alert(param);
  }
}
