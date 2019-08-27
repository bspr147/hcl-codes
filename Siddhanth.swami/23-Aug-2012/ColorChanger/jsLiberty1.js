function change_background()
{
    var e = document.getElementById("ColorChanger");
    document.bgColor = e.options[e.selectedIndex].text;    
}
