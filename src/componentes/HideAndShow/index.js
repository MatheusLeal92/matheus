element = document.getElementById('toggle');
button = document.getElementById('toggle-button');
function hideAndShow(){
  if(element.style.display == 'none'|| element.style.display == '')    // checks if the display property is set to none or not
  {
    element.style.display = 'Block';  // if set to none then set the display property to block
    button.innerHTML = 'Hide';  // changes the button's text
    
  }
  else{
    element.style.display = 'None';   // otherwise set it to none
    button.innerHTML = 'Show';
  }
}