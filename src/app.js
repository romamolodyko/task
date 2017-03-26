/**
 * Created by Roma on 26.03.2017.
 */
import TaskList from './task-list.jsx';
import Task from './task.jsx';
import TaskRender from './task-render.jsx';

let tasks = new TaskList([
    new Task('1', 'dota', 'delete dota', '12.00', 1),
    new Task('1', 'dota', 'watch dota', '12.00', 1),
    new Task('1', 'dota', 'play dota', '12.00', 2)
]);


let taskRender = new TaskRender(tasks);
taskRender.render();
$(".sortable").sortable({connectWith: "#drop"});

$(".task__container").droppable();
$("#drop").sortable({connectWith: ".sortable"});
// $(".sortable").sortable({
//     revert: true,
//     // connectWith: '#draggable',
//     stop: function(event, ui) {
//         if(!ui.item.data('tag') && !ui.item.data('handle')) {
//             // ui.item.fadeTo(400, 0.1);
//         }
//     }
// });
// $(".draggable").draggable({
//     connectToSortable: '.sortable',
//     revert: 'invalid'
// });

$("ul, li").disableSelection();



