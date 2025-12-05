---
layout: default
title: "Directly Causing Inconsistency"
date: 2025-10-10
tag: "Strawson Prize Essay"
---

# Directly Causing Inconsistency

> The following was written for, and ended up winning, the Strawson Prize (2025).

_Singular direct causation features prominently in our ethical (Byrne forthcoming), legal (Byrne 2023), and metalinguistic reasoning (Martin 2018, a.o.). I argue that it is to be understood as a metaphysical analogue of the metalinguistic relation of witnessing from mathematical logic: whereas the latter relates to an existentially quantified sentence, the former relates to a proposition. I prove that direct causation is inconsistent with the view that necessary equivalence suffices for propositional identity, and direct causation by propositions or events is inconsistent outright. Such results are fundamental limitations on any Strawsonian (1951) project of descriptive metaphysics. I then take up a revisionary metaphysical project, showing how Martin’s (2018) account of direct causation can be improved to yield sufficiency in context (compare Kodsi and Kaiserman, manuscript). This is an attractive replacement for direct causation, as well as for causation more generally._

## Introduction

In his _Individuals: An Essay in Descriptive Metaphysics_ (1951), P. F. Strawson
wrote that he was “content to describe the actual structure of our thoughts
about the world” (p. 9). After all,

> _there are categories and concepts which, in their most fundamental character, change not at all. Obviously these are not the specialities of the most refined thinking. They are the commonplaces of the least refined thinking; and are yet the indispensable core of the conceptual equipment of the most sophisticated human beings_ (p. 10).

A paradigm of such a category is that of causation. Causal knowledge is central to our ability to respond appropriately to our environment. For one thing, it enables us to reason from knowledge of what _has_ happened to knowledge of what _will_ happen. For instance, if a human or other animal knows that berries nourish—or, more explicitly, that _eating berries causes one to be nourished_—and knows that it has just eaten berries, then it can infer that it will be nourished. This ability to anticipate results can also be deployed “offline” against what has only happened in the imagination, enabling us to evaluate candidate courses of action by reasoning about what consequences each would have if taken. For instance, if one wants to be nourished, knowing that berries nourish but pebbles do not nourish can help one decide to eat berries rather than pebbles. {% include sidenote.html content = "Compare Williamson 2020 on counterfactual knowledge." %}

Causal knowledge can be formulated in _generic_ terms, as in (1), or in _singular_ terms, as in (2).

> (1) Smoking causes cancer.

> (2) Ann’s smoking caused her cancer.

Our starting examples about berries were formulated in generic terms, but could have been written in singular terms (‘_these_ berries’, ‘_those_ pebbles’). The generic formulations might be simpler cognitively; however, they are almost certainly more complex semantically. In particular, we conjecture that the semantics of generic causal claims will be delivered simply by applying an adequate general account of generics to an independent account of the semantics of singular causal claims. For this reason, we focus on the semantics of singular causal claims—a formidable enough task.

Among singular causal claims, there is another independent distinction between _lexical_ causal claims, where the causal relation is encoded in more specific words—as in (3)—and _explicit_ causal claims, where an explicit causal operator is used—as in (4). Note that both (3) and (4) are singular causal claims, but it is easy to think of their generic counterparts.

> (3) The sunlight _melted_ the snow.

> (4) The sunlight _made_ the snow melt.

What is the relationship between lexical and explicit causal claims? It is orthodoxy in semantics that lexical causal claims express only _direct_ causation, while explicit causal claims may also express _indirect_ causation.{% include sidenote.html content = "See for instance Martin 2018, arguing against this assumption." %} For example, suppose that the sunlight charges a solar panel powering a heated driveway, which melts the snow: the sunlight causes the snow to melt, but seems to do so only indirectly. As a result, some might judge (5) to be true (although we disagree; more on this later).

> (5) ? The sunlight made the snow melt, but didn’t melt the snow.

## Characterising Direct Causation

