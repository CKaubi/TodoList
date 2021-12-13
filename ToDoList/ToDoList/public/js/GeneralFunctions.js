'use strict';
import { ChangeCheckBoxStatus } from './ElementsEvents.js';
import { CreateCheckBox, CreateListItem, CreateUrgencyDiv } from './ItemsCreate.js';

function Out(toDoList) {
    toDoList.forEach(ToDo => {
        const checkBox = CreateCheckBox(ToDo);
        const urgencyDiv = CreateUrgencyDiv(ToDo);
        const li = CreateListItem(ToDo, urgencyDiv, checkBox);        

        if (JSON.parse(ToDo.Status) === false) {

            li.onclick = ChangeCheckBoxStatus;
            $('#Activ').append(li);

        } else {
            li.onclick = ChangeCheckBoxStatus;
            $('#Completed').append(li);
        }
    });
    $('.loader').remove();
}

function DatePickerInitialization() {
    const datepicker = $("#DatePicker");

    datepicker.datepicker({ dateFormat: 'mm-dd-yy' });
    datepicker.datepicker('setDate', new Date());
}

function DateValidate(date) {
    const dateValid = new RegExp("^(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])-[0-9]{4}$");
    return dateValid.test(date);
}

export { Out, DatePickerInitialization, DateValidate }