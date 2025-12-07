---
layout: default
title: "Definite Descriptions"
date: 2025-10-21
tag: "Philosophy of Language (Week 2)"
---

# Definite Descriptions

> The following is a tutorial essay for Philosophy of Logic and Language with James Kirkpatrick. In effect, it is a quick agenda for an hour-long discussion on a guiding question, which for this week was ‘What is the strongest argument for/against Russell’s theory of definite descriptions?’.

## I. Russell’s (1905) Theory of (Singular) Definite Descriptions

A _definite description_ is a determiner phrase whose head is a definite article. Determiners include quantifiers like ‘some’ and ‘every’, and demonstratives like ‘that’ and ‘those’. In English, the definite article is ‘the’.

On Russell’s theory of definite descriptions, the following are equivalent:

> (1)
>
> a. The _φ_ is _ψ_.
>
> b. _ψ_(ι*x* _φx_)
>
> c. ∃*x*∀*y*((*x* = *y* ↔ _φy_) ∧ _ψx_)
>
> d. There is exactly one _φ_ and it is _ψ_.

The English definite description (1a) is paraphrased into a formal language as (1b), with the ‘ι’ operator stipulated to behave so that (1b) is equivalent to (1c), which has (1d) as an English paraphrase. Note that ‘(ι*x* _φx_)’ is a definite description in the formal language; it is equivalent to ‘the _φ_’ in English.

Of course, the quantifiers explicit in (1c) are typically restricted by context. For instance, we want (2) to come out true in ordinary cases where, unrestrictedly speaking, there is more than one pen.

> (2) The pen is blue.

However, so long as there is exactly one pen which is contextually salient, (2) may come out true, because the quantifiers explicit in (1c) range over only contextually salient individuals.

Russell’s theory may be investigated descriptively for English, but also prescriptively for formal languages.{% include sidenote.html content = "See for instance [Hamkins 2024](https://jdh.hamkins.org/wp-content/uploads/Failing-definite-descriptions.pdf)." %} In particular, how should we understand formal definite descriptions ‘(ι*x* _φx_)’? Here are two options. In each case, definite descriptions denote individuals, just like individual constants and variables do: they may be substituted for any ‘*t*’ in meta-language schemas to yield object-language formulae.

Firstly, we can build out a _strong semantics_ for ι-expressions by holding that an atomic formula of the form ‘_P_<sup>n</sup>*t*<sub>1</sub>...*t*<sub>n</sub>’ is true just in case, for every *t*<sub>i</sub> of the form ‘(ι*x* _ψx_)’, it is true that there is exactly one _ψ_—formally, ∃*x*∀*y*(*x* = *y* ↔ _ψy_)—and _P_ applies to *t*<sub>1</sub>...*t*<sub>n</sub> in the usual way. Or, put more simply, an atomic formula is true just in case all its definite descriptions successfully refer and the property picked out by its predicate applies to the individuals picked out by its individual terms. In a slogan: an atomic formula is _false_ if it suffers from a reference failure. Then, the truth values of other formulae are determined in the usual compositional way. Note that this semantics for ι-expressions aligns with Russell’s theory of definite descriptions.

Alternatively, we can build out a _weak semantics_ for ι-expressions by adding a third truth-value, for _meaningless_ sentences. We hold that atomic formula of the form ‘_P_<sup>n</sup>*t*<sub>1</sub>...*t*<sub>n</sub>’ is meaningless just in case, for some *t*<sub>i</sub> of the form ‘(ι*x* _ψx_)’ there is not exactly one _ψ_—formally, ¬∃*x*∀*y*(*x* = *y* ↔ _ψy_). If a sentence is not meaningless, it is true or false in the usual way (that is, true if _P_ applies to *t*<sub>1</sub>...*t*<sub>n</sub> and false otherwise). In a slogan: an atomic formula is _meaningless_ if it suffers from a reference failure. Then, the truth values of other formulae are determined in the usual compositional way. But if a formula has any meaningless component, then it is itself meaningless.{% include sidenote.html content = "Alternatively, some sentences with meaningless components may nevertheless be meaningful (as with familiar trivalent logics: for instance, ‘*φ* ∧ *ψ*’ is false if either *φ* or *ψ* is false, and ‘*φ* ∨ *ψ*’ is true if either *φ* or *ψ* is true)." %} This semantics for ι-expressions aligns with Frege’s theory of definite descriptions, on which such expressions introduce presuppositions about existence and uniqueness, whose failure renders the expression (and any sentence containing it) meaningless.

