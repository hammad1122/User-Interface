$(document).ready(function(){
    var template = $("#itemList").html();
    Mustache.parse(template);

    var rendered = Mustache.render(template, {
    
        item: [
            {
                img: "images/img1.jpg"
            },
            {
                img: "images/img2.jpg"
            },
            {
                img: "images/img3.jpg"
            },
            {
                img: "images/img4.jpg"
            },
            {
                img: "images/img5.jpg"
            },
            {
                img: "images/img6.jpg"
            },
            {
                img: "images/img7.jpg"
            },
            {
                img: "images/img8.jpg"
            },
            {
                img: "images/img9.jpg"
            },
            {
                img: "images/img10.jpg"
            },
            {
                img: "images/img11.jpg"
            },
            {
                img: "images/img12.jpg"
            }
        ],

        show: false
    })
    $("#target").html(rendered);
});