---
layout: default
title: "Arithmetic Empiricism"
date: 2025-05-01
tag: "Frege (Week 1)"
---

# Arithmetic Empiricism

> The following is a tutorial essay for the Frege paper. In effect, it is a quick agenda for an hour-long discussion on a guiding question, which for this week was ‘Expound Frege's objections to Mill. Do they stand up against more sophisticated empiricist accounts of arithmetic?’. A free-standing and much more readable version of some of the material may eventually go up on my [Substack](https://offhandquibbles.substack.com).

## I. Introduction

Arithmetic empiricism is the epistemological claim that, roughly, experience is required for knowledge of propositions under arithmetic guises. As Mill (1882: II.VI.2) writes:

> The Science of Number is thus no exception to the conclusion...that the processes even of deductive sciences are altogether inductive, and that their first principles are generalizations from experience.

Mill argues for arithmetic empiricism via the semantic claim that arithmetic statements have empirical content, "asserting not the meaning of a term only, but along with it an observed matter of fact" (ibid). In particular (III.XXIV.5):

> Every arithmetic proposition...affirms that a certain aggregate might have been formed by putting together certain other aggregates, or by withdrawing certain portions of some aggregate; and that, by consequence, we might reproduce those aggregates from it, by reversing the process.

Granted that knowledge of statements with empirical content depends on experience, arithmetic empiricism follows.

§II explains and evaluates Frege's objections to Mill. §III motivates arithmetic empiricism without appealing to Mill's semantic claim, sidestepping Frege's effective objections to Mill.

## II. Frege's objections

### II.1 The necessity and generality of arithmetic

First, I cover two of Frege's (1884) objections—the first about the necessity of arithmetic, and the second about the generality of arithmetic—that seem to be based on rather uncharitable (mis)readings of Mill. These objections, then, fail to stand up against Mill's own views. However, a weakened version of the first objection does pose a genuine challenge for Mill's account.

In §7, Frege begins by objecting that Mill's account makes arithmetic contingent, and in particular contingent on seemingly unrelated conditions: if "everything in the world" were "nailed down", then "2 + 1 would not be 3". Our quite general capacity to judge what would happen under imagined possibilities tells us that, were everything in the world nailed down, 2 + 1 would still be 3. Given that everything in the world being nailed down is a (remote) possibility, these two verdicts jointly imply that it is equally possible for 2 + 1 to not be 3 while still being 3; but such a contradiction is outright impossible. To avoid granting the possibility of such a contradiction, Mill must deny one of the counterfactual judgments, or deny the possibility of everything in the world being nailed down.{% include sidenote.html content = "This may seem like a rather circuitous presentation of Frege's objection: why not just say that the counterfactual attributed to Mill's theory is clearly false? The problem is that this quicker version is sometimes fallacious, for instance when dealing with impossible antecedents. It seems unlikely that we can directly evaluate the wide-scope negation of such a conditional; our judgment that the conditional is false comes via our acceptance of its narrow-scope negation. See Williamson 2020." %}

On more charitable readings of Mill, however, he may plausibly deny the problematic counterfactual judgment that Frege ascribes to him. Firstly, Mill may only require that the relevant physical manipulations be possible in principle. That is, we may read Mill's ‘might’ as expressing a sufficiently broad modality—for instance, metaphysical possibility rather than immediate practical possibility—such that, even if everything were nailed down, it would still be that they might not have been nailed down, and in particular might be physically manipulated in the relevant way. Secondly, Mill plausibly intends the relevant putting together or withdrawing of objects not physical manipulations but mental operations in the imagination, changing only the "impressions on our senses" (II.VI.2; compare Kitcher 1980, Shapiro 2000). On both of these readings, Mill's account delivers the correct verdict that 2 + 1 would still be 3 if everything in the world were nailed down, rather than the incorrect verdict Frege ascribes to Mill's view.

This still leaves a weaker version of the objection, which targets Mill's position (II.V.1) that arithmetic is contingent. In particular, it still seems absurd that 2 + 1 not being 3 is a genuine possibility at all, even if nailing everything down is insufficient to realize the possibility. However, at least on Shapiro's (2000) reading, Mill does provide the beginnings of an error theory for the judgment that arithmetic is necessary: namely, that "early and constant experience" (II.VI.2) of arithmetic facts makes us unable to imagine their falsity. However, without more detail, such a plea looks rather _ad hoc_ and liable to overgenerate—why not think this also applies to the our judgments that contradictions are impossible? Moreover, the judgment that arithmetic is necessary seems harder to diagnose as a mere failure of imagination if derived in a more principled theoretical way—say, from Frege's own logicism. That Mill's account conflicts with the necessity of arithmetic is a genuine problem for it.

