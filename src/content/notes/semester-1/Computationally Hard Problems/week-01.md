---
title: Week 1 –  Motivation, Definitions and Notation
semester: Semester 1
semesterOrder: 1
timeframe: Autumn 2025
course: Computationally Hard Problems
courseCode: "02450"
courseOrder: 1
week: Week 1
weekOrder: 1
focus: Motivation, Definitions and Notation
---

### Motivation for this Course

We can either have efficient algorithms or non efficient algorithms before the 70's there wasn't a way to solve these non efficient algorithms.  And simply if a problem was too hard it would not be solvable. 

But now we have different methods to tackle these problem.  

This was the situation in late 1970s. Today we know how to attack hard problems by providing
solutions

 1. that are provably very good but not necessarily perfect (approximation),
 2. that are provably very good or even perfect with a very high probability (randomization),
 3. that are obtained in time $$1.34^n$$ rather than $$2^n$$ (efficient exponential-time algorithms),
 4. that are found fast and are typically good even though we cannot prove that (heuristics)

### Typical Problems (Described Informally)

Problems like these appear in every engineering area:

1.  Planning a fuel-efficient tour for a plane/ship/robot
2. Cutting pieces out of a steel plate with minimal waste
3. Optimizing the payload for a ship/rocket
4. Designing a production process to minimize the time/cost
5. Minimizing the number of tests to check all faults in a circuit
6. Scheduling tasks on a computer (or other) system to minimize the used resources
7. Minimizing the area of a circuit
8. Checking whether a program is correct
9. many thousands more

### Means of Describing Things Formally

1.  The course deals with problems and their “hardness”: computational complexity.
2. The complexity is the amount of computational resources needed to solve them.
3. The problems are the input to algorithms (programs).
4. The problems have to be described in a formal, unambiguous way; otherwise one cannot establish theoretical statements.
5. Such a description is given in form of formal languages. We briefly repeat/introduce the basic concepts.
6. It is natural to expect that “larger problems take longer to solve.”
7. Our formal description serves also to measure the problem size.

### The Word Problem (Clarification)

We fix an alphabet Σ and a language L ⊆ Σ*.
Word Problem for L: Input a word w ∈ Σ*. Output YES if w ∈ L, NO otherwise.

Important: Every (yes/no) computational problem can be rephrased as a word problem for a suitable language (by choosing an encoding). This lets us study all decision problems uniformly.

Example 1 (Triangle again)
Alphabet: {0,1}. An encoding w of an undirected simple graph G on n vertices has length 
$$k = \frac{n(n-1)}{2}$$
(upper triangle of adjacency matrix).  
$$
L_{\text{triag}} = \{\, w \mid w \text{ encodes a graph that contains a triangle } \}
$$
The word problem asks: Does the encoded graph contain a triangle?

Example 2 (Exactly two b’s)
Alphabet: {a,b}. 
$$
L_{2b} = \{\, w \in \{a,b\}^* \mid w \text{ contains exactly two } b \text{’s} \}
$$
Algorithm sketch:
1. Scan w left to right.
2. Maintain counter c of b’s; increment on b.
3. If c > 2 early reject.
4. After scan accept iff c = 2.

This runs in time proportional to |w| (number of symbols).

### Encodings and Input Size

Why be explicit about encodings?
1. We need a finite alphabet (bits, characters) so computers (and abstract machines) can process inputs.
2. Size |w| gives a concrete measure to talk about running time T(|w|).
3. Different reasonable encodings of the same underlying object differ only polynomially in length (intuitive claim we will rely on later). Hence complexity classes defined via polynomial time are robust.

Rules of thumb for a "reasonable" encoding:
- Decodable (we can reconstruct the object).
- No superfluous gigantic padding.
- Components (numbers, edges, clauses, etc.) written in a standard positional notation.

Example (Graph)
Number of bits for graph with n vertices in our encoding: 
$$\frac{n(n-1)}{2} = \Theta(n^2)$$
This is Θ(n^2). So algorithms polynomial in n are also polynomial in |w| and vice versa.

