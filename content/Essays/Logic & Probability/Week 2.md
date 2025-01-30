---
title: "W2: Completeness"
date: January 2025
---

Remark on Question 2.5: 'H' is after Hilbert. There's a trade-off between how many axioms and rules your system has (that is, how many nullary vs. non-nullary rules you have); H-style systems are those which push the trade-off much more towards axioms. Our system here is sort of the limit case, where all tautologies are axioms. This is decidable, but it's equivalent to the satisfiability problem (just taking negations), so it's not exactly practical.

Remark on Question 2.6: Some professional logicians have gotten this wrong in conversation, apparently! It's a very cute question. Unexplored area of logic: what rules can you add to a system of logic containing all tautologies as axioms to make the system complete?

## The Completeness Theorem for First-Order Logic

### Question 2.2

> Show that any complete consistent set of $\mathcal{L}_1$-sentences is a theory.

Consider the following definitions, for $\Gamma\subseteq\mathsf{Sent}_1$ and $\phi\in\mathsf{Sent}_1$.

- Completeness$_1$: for all $\phi$, $\Gamma\vdash\phi$ or $\Gamma\vdash\lnot\phi$.
- Completeness$_2$: for all $\phi$, $\phi\in\Gamma$ or $\lnot\phi\in\Gamma$.
- Inconsistency: for all $\phi$, $\Gamma\vdash\phi$.
- Theoryhood: for all $\phi$, if $\Gamma\vdash\phi$, then $\phi\in\Gamma$.

With Completeness$_1$, the claim doesn't follow. (Informally: consider a theory $\Gamma$ that proves and so contains $(P\land Q)$. Now, $\Gamma\setminus\{P\}$ is not a theory, but proves just those things that $\Gamma$ proves, and so in particular is consistent and complete$_1$.) Notice also that, for theories, completeness$_1$ is equivalent to completeness$_2$.

Assume that $\Gamma$ is complete$_2$ and consistent. Then, for any $\phi$ such that $\Gamma\vdash\phi$, either (i) $\phi\in\Gamma$ or (ii) $\lnot\phi\in\Gamma$. If (ii) $\lnot\phi\in\Gamma$, then $\Gamma\vdash\lnot\phi$, so $\Gamma$ is negation-inconsistent and so not consistent. So (i) $\phi\in\Gamma$. So complete$_2$ consistency implies theoryhood.

### Question 2.3
> Show that any maximal consistent set of $\mathcal{L}_1$-sentences is a complete theory.

Recall that $\Gamma$ is maximal consistent just in case $\Gamma$ is consistent, and for any $\phi\notin\Gamma$, $\Gamma\cup\{\phi\}$ is inconsistent. That is, if $\Gamma\cup\{\phi\}$ is consistent, then $\phi\in\Gamma$.

(Theory): As $\Gamma$ is consistent, $\Gamma\vdash\phi$ implies that $\Gamma\cup\{\phi\}$ is consistent, so (as $\Gamma$ is maximally consistent) $\phi\in\Gamma$. So maximal consistency implies theoryhood.

(Complete): Suppose $\Gamma$ is not complete. Then there is some $\phi$ such that $\Gamma\not\vdash\phi$ and $\Gamma\not\vdash\lnot\phi$. But then $\Gamma\cup\{\phi\}$ is consistent, so $\Gamma$ is not maximal consistent. So maximal consistency implies complete theoryhood.

### Question 2.4
> Prove one of the missing quantifier cases of Theorem 2.1.2. (Soundness of ND$_=$). (You may choose which one.)

For ($\forall$Elim), the proof $\pi$ has the structure $\pi_1\cdots\forall\textbf{v}\phi\ |\ \phi[\textbf{c}/\textbf{v}]$, with $\mathsf{As}(\pi)=\mathsf{As}(\pi_1)$. We have $\mathsf{As}(\pi)\vdash^\pi_n\phi[\textbf{c}/\textbf{v}]$. We fix an arbitrary $\mathcal{A}$ and assume $\mathcal{A}\vDash\chi$ for every $\chi\in\mathsf{As}(\pi)$; we need to show $\mathcal{A}\vDash\phi[\textbf{c}/\textbf{v}]$. We have $\mathsf{As}(\pi_1)\vdash^{\pi_1}_{<n}\forall\textbf{v}\phi$, so by the IH $\mathsf{As}(\pi_1)\vDash\forall\textbf{v}\phi$. Since $\mathsf{As}(\pi)=\mathsf{As}(\pi_1)$, $\mathcal{A}\vDash\forall\textbf{v}\phi$. That is, for any variable assignment $\alpha$, $\min\{|\phi|_\mathcal{A}^{\alpha[a/\textbf{v}]}:a\in D_\mathcal{A}\}=1$, so in particular $|\phi[\textbf{c}/\textbf{v}]|^\alpha_\mathcal{A}=|\phi|^{\alpha[\textbf{c}/\textbf{v}]}_\mathcal{A}=1$. So, $\mathcal{A}\vDash\phi[\textbf{c}/\textbf{v}].$

