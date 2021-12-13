'use strict';
function CreateCheckBox({ Id, Status }) {
    const checkBox = document.createElement('input');

    checkBox.type = "checkbox";
    checkBox.id = Id;
    checkBox.checked = JSON.parse(Status);

    return checkBox;
}

function CreateUrgencyDiv({ Urgency }) {
    const div = document.createElement('div');

    div.classList.add('urgency-item');

    if (Urgency === '1') {
        div.classList.add('urgency-low');
    } else if (Urgency === '2') {
        div.classList.add('urgency-middle');
    } else if (Urgency === '3') {
        div.classList.add('urgency-high');
    }

    return div;
}

function CreateListItem({ Id, Description, Urgency, Status }, urgencyDiv, checkBox) {
    const li = document.createElement('li');

    li.id = Id;
    li.setAttribute('data-urgency', Urgency);
    li.setAttribute('data-status', Status);
    li.prepend(urgencyDiv);
    li.prepend(checkBox);
    li.append(Description);

    return li;
}

export { CreateCheckBox, CreateListItem, CreateUrgencyDiv }