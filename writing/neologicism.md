---
layout: default
title: "Neologicism"
date: 2025-05-29
tag: "Frege (Week 5)"
---

# Neologicism

> The following is a tutorial essay for Frege's _Grundlagen_ with Fabian Pregel. In effect, it is a quick agenda for an hour-long discussion on a guiding question, which for this week was ‘Can logicism be resurrected on the basis of Hume's Principle rather than Basic Law V?’. A free-standing and much more readable version of some of the material may eventually go up on my [Substack](https://offhandquibbles.substack.com).

## I. Introduction

Frege's *Grundlagen* argues for logicism about arithmetic: that "the laws of arithmetic are analytic judgements and consequently *a priori*" and so arithmetic is "simply a development of logic, and every proposition of arithmetic a law of logic" (§87).

For Frege, the question of some proposition's analyticity is "about the ultimate ground upon which rests the justification for holding it to be true", and in particular about whether it is possible "to give the proof without making use of truths which are not of a general logical nature" (§3). More generally, a proposition is *a priori* if "its proof can be derived exclusively from general laws, which themselves neither need nor admit of proof" (§3).

Frege is able to give an explicit definition of number which ultimately rests on the notion of extension {*x*:*Fx*}, as characterised by Basic Law V:

> ∀*X*∀*Y*({*x*:*Xx*}={*x*:*Yx*} ↔ ∀*x*(*Xx* ↔ *Yx*))

From this, he proves some axioms which uniquely and fully characterise arithmetic (are categorical). His background logic can even prove all the truths of arithmetic, which is of course the major problem for his system: it is inconsistent. Nevertheless, a categorical theory of arithmetic can be obtained by (adding to a suitable second-order logic) Hume's principle:

> #*F* = #*G* just in case the *F*s and the *G*s can be put into one-to-one correspondence.

The question, then, is whether Hume's principle suffices to make the laws of arithmetic analytic. I argue that it is not.

## II. Definitional analyticity

One worry which Frege considers for Hume's principle—and the reason he ultimately judges that it is insufficient on its own for his logicism—is that although it characterises the natural numbers up to isomorphism, it fails to fix what the natural numbers actually *are*. For instance, for all that Hume's principle says, Julius Caesar could be a number. One reply to this worry is that although the truths *about numbers* may not be settled by Hume's principle, the truths *of arithmetic* nevertheless may be. This is because arithmetic plausibly deals only with the algebraic relations between numbers, which are fixed by Hume's principle. That is, it is plausible that Hume's principle, although failing to settle what the numbers are, does enough still to settle all the truths of arithmetic, so that such truths might count as analytic. But this reply only succeeds if Hume's principle counts as a definition. It certainly is not an explicit definition; but does it succeed as an *implicit* definition?

Some neologicists do take Hume's principle to offer an implicit definition of number, being (fully) 'determinative' of the nature of numbers. By comparison, one might try to define conjunction by giving its introduction and elimination rules. But one cannot always safely define objects in this way. For instance, one could try to give an implicit definition of the 'tonk' operator as follows: if *A*, then *A* tonk *B*; and if *A* tonk *B*, then *B*. But such an introduction has the effect of trivialising one's entire language, since then any *B* follows from any *A*. An obvious solution then is that such implicit definitions must be conservative extensions of the language that one started with, not licensing any new judgements. At first glance, Hume's Principle seems to pass this test, unlike any inconsistent (or jointly inconsistent) abstraction principles.

But a worry is that talk of numbers on the left-hand side of Hume's principle cannot just be a convenient way of speaking; for Frege, the apparent singular term 'the number of *F*' must actually refer to some object. But, as we saw above, the implicit definition does not fix what object this is; indeed, some friends of implicit definitions require that implicit definitions provide a unique characterisation. When one is attempting to define objects, rather than operators (which might be identical if inferentially equivalent), it is hard to see how implicit definitions can provide such unique characterisation. Moreover, it is not clear that conservativeness over the old language is enough for one to be able to safely introduce objects; indeed, some inferentialists require that the implicit definition uniquely characterise what is defined. For instance, I can assert that there is a flumph just in case the Magdalen deer are in the water meadow, and there is a lumph just in case there is no flumph; and although this is conservative over the old language, it is not clear that one should believe in flumphs and lumphs. Of course, one could learn to say things like 'There are no flumphs right now, but will be later in the year, although I don't know exactly when!', and learn not to worry about the question of what exactly flumphs are; but this still does not seem like enough to ensure the existence of flumphs. If Hume's principle is acceptable, and should make us believe in numbers, it is hard to see why the flumph principle is not acceptable, and should not make us believe in flumphs. Of course, we may admit that the relations between flumphs and lumphs are, like the relationships between numbers, fixed by definition; but the specific objection here is that such definitions, even if they would provide for analytic truths, are just not acceptable in general.

## III. Epistemological analyticity

Another strategy that the neologicist may try to use to defend the analyticity of Hume's principle is by claiming that it is analytic in an epistemological sense broader than Frege's: namely, that anyone who understands the meanings of all the relevant words should assent to Hume's principle. But it's not clear that anything is truly analytic in this epistemological sense. For instance, the validity of the schema '*A* or not *A*' can be challenged, for instance by those who prefer constructive mathematics; by any normal standard, they are competent English speakers, despite their odd views about logic. Incidentally, if nothing is analytic, then certainly the truths of arithmetic are not analytic.

But with respect to Hume's principle in particular, it is fairly common to have doubts about how it applies to infinite numbers: many think that it is obviously false that the number of odd natural numbers is equal to the number of all natural numbers, as Hume's principle tells us. After all, equally valid for finite numbers is that if every *F* is a *G*, and not every *G* is an *F*, then the number of *F*s is not the number of *G*s (and, in particular, the number of *F*s is strictly less than the number of *G*s).

A related worry to the above is that one arithmetic truth is that there are infinitely many prime numbers. But then there are infinitely many distinct things. But how could this possibly be known *a priori* (which it must be, if it is analytic)? One might try to adapt the response to the Julius Caesar problem sketched above: the modal fact that there *could have been* infinitely many objects plausibly counts as analytic, and these possible objects may serve perfectly well as numbers. But this does not succeed: it is not just that there could have been infinitely many prime numbers, but that there *actually are* infinitely many! (And, of course, if the assumption that there are possibly infinitely many things guarantees that there are actually infinitely many things, as a principle of modal logic, then the former is no better a candidate for analyticity than the latter.)

### III.1 Incompleteness

Recall that Frege presupposes that the propositions in question have *proofs*: thus, his notion of proposition is closer to a mathematician's than a contemporary philosopher's. Minimally, then, the propositions in question must be truths of arithmetic. Are they *all* of the truths of arithmetic?

One might alternatively take Frege to be targeting exactly the *theorems* of arithmetic, that is, those than deductively follow in some (fixed) suitable logical system. After all, hasn't Frege assumed that they are provable? But plausibly, Frege's initial notion of proof is closer to a general notion of justification, rather than provability within some consistent formal system, for Frege also speaks of the proofs of synthetic propositions. The notion of a theorem is also slightly messy: we must fix the background logic and the axioms, for something may be a theorem of some axioms with some background logic but no longer a theorem if one changes the axioms or the background logic. Certainly on this interpretation the axioms cannot be anything whatsoever; for we can simply set the axioms to be the truths of arithmetic, or some inconsistent propositions, and we will have all the truths of arithmetic as theorems. Presumably, then, Frege would like to restrict the axioms to general logical ones. But restricting logicism to the theorems of arithmetic so defined has a trivialising effect: of course the truths of arithmetic that follow from logic alone follow from logic alone.

So, Frege's propositions are most plausibly taken to be *all the truths* of arithmetic. Unfortunately, if one can effectively list all of one's inference rules (with axioms considered to be nullary inference rules), and such rules are consistent, then one cannot prove all the truths of arithmetic; and certainly Frege's discussion of the proofs of propositions presupposes the former. That is, for any reasonable logical system, there are truths of arithmetic that it cannot prove. Indeed, shifting from Frege's inconsistent system involving Basic Law V to a reasonable second-order logic along with Hume's principle means that one loses the ability to prove all the truths of arithmetic (since the latter is consistent with effectively listable inference rules).

## IV. Conclusion

I have argued that attempts to rescue Frege's logicism by working with just Hume's principle fail. Although Frege's own reasons for rejecting this approach are weak, there are other fundamental worries. First, implicit definitions should at least define the objects uniquely; while this is plausible for operators and properties, it is less so for individual objects. More devastatingly, epistemological conceptions of analyticity are in general unpromising, and no reasonable logical system can prove all the truths of arithmetic—these latter considerations suggest that no attempt to rescue logicism can possibly succeed.

## References

* Frege, G. (1974). *The foundations of arithmetic: A logico-mathematical enquiry into the concept of number* (J. L. Austin, Ed.). Northwestern University Press.
* Wright, C., & Hale, B. (2001). *The reason's proper study: Essays towards a neo-fregean philosophy of mathematics* (C. Wright, Ed.). Clarendon Press.