Thus, there are two questions we can ask about Russell’s theory. First, does it apply to natural languages like English? Second, should it apply to our constructed formal languages? In asking these questions, the main point of comparison with Russell’s theory will be the Fregean theory of definite descriptions, which also applies simply to both natural and formal languages.

## II. The Best Argument for Russell’s Theory

The best argument for Russell’s theory is that it is both simple and empirically adequate when supplemented with pragmatic considerations (compare the partial defense in Kripke 1977). In particular, as the preceding discussion brings out, it is able to resist the positing of truth-value gaps. This is a massive theoretical advantage, which is undercut only if we have good independent reason to posit such gaps. In formal languages, we often have no good independent reason to posit such gaps; as such, without massively revising the logic, Russell’s theory is the best to implement for formal languages.

Implementing Russell’s theory forces us to be less sloppy with our logic. For instance, consider ‘∀*x*(*x*=*x*)’, which asserts that everything is self-identical. We cannot blindly instantiate this sentence with a definite description, since if reference fails then ‘(ι*x* _ψx_) = (ι*x* _ψx_)’ is false. That is, on the Russellian theory, the English sentence (3) should be false, given that there is no present king of France.

> (3) # The present king of France is the present king of France.

Indeed, this prediction is borne out; (3) sounds false. But, even in natural language, this is no problem for the fact that everything is self-identical. It also forces us to distinguish between being odd (*n* is odd just in case there is an *m* such that *n* = 2*m* + 1) and not being even (*n* is even just in case there is an *m* such that *n* = 2*m*). Under these definitions, it is false that the greatest prime number is odd, but true that the greatest prime number is not even. Indeed, to my ear, (4) sounds okay: it might even feature in a(n unusual) proof of the non-existence of a greatest prime.

> (4) The greatest prime number is not even, because the only even prime is 2, and there are primes (for instance, 3) that are greater than 2. [...] Therefore, there is no greatest prime number.

The fact that such features of Russell’s theory seem to correspond to English is a good sign.

However, presupposition failures might be an independent reason to posit truth-value gaps in natural languages. Presuppositions are retained under negation. For instance, (5a) entails that it is raining, but (5b) also implies that it is raining.

> (5)
>
> a. Sam knows that it is raining.
>
> b. Sam does not know that it is raining.

What happens if it is not raining? Then (5a) cannot be true. If there are no truth-value gaps, then (5a) is false, and so its negation (5b) is true. But the problem is that (5b) also does not sound true. The natural solution, then, may appear to be positing a truth-value gap: any sentence with a false presupposition is neither true nor false. It is worth multiplying examples. Both (6a) and its negation (6b) imply that Ann smoked; but if Ann has never smoked, then (6a) is false and (6b) also does not sound true.

> (6)
>
> a. Ann has stopped smoking.
>
> b. Ann has not stopped smoking.

Both (7a) and its negation (7b) imply that Ben has been to New York; but if he has never been to New York, then (7a) is false and (7b) also does not sound true.

> (7)
>
> a. Ben returned to New York.
>
> b. Ben did not return to New York.

Both (8a) and its negation (8b) imply that Cora has a car; but if she doesn’t, then (8a) is false and (8b) also does not sound true.

> (8)
>
> a. Cora’s car is red.
>
> b. Cora’s car is not red.

Both (9a) and its negation (9b) imply that someone found the solution; but if nobody has, then (9a) is false and (9b) also does not sound true.

> (9)
>
> a. It was Daniel who solved the problem.
>
> b. It was not Daniel who solved the problem.

Both (10a) and its negation (10b) imply that Eve arrived; but if she hasn’t, then (10a) is false and (10b) also does not sound true.

> (10)
>
> a. Eve ate dinner before she arrived.
>
> b. Eve did not eat dinner before she arrived.

However, this appearance is misleading. The badness of each negation may be merely pragmatic: for when the falsity of the presupposition is explicitly clarified, each negation is understandable (and very well might be true). One can truly assert that Sam does not know that it is raining, but only because it is not raining. Similarly:

