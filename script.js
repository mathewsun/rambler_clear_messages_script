//insert script in console rambler message box

function checkAll() {
document.getElementsByClassName('Checkbox-root-vD')[0].click();
window.setTimeout(deleteChecked,800);
}
function deleteChecked() {
document.getElementsByClassName('ButtonWithIcon-icon-1Q ButtonWithIcon-iconLeft-2c ButtonWithIcon-iconBig-2w')[0].click();
window.setTimeout(checkAll,800);
}
checkAll();