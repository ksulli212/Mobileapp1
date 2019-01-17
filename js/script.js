var inputBox;

function addName(_name){
$('#input').before('<div class="me-want contact-name panel-body"><span class="glyhpicon glyhpicon-minus" aria-hidden="true"/>');

  var it = $('.me-want');
  it.fadeout(0);
  it.fadeIn(1000);
  it.removeClass('me-want');
  it.hover(addRemoveIcon, addRemoveIcon);
}

function saveList() {
  var list = [];
  $('#list .conact-name').each(function(){ list.push($(this).text())});
  var cookie = list.join(', ');
  cookie = cookie.substring(1, cookie.length);

  console.log('Saving cookie as ""' + cookie + '""');
  $.cookie('list', cookie, {expires: 180});
  console.log('Cookie: ' +$.cookie('list'));
}

function loadList() {


}
function add() {
  if (inputBox.val() == '') {
      console.log("No Name listed");
      return;
    }

    addName(inputBox.val());
    inputBox.val('');
}

function remove() {

}


function clear() {
  var name = $('.contact-name');
  var clearname = name.find('span');

  clearname.removeClass('glyphicon-minus');
  clearname.addClass('glyphicon-ok');
  name.fadeOut(1000, function() {
    name.remove();
    saveList();
  });
}

function onKeyPress(event) {
  if(event.keyCode = 13)
  add();
}
$(document).ready(function)() {
  inputBox = $('input[name="add-to-list"]');

  $('#add').click(add);
  $('#clear').click(clear);
  inputBox.keypress(onKeyPress);
  $('#list').on('click', '.contact-name', remove);

  loadList();
  $('#script-error').remove();
}
