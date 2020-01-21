---
Layout:
Title: Backtracking algorithms
Date: 2020-01-21
categories:
---

### Backtracking Algorithms

Backtracking is an algorithmic-technique for solving problems recursively by trying to build a solution incrementally, one piece at a time, removing those solutions that fail to satisfy the constraints of the problem at any point of time (by time, here, is referred to the time elapsed till reaching any level of the search tree).

For example, consider the SudoKo solving Problem, we try filling digits one by one. Whenever we find that current digit cannot lead to a solution, we remove it (backtrack) and try next digit. This is better than naive approach (generating all possible combinations of digits and then trying every combination one by one) as it drops a set of permutations whenever it backtracks.


### Monte Carlo Methods
Monte Carlo (MC) methods are a subset of computational algorithms that use the process of repeated random sampling to make numerical estimations of unknown parameters. They allow for the modeling of complex situations where many random variables are involved, and assessing the impact of risk.


### Major Components of a Monte Carlo Algorithm
Probability distribution functions (pdf's) --- the physical (or mathematical) system must be described by a set of pdf's.
Random number generator --- a source of random numbers uniformly distributed on the unit interval must be available.
Sampling rule --- a prescription for sampling from the specified pdf's, assuming the availability of random numbers on the unit interval, must be given.
Scoring (or tallying) --- the outcomes must be accumulated into overall tallies or scores for the quantities of interest.
Error estimation --- an estimate of the statistical error (variance) as a function of the number of trials and other quantities must be determined.
Variance reduction techniques --- methods for reducing the variance in the estimated solution to reduce the computational time for Monte Carlo simulation
Parallelization and vectorization --- algorithms to allow Monte Carlo methods to be implemented efficiently on advanced computer architectures.