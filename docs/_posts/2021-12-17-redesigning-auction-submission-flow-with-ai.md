---
layout: post
title: "Redesigning auction submission flow with AI"
date: 2021-12-17 09:00:00 +0200
category: Projects
tags: AI client catawiki design webdesign html css
image: assets/images/projects/p2-final-demoday-stand.jpg
---

In this project, we were tasked with redesigning the auction submission flow for our client [Catawiki](https://catawiki.com). This is a website where people can auction items, ranging from vintage furniture, to cars and to LEGO. Basically anything that can be collected, can be auctioned on this site. Submitting an auction can be a long and tedious process, involving long forms of information to type in. Our goal was to use AI to improve the user experience when creating a new submission. While doing this, a big focus was the fact that AI will not always be correct and that we needed to find a way to deal with this.

Our approach was to use image recognition and machine learning to analyse images of an object and pre-fill in some information based on this. So in our new process, the very first step for a user when starting a new auction submission, is to upload images of the item. An AI model will then go to work, analysing the images to attempt filling in any information it manages to retrieve. Attributes like what kind of object, colour, dimensions, condition, etc. are all pre-filled for the user if possible. 

Of course, this will not always go perfectly. No AI will always have the correct answer, so it needs to be easy for the user to check and correct any faulty or missing information. For this reason, we chose to use colour coding to communicate the certainty to the user. Missing information is left empty and uncoloured, if the AI model is unsure about something it will be filled in but coloured orange, if the AI model is sure about something it will be coloured (Catawiki)-blue, as well as when the user manually enters information. Additionally, icons are displayed next to the input field for accessibility and clearer communication and the meaning of the colours is always explained at the top of the page.

![Autofill colors]({{ site.url }}/assets/images/projects/p2-autofill-colors.png)

Another big part of the AI-aided process, is the very fist screen after uploading the images. It shows the user three possible objects based on its analysis of the images. The reason for this screen is twofold: First of all the user will take away many of the uncertainties by confirming the item is indeed LEGO (in this example), secondly this immediately shows the user there is an AI model working in the background to aid them through the process. So, by adding this screen, we can improve the results and minimise the surprise-element of some details already being filled in.

![Result after image recognition]({{ site.url }}/assets/images/projects/p2-result-images.png)

Then, before actually starting with entering the details for the submission, the system shows a message to the user explaining that some details have already been filled in. Here, the user is asked to verify if these are correct.

![Message to check information]({{ site.url }}/assets/images/projects/p2-message-autofill.png)

You can try out the part of our prototype after uploading the images below.

<div class="iframe-video" style="padding-top: 93.3%;">
<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="750" height="700" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FHJozdTgh71x8MeeIPjL1x5%2FProject-2---Catawiki%3Fnode-id%3D885%253A1257%26starting-point-node-id%3D437%253A122%26scaling%3Dscale-down-width" allowfullscreen></iframe>
</div>

## Demonstrator
The screenshots you see on this page, are part of our demonstrator we created for Demoday. Additionally, this prototype includes a webpage to upload an image and uses Google's Teachable Machine to analyse the image. At our Demoday stand, we allowed any visitors to take a picture of one of our four example items, "upload" their own picture to this webpage, and continue with the submission flow about the item of their choosing.

![Final Demoday stand]({{ site.url }}/assets/images/projects/p2-final-demoday-stand.jpg)

This webpage and the integration with Teachable Machine was programmed by me, using HTML, CSS and JavaScript. The other webpages were a combination of HTML / CSS with an integrated prototype created in Figma, for an optimal balance between quality and quantity in our demonstrator. Given my limited experience with these programming languages, this took a lot of effort, but ultimately led to a working demonstrator for Demoday I can be proud of. More about the programming can be read on [this](https://portfolio.jochem.tk/skills/2022/12/06/programming-experience.html#:~:text=multifunctional%20programming%20language.-,Project%202%3A%20Design,-In%20this%20client) page.
