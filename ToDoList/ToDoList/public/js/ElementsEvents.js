'use strict';
import { DateValidate } from './GeneralFunctions.js';
import { TodoRequest } from './ServerRequest.js';
import { ShowAlert } from './DocumentEvents.js';
const loader = $('<span class="loader"></span>');

function CreateButtonClick() {
    const [selectedDate] = $("#DatePicker");
    const [dealInput] = $('#DealInput');
    const urgencyInput = $('#urgencySelect');

    if (dealInput.value != '' && DateValidate(selectedDate.value) && urgencyInput.val() != 'noValue') {
        $('#Activ').append(loader);

        let toDo = {};

        toDo.Description = dealInput.value;
        toDo.Urgency = $('#urgencySelect').val();
        toDo.Status = false;
        toDo.Date = selectedDate.value;

        TodoRequest('POST', toDo);

        $('#DealInput').val('');
    } else {
        const inputErrorAlert = $('#inputErrorAlert');
        ShowAlert(inputErrorAlert);
    }
}

function ChangeCheckBoxStatus() {
    let toDo = {};
    const id = this.id;
    const [currentLi] = $('#' + id);

    toDo.Id = id;
    toDo.Description = $('#' + id).text();
    toDo.Urgency = currentLi.getAttribute('data-urgency');

    if (currentLi.getAttribute('data-status') === 'true') {
        toDo.Status = false;
    } else {
        toDo.Status = true;
    }

    $('#' + id).replaceWith(loader);

    TodoRequest('PUT', toDo);
}

export { ChangeCheckBoxStatus, CreateButtonClick };