One attempt at regimenting the idea that direct causation is what’s expressed by lexical causal claims is given by Byrne (2021). Let direct causation be the relation expressed by ‘**makes**’ so as to validate the following schema, where ‘_ϕ_’ is an operator that has both a transitive usage _ϕ_<sub>t</sub> (which allows but need not require a second argument) and an intransitive usage _ϕ_<sub>i</sub> (which does not allow a second argument). We use ‘⇔’ to indicate synonymy (understood weakly as necessary truth-functional equivalence, without requiring cognitive equivalence).

> (6) _a_ **makes** _b_ _ϕ_<sub>i</sub> ⇔ _a_ _ϕ_<sub>t</sub> _b_

One example of such an operator _ϕ_ is ‘bake’. Suppose that Jake is baking a cake. Then, Jake is baking, in the sense that there is something such that Jake is baking it. At the same time, the cake is baking, but in a very different sense: there is something such that it is baking the cake. It would be very odd if Jake were baking in the latter sense, or the cake were baking in the former sense. The sense in which Jake bakes is transitive, even though it occurs without a second argument; the sense in which the cake bakes is intransitive. So, ‘Jake’, ‘bake’, and ‘the cake’ can be substituted for ‘_a_’, ‘_ϕ_’, and ‘_b_’ respectively.

> (7) Jake **makes** the cake bake ⇔ Jake bakes the cake.

Or, to return to our earlier example:

> (8) The sunlight **makes** the snow melt ⇔ The sunlight melts the snow

Such examples may be multiplied fairly easily. Above, we gave a syntactic characterisation of (in)transitivity. But this is slightly confusing, because the transitive usage can also occur without a second argument. As the explanation for ‘bake’ suggested, we can instead give a general semantic characterisation of the distinction. The transitive usage is an active one, whereas the intransitive usage is a passive one. We can regiment this thought as follows.

> (9) _c_ _ϕ_<sub>t</sub> ⇔ ∃_x_ (_c_ _ϕ_<sub>t</sub> _x_)

> (10) _c_ _ϕ_<sub>i</sub> ⇔ ∃_x_ (_c_ _ϕ_<sub>t</sub> _x_)

One issue for Byrne’s schema is that some verbs which seem pre-theoretically to encode causation—like ‘destroy’ or ‘decimate’—nevertheless lack the required intransitive usage. Byrne’s solution is to note that we could of course _coin_ such usages, so as to validate the schema. However, we need not resort to such drastic measures. Given the semantic characterisation (10) of the intransitive usage as the passive one, we can understand Byrne’s schema (8) as merely a corollary case of the more general paraphrase schema (11).{% include sidenote.html content = "Byrne does not make this connection, but it is common practice to characterise the _causative alternation_ that Byrne’s schema requires explicitly as the availability of a _passive_ intransitive reading." %}

> (11) _a_ **makes** (it such that) ∃_x_ (_xϕb_) ⇔ _aϕb_

Thus, the restriction on _ϕ_ in Byrne’s schema is artificial: it is in some sense a mere artefact of (8). The paraphrase schema (11) is indeed much more general; it places no restrictions whatsoever on the transitive operator _ϕ_. For instance, it can handle ‘destroy’.

> (12) The wave **makes** (it such that) something destroyed the sandcastle ⇔ The wave destroyed the sandcastle

Of course, the left hand side is not entirely natural English; let us instead write (12) as follows.

