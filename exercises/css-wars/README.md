Instructions:

In this exercise you will use several css selectors to restyle elements of this page. The HTML base is already written for you and is found below for you to copy into your project.

Complete the following:

Select the body and give it a background color of #111111.

Select the h1 tag, change the font color to #E2E80F, center the text, and make it a bit larger than the default.

Select the paragraphs, change the font-color to #eeeeee, make their font-size larger, and give them some larger separation between each line;

Find a way to select all span tags inside the paragraph with the class of credits and make them look like anchor links (i.e. underline and colored blue, or another color that is easier to read on the dark background like #49DAFF).

You could also optionally figure out how to make the cursor change to the little hand when the user is hovering over it to mimic even more closely a real link.
Select the "film-description" ID, make the font a little smaller and change it to an italics style.

Setup
Create a new exercise folder and put the following inside a file named index.html:

<!DOCTYPE html>  
<html lang="en">  
<head>  
    <meta charset="UTF-8">
    <title>Selectorize</title>
    <link rel="stylesheet" type="text/css" href="styles.css">
</head>  
<body>  
<!--need items to change with tags-->  
<section>

    <h1>STAR WARS: THE FORCE AWAKENS</h1>
    <p>Star Wars: The Force Awakens (also known as Star Wars: Episode VII – The Force Awakens) is a 2015 American epic
        space opera film directed, co-produced, and co-written by <span class="credits">J. J. Abrams</span>. The seventh
        installment in the main Star
        Wars film series, it stars <span class="credits">Harrison Ford</span>, <span class="credits">Mark Hamill</span>,
        <span class="credits">Carrie Fisher</span>, <span class="credits">Adam Driver</span>, <span class="credits">Daisy Ridley</span>,
        <span class="credits">John Boyega</span>, <span class="credits">Oscar Isaac</span>, <span class="credits">Lupita Nyong'o</span>,
        <span class="credits">Andy Serkis</span>, <span class="credits">Domhnall Gleeson</span>, <span class="credits">Anthony Daniels</span>,
        <span class="credits">Peter Mayhew</span>, and <span class="credits">Max von Sydow</span>.
        Produced by Lucasfilm and Abrams' Bad Robot Productions and distributed worldwide by Walt Disney Studios Motion
        Pictures, The Force Awakens is set 30 years after Return of the Jedi; it follows Rey, Finn, and Poe Dameron's
        search for Luke Skywalker and their fight alongside the Resistance, led by veterans of the Rebel Alliance,
        against Kylo Ren and the First Order, a successor group to the Galactic Empire.</p>

    <p id="film-description">
        The Force Awakens is the first film in the Star Wars sequel trilogy announced after Disney's acquisition of
        Lucasfilm in October 2012. It was produced by Abrams, his longtime collaborator Bryan Burk, and Lucasfilm
        president Kathleen Kennedy. Abrams and Lawrence Kasdan, co-writer of the original trilogy films The Empire
        Strikes Back (1980) and Return of the Jedi (1983), rewrote an initial script by Michael Arndt. John Williams,
        composer for the previous six films, returned to compose its score. Star Wars creator George Lucas served as
        creative consultant during the film's early production. Filming began in April 2014 in Abu Dhabi and Iceland,
        with principal photography also taking place in Ireland and Pinewood Studios in England, and concluded in
        November 2014. It is the first live-action film in the franchise since Star Wars: Episode III – Revenge of the
        Sith, released in 2005.
    </p>
</section>  
</body>  
</html>  
Also make sure to name your CSS file styles.css, or change the reference in the link of the HTML if you want to use a different name.