### Question 2.5
> Let H be the deduction system for $\mathcal{L}_1$ with the following rules:
>
> - (Assumption)
> - ($\to$ Elim)
>
> and the novel rule
> 
> - (Taut): where $\phi$ is an $\mathcal{L}_1$-tautology, a labelled tree consisting of a single node, labelled with the sentence $\phi$, constitutes a proof $\pi$ of $\phi$ of the form $$\phi$$ with $\mathsf{As}(\pi)=\varnothing$.
>
> Show that H is sound and complete for the semantics of $\mathcal{L}_1$. You may use the soundness and completeness of ND$_1$.

(Soundness): We want to show that if there is an H-proof $\pi$ such that $\Gamma\vdash^\pi\phi$ for $\phi\in\mathsf{Sent}$ and $\Gamma\subseteq\mathsf{Sent}$, then for any $\mathcal{L}_1$-structure $\mathcal{A}$: if $\mathcal{A}\vDash\Gamma$, then $\mathcal{A}\vDash\phi$.

We proceed by strong induction on length of proofs. If $\pi$ has length 1, then it consists of a single application of either (Assumption) or (Taut). In the first case, we have $\phi\in\Gamma$, and so by definition $\mathcal{A}\vDash\phi$ whenever $\mathcal{A}\vDash\Gamma$. In the second case, we have $\vDash\phi$, and so (a fortiori) $\mathcal{A}\vDash\phi$ whenever $\mathcal{A}\vDash\Gamma$.

Now assume (IH) that all H-proofs of less than length $k$ are sound. Then a length-$k$ proof is sound, as for $k>1$ the proof must consist of a terminal application of ($\to$Elim), which is a rule of ND$_1$ (which we know is sound). So by strong induction of length of proofs, H is sound.

(Completeness): We want to show that if $\Gamma\vDash\phi$ then $\Gamma\vdash_\text{H}\phi$. We have that if $\Gamma\vDash\phi$, then $\Gamma\vdash_{\text{ND}_1}\phi$, so it suffices to show that if $\Gamma\vdash_{\text{ND}_1}\phi$ then $\Gamma\vdash_\text{H}\phi$. Suppose that there is an ND$_1$-proof $\pi$ from $\Gamma$ to $\phi$, and so in particular from $\mathsf{As}(\pi)$ to $\phi$. We proceed by induction on number of assumptions. As $\pi$ must be finite, $\mathsf{As}(\pi)$ must have finite cardinality, say $n$. We number the assumptions of $\pi$ $a_1$, ..., $a_n$.

Base case: if $n=0$, then $\vDash\phi$, and so there is an H-proof of $\phi$ consisting of a single application of (Taut).

Induction: now assume (IH) that for any ND$_1$-proof of $\psi$ with $k$ assumptions, then there is an H-proof of $\psi$. Suppose there is a ND$_1$-proof $\pi$ of $\phi$ with $k+1$ assumptions. Applying ($\to$Intro), we can discharge $a_{k+1}$ to get a ND$_1$-proof $\rho$ from $\mathsf{As}(\pi)\setminus\{a_{k+1}\}$ to $(a_{k+1}\to\phi)$. So by (IH) there is an H-proof $\sigma$ from $\mathsf{As}(\pi)\setminus\{a_{k+1}\}$ to $(a_{k+1}\to\phi)$. Now, we may apply (Assumption) and ($\to$Elim) to get an H-proof of $\phi$ from $\mathsf{As}(\pi)$: $$(a_{k+1})\ (\sigma[\mathsf{As}(\pi)\setminus\{a_{k+1}\}]\cdots(a_{k+1}\to\phi))\ |\ \phi$$

### Question 2.7
> Suppose that, in system H, ($\to$Elim) were replaced with the following version of modus tollens:
>
> - (MT) Where $\pi_1$ is a proof of $\lnot\phi$ and $\pi_2$ is a proof of $\psi\to\phi$, the labelled tree $\pi$ with the following structure constitutes a proof of $\lnot\psi$: $$(\pi_1\cdots\lnot\phi)(\pi_2\cdots\psi\to\phi)\ |\ \lnot\psi$$ and $\mathsf{As}(\pi)=\mathsf{As}(\pi_1)\cup\mathsf{As}(\pi_2)$.
>
> Call this system H*. Is H* complete for the semantics of $\mathcal{L}_1$? If so, provide a proof. If not, explain why and suggest a new rule (other than ($\to$Elim)) that could be added to H* to restore completeness.

