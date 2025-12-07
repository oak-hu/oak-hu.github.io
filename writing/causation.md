---
layout: default
title: "Causation"
date: 2024-11-14
tag: "Knowledge and Reality (Week 5)"
---

# Causation

> The following is a tutorial essay for Knowledge and Reality with Daniel Kodsi. In effect, it is a quick agenda for an hour-long discussion on a guiding question, which for this week was ‘Can causation be analyzed in terms of counterfactual conditionals, or vice versa?’. A free-standing and much more readable version of some of the material may eventually go up on my [Substack](https://offhandquibbles.substack.com).

§I argues that counterfactual conditionals cannot be analyzed in terms of causation; §II argues that causation cannot be analyzed in terms of counterfactual conditionals.

I take for granted that an analysis of *y* terms of *x* must be (in some sense) informative about *y*, and must make (in some sense) essential reference to *x*. For instance, the following do not suffice:

> (1) *X* causes *Y* just in case *X* would make it that *Y* if there were no intervening factors, and there actually are no intervening factors.
>
> (2) It would be that *Y* if it were that *X* just in case it is that *Y* if it is that *X* in all contextually relevant worlds, where context causes worlds to be (ir)relevant.

I take for granted that we can judge, at least somewhat reliably, whether one thing causes another, and whether many counterfactual conditionals are true or false. In particular, if some position conflicts with our judgments, we are owed (and will be satisfied with) an explanation for why those judgments are wrong. I’ll avoid taking a stance on whether causation can be analyzed, but I’ll defend the toy analysis of counterfactual conditionals given in (2).

## I. Against causal analyses of counterfactuals

First, I defend the account (2) of counterfactual conditionals, following Williamson (2020). I take it that counterfactual conditionals are expressions of the general form ‘if it were that *X*, then it would be that *Y*’, such as:

> (3) She wouldn’t have messaged me if she were angry.

Despite the term ‘counterfactual’, these conditionals need not have false antecedents. For instance, I might reason from the truth of (3) and the fact that she did message me to the conclusion that she isn’t angry. Counterfactual conditionals are distinguished from indicative conditionals, such as:

> (4) She didn’t message me if she was angry.

The indicative conditional (‘If *X*, then *Y*’) obeys two deductive rules. The first is *conditional proof*: whenever I know that *Y* is entailed by *X* and background assumptions *ZZ*, I may conclude ‘if *X*, then *Y*’ (assuming *ZZ*). The second is *modus ponens*: whenever I know the conditional ‘if *X*, then *Y*’ and the antecedent *X*, I may conclude the consequent *Y*. These two deductive rules entail that ‘if *X*, then *Y*’ is equivalent to the material conditional (*X* → *Y*), which is true just in case the antecedent *X* is false or the consequent *Y* is true.

The difference between (3) and (4) is the ‘would’ (and corresponding ‘were’) in (3). The term ‘would’ can act on its own, as in:

> (5) She wouldn’t show up late.

In particular, (5) doesn’t seem to covertly express a counterfactual conditional; there’s no clear candidate for a hidden antecedent. Rather, (5) seems to express a sort of robustness to her not showing up late; the obvious candidate is that in all relevant (hypothetical) cases, she doesn’t show up late. It’s clear that the relevant cases depend on context: (5) might be true if we’re talking about tutorials, or false if we’re talking about parties. We might even be talking about a lecture delivered by a resurrected Hume, such that the real world isn’t among the contextually relevant cases.

As noted, counterfactual conditionals seem to compose ‘would’ with (*X* → *Y*). There are (at least) two distinct ways to compose these operators, with ‘would’ taking either wide scope or narrow scope:

> (6) would(*X* → *Y*)
>
> (7) *X* → would(*Y*)

But we can see that (6) is more plausible for the counterfactual conditional, by the following contrast:

> (8) If she were to stay in university, she would still study hard.
>
> (9) If she stays in university, she would still study hard.

Suppose that it’s clear from context that we’re discussing what would happen if she won the lottery. Then (8) says that, in the lottery-winning cases where she stays in university, she studies hard. Meanwhile, at least on one reading, (9) says that her actually staying in university indicates that, in the lottery-winning hypothetical cases, she still studies hard. So, (8) is of form (6), while one reading of (9) is of form (7). So, counterfactual conditionals like (8) have ‘would’ taking wide scope over the material conditional. The final picture is that a counterfactual conditional is true just in case, in all contextually relevant cases, its antecedent is false or its consequent is true.

What role could causation play in an account of counterfactual conditionals? Since we haven’t baked a notion of closeness directly into the semantics, there doesn’t seem to be much room for causation to play a direct role. In principle, it could be that the counterfactual conditional isn’t just ‘would’ composed with the material conditional. It might be that the conditional embedded in the ‘would’ somehow overrides its contextual variability, forcing it to pick out (say) just those worlds at least as close as the closest world where the antecedent is true. But this seems somewhat ad-hoc and ill-motivated; we would be positing an extra effect above standard compositionality, and we don’t seem to be able to better explain any mystery.

Now, it may be that whenever we pick out a set of worlds with ‘would’, we do pick out the closest worlds where the contextual restrictions hold, and closeness is spelled out in terms of causation. That is, when we imagine a set of hypothetical cases, we tend to, say, hold fixed as many causal connections as we can while fulfilling the restrictions of the hypothetical. This may well be the case, but this seems to be just a matter of our hypothetical thinking (and so our counterfactual reasoning) closely involving our causal knowledge. In particular, this does not amount to counterfactual conditionals being analyzable in terms of causation. There might be other reasons for such a close involvement. In particular, it’s plausible that we use causal reasoning to gain counterfactual knowledge: starting from a supposition, we develop the imaginary case further, applying what we know about causation, to arrive at some further state. We then learn that if the supposition obtained, then the further state would obtain. In particular, in every world consistent with our causal knowledge, if the supposition obtains, then the further state obtains. This sort of counterfactual knowledge is perhaps the most useful; but it is not the only kind. We can exclude from relevance worlds consistent with our causal knowledge (as seen above), or even ignore some of our causal knowledge to gain counterfactual knowledge of what would happen if various causal laws were broken. But in the former case, our causal knowledge still drives the development of suppositions; the latter case is less useful. So, causal knowledge is central to our counterfactual reasoning, even if counterfactual conditionals cannot be analyzed in terms of causation.

## II. Against counterfactual analyses of causation

On the above account of counterfactual conditionals, the worlds at which the conditional is evaluated may vary wildly with context. But causation does not seem to vary so widely. For instance, consider this toy analysis of causation:

> (10) *X* causes *Y* just in case *Y* wouldn’t have occurred (in the way it did) if it were that *X* hadn’t occurred (in the way that it did).

The problem is that, on the above account of counterfactual conditionals, (10) makes the truth of ‘*X* caused *Y*’ depend on whatever possibilities are contextually relevant. In particular, whenever *X* causes *Y*' by merely raising a far-fetched imaginary case where *Y* occurs anyway without *X* (perhaps aliens would have come down and made *Y* happen), one makes the response ‘okay, but *X* did cause *Y*’ false. It should not be this easy to make causal claims false, even if we grant that causal claims are somewhat sensitive to context — for instance, perhaps eating the peanut butter cookie (rather than the peanut butter brownie) didn’t cause her allergic reaction, but eating the peanut butter cookie (rather than the chocolate cookie) did cause her allergic reaction.

There might be a way out if ‘*X* caused *Y*’ always forces a change to a special context for evaluating causal claims. Thus, even if closeness isn’t built into the semantics of counterfactuals generally, it becomes relevant by the special context of causation. Here are three initial worries. The first is, again, that this looks a bit ad-hoc. The second is that this move seems to leave ‘*X* caused *Y*’ false, just not falsely assertible, and so fails to address the worry. The third is that the special causal context would need to be specified in some way that doesn’t invoke causation itself, on pain of circularity.

But if one can specify in separate terms the worlds in which it must be that either the cause occurs or the effect fails to occur, then one is effectively replacing the counterfactual conditional by the condition that the cause is locally necessary for the effect, with locality spelled out in those separate terms. Then, the counterfactual seems to play no essential role — the toy analysis becomes:

> (11) *X* caused *Y* just in case *X*’s occurring (in the way that it did) was locally necessary for *Y*’s occurring (in the way that it did).

This, with locality elaborated, seems like a much more perspicuous way of stating the analysis than (10). Additionally, note that, if the contextually relevant worlds are fixed by this special context, then the counterfactual conditional may be contraposed (since the material conditional inside the ‘would’ may be contraposed), and so (10) is also equivalent to:

> (12) *X* caused *Y* just in case *X* would have occurred (in the way that it did) if it were that *Y* had occurred (in the way that it did).

But setting these worries aside, suppose we do allow that ‘*X* caused *Y*’ to introduce some contextual restriction, such that the counterfactual analysis of causation just amounts to (11). This ‘counterfactual’ analysis faces pressure from two fronts. First is the position that causation is analyzable, but not in terms of counterfactuals. In particular, given indeterministic causation, we should allow that *X* causes *Y* even if *Y* occurring without *X* is locally possible. Second is the position that causation is unanalyzable altogether. In particular, it looks like we can’t elaborate locality without appealing to causation itself.

Corresponding to these two sides are two classes of counterexamples to (11). Both of these attack the left-to-right direction, as otherwise one might just add conjuncts to the right-hand side. (Thus, I won’t pursue objections along the lines of *A* and *B* needing to be distinct.) In particular, both give cases where *X* causes *Y*, but *X* was in no interesting sense necessary for *Y*. The first class are cases where *Y* *could* have occurred even without *X*; these are cases of chancy causation. The second class are cases where *Y* *would* have occurred even without *X*; these are cases of redundant causation. Notice that the second class is a limiting case of the first class (as the second requires that all local worlds have *Y* without *X*, while the first requires only that *some* local worlds have *Y* without *X*).

I treat cases of chancy causation first, and argue that they tell against the use of counterfactual conditionals to analyze causation. In particular, we can have cases where *A* causes *E*, but there is also a minute chance of some event *B*, which had *A* not occurred, would have caused *E*. Suppose that, on occasion, I spontaneously faint. This certainly doesn’t prevent other things—say, lying down in bed at night—from causing me to be unconscious. If I had not lied down, I almost surely would not have been asleep; this certainly seems like enough.

One way around this is to restrict locality; but since we still lack an independent account of locality, and how it just so happens to fit the needs of causation, this looks ad hoc. A nicer approach is to set locality to one side (we might let local worlds just be all nomically possible worlds), and require something like probability raising. Although I think there is significant pressure from this side, the counterfactual theorists have a nice way out: they might mimic probability raising by talking not about the causes of some chancy effect, but about the causes of the effect *having the probability as high as it did*. (In the limiting case where the probability is 1, they almost just talk about causation.) On this generalization of the counterfactual account, my lying down in bed at night is a cause of my almost surely being asleep (as if I hadn’t lied down, the chance of my being asleep would have been much lower). So, I set aside this front of criticism, and focus on the other.

I treat cases of redundant causation next, and argue that they tell against the analyzability of causation. In a symmetric case of *overdetermination*, both *A* and *B* are causes of *E*, but *A* would have ensured *E* even without *B*, and *B* would have ensured *E* even without *A*. A stock example of overdetermination has *A* as Alice’s throwing a baseball at a fragile vase, *B* as Bob’s throwing a baseball at the same vase at the same time, and *E* the vase’s shattering. Alice’s throw was a cause of the vase shattering, and yet (11) is false: since Bob also threw a ball at the vase, Alice’s throw was not necessary for the vase’s shattering. Similar reasoning applies to Bob’s throw.

One might worry that *E*’s no longer being partly caused by *A* automatically makes a difference to *how* *E* occurs; but for independent reasons, we’d like to require a sort of distinctness between causes and effects, such that, say, my speaking isn’t a cause of my speaking loudly, or vice versa. Further restricting locality won’t help, and shifting locality to, say, the cases where *B* doesn’t occur looks worryingly circular. The least bad option seems to be re-individuating the events. Schematically, we split *A* into (*A* & *B*) and (*A* \ *B*), and *B* into (*A* & *B*) and (*A* \ *B*). That is, we consider the actual cause of the shattering to be the *joint* throws of Alice and Bob; two *potential* causes that were not realized were Alice’s throwing alone, and Bob’s throwing alone. We judge that Alice’s throw was a cause of the shattering only because we mistake being part of a cause for being a cause. But this turns the case into one of asymmetric *preemption*: that is, there were backup causes (namely, Alice’s throwing alone, and Bob’s throwing alone) which would have ensured the vase’s shattering. The general strategy, then, is to deny that there really are cases of overdetermination; what we have instead are cases of something like joint causation. But such cases of joint causation are also cases of preemption, which we turn to now.

In general, in an asymmetric case of preemption, *A* but not *B* is a cause of *E*, but had *A* not caused *E*, *B* would have instead caused *E*. A stock example of preemption has *A* as a senior commander’s giving an order to advance, and *B* as a junior commander’s giving an order to advance. Whenever both commanders give an order, the senior commander’s order counts, so *A* but not *B* caused the effect *E* of the advance. (If we say that Alice’s throw was a few seconds before Bob’s, then we also have a case of preemption.) The trouble here is to account for the asymmetry between *A* and *B* which allows for *A* but not *B* to be a cause. If we just apply (11), we have that *A* is not a cause. The response (Lewis 2000) is to restrict locality, evaluating whether *A* is necessary *with B held fixed*. In particular, *A* rather than *B* is a cause of *E* because (with *B* fixed) altering *A* without altering *B* alters *E*, but altering *B* without altering *A* doesn’t alter *E*. If the senior officer gives a slightly different order, then the advance is slightly different; but if the junior officer gives a slightly different order, then the advance remains the same.

But the worry here is that one has a hard time saying what to hold fixed, and how much one can alter an event, without appealing to causation itself. For instance, we might alter *B* enough that it preempts *A* (for instance, moving Bob’s throw ahead of Alice’s); or we might hold fixed *B* in a way that *E*’s being caused is weighted more heavily than *B*’s not causing *E* (for instance, taking Bob’s throw* as occurring whenever Bob makes a throw and *E* occurs exactly as it actually does, and holding Bob’s throw fixed). In each case, it’s obvious that these are the wrong way to go, because we know the causal facts. But to give a noncircular analysis of causation in terms of counterfactuals, we must add further epicycles to how we specify locality; there don’t seem to be any natural, promising candidates. It might be that, like many central concepts, causation lacks an analysis, and so lacks an analysis in terms of counterfactuals.

## References

* Collins, John; Hall, Ned & Paul, Laurie (eds.) (2004). *Causation and Counterfactuals*. MIT Press. Ch. 1, 3, 14, 18.
* Kment, B. (2010). Causation: determination and difference-making. *Noûs*, 44: 80-111.
* Kment, B. (2020). Counterfactuals and causal reasoning. In E. Siegal and N. Boneh (eds.), *Perspectives on Causation*, Springer International Publishing.
* Williamson, Timothy (2020). *Suppose and Tell: The Semantics and Heuristics of Conditionals*. Oxford, England: Oxford University Press.