Frege also objects that, on Mill's view, "it is really incorrect to speak of three strokes when the clock strikes three" (§7). That is, Mill's account covers only a narrow slice of arithmetic's very general domain of applicability. But Frege seems here to be generalizing insufficiently from Mill's claim that for some objects to be such that there are three of them requires that they "impress the senses thus, . . ." (II.VI.2). Mill's own usages of numerical terms ("ten sounds, or ten beatings of the pulse", ibid) and explicit claims ("all things are numerable", II.IV.7) suggest that the proper interpretation of ‘thus, . . .’ is broad enough to include one's "sensations of taste" or "methods of solving an equation" (§7). So, Frege's objection about the generality of arithmetic seems also to fail without a rather uncharitable reading of Mill.

### II.2 Missing facts

Frege also objects (§7-§8): if, as Mill claims, every arithmetic statement "covertly asserts a matter of fact" (I.VII.5), then where are those facts? Here are three more specific versions of the objection.

> What a pity that Mill did not also illustrate the physical facts underlying the numbers 0 and 1...no one, I take it, has ever seen or touched 0 pebbles.

It is hard to see a problem for 0 or 1 if Mill's aggregates are interpreted as fusions or sets, which can be empty. But, plausibly (we might say on Frege's behalf), aggregates should not be interpreted as fusions: there are many more than two distinct one-liter volumes of water in the fusion of two liters of water. Interpreting them as sets, meanwhile, seems ontologically profligate: in claiming that there are two liters of water, I seem to be committing just to there being those two liters, rather than there being an abstract object with just those two liters as members. For Mill in particular, who holds that "there are no such thing as numbers in the abstract" (II.VI.2), it may be difficult to accept that there are sets. In particular, among the pure sets are the finite ordinals, which are a decent candidate for being natural numbers in the abstract. The remaining candidate, then, is perhaps the most natural one: interpreting Mill's aggregates as pluralities. But pluralities plausibly cannot be empty (if there are some things, then there is something which is one of those things). So, Mill's account faces trouble with the number zero, if there are no aggregates of zero things.

> But at what point then, in the proof given above of the proposition 2 + 2 = 4, ought Leibniz to have appealed to the fact in question?

Frege objects that we should expect the facts that Mill posits to play a role in proofs. Given that there seems to be no such role for them to play, we should be surprised if there are such facts. But Mill seems perfectly clear that in place of Leibniz's definitions (for instance, "3 is 2 and 1"), he expects "the enunciation of the [relevant] physical fact [to] serve also" (II.VI.2).

> If the definition of each individual number did really assert a special physical fact, then we should never be able sufficiently to admire, for his knowledge of nature, a man who calculates with nine-figure numbers. Meantime, perhaps Mill does not mean to go so far as to maintain that all these facts would have to be observed severally, but thinks it would be enough if we had derived through induction a general law in which they were all included together. But try to formulate this law, and it will be found impossible.

Frege sets up a dilemma for Mill: on the one hand, perhaps knowledge of an arithmetic statement requires observing the empirical fact it covertly asserts. But this seems exactly backwards from reasonable epistemic practice. As Shapiro (2000) writes, "it seems absurd even to attempt this experiment to confirm arithmetic sums. We know what the correct sum is before we start the experiment. We might use the results to determine the competence of the subjects in adding and counting." On the other hand, perhaps the empirical facts can be known without being individually observed. But a generalization seems insufficient for Mill's purposes, and enumerative induction on numbers seems unreliable.

### II.3 Enumerative induction

> The procedure of the sciences, with its objective standards, will at times find a high probability established by a single confirmatory instance, while at others it will dismiss a thousand as almost worthless... Induction must base itself on the theory of probability, since it can never render a proposition more than probable. But how probability theory could possibly be developed without presupposing arithmetic laws is beyond comprehension.

