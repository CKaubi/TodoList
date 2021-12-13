'use strict';
import { CreateButtonClick } from './ElementsEvents.js';
import { DatePickerInitialization} from './GeneralFunctions.js';
import { GetTodoList } from './ServerRequest.js';
import { ClearPressEscapeTextBox, SortingListElementsByUrgency } from './DocumentEvents.js'

DatePickerInitialization();

GetTodoList();

$('#AddDealButton').click(CreateButtonClick);
$('#DatePicker').change(GetTodoList);
$('#sortingSelect').change(SortingListElementsByUrgency);

$(document).keyup( ClearPressEscapeTextBox);
