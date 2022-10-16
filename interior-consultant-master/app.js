let icon = document.getElementsByClassName('material-symbols-outlined');
let nav_items = document.getElementsByClassName("list-items");
function toggle()
{
  nav_items[0].classList.toggle("show-items")
  if(icon[0].innerText == "menu")
  {
    icon[0].innerText ="close"
    document.body.style.overflow = "hidden"
  }

  else
  {
    icon[0].innerText ="menu"
    document.body.style.overflow = "auto"
  }
}