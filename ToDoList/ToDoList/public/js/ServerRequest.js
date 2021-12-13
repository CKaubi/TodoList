'use strict';
import { Out, DateValidate } from './GeneralFunctions.js';
import { ShowAlert } from './DocumentEvents.js';
const url = new URL('http://localhost:30/TodoApi/api/values');

function GetTodoList() {

    const [selectedDate] = $("#DatePicker");
    $('ul').empty();
    $('#Activ').append('<div class="loader"></div>');

    if (DateValidate(selectedDate.value)) {
        $.getJSON(`${url}?date=${selectedDate.value}`, (data) => { Out(data) })
         .catch(() => {
             const serverRequestAlert = $('#serverRequestErrorAlert');
             ShowAlert(serverRequestAlert)
         });
    } else {
        $('.loader').replaceWith(`Введен не верный формат даты: ${selectedDate.value} \n Введите дату в формате: MM-DD-YYYY`)
    }
}

function TodoRequest(request, toDo) {
    $.ajax({
        url: url,
        type: request,
        dataType: 'json',
        data: toDo,
        success: (data) => {
            const deals = [data];
            Out(deals);
        },
        error: () => {
            const serverRequestAlert = $('#serverRequestErrorAlert');
            ShowAlert(serverRequestAlert);
        }
    });
}

export { GetTodoList, TodoRequest }