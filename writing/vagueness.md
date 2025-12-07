---
layout: default
title: "Vagueness"
date: 2025-11-25
tag: "Philosophy of Language (Week 7)"
---

# Vagueness

> The following is a tutorial essay for Philosophy of Logic and Language with James Kirkpatrick. In effect, it is a quick agenda for an hour-long discussion on a guiding question, which for this week was ‘What is the Sorites Paradox? What is the best solution to it?’. A free-standing and much more readable version of some of the material may eventually go up on my [Substack](https://offhandquibbles.substack.com).

The Sorites (‘heap’) paradox can be regimented as the following inconsistent set.

> (1)
>
> a. One grain cannot form a heap.
>
> b. For all natural *n*, if *n* grains cannot form a heap, then *n* + 1 grains cannot.
>
> c. Ten thousand grains can form a heap.

The best solution to the Sorites paradox will not turn on any very specific property of grains or heaps; for the paradox can be generalised.

> (2)
>
> a. *a* is *F*.
>
> b. For any *x* and *y*, if *x* and *y* are close, and *x* is *F*, then *y* is *F*.
>
> c. Something hereditarily close to *a* is not *F*.

The notion of closeness will depend on the specific case. For any fixed definition of closeness, for *b* to be hereditarily close to *a* is for *b* to have all properties which are such that *a* has it and for any *x* and *y* which are close, if *x* has it then *y* has it. (Compare the regimentation of tolerance puzzles in Dorr et al. 2021.) Clearly, by definition, nothing hereditarily close to *a* can lack *F*, since (2a) says that *a* has *F*, and (2c) says that *F* is a property that anything hereditarily close to *a* should also have. So, if (2a) and (2b) are true, then (2c) must be false. That is, (2) forms an inconsistent set.

To deny inconsistency here would be to deny reasoning which is perfectly good by ordinary mathematical standards. As one of the most successful scientific disciplines, it is very implausible that something goes very wrong with the operative standards of mathematics. This goes similarly for applied mathematics: given the success of mathematical modeling throughout various empirical fields, it is unlikely that natural language predicates like ‘heap’ are wholly unsuitable for regimentation along the lines of (1) and (2).

It would be nice if a uniform solution could be found: that is, if it were a particular one of (2a), (2b), or (2c) which is the problem for every Sorites paradox. However, this looks unlikely. Consider the following Sorites paradox.

> (3)
>
> a. Magdalen was not haunted in 1458.
>
> b. If it was unhaunted at some time, it was unhaunted one millisecond later.
>
> c. Magdalen is now haunted.

In (3), the property *F* is being unhaunted, and closeness is identified with being within one millisecond of; so, the present time is hereditarily close to 1458. Now, (3a) and (3b) are both true—the latter because its consequent is always true, as nothing is haunted—while (3c) is false. This also has an obvious variant.

> (4)
>
> a. Magdalen is now haunted.
>
> b. If it is haunted at some time, it was haunted one millisecond earlier.
>
> c. Magdalen was not haunted in 1458.

In (4), *F* and closeness are defined as in (3). So, (4b) and (4c) are both true—the former because its antecedent is always false, as nothing is haunted—while (4a) is false.

Finally, consider one last variant.

> (5)
>
> a. One is less than one million.
>
> b. If something is less than one million, its successor is less than one million.
>
> c. One billion is smaller than one million.

In this one, the property *F* is being less than one million, and closeness is defined as being within one of. Now, (5a) and (5c) are both true, while (5b) is false (as it is false for 999,999).

We’ve seen across (3), (4), and (5) that any two of the jointly paradoxical claims can be true at once, while the other one is false. So, we should not expect a uniform resolution of the paradox.

However, it is plausible that almost all of the properties which we typically reason about are nontrivial, in the sense that they are neither empty (applying to nothing) nor full (applying to everything). In this sense, the choice of hauntedness as an empty property (and, correspondingly, unhauntedness as a full property) was rather unusual. For any nontrivial property, there will be some pair of individuals which satisfy (a) and (c)—that is, some pair of individuals such that one has it but the other lacks it. Let the first be *a* and the second be *b*. What is at issue, then, is how to choose a notion of closeness such that *b* is hereditarily close to *a*, but the claim (b) seems plausible for the given property and given notion of closeness. The choice of the property of being less than one million was also rather unusual, in that—unlike most properties in natural language—its boundaries are not at all vague. Almost all predicates (‘red’, ‘cat’, ‘smokes’, ...) in natural language are such that there are clear examples and clear non-examples, but also a possible chain of intermediaries such that it seems like the difference between any two close ones could not possibly make the difference between being an example and being a non-example.

So, for sorites paradoxes involving such properties, it must be that the conditions (a) and (c) are met, and so it is condition (b) that somehow fails. The puzzle, then, is to explain how (b) can be false given how intuitive it seems.

One diagnosis for the plausibility of (b) in a wide variety of cases is the _persistence heuristic_, which essentially says to ignore small differences. Given the massive increases in cognitive load that would be associated with tracking all small differences, it would be extremely surprising for any non-omniscient agents to not employ the persistence heuristic. Holding fixed the amount of cognition that one has available, it is plausibly sometimes better to track many things slightly imperfectly than to track a few things perfectly. Another way of motivating the heuristic is that it allows one to apply extant knowledge in new situations, generalising to domains which differ slightly from those which one initially knows about.

More concretely, consider _present-tense updating_: if I learn on some particular day that Charles is the King of England, I may recall that fact on a later day in present tense terms, thinking, “Charles is the King of England”. But, crucially, I have not actually recalled the fact that I had learned: for what I had learned was that, as of that day, Charles was the King of England; but what I “recall” is that, as of today, Charles is the King of England. In this way, factual memory that naturally undergoes present-tense updating has more in common with an automatic process of inference, rather than a pure process of memory (comparable to episodic memory, which is explicitly relativised to a particular time rather than updated in present-tense).

It is thus extremely natural to conclude, from the knowledge that Jack is short, and that John is within one millimeter in height from Jack, that John is also short. But, clearly, many small differences in height (of less than one millimeter) can add up to a large difference in height (of, say, half a meter).

Even so, there is a question of why borderline cases arise at all. For borderline cases do not always arise: recall the predicate “smaller than one million”, where one is in a position to judge exactly whether it applies to some real number so long as that number is given in the usual decimal way. In particular, we are able to distrust the persistence heuristic when we recognise a borderline case, and to outright override it when we realise that it would be misapplied. What makes the predicate “short” different?

For now, let us individuate beliefs not by their content, but by the coarse-grained words (individuated by how they look/sound) in which those thoughts are expressed. For instance, take the belief of the form “Jack is short”. An initial answer has to do with the sensitivity of the content of the belief, versus the sensitivity of one’s assessment of the belief. That is, whatever determines the exact meaning of the predicate “short”—in particular, whether it applies to some particular borderline cases, like Jack—is sensitive to some facts about the world (how the term “short” is used by the relevant linguistic community, and so on). One’s holding of the belief is also sensitive in this way, but there is nothing guaranteeing that it is always more sensitive. In the case of “less than one million”, it is plausibly more sensitive, so all is well. However, in the case of some natural predicates in borderline cases, it is plausibly less sensitive. That is, for some borderline case in which one correctly believes something of the form “Jack is short”, one would also believe something of the form “Jack is short” even when the content of “short” differs slightly, though enough to make the belief false (because “short” covers fewer of the borderline cases). In these borderline cases, one is not safe from error, and so plausibly cannot know that Jack is short. It is plausible that we are implicitly sensitive to the impossibility of knowing, and so find it hard to know whether to assent to “Jack is short”. In particular, we have no confidence to override the default operation of the persistence heuristic.

Given these explanations, we more or less predict our reaction to Sorites paradoxes. Hence, more radical revisions to our understanding of the world, or to our understanding of semantics, are unnecessary. The best solution to the Sorites paradox is therefore one that explains the intuitive pull of the condition (b), without vindicating it.
