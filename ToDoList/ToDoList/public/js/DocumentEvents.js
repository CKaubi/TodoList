'use strict';

function ClearOnClickOutsideTextBox(event) {

    const [DealInput] = $('#DealInput');

    const isClickInside = DealInput.contains(event.target)

    if (!isClickInside) {

        DealInput.value = "";
    }
}

function ClearPressEscapeTextBox(event) {

    if (event.key === "Escape") {
        const [DealInput] = $('#DealInput');
        DealInput.value = "";
    }
}

function SortingListElementsByUrgency() {
    const lowerSorting = 'toLow';
    const upperSorting = 'toHigh';
    const sortingType = $('#sortingSelect').val();
    const listActiveTodos = $('#Activ');
    const listCompletedTodos = $('#Completed');
    const activeTodos = [...listActiveTodos.children()];
    const completedTodos = [...listCompletedTodos.children()];

    if (sortingType === lowerSorting) {
        activeTodos.sort((current, next) => { return GetDifferenceOfUrgency(next, current) });

        completedTodos.sort((current, next) => { return GetDifferenceOfUrgency(next, current) });
    } else if (sortingType === upperSorting) {
        activeTodos.sort((current, next) => { return GetDifferenceOfUrgency(current, next) });

        completedTodos.sort((current, next) => { return GetDifferenceOfUrgency(current, next) });
    } else {
        activeTodos.sort((current, next) => { return current.id - next.id });

        completedTodos.sort((current, next) => { return current.id - next.id });
    }

    listActiveTodos.empty();
    listCompletedTodos.empty();

    activeTodos.map((item) => listActiveTodos.append(item));
    completedTodos.map((item) => listCompletedTodos.append(item));
}

function GetDifferenceOfUrgency(currentItem, nextItem) {
    const currentItemUrgency = currentItem.getAttribute('data-urgency');
    const nextItemUrgency = nextItem.getAttribute('data-urgency');

    return currentItemUrgency - nextItemUrgency;
}

function ShowAlert(alert) {
    alert.show();
    setTimeout(() => { alert.hide() }, 2000);
}

export { ClearOnClickOutsideTextBox, ClearPressEscapeTextBox, SortingListElementsByUrgency, ShowAlert }