Example (CNF Clauses)
Alphabet Σ_c = {0,1,2,3,4,5,6,7,8,9,#,+,−}. Length counts every symbol (+, −, digits, #). The number of clauses and variable indices both influence |w|.

### Decision Problems vs. Other Problem Types

We focus first on decision problems (YES/NO) because:
- They correspond to languages.
- They simplify reductions (transform an instance of one language membership test into another).
- Optimization problems can often be phrased as decision versions (e.g., Is there a tour of length ≤ B?).

Later: Approximation, randomized, heuristics; for now, baseline is decision / language membership.

### Running Time (Informal Start)

Given an algorithm A and input word w:
- T_A(w) = number of elementary steps (model-dependent, but we abstract).
- Worst-case time on length n: $T_A(n) = \max\{ T_A(w) \mid ||w|| = n \}$.

We classify growth using asymptotic notation:
$$
\text{Polynomial time: } T_A(n) \le c \cdot n^{k}
$$
$$
\text{Exponential examples: } 2^{n},\; 1.34^{n}
$$

Why polynomial? Considered "efficient" (robust under composition; encodings stable up to polynomial blow-up).

### Preview of Complexity Classes (Very Brief)

P: Set of languages decidable by some algorithm (deterministic) in polynomial time.  
NP: Languages where YES instances have polynomial-size certificates verifiable in polynomial time. (Formal definition later, keep intuition: "easy to check").  
We do NOT yet define reductions formally; that comes soon.

Triangle Example and Classes:
Is $$L_{\text{triag}} \in P$$? Runtime:
$$
O(n^3) = O\big(|w|^{3/2}\big) \text{ since } |w| = \frac{n(n-1)}{2} = \Theta(n^2)
$$

### Distinguishing Polynomial vs. Exponential

Suppose:
$$
T_A(n) = 0.5\, n^{4}, \qquad T_B(n) = 1.0001^{n}
$$

For small n, B might be slower or faster depending on constants, but asymptotically polynomial (A) is preferable to any base > 1 exponential (B).

### Designing a Word Problem Algorithm (Template)

Given a language definition:
1. Parse: Convert raw word w into structured object (graph, formula, etc.).
2. Validate: If parsing fails, immediately answer NO (w ∉ L) unless malformed words are excluded by definition.
3. Core test: Implement the membership predicate from the definition.
4. Return YES/NO.

Example Sketch (Membership in L_2b, again) fits template: parsing is trivial, validation automatic.

Formal pattern:
$$
w \in L \;\Longleftrightarrow\; \text{Parse}(w)\ \land\ \text{Predicate}(\text{object})
$$

### Small Practice

Try to define precisely (in language form) and sketch membership algorithms:
1. L_even = { w ∈ {0,1}* | w has an even number of 1’s }.
2. L_pal = { w ∈ {a,b}* | w reads the same forwards and backwards }.
3. L_deg3 = encodings of graphs where every vertex has degree ≤ 3.

For each: (a) Give formal/informal definition, (b) Give algorithm idea, (c) State rough time in terms of |w|.

Suggested formal target shapes:
$$
L_{\text{even}} = \{ w \in \{0,1\}^* \mid \#_1(w) \text{ is even} \}
$$
$$
L_{\text{pal}} = \{ w \in \{a,b\}^* \mid w = w^{R} \}
$$
(Here $$w^{R}$$ = reverse of w.)
$$
L_{\text{deg}\le 3} = \{ w \mid w \text{ encodes a graph with } \deg(v) \le 3\ \forall v \}
$$

### Key Takeaways (So Far)

- Problems → Languages; solving a decision problem = solving the word problem.
- Encodings matter, but polynomial time is stable under reasonable changes.
- We start building a toolbox to classify problems (toward P, NP, hardness).
- Concrete examples (triangles, counting letters) anchor abstract notions.




## Exercises

### Exercise 1: Graph Encoding Validation

**Problem**: Describe how one can check that a word w encodes an undirected graph.

---

**Solution**:

**Encoding assumption.**
A word w ∈ {0,1}* encodes an undirected graph if it represents the upper triangle of a symmetric adjacency matrix for some n-vertex graph.

**Validation steps.**
1. **Length check**: Verify that |w| = n(n-1)/2 for some positive integer n
   - Solve the equation: |w| = n(n-1)/2
   - Check if n = (1 + √(1 + 8|w|))/2 is a positive integer

2. **Format verification**: Each bit in w must be either 0 or 1 (automatically satisfied for binary strings)

3. **Implicit symmetry**: Since we store only the upper triangle, the symmetry property A[i,j] = A[j,i] is guaranteed by construction

**Decision rule.**
The word w encodes a valid undirected graph **iff**
$$\boxed{|w| = \frac{n(n-1)}{2} \text{ for some positive integer } n}$$

---

### Exercise 2: Edge Presence Check

**Problem**: If w encodes an undirected graph, describe how one can check whether a certain edge {i, j}, where j > i, is present. Avoid reconstructing the adjacency matrix from w.

---

**Solution**:

**Encoding assumption.**
For a graph on n vertices, let A be its symmetric adjacency matrix.
The 1-D array w stores **only the upper triangle** of A in row-major order:
$$w = \big(A[0,1], A[0,2], \ldots, A[0,n-1], A[1,2], \ldots, A[1,n-1], \ldots, A[n-2,n-1]\big)$$
Thus |w| = n(n-1)/2.

**Index mapping (0-based vertices).**
For a pair (i,j) with 0 ≤ i < j ≤ n-1, its position k in w is
$$\boxed{k(i,j) = \frac{i(2n-i-1)}{2} + (j-i-1)}$$

* The first term counts how many entries come **before row i** in the upper triangle: 
  $(n-1) + (n-2) + \cdots + (n-i) = in - \frac{i(i+1)}{2} = \frac{i(2n-i-1)}{2}$
* The second term $(j-i-1)$ is the **offset inside row i** (since row i stores A[i,i+1], A[i,i+2], ...)

**Decision rule.**
The edge {i,j} is present **iff**
$$w\big[k(i,j)\big] = 1$$

**Example.**
n = 4 and w = [A₀₁, A₀₂, A₀₃, A₁₂, A₁₃, A₂₃].
For (i,j) = (1,3): k = (1(2·4-1-1))/2 + (3-1-1) = 6/2 + 1 = 4.
So {1,3} is present iff w[4] = 1.

---

### Exercise 3: Design a language for directed graph 

**Problem**: design a language for directed graph 

The language of directed graphs is defined as:
$$L_{\text{directed}} = \bigcup_{n \geq 0} \{0,1\}^{n(n-1)}$$

---
### Exercise 4: Design a language for sequences of fractions. 

**Problem**:  Design a language for sequences of fractions. A fraction is the quotient of two integers.  

a. Alphabet 

The alphabet for this would 

1. Digits: 0, 1, 2, ..., 9
2. Negative sign: - (for negative numbers)
3. Division operator: / (to separate numerator and denominator)
4. Sequence separator: , (to separate fractions in a sequence)

$$ \sum = \{0, 1, 2, 3, 4, 5, 6, 7, 8, 9, -, /, ,\} $$

language definition

$$ Language Definition:
$$

---


## Excercise pro tips 


## Adjacency Matrix Formula Derivation

### Step-by-Step Derivation of k(i,j)

We have an **n × n adjacency matrix**, but we only store the **upper triangle** (where j > i) as a 1D array w.
We need a formula to map a pair (i, j) → index k in w.

#### Triangular Pattern Analysis

For each row i:
- Row 0 contributes (n-1) entries: A[0][1], A[0][2], ..., A[0][n-1]
- Row 1 contributes (n-2) entries: A[1][2], A[1][3], ..., A[1][n-1]  
- Row 2 contributes (n-3) entries, etc.

So, before row i, there are already:
$$
(n-1) + (n-2) + \dots + (n-i)
$$
entries stored in w.

#### Arithmetic Series Simplification

That's an arithmetic series:
$$
(n-1) + (n-2) + \dots + (n-i) = i \cdot n - \frac{i(i+1)}{2}
$$

This gives the **number of elements that come before** row i in w.

#### Offset Within Row

In row i, the stored entries start at column j = i+1.
If you're looking for column j, the offset within that row is:
$$
(j - i - 1)
$$

Example: if i = 2 and j = 3, offset = 0 → first entry in that row's portion of w.

#### Final Formula

Combining both parts:
$$
k(i, j) = \underbrace{i n - \frac{i(i + 1)}{2}}_{\text{entries before row i}} + \underbrace{(j - i - 1)}_{\text{offset in row i}}
$$

Simplifying algebraically:
$$
k(i, j) = \frac{i(2n - i - 1)}{2} + (j - i - 1)
$$

#### Sanity Check (n = 4)

| (i, j) | k(i, j) | Explanation       |
|--------|---------|-------------------|
| (0,1)  | 0       | first entry       |
| (0,2)  | 1       | second entry      |
| (0,3)  | 2       | third entry       |
| (1,2)  | 3       | start of next row |
| (1,3)  | 4       | next entry        |
| (2,3)  | 5       | final entry       |

### Checking Graph Symmetry

#### Definition

For a matrix A (the adjacency matrix of a graph):
$$
A \text{ is symmetric if } A[i][j] = A[j][i] \text{ for all } i, j
$$

This means the matrix equals its **transpose**:
$$
A = A^T
$$

#### Conceptual Check

1. Take the transpose of the matrix
2. Compare it element-by-element with the original matrix  
3. If they are identical → the graph is **undirected**
   If any A[i][j] ≠ A[j][i] → the graph is **directed**

