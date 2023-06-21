---
layout: post
title: "Intelligent interactive products"
date: 2023-06-27 09:00:00 +0200
category: Courses
tags: Interaction machine-learning classifiers algorithm smart products
---

This course is all about using Machine Learning (ML) models to make designs interactive. And this is done in a way that requires very little programming. Using already available classifiers, we are able to train ML models based on many kinds of sensors, like a microphone, light sensor, accelerometer or even a camera. We learned how to perform multiple kinds of signal processing, from single measurements, to time-based processing to detect motions or vibrations. The course consisted of lectures, hands-on-sessions to learn how to use the code, and an individual and group assignment.

In the individual assignment, I decided to already use a sensor which is considered an advanced sensor: A camera. I trained a model to recognise different items of waste: Plastic, cardboard, drink carton and chemical waste. I then made a simple prototype of a smart waste bin, with a servomotor opening the right compartment based on which waste item was detected. For example: If you show the plastic, the compartment for plastic opens up. This can make waste sorting easier, as this is something which still doesn't happen enough as too much recyclable waste ends up on landfills due to improper sorting. 

![Open bin with waste]({{ site.url }}/assets/images/courses/iip-bin-with-waste.jpg)

The prototype works, and is made using a "Linear Support Vector Classifier". It was trained using a dataset collected in multiple locations with various light intensities and backgrounds so it can reliably predict which waste is shown to the camera at multiple locations. In the program, I added some code which takes multiple measurements during a duration of two seconds, after which it counts how many times each occurs and returns the most occurring one. This is to increase the reliability, as it can sometimes briefly switch to a wrong prediction. But I found that 2 seconds is generally enough for the majority of predictions to be correct. While this prototype only works on the items that I used to train it, if the training dataset is large and diverse enough it can work in a real product as well. In that case, a different classifier is probably better to use, like a deep-learning model as these can improve their predictions over time. Read more about my smart sorting bin in the short report:

<br />
[Read the Report]({{ site.url }}/assets/download/Smart-sorting-bin.pdf){: .btn}

<br />
While for the individual assignment any concept is fine, the group assignment needs to have an actual proper and relevant concept. Furthermore, in this assignment it is important to try multiple different classifiers, perform tests and choose the one which works best. More effort needs to be put on optimising the model. 

My group's concept is a kitchen aid to help blind people follow a recipe. Currently, there are two ways to do this: Either by following a written recipe in braille or by listening to an auditory recipe using a speaker. Both have their cons: They need to use hands to read a physical recipe and obviously paper can't handle water very well, while an auditory recipe could go a little too fast resulting in stress. Our concept is a tool that detects at which step the user is and which ingredient they are working on, and uses speech to read out the next step in the recipe. This works using a camera, which can be positioned in a device on the kitchen counter or for example in a cutting board. 

For our prototype, we are using the webcam in the laptop, similar to my individual assignment I made before this. In fact, we can reuse most of the code, making small changes to it in order to add speech output based on the current step. We trained the model by pointing the laptop's webcam towards the table and placing various vegetables on the table. We did this in various lighting conditions and on multiple surfaces in order to make the model reliable in varying conditions. We also used multiple different types of classifiers to compare the performances of different models and optimised the models by searching the best variables for each classifier. To compare the performance, we used a different dataset from the one used to train the model.