H* is not complete, because (MT) only proves sentences of the form $\lnot\psi$. So, for instance, it can't prove that $\lnot\lnot P\vDash P$. So, adding double-negation elimination or ($\lnot$Elim) would restore completeness.

### Question 2.8
> Let $\mathcal{L}_!$ be $\mathcal{L}_=$ enriched with a new quantifier $\exists!$, whose syntax is $\exists!\textbf{v}\phi$ and whose intended interpretation is 'there exists exactly one ...'. Provide precise semantic clauses for $\exists!$ and find introduction and elimination rules that could be added to ND$_=$ to generate a system ND$_!$ (with deducibility relation $\vdash_!$) for $\mathcal{L}_!$. Show that ND$_!$ is conservative over ND$_=$ in the following sense: where $\phi\in\mathsf{Sent}$ and $\Gamma\subseteq\mathsf{Sent}$, $\Gamma\vdash_!\phi$ only if $\Gamma\vdash\phi$ (according to the standard ND$_=$-derivability relation $\vdash$).

Informally: we treat $\exists!\textbf{v}\phi$ as abbreviating $\exists \textbf{u}\forall \textbf{w}(\phi[\textbf{w}/\textbf{v}]\leftrightarrow \textbf{w}=\textbf{u})$, where $\textbf{u}$ and $\textbf{w}$ are variables with no instances in $\phi$.

$|\exists! \textbf{v}\phi|_\mathcal{A}^\alpha=1$ just in case there's exactly one $\beta\overset{\textbf{v}}\sim\alpha$ such that $|\phi|^\beta_\mathcal{A}=1$.

($\exists!$Intro): Where $\rho$ is a proof of $\exists \textbf{u}\forall \textbf{w}(\phi[\textbf{w}/\textbf{v}]\leftrightarrow \textbf{w}=\textbf{u})$, with neither $\textbf{u}$ nor $\textbf{w}$ appearing in $\phi$, the labelled tree $\pi$ with the following structure constitutes a proof of $\exists!\textbf{v}\phi$: $\rho\cdots\exists \textbf{u}\forall \textbf{w}(\phi[\textbf{w}/\textbf{v}]\leftrightarrow \textbf{w}=\textbf{u})\ |\ \exists!\textbf{v}\phi$.

($\exists!$Elim): Where $\rho$ is a proof of $\exists!\textbf{v}\phi$, with neither $\textbf{u}$ nor $\textbf{w}$ appearing in $\phi$, the labelled tree $\pi$ with the following structure constitutes a proof of $\exists \textbf{u}\forall \textbf{w}(\phi[\textbf{w}/\textbf{v}]\leftrightarrow \textbf{w}=\textbf{u})$: $\rho\cdots\exists!\textbf{v}\phi\ |\ \exists \textbf{u}\forall \textbf{w}(\phi[\textbf{w}/\textbf{v}]\leftrightarrow \textbf{w}=\textbf{u})$.

To show that ND$_!$ is conservative over ND$_=$, it suffices to show that whenever a terminal application of ($\exists!$Elim) results in $\psi\in\mathsf{Sent}$ on assumptions $\Delta\subseteq\mathsf{Sent}$, then there is a ND$_=$ proof from $\Delta$ to $\psi$.

Notice that $\psi$ must have form $\exists \textbf{u}\forall \textbf{w}(\phi[\textbf{w}/\textbf{v}]\leftrightarrow \textbf{w}=\textbf{u})$, and the node immediately above $\psi$ must have form $\exists!\textbf{v}\phi$, with neither $\textbf{u}$ nor $\textbf{w}$ occurring in $\phi$, and with $\phi\in\mathsf{Sent}$. 

But as $\Delta\subseteq\mathsf{Sent}$, an examination of what the ND$_=$ rules can(not) produce shows that there must be some above application of ($\exists!$Intro) resulting in a node of the form $\exists!\textbf{v}\phi$.\footnote{Not necessarily the one immediately above the root node!} But then the node immediately above that one must have form $\exists \textbf{u}'\forall \textbf{w}'(\phi[\textbf{w}'/\textbf{v}]\leftrightarrow \textbf{w}'=\textbf{u}')$, with neither \textbf{u}' nor \textbf{w}' occurring in $\phi$. 

But clearly $\exists \textbf{u}'\forall \textbf{w}'(\phi[\textbf{w}'/\textbf{v}]\leftrightarrow \textbf{w}'=\textbf{u}')\vDash\exists \textbf{u}\forall \textbf{w}(\phi[\textbf{w}/\textbf{v}]\leftrightarrow \textbf{w}=\textbf{u})$; so by completeness of ND$_=$ there is a proof from the former to the latter, with which we may replace the intermediate steps in the ND$_!$-proof of the latter to obtain a ND$_=$-proof from assumptions $\Delta$ to $\psi$.