> (12') The wave directly causes the sandcastle to get destroyed ⇔ The wave destroyed the sandcastle

In English, some transitive operators may be separable.{% include sidenote.html content = "We thus assimilate _resultatives_, and indeed all transitive operators, rather than just those traditionally understood as _causatives_, although we treat the result state as having been wiped dry instead of simply being dry. We can capture the latter if having wiped something dry is equivalent to one’s wiping having dried it, and similarly for other resultatives. See for instance Levin 2018." %}

> (13) Ben directly causes the table to be wiped dry ⇔ Ben wipes the table dry

Further, _wh_-clauses and _that_-clauses may be substituted for ‘_a_’ and ‘_b_’. (Formally, the relata of direct causation can also be variables and propositions.)

> (15) Cora directly causes where it is to be known ⇔ Cora knows where it is

> (16) That he’s dead will directly cause her to be shocked ⇔ That he’s dead
will shock her

Finally, notice that the paraphrase schema (11) may be iterated, which is a
fairly distinctive feature.{% include sidenote.html content = "We’ll use this later to help motivate contextualism about lexical causal claims, but it will not be needed for the inconsistency results." %}

> (17) The poison directly caused him to be directly caused to be killed ⇔ The
poison directly caused him to be killed (⇔ The poison killed him)

These nice features of the paraphrase schema (11) are not naturally available to Byrne’s schema (8); we suggest that the only reason to buy Byrne’s schema (8) is as a corollary or special case of the paraphrase schema.

The paraphrase schema (11) is reminiscent of the _witness_ schema (18) from mathematical logic. For comparison, (11) is reproduced, this time with ‘▷’ in place of ‘**makes** (it such that)’, and ‘b’ assimilated into the operator—formally, we have _φ_ = λ_y_.(_yϕb_).

> (11') _a_ ▷ ∃_x_._φ_(_x_) ⇔ _φ_(_a_)

> ‘_a_’ witnesses ‘∃_x_._φ_(_x_)’ ⇔ ‘_φ_(_a_)’ is true

Read (11') as ‘_a_ directly causes there to be a _φ_ just in case _a_ is a _φ_’; or, abusing jargon, ‘_a_ witnesses that something has _φ_ just in case a has _φ_’.

Officially, although the quotation marks are typically elided, the witness schema (18) is metalinguistic: it relates strings of symbols. By contrast, the direct causation schema (11') is metaphysical: it relates what’s expressed by those strings of symbols. In particular, witnessing is a relation to an existentially quantified sentence, whereas direct causation is a relation to a proposition.

It is worth remarking that this formulation looks incredibly promising so far. In particular, it positions _direct causation_ as standing to lexical causal claims as knowledge stands to factive mental state claims (Williamson 2000); as metaphysical possibility stands to objective possibility claims (Williamson 2016); and as absolute universal quantification stands to restricted universal claims (Williamson 2003). Generally, having the technology of the broadest species of some family of properties allows one to bootstrap from a pre-theoretical grasp of those properties individually to a theoretical characterisation of the entire family, as particular versions of the most general species. For instance, to be nomologically necessary is to be metaphysically necessary given the actual laws of nature. One should feel hope for a more principled and general understanding of lexical causal claims. Unfortunately, as we will now see, those hopes cannot come to fruition.

## Intensionalism Directly Causes Inconsistency

As a warm-up, let us first show that (11') is inconsistent with the background metaphysical principles that necessarily equivalent propositions are identical (‘intensionalism’), that anything which exists necessarily exists (‘necessitism’), and that there necessarily are at least two things (which also follows from necessitism and the fact that there are at least two things, given the necessity of distinctness, a principle that allows us to move to the last line—but we're already done before then, too).

Pick any _a_. By necessitism, it is a necessary truth that there is something which is _a_. As there are necessarily at least two things, it is also a necessary truth that there is something which is not a. By intensionalism, since there is only one necessary truth, these truths are identical. That is, we can substitute ∃_x_(_x_ = _a_) and ∃_x_(_x_ ≠ _a_) for one another _salva veritate_.

But then, given (11') as well, it is easy to see that the following are equivalent.

> * ⊤
> * a = a
> * a ▷ ∃x(x ≠ a)
> * a ▷ ∃x(x ≠ a)
> * a ≠ a
> * ⊥

That is, every impossibility is a necessary truth. Clearly, this trivialises the logic. Now, friends of intensionalism and necessitism—like Bacon and Dorr (2024) and Williamson (2014)—may be content to stop here: after all, we have just learned that direct causation is inconsistent given what we know about propositional identity and existence.