Simple enumerative induction is not generally reliable, and in particular is unreliable on the numbers. For instance, suppose that *n* instances are sufficient for confirmation. One then may "confirm" that every natural is less than *n* + 5, even though being less than *n* + 5 is false of all but finitely many naturals (in some sense, almost all of them). More generally, we may cook up scenarios where, depending on our prior knowledge, observing many and only instances of *F*s which are *G*s should decrease our confidence in all *F*s being *G*s. (A cheap one: observing ten visible fairies should decrease one's confidence that all fairies are visible, since if there are no fairies then, vacuously, all fairies are visible; but if one sees fairies, it is incredibly unlikely that one sees all of them.) So, enumerative induction is not reliable enough to enable "generalizations from experience" with numbers.

Frege suggests that a theory of ampliative inference should be probabilistic (and so rely on arithmetic). While this may enable generalizations from experience, Frege seems to think that it would be circular to apply this to arithmetic. But this conclusion does not follow. In particular, the probabilistic theory of ampliative inference may provide the external standards of rationality that one need not explicitly cite in order to act in compliance with. (A mouse might learn about its environment in a probabilistically appropriate way, without the ability to understand probability theory.) So, generalizations about arithmetic may be justified on these inductive grounds, in a non-circular way.

Nevertheless, insofar as there is no clear way for Mill to formulate such generalizations, the dilemma Frege sets—along with the objections from the necessity of arithmetic and the trouble with zero—is a pressing issue for Mill's views about the semantics of arithmetic statements, and so for his arithmetic empiricism as a whole.

## III. Arithmetic empiricism without Mill's semantic claim

As background, now, I assume that Mill's semantic claim—that arithmetic statements "affirm that a certain aggregate might have been formed by putting together certain other aggregates"—is false. More strongly, I assume contra Mill that arithmetic facts are necessary truths. From this position, I argue that, still, experience is required for knowledge of propositions under arithmetic guises. This defense of arithmetic empiricism therefore avoids—and can even endorse—Frege's effective objections to Mill.

How can knowledge of a necessary truth—something which is true no matter how the world is—depend on experience in some interesting way? One might worry, with Frege (§8), that experience is only required in some cheap way, such that the resulting view should not count as arithmetic empiricism.

> If we call a proposition empirical on the grounds that we must have made observations in order to have become conscious of its content, then we are not using the word "empirical" in the sense in which it is opposed to "a priori".

Ironically, it is Frege puzzles that provide us a clear example of how this may work. Let ‘Hesperus’ be a (rigid) name for the evening star, and ‘Phosphorus’ a (rigid) name for the morning star. As it turns out, Hesperus = Phosphorus: both the morning star and the evening star are the planet Venus (so ‘Hesperus’ and ‘Phosphorus’ are synonymous, as rigid names for Venus). By the necessity of identity, it is necessary that Hesperus = Phosphorus. Nevertheless, it took empirical investigation to discover that Hesperus = Phosphorus (at least under that particular guise). I want to suggest that something similar holds of propositions under arithmetic (and more generally, mathematical) guises.

Note that the empirical investigation was not metalinguistic; although experience was required to learn the meanings of ‘Hesperus’ and ‘Phosphorus’, and so the meaning of the sentence ‘Hesperus = Phosphorus’, this was not the experience needed to learn that Hesperus = Phosphorus (under that guise). An ancient astronomer could learn what ‘Hesperus = Phosphorus’ means while still having no idea about its truth-value. Thus, we are not subject to Frege's worry above. (Incidentally, one may also learn that some statement is true—say, via testimony—while having no idea what it means.)

With preliminaries aside, here is the simple consideration which suggests that arithmetic knowledge depends on experience. Consider a multiplication problem sufficiently tedious that the limits of human working memory make it impossible for any actual human to calculate in their head. One may still come to know the answer by calculating with pen and paper. Paradigmatically _a posteriori_ observations—"the numeral ‘5’ is written here"—are crucial parts of this calculation process. The written symbols are not at all incidental to one's knowledge, as Williamson (2024) notes:

> If you had just gone through a written proof, making painstaking checks, and then were told that you had been hallucinating half the time, you would be in no position to say ‘It doesn't matter, I still have a valid proof’.

You would not know whether all the individual steps fitted together properly into a proof of the conclusion.

The gold standard for arithmetic knowledge—namely, checking with a calculator—is even more paradigmatically _a posteriori_: one learns that this or that is the answer to the multiplication problem by observing the output of the calculator, in a way just like a laboratory scientist reading a measurement off of a digital sensor.

Of course, one can easily recall facts like 2 + 2 = 4, but such activity is clearly recall, and so dependent on the initial learning. This is no more independent from experience than recalling a clearly empirical fact, like the fact that birds lay eggs. Similarly, one can perform some easy calculations mentally. But such internalized abilities depend on earlier experience just as much as the ability to simulate an attempt to leap across a stream and so come to know that you would fall in.

## IV. Conclusion

Mill defends arithmetic empiricism via a semantic claim about arithmetic statements. Some of Frege's objections rely on uncharitable readings (taking Mill's physical metaphors too literally and modal talk too narrowly; generalizing insufficiently from "."; and or missing what Mill recommends for Leibniz's proof) or implausible epistemological assumptions (that norms of probabilistic reasoning demand explicit acceptance rather than mere compliance). However, some of Frege's objections (from the necessity of arithmetic; from the difficulty with zero; and from the difficulty of formulating adequate generalizations) do present trouble for Mill's view, and in particular his semantic claim. However, we can defend arithmetic empiricism directly, while denying Mill's semantic claim, and thus sidestep the troubling objections.

## References

* Frege, G. (1974). *The foundations of arithmetic: A logico-mathematical enquiry into the concept of number* (J. L. Austin, Ed.). Northwestern University Press.
* Kitcher, P. (1980). Arithmetic for the millian. *Philosophical Studies*, 37(3), 215-236. https://doi.org/10.1007/bf00372444
* Mill, J. S. (1843). *A system of logic, ratiocinative and inductive* (J. Robson, Ed.). University of Toronto Press.
* Shapiro, S. (2000). *Thinking about mathematics: The philosophy of mathematics*. Oxford University Press.
* Williamson, T. (2020). *Suppose and tell: The semantics and heuristics of conditionals*. Oxford University Press.
* Williamson, T. (2024). Is the a priori/a posteriori distinction superficial? In B. Roeber, E. Sosa, M. Steup, & J. Turri (Eds.), *Contemporary debates in epistemology* (3rd ed.). Wiley-Blackwell.
