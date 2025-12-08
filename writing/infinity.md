---
layout: default
title: "Infinity"
date: 2025-05-22
tag: "Frege (Week 4)"
---

# Infinity

> The following is a tutorial essay for Frege's _Grundlagen_ with Fabian Pregel. In effect, it is a quick agenda for an hour-long discussion on a guiding question, which for this week was ‘Elucidate Frege's account of the following terms: cardinal number; zero; successor (follows in the series of natural numbers directly after); natural number. Explain in detail how he uses these definitions to establish the infinity of the natural number sequence.’. A free-standing and much more readable version of some of the material may eventually go up on my [Substack](https://offhandquibbles.substack.com). 

## I. Frege's Definitions

### I.1 Cardinal number

On Frege's account, *n* is a (cardinal) number just in case there's a concept such that *n* is its number. Formally, we might write (allowing quantification into predicate position):

> 𝒞*n* ↔ ∃*F*(*n* = #*F*)

As Frege notes, this is non-circular because being the number of some concept *F* is separately defined as the extension of the concept of being equal to *F*, where equality between two concepts means the existence of a bijective map between their instances. That is, the extension of *F* is its equinumerosity class. Formally, we may write (assuming extensions to be sets, and allowing quantification into function position):

> #*F* = { *G* : ∃*ϕ*∀*x*∀*y*((*Fx* ∧ *Fy*) → (*Gϕx* ∧ *ϕy* ∧ (*ϕx* = *ϕy* ↔ *x* = *y*)))}

However, the above formalization is somewhat shaky. In particular, it isn't clear that extensions can work in the way set out; in standard theory ZFC of hereditary sets, we do not have a general comprehension principle that allows us to form such an arbitrary set. Presumably, for each set, there is the concept of being that set. But then there are too many concepts to form a class (or else we could, by replacement of each concept by the set instantiating it, obtain the set of all sets, and then apply comprehension to get the set of all sets that are not self-membered, which is self-membered just in case it is not self-membered, a contradiction), and so we cannot use the usual comprehension principle in the intended way (as it only applies to sets).

In ZFC, the strategy is instead to define the cardinality of some set as a particular representative from its equinumerosity class: in particular, the smallest ordinal in that class. If we make this substitution, then Frege's account delivers the result that all cardinal numbers are (Von Neumann) cardinals. But because we have not even established the infinity of the naturals yet, we definitely do not have the converse.

### I.2 Zero

Frege next proves from facts about bijections the lemma that the number of a concept is unique, which allows him to properly speak of *the* number of a concept. He then defines zero as the number of the concept of being not self-identical. Formally, we may write:

> 0 = #*λx*(*x* ≠ *x*) = { *λx*(*x* ≠ *x*) }

In writing the second identity, we assume that concepts are in some sense coarse-grained: more specifically, if some concepts are necessarily coextensive, then they are the same concept. Thus, the concept of being not self-identical, the concept of being a 36-sided Platonic solid, and the concept of belonging to the empty set are all the same concept. (It may help to recall that concepts for Frege are worldly properties, rather than subjective ideas.) Either way, we could list all these concepts on the right-hand side of the above, and if this assumption about the individuation of concepts is true, then the fact that repeatedly listed elements are redundant means that just writing '{ *λx*(*x* ≠ *x*) }' suffices.

If we make the substitution mentioned in the prior section—where the number of a concept is not its equinumerosity class, but rather the smallest ordinal in that class—then we instead have:

> 0 = #*λx*(*x* ≠ *x*) = { }

After all, the empty set is equinumerous with the concept of being not self-identical, and is the smallest ordinal (so must be the smallest such ordinal; more generally, though, no distinct finite ordinals are equinumerous).

### I.3 Successor

Frege goes on to define successor ('follows in the series of natural numbers directly after'). One natural number succeeds another if the former is the number of some concept with some instance such that the latter is the number of the concept of being a distinct instance of the original concept. Formally, we may write:

> 𝒮*mn* ↔ ∃*F*∃*x*(*Fx* ∧ (*n* = #*F*) ∧ (*m* = #*λy*(*Fy* ∧ *x* ≠ *y*)))

Note that this is well-defined even if the successor is not unique.

### I.4 Natural number

Frege then defines what it is for something to follow another in an inductive *ϕ*-series. Formally, we may write:

> *a* <<sub>*ϕ*</sub> *b* ↔ ∀*F*((∀*x*(*ϕax* → *Fx*) ∧ ∀*x*∀*y*(*Fx* → (*ϕxy* → *Fy*))) → *Fb*)

And, very naturally, to be a member of a *ϕ*-series beginning with *a* is to either be *a* or follow *a* in a *ϕ*-series. Now, to be a natural number is just to be a member of a successor-series beginning with 0:

> ℕ*n* ↔ (0 <<sub>𝒮</sub> *n* ∨ 0 = *n*)

Again, this is well-defined even if the successor is not unique.

## II. Establishing the infinity of the naturals

One way that Frege characterizes (countable) infinity is that the number of some concept is (countably) infinite just in case its instances can be put into bijection with the natural numbers. Of course, from this it follows immediately that the natural numbers are infinite, as the identity map on the natural numbers is such a bijection.

More substantively, though, Frege shows that infinity so defined as #ℕ is not a finite number. He does this by showing that no finite number is its own successor, but that infinity #ℕ is its own successor. From this, it follows that #ℕ cannot be a natural number (for, if it were, then it would both be and not be its own successor, a contradiction).

Here is a reconstruction of the argument that Frege sketches, given the definitions above.

### II.1 No finite number succeeds itself

First, we show that 0 does not succeed itself. Suppose for contradiction that it does. Then there is some concept with some instance such that 0 is the number of that concept (and the number of the concept of being a different instance of that concept). But if a concept has some instance, then its instances cannot be put into bijection with the concept of being not self-identical (which has no instances). So 0 cannot be the number of that concept. So 0 cannot be its own (or, indeed, any number's) successor.

Now, if *n* is a natural number, then either *n* is 0—in which case we are done—or *n* follows 0 in the successor series. In the latter case, consider the concept of not being one's own successor. We want to show that every successor of 0 instantiates this concept; and that, if something instantiates this concept, then each of its successors instantiates this concept. From this, it would follow that *n* instantiates this concept, and so we are done.

We first show that the number of the concept of being identical to 0—call it '1'—is a successor of 0. Th concept of being identical to 0 has an instance—namely, 0—and 1 is, by definition, the number of this concept. Further, there are no other instances of this concept. So the concept of being another instance of this concept can be trivially put into bijection with the concept of being not self-identical, so its number is 0. So, by definition, 1 succeeds 0.

Next, suppose that *x* succeeds zero. Then *x* is the number of some concept with an instance such that 0 is the number of the concept of being a different instance. So that instance is the only instance; we can map it to 0, and thus put this concept into bijection with (and so has the same equinumerosity class as) the concept of being identical to zero. So *x* is 1. That is, 1 is the unique successor of 0.

Now, we need to show that 1 does not succeed itself. To do this, we will prove the stronger claim (which we will need to prove anyway) that if some number does not succeed itself, then its successors do not succeed themselves. From this and the fact that 0 does not succeed itself, it follows that 1 does not succeed itself.

We prove the contrapositive. Suppose that *y* succeeds both *x* and itself. Then as *y* succeeds *x*, there is some concept whose number is *y* with some instance, such that *x* is the number of the concept of being a different instance. But, similarly, as *y* succeeds itself, it itself is the number of the same concept. So by the uniqueness of the number of a concept, *y* is *x*. As *y* succeeds itself, *x* succeeds itself too. So, we've shown that if *x* does not succeed itself, and *y* succeeds it, then *y* does not succeed itself.

So, we have proven what we needed to show that no natural number succeeds itself.

### II.2 The number of the naturals succeeds itself

We next show that the number of the natural numbers succeeds itself. Consider the concept of being a natural number, and the instance 0. We want to show that the number of the natural numbers is also the number of the concept of being a nonzero natural number. We construct a bijection between the naturals and the nonzero naturals. For this, we (finally) need the lemmas that the successor relation is one-to-one, and that every number has a successor.

Suppose that *y*<sub>1</sub> and *y*<sub>2</sub> succeed *x*. Then there is a concept *F*<sub>1</sub> whose number is *y*<sub>1</sub> with some instance such that *x* is the number of the concept of being a different instance, and another such concept *F*<sub>2</sub> whose number is *y*<sub>2</sub>. As the number of the nonspecial instances of *F*<sub>1</sub> and the number of nonspecial instances of *F*<sub>2</sub> are both *x*, these nonspecial instances can be bijected; and we can map the special instances to each other to biject *F*<sub>1</sub> and *F*<sub>2</sub>, showing that *y*<sub>1</sub> = *y*<sub>2</sub>. Now suppose *y* succeeds both *x*<sub>1</sub> and *x*<sub>2</sub>. Then there is some concept whose number is *y* with some instance such that the number of other instances is *x*<sub>1</sub>, but is also *x*<sub>2</sub> by the uniqueness of number, then, *x*<sub>1</sub> = *x*<sub>2</sub>. So the successor relation is one-to-one.

We prove by induction that every natural number has a successor. As we saw, 1 is the only successor of 0. We need to show that 1 has a successor. The proof is almost identical to the proof that 0 has a successor, except we consider the concept of being either 0 or 1. We also need to show that, if a natural number has a successor, then that successor also has a successor. Again, the proof is almost identical, except for that successor *k*, we consider the concept of being either 0, or 1, or ... or *k*; the number of this concept is a successor.

With these lemmas, we can construct the bijection needed from the naturals to the nonzero naturals by simply mapping each number in the naturals to its successor in the nonzero naturals. Thus, we have that the number of the naturals succeeds itself, and so is not a natural (that is, finite) number.

## References

* Frege, G. (1974). *The foundations of arithmetic: A logico-mathematical enquiry into the concept of number* (J. L. Austin, Ed.). Northwestern University Press.
