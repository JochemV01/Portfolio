---
layout: post
title: "Making sense of sensors"
date: 2022-06-30 09:00:00 +0200
category: Courses
tags: Sensors data analysis health focus stress
---

This course was about performing qualitative research with embodied sensors. We not only learned how to analyse the sensor data, but also how to collect and handle the data in a proper and ethical way. Furthermore, we got some general introduction about different types of data and what they can be used for.

In this course, with my team I studied the effects of the environment (temperature, humidity and sound levels) on students' ability to focus. We used an Arduino Uno with a data shield to collect the sensor data and store them to an SD card, while using an Xiaomi activity tracker to track the participants' heart rates. We measured ourselves while reading and also wrote down how focused we felt afterwards. We did not find a clear relation between focus and other factors, although higher humidity seemed to result in a higher heartrate. 

During this course, I was mostly busy with the data output from the activity trackers. Since my group used two different versions (5 and 6), both of which apparently need a different smartphone app and account, the datasets acquired from both models were different. The Mi Band 5's data was nice, divided into folders with only one sensor reading in each file. The CSV files were therefor simple and easy to use. The Mi Band 6 however yielded one large dataset with **all** sensor readings. This included, but was not limited to, the heartrate, step count, calory count and more. What's worse was that all of these sensor readings were stored in the same column, and as text entries together with the sensor name instead of numbers. This meant I had to do a lot of pre-processing with the data using Python in order to get it into a useful shape for us to analyse. I got it to work though.