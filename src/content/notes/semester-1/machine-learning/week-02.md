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

Suppose that we record a number of observations $\{x_1,...,x_N\}$, for instance corresponding to the weight of N = 20 for schoolchildren we can compute the empirical mean and we can use this mean is a best guess to what the average will be of the larger population. This gives us a measure we can use to as a guess of the true population.

### Mean (Average)

The **sample mean** (or average) is computed as:

$$\bar{x} = \frac{1}{N} \sum_{i=1}^{N} x_i$$

This gives us the central tendency of our data.

### Variance

The **sample variance** measures how spread out the data is around the mean:

$$\hat{s} = \frac{1}{N-1} \sum_{i=1}^{N} (x_i - \bar{x})^2$$

Note: We divide by $(N-1)$ instead of $N$ to get an unbiased estimate of the population variance (this is called Bessel's correction).

### Standard Deviation

The **sample standard deviation** is simply the square root of the variance:

$$s = \sqrt{\hat{s}} = \sqrt{\frac{1}{N-1} \sum_{i=1}^{N} (x_i - \bar{x})^2}$$

This gives us a measure of spread in the same units as the original data.



4 Summary statistics and measures of similarity

The mean does provide us important info about the data sample but it can be effected by outliers. A way to avoid that is to use the median which finds the value of $X$ that is in the middle of the dataset.

### Median

The **median** is the middle value when the data is sorted:

- For odd $N$: median is the value at position $\frac{N+1}{2}$
- For even $N$: median is the average of values at positions $\frac{N}{2}$ and $\frac{N}{2}+1$

The median is **robust to outliers** because it only depends on the middle value(x), not on extreme values.

The median is then defined as the value of x such that half of the median values are lower than x.

### Percentile  

We can generalize a median into a percentile. Given a sample $x$ in the p'th percentile, this means that $p\%$ of the observations in the dataset are less than or equal to $x$.

**Definition:** The $p$-th percentile is the value below which $p$ percent of the data falls.

**Examples:**
- 50th percentile = median (50% of data below this value)
- 25th percentile = first quartile (Q1)
- 75th percentile = third quartile (Q3)
- 100th percentile = maximum value

**Computing Percentiles:**

For a sorted dataset $x'_1 \leq x'_2 \leq ... \leq x'_N$, we can approximate the $p$-th percentile as:

$$x_p \approx x'_{\lceil Np \rceil}$$

where $\lceil \cdot \rceil$ rounds up to the nearest integer.

However, this is an approximation. The exact percentile requires **interpolation** because:
- If 180 students have grades less than 11.7, they also have grades less than 11.7001
- We need to choose a value between adjacent data points

**Linear Interpolation Method:**

1. Sort the data: $x'_1 \leq x'_2 \leq ... \leq x'_N$

2. Calculate the position index:
   $$z = Np + \frac{1}{2}$$

3. The percentile value is found by linear interpolation:
   $$x_p = x'_{\lfloor z \rfloor} + (z - \lfloor z \rfloor)(x'_{\lfloor z+1 \rfloor} - x'_{\lfloor z \rfloor})$$

**What this means:**
- If $z$ is an integer, use that exact data point: $x_p = x'_z$
- If $z$ is between two integers (e.g., $z = 5.7$), interpolate between $x'_5$ and $x'_6$
- The fractional part $(z - \lfloor z \rfloor) = 0.7$ tells us how much weight to give to the higher value

**Example:** To find the 90th percentile with $N = 200$ students:
- $z = 200 \times 0.90 + 0.5 = 180.5$
- $\lfloor z \rfloor = 180$, so interpolate between the 180th and 181st values
- Using the interpolation formula:
  $$x_{0.90} = x'_{180} + (180.5 - 180)(x'_{181} - x'_{180})$$
  $$x_{0.90} = x'_{180} + 0.5(x'_{181} - x'_{180})$$
- This simplifies to the average of the two values:
  $$x_{0.90} = \frac{x'_{180} + x'_{181}}{2}$$

**Why this works:**
- The fractional part is $0.5$, meaning we're exactly halfway between the two data points
- So we weight each value equally: $x'_{180} + 0.5 \times (x'_{181} - x'_{180}) = 0.5 \times x'_{180} + 0.5 \times x'_{181}$

**Notation:**
- $\lceil a \rceil$ = ceiling function (rounds up): $\lceil 2.8 \rceil = 3$
- $\lfloor a \rfloor$ = floor function (rounds down): $\lfloor 2.8 \rfloor = 2$


### Mode

The **mode** is the most frequently occurring value in the dataset. 



A dataset can be:
- **Unimodal**: one mode
- **Bimodal**: two modes
- **Multimodal**: more than two modes


### Covariance and Correlation

Covariance measures how much a variable $y$ changes when another variable $x$ changes and vice-versa.

### Covariance

The **sample covariance** between two variables $x$ and $y$ is:

$$\text{Cov}(x, y) = \frac{1}{N-1} \sum_{i=1}^{N} (x_i - \bar{x})(y_i - \bar{y})$$

**Interpretation:**
- **Positive covariance**: When $x$ increases, $y$ tends to increase
- **Negative covariance**: When $x$ increases, $y$ tends to decrease
- **Zero covariance**: No linear relationship between $x$ and $y$

#### Covariance Matrix

Given a dataset with $M$ attributes $x_1, ..., x_M$, we can compute the pairwise covariance between any two attributes and collect them in an $M \times M$ **covariance matrix** $\tilde{\Sigma}$:

$$\tilde{\Sigma}_{ij} = \text{Cov}(x_i, x_j)$$

This matrix is:
- **Symmetric**: $\tilde{\Sigma}_{ij} = \tilde{\Sigma}_{ji}$
- **Diagonal elements** are variances: $\tilde{\Sigma}_{ii} = \text{Var}(x_i)$
- **Off-diagonal elements** are covariances between different attributes

**Drawback:** Covariance is affected by the scale of each attribute, making it difficult to compare covariances between different pairs of variables.

### Correlation

To overcome the scale dependence of covariance, we **standardize** by dividing by the standard deviations of both variables. This gives us the **correlation coefficient**:

$$\hat{\rho}_{xy} = \frac{\widehat{\text{Cov}}(x, y)}{\hat{\sigma}_x \hat{\sigma}_y} = \frac{\frac{1}{N-1} \sum_{i=1}^{N} (x_i - \bar{x})(y_i - \bar{y})}{\hat{\sigma}_x \hat{\sigma}_y}$$

Expanding the denominator:


$$\hat{\rho}_{xy} = \frac{\sum_{i=1}^{N} (x_i - \bar{x})(y_i - \bar{y})}{\sqrt{\sum_{i=1}^{N} (x_i - \bar{x})^2} \sqrt{\sum_{i=1}^{N} (y_i - \bar{y})^2}}$$

where $\hat{\sigma}_x$ and $\hat{\sigma}_y$ are the sample standard deviations of $x$ and $y$.

*Properties:**
- Always between -1 and 1: $-1 \leq \rho_{xy} \leq 1$
- **Scale-invariant**: Changing units of $x$ or $y$ doesn't change $\rho_{xy}$
- $\rho_{xy} = 1$: Perfect positive linear relationship
- $\rho_{xy} = -1$: Perfect negative linear relationship
- $\rho_{xy} = 0$: No linear relationship
  

A correlation of 0 means that x tells us nothing about y, a positive correlation tells us that when x is large y is also likely to be large and the opposite is true if theres a negative correlation y is going to be small if x is large.

### Distance Metrics

Theres no simple definition of distance except that it is a function of observations $x,y$ such that if the value is large if they are not very similar and short if they are very similar.

**Formal Properties of a Metric:**

A proper distance measure $d$ should satisfy:

1. **Non-negativity**: $d(x, y) \geq 0$
2. **Identity of indiscernibles**: $d(x, y) = 0$ if and only if $x = y$
3. **Symmetry**: $d(x, y) = d(y, x)$
4. **Triangle inequality**: $d(x, y) \leq d(x, z) + d(z, y)$

The triangle inequality states that the direct distance between two points is never greater than going through an intermediate point. For example, the distance from home to work is not greater than the distance from home to the bakery plus the distance from the bakery to work.

**Distance from Norms:**

A common way to define distances is using **norms**. A norm $\|x\|$ is the magnitude of a vector and must satisfy:

1. **Non-negativity**: $\|x\| > 0$ if $x \neq 0$
2. **Scaling**: $\|ax\| = |a|\|x\|$
3. **Triangle inequality**: $\|x + y\| \leq \|x\| + \|y\|$

We can define distance from a norm as:

$$d(x, y) = \|x - y\|$$


#### Euclidean Distance

The most common distance metric, measuring the straight-line distance between two points:

$$d(x, y) = \sqrt{\sum_{j=1}^{M} (x_j - y_j)^2}$$

where $x$ and $y$ are $M$-dimensional vectors.

#### Manhattan Distance (L1 Norm)

Sum of absolute differences along each dimension:

$$d_1(x, y) = \|x - y\|_1 = \sum_{j=1}^{M} |x_j - y_j|$$

Also called "taxicab distance" or "city block distance" because it's like traveling along a grid of streets.

#### Minkowski Distance (Lp Norm)

A generalization that includes both Euclidean and Manhattan distances:

$$d_p(x, y) = \left(\sum_{j=1}^{M} |x_j - y_j|^p\right)^{1/p}$$

**Special cases:**
- $p = 1$: Manhattan distance
- $p = 2$: Euclidean distance  
- $p \to \infty$: Chebyshev distance (maximum difference): $d_\infty(x, y) = \max_j |x_j - y_j|$

**Effect of p:** As $p$ increases, the distance metric becomes less sensitive to differences in individual dimensions and more dominated by the largest difference.

#### Mahalanobis Distance

Unlike the previous metrics, Mahalanobis distance takes into account the **covariance structure** of the data:

$$d_M(x, y) = \sqrt{(x - y)^T \Sigma^{-1} (x - y)}$$

where $\Sigma$ is the covariance matrix of the dataset.

**Key properties:**
- If $\Sigma = I$ (identity matrix), it reduces to Euclidean distance
- Accounts for correlations between variables
- Scale-invariant (adjusts for different variances in each dimension)

**Intuition:** The Mahalanobis distance is **lower** when two points lie along the direction where the data naturally varies (within the "point cloud"). 

**Example interpretation:**
- Two points might have the same Euclidean distance (~5.65)
- But if one pair lies along the main axis of variation in the data (blue points): $d_M = 4.15$
- While another pair lies perpendicular to the variation (red points): $d_M = 13$
- The Mahalanobis distance captures that movement along the natural spread of data is "cheaper" than movement against it

This makes Mahalanobis distance useful when features have different scales or are correlated.