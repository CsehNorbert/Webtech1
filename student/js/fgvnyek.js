$(document).ready(function()
{
    var homecontent="<h1>Példa fejrész</h1>" + "<p> Valamilyen szöveg </p>";

    var carscontent="<h1>Cars Content</h1>" + "<p>kocsik helye</p>";

    var manufacturerscontent="<h1> izé </h1>";

    $("#currentcontent").html(homecontent);


    $(".menubutton").click(function ()
    {
        let buttonpressed=$(this).attr("title");
            switch (buttonpressed)
            {
                //first one is to stop the page from reloading
                case $("#currentcontent").attr("title"): break;
                case 'homebutton' :
                    $("#currentcontent").attr("title",buttonpressed);
                    $("#currentcontent").html(homecontent);
                    break;
                case 'carsbutton' :
                    $("#currentcontent").attr("title",buttonpressed);
                    $("#currentcontent").html(carscontent);
                    break;
                case 'manufacturersbutton' :
                    $("#currentcontent").attr("title",buttonpressed);
                    $("#currentcontent").html(manufacturerscontent);
                    break;
            }
    })


});