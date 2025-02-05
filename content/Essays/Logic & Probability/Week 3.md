---
title: "W3: Skolem's Paradox"
date: February 2025
---

These answers are quite terse, which I find aesthetically appealing.

## Compactness, the Löwenheim–Skolem Theorems, and Skolem’s ‘Paradox’

### Question 3.1

> Construct an $\mathcal{L}_=$-sentence $\phi$ such that, if $\mathcal{A}\vDash\phi$ and $\mathcal{A}$ is finite, then the cardinality of $\mathcal{A}$ is even.}

Let $\phi$ be $\exists x\exists y\forall z(y=z\leftrightarrow\lnot x=z)$, so $\mathcal{A}\vDash\phi$ just in case $\mathcal{A}$ has cardinality 2.

### Question 3.2

> In Exercise 1.2 we considered an $\mathcal{L}_=$-sentence that is true in only infinite structures. Show that there can be no $\mathcal{L}_=$-sentence that is true in \textit{all and only} infinite structures.

Suppose there is such a sentence $\phi$; then all and only finite structures are models of $\{\lnot\phi\}$, and so in particular $\{\lnot\phi\}$ has arbitrarily large finite models but no infinite model, which contradicts the following result.

### Question 3.3

> Prove that, if $\Gamma$ has arbitrarily large finite models, then $\Gamma$ has an infinite model.

Let $s_n$ be a sentence formalizing 'there are at least $n$ things': for instance, $s_4$ is $\exists x_1\exists x_2\exists x_3\exists x_4(x_1\neq x_2\land x_1\neq x_3\land x_1\neq x_4\land x_2\neq x_3\land x_2\neq x_4\land x_3\neq x_4)$. Let $S$ be the set of all $s_n$. Clearly, $S$ has only infinite models.

Every finite subset of $\Gamma\cup S$ is satisfiable by assumption, so by compactness $\Gamma\cup S$ is satisfiable, so there exist models of $\Gamma$ which are also models of $S$ and so are infinite.

### Question 3.5

> Show that, in any nonstandard model $\mathcal{A}$ of $\mathsf{TA}$ with standard part $\mathcal{B}$, there can be no $\mathcal{L}_A$-formula $\phi(x)$ such that, for one specific $d\in D_\mathcal{A}\setminus D_\mathcal{B}$, $\mathcal{A}\vDash\phi(x)[\![\alpha]\!]$ iff $\alpha(x)=d$.}

Let $\psi$ be $\exists y\forall x(x=y \leftrightarrow \phi(x))$. We have $\mathcal{A}\vDash\psi$, so $\mathsf{TA}\vdash\psi$, so $\mathcal{B}\vDash\psi$, so there's a unique $e$ such that $\mathcal{B}\vDash\phi(x)[\![\alpha]\!]$ iff $\alpha(x)=e$; but then $\mathcal{A}\vDash\phi(x)[\![\alpha]\!]$ when $\alpha(x)=e\in\mathcal{B}$, contradicting $d\in D_\mathcal{A}\setminus D_\mathcal{B}$.

### Question 3.7

> In §3.1, an argument was presented that English does not obey the analogue of the compactness theorem for $\mathcal{L}_=$. Is there an analogous argument that English does not obey the analogues of the downward and upward Lowenheim-Skolem theorems? If English lacks these Lowenheim-Skolem properties, then could it be the case that, for any infinite cardinal $\kappa$, there exists an English sentence which is true only on an interpretation where the quantifiers range over $\kappa$-many objects?

The sentence 'there are just countably many things' has countable but no uncountable models (contradicting upward LS), while the sentence 'there are just uncountably many things' has uncountable but not countable models (contradicting downward LS). The English sentence 'there are just $\kappa$ many things' is true just on an interpretation where the quantifiers range over $\kappa$ many things.
