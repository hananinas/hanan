---
title: "Week 1 – Introduction"
semester: "Semester 1"
semesterOrder: 1
timeframe: "Autumn 2025"
course: "Machine Learning"
courseCode: "02452"
courseOrder: 2
week: "Week 1"
weekOrder: 1
focus: "Introduction"
---


## Supervised learning

In supervised learning we predict quantities based on other quantities there are two types of supervised learning tasks and its important to know the difference between those two.


- classification tasks are tasks such as image classification

A classification problem is where given some observations we have to figure out which class a observation belongs to.  

In classification we are given the observed values $x$ and we have to predict the discrete response $y$   

Example a machine knows what 0 is  

f([0]) => 0 


Examples of such are:

1. We are given a set of number and in that set we have to determine from 0-9 what type of nr they are. - multi classification as you have multiple categories to select from. 
2. We are given a list of patients and our task is to check if they have one or more year to live - binary classification as it is binary if they live or not (true/false)
3. We are given a short sound-signal and have to determine which word is spoken. This is a classification problem but there are as many classes as there are words (perhaps about 20 000).
4. We are given the social Facebook graph for a large group of people and have to determine how likely it is any two random people in the graph will form a friendship (or remain friends) in the next year (binary classification problem as response is discrete, i.e. link /not a link between people).
5. We are shown pairs of images of faces and have to determine if the images are of the same person.


you can use pixels to do this as shown below 
![Number to pixel](/note-images/machine-learning/week-1/image-class.png)


we represent it as a vector in 28 x 28 = 784
vector.

![vector](/note-images/machine-learning/week-1/pca-num.png)

then using these points we want to train a algortim that can let us classify these numbers.

And then with that you can find out what number it is for example 

- regression is used with multiple data points to find a continuous output

In regression we are given a observed values $x$ and we have to predict the continuous response $y$

The simplest form of regression is a 1 dimensional regression where we have to predict the $y$ values based on the $x$ values  
![regression 1 dimension](/note-images/machine-learning/week-1/regression.png)

Examples of regression can be 

1. You can do a regression for sales amount or other tasks if we want to predict the future value of those
2. Given historical data of stocks you have to predict the value of a given stock on monday (prediction of a single variable)
3. We are given a person’s height and have to determine his or her weight (prediction of a single variable from another).
4. We are given the performance of all stocks in the past and have to predict the performance of all stocks for the next five days (massive regression problem with many output variables).
5. We are given weather information from yesterday and have to predict the temperature in five major cities tomorrow (regression of five variables).

These tasks all seem different and they are but they all have a common factor. That they map to another observation a good example is the number one. Given observations of number it should map to nr 4 for example. 

And in the case of regression the historical data of stocks maps to price prediction of a stock on monday or multiple stocks

Supervised learning problems are where we have both observed observations and observed target values. As such we kinda know the problem and if we solved it correctly as we know the target value.

This is known as supervised learning problems or simply supervised learning

## Unsupervised - descriptive tasks

The opposite of supervised learning is unsupervised learning where we predict a quantity from other quantities.


This is super useful for tasks where we do not know what is in the data. A example is lets we want to do some machine learning where we predict what anime is in the picture from pictures on the internet. 

Here we do not know what image of an animal we have is it a dog or a cat maybe it's a animal.

We could use supervised method such as classification to do this and label thousand of images and then determined the type of animal. 

But this is a very slow and boring approach. 

Unsupervised learning let's us solve problems like this. In unsupervised learning we take data and try to find labels from the data instead of labelling it ourselves. 


Find (human-interpretable) patterns that describe the data 

- Clustering - Discover group structure in data


![2d clustering example](/note-images/machine-learning/week-1/2dcluster.png)

A 2d cluster example shown above. It shows a cluster given a dataset (here the 2d dataset on the left side) and it has to estimate the plausible divisions of the observations into clusters as shown in the right hand side.

Examples of clustering tasks is:

1. In the animal example, the goal was to group images into clusters such that each cluster represented a given type of animal.
2. Given genetic sequence data from a number of bacteria, try to find natural groupings of the genomes (roughly corresponding to species).
3. Given a large collection of documents, try to determine clusters of similar documents corresponding to topics.

So clustering is about classifying data without labeling it. And deriving clusters from the data.

- Anomaly Detection (e.g., via density estimation) - Find data objects that are abnormal 

![density estimation](/note-images/machine-learning/week-1/density.png)

In the above example of 2d density estimation for the digits. Using the black points in the left side the density is estimated and plotted on the right side.

In density estimation we try to find out how unlikely or likely a outcome is in future observations given the pas observations.

The example above can be for example be used to determine who has written the digits for a given percentage maybe fifth of the digits. 



- Anomaly Detection




![density estimation](/note-images/machine-learning/week-1/anomly.png)

As shown above anomaly detection allows us to figure out which observation differs more 
from other observations

This is done by seeing the distance from a observations nearest neighbor if the distance is to far away we say that the observation is an anomaly.

Goal is to find abnormal behavior in data
and then detect it 

Anomaly detection can be considered closely
related to density estimation since an observation which is very implausible (low density) could be
considered an outlier. Anomaly detection is relevant in a number of situations including:

1. can be used for detecting credit card fraud and other types of outliers you want to find 
2. You supervise a windmill farm and based on past behaviour have to determine if a windmill is beginning to behave differently indicating it may require repair.


- Association mining

![Association](/note-images/machine-learning/week-1/ruleset.png)

Association minning is about which rules hold up in the dataset.

Rules such as: “If the person bought both book $X$ and book $Y$, then he is likely to buy book Z”. This
is known as association mining or rule discovery. Other applications are:

1. Given which items people have historically bought in a supermarket, discover what other items each customer is likely interested in.
2. Given a number of patients’ medical history, determine which past illnesses and conditions imply high risk for other, future illnesses: “Common cold and operations imply high risk of pneumonia”.
3. Given past life experience, figure out that drinking the past night implies hangover.

- Reinforcement learning 

Reinforcement learning is when we teach a machine to think by giving it a reward for it's by using something called a reward function. 

For example a robot who has to click a button and if it clicks the button it gets a reward otherwise it is given a penalty. 

The more you train it using this technique it will be better and clicking the correct button.




- Representation learning

 Discover the latent representations of the data examples such as next token prediction 
  
Where you predict the next token. 


### Models in machine learning 

In machine learning is a function that takes the  input and predicts the output


#### Data 
The most important thing is to have good quality data 

data has attributes 

#### Discrete / continuous attributes 

- Discrete 
- Finite (or countable infinite) set of values 
- Zip codes 
- Counts 
- Set of words in a collection of documents 
- Often represented as integer values • Continuous 
- Has real numbers as attribute values 
-  Examples 
    Temperature • Height • Weight • Often represented as floating point variables


remember this for report


Noise in data is something that makes data unclean and disturbs the data 

you can also define it as unwanted data 

to handle it you can exclude noisy attributes 

remove noise by filter

Focus on what you want to get an answer for 