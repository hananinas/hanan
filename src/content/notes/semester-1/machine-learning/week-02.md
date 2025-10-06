---
title: "Week 2 –  Summary statistics, similarity, nearest neighbors and decision trees"
semester: "Semester 1"
semesterOrder: 1
timeframe: "Autumn 2025"
course: "Machine Learning"
courseCode: "02452"
courseOrder: 2
week: "Week 2"
weekOrder: 2
focus: " Summary statistics, similarity, nearest neighbors and decision trees"
---

## Attribute statistics

When we are working with variables it is good to be able to use basic statistic measures. Such as mean and variance.

Suppose that we record a number of observations $\{x_1,...,x_N\}$, for instance corresponding to the weight of N = 20 schoolchildren. Since we only have access to a small sample of schoolchildren, the average weight of the N observations will only be an estimate of the true average weight of all schoolchildren and we therefore call the average computed from the N = 20 observations a **sample estimate**.

### Mean (Average)

The **sample mean** (or average) is computed as:

$$\bar{x} = \frac{1}{N} \sum_{i=1}^{N} x_i$$

This gives us the central tendency of our data.

### Variance

The **sample variance** measures how spread out the data is around the mean:

$$s^2 = \frac{1}{N-1} \sum_{i=1}^{N} (x_i - \bar{x})^2$$

Note: We divide by $(N-1)$ instead of $N$ to get an unbiased estimate of the population variance (this is called Bessel's correction).

### Standard Deviation

The **sample standard deviation** is simply the square root of the variance:

$$s = \sqrt{s^2} = \sqrt{\frac{1}{N-1} \sum_{i=1}^{N} (x_i - \bar{x})^2}$$

This gives us a measure of spread in the same units as the original data.



#TODO