> (11)
>
> a. Ann has not stopped smoking (but only) because she never started.
>
> b. Ben did not (technically) return to New York (but only) because it was his first time visiting.
>
> c. Cora’s car is not red (but only) because she doesn’t have one.
>
> d. It was not Daniel who solved the problem—nobody has solved it!
>
> e. Eve did not eat dinner before she arrived—she never arrived!

Similarly, consider a continuation of the famous sentence.

> (12) The king of France is not bald, but only because there is no king of France. Since all present monarchs are bald—I guess it’s fashionable?—the king of France would be bald if France had a king.

So, we have no reason—certainly, presupposition failures generally do not seem to provide a reason—to posit truth-value gaps. This is a very strong defense of Russell’s theory of definite descriptions, because it undercuts a principle objection to the theory, which itself (if successful) would have undercut a principle advantage of Russell’s theory. Those of us hostile to trivalent logics for formal languages may therefore retain our hostility to trivalent logics in the case of natural languages.

There is one wrinkle in the preceding discussion: some assertions have no natural (wide-scope) negations. For instance, the most natural way to deny (13a) is to assert (13b).

> (13)
>
> a. Frank would be a despot if he were king of France.
>
> b. Frank would not be a despot if he were king of France.
>
> c. It’s not the case that Frank would (only) be a despot if he were king of France: he is king of France, and he is a despot!

(13a) presupposes that Frank is not king of France; so does (13b). But (13b) is not really the (wide-scope) negation of (13a). Further, (13a) does not strictly entail this presupposition, as the needed ‘only’ in (13c) shows. It remains, of course, to be shown that a pragmatic story can be told for the badness of the negations out of the blue, without the clarifying continuations in (11).

## III. The Best Argument Against Russell’s Theory

However, there is an interesting (and related) argument against Russell’s theory: in particular, when embedded under ‘whether’, a definite description suggests a contrast with its narrow-scope negation, while its Russellian paraphrase suggests a contrast with its wide-scope negation (Elbourne 2013).

> (14)
>
> a. I do not know whether there is a ghost in my attic.
>
> b. I do not know whether there is exactly one ghost in my attic and it is being noisy.
>
> c. I do not know whether the ghost in my attic is being noisy.

Observe that, typically, although (14a) and (14b) can be consistently asserted together, (14a) and (14c) cannot. In particular, (14c) seems to presuppose that there is a ghost in the speaker’s attic, but in (14a) the speaker claims not to know whether this presupposition is true. This suggests that the embedded sentence with a definite description (15a) behaves differently from its Russellian paraphrase (15b).

> (15)
>
> a. The ghost in my attic is being noisy.
>
> b. There is exactly one ghost in my attic and it is being noisy.

In particular, one can assert that one does not know whether (15b) but not that one does not know whether (15a) while maintaining (14a).

But, as alluded to above, I think this argument can be dealt with pragmatically: the implied contrasts need to be made explicit.

> (16)
>
> a. I do not know whether the ghost in my attic is being noisy, or it being quiet.
>
> b. I do not know whether there is exactly one ghost in my attic and it is being noisy, or it is being quiet.
>
> c. I do not know whether the ghost in my attic is being noisy, or there is no ghost in my attic and something else is making the noise.
>
> d. I do not know whether there is exactly one ghost in my attic and it is being noisy, or there is no ghost in my attic and something else is making the noise.

Both (16a) and (16b) behave like (14c), and both (16c) and (16d) behave like (14b). This suggests that the effect is only due to a natural contrast when the alternative to ‘whether _p_ (or _q_)’ is left unspecified. Typically, _q_ is taken to be the negation of _p_; but we have seen that, pragmatically, the natural “negation” of definite descriptions is actually narrow-scope, but the negation of Russellian paraphrases is a true wide-scope negation.

So, even the apparently strongest argument against Russellianism about definite descriptions seems not to fail. The main challenge, however, then becomes whether the Russellian can field an adequate pragmatic account of why definite descriptions but not their Russellian paraphrases tend to suggest narrow-scope negations. This will likely involve some appeal to presupposition, but—like the cases in (11)—be such that the truth (and falsity) conditions of assertions containing definite descriptions are technically given as by Russell’s theory.
