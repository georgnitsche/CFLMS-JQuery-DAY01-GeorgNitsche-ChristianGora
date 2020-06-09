$(document).ready(function() {








    /*
     * My jQuery selectors
     *
     * Apply a style such as a yellow background to the following elements.
     * Test your selectors one at a time.
     */

    // all elements
    // $("*").css("background-color", "yellow");

    // all p elements
    $("p")

    // the p element with an ID of "intro"
    $("#intro")

    // all elements with a class of "note"
    $(".note")

    // all DIV elements with a class of note
    $("div[class=note]")

    // all p elements in the article element
    $("article p")

    // the last element in any section which is a p tag
    $("p:last-of-type")

    // the first paragraph on the page
    $("p:first")

    // all p elements which have a link
    $("p [href]")

    // the second li within nested ul element
    $("ul ul li:eq(1)")

    // every second and third p element
    $("p:eq(1),p:eq(2)").css("background-color", "yellow");
});