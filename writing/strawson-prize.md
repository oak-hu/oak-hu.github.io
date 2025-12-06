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

One attempt at regimenting the idea that direct causation is what’s expressed by lexical causal claims is given by Thomas Byrne (2021). Let direct causation be the relation expressed by ‘**makes**’ so as to validate the following schema, where ‘_ϕ_’ is an operator that has both a transitive usage _ϕ_<sub>t</sub> (which allows but need not require a second argument) and an intransitive usage _ϕ_<sub>i</sub> (which does not allow a second argument). We use ‘⇔’ to indicate synonymy (understood weakly as necessary truth-functional equivalence, without requiring cognitive equivalence).

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

The paraphrase schema (11) is reminiscent of the _witness_ schema (18) from mathematical logic. For comparison, (11) is reproduced, this time with ‘▷’ in place of ‘**makes** (it such that)’, and ‘b’ assimilated into the operator—formally, we have _φ_ = λ _y_.(_yϕb_).

> (11') _a_ ▷ ∃_x_._φ_(_x_) ⇔ _φ_(_a_)

> ‘_a_’ witnesses ‘∃_x_._φ_(_x_)’ ⇔ ‘_φ_(_a_)’ is true

Read (11') as ‘_a_ directly causes there to be a _φ_ just in case _a_ is a _φ_’; or, abusing jargon, ‘_a_ witnesses that something has _φ_ just in case a has _φ_’.

Officially, although the quotation marks are typically elided, the witness schema (18) is metalinguistic: it relates strings of symbols. By contrast, the direct causation schema (11') is metaphysical: it relates what’s expressed by those strings of symbols. In particular, witnessing is a relation to an existentially quantified sentence, whereas direct causation is a relation to a proposition.

It is worth remarking that this formulation looks incredibly promising so far. In particular, it positions _direct causation_ as standing to lexical causal claims as knowledge stands to factive mental state claims (Williamson 2000); as metaphysical possibility stands to objective possibility claims (Williamson 2016); and as absolute universal quantification stands to restricted universal claims (Williamson 2003). Generally, having the technology of the broadest species of some family of properties allows one to bootstrap from a pre-theoretical grasp of those properties individually to a theoretical characterisation of the entire family, as particular versions of the most general species (compare discussion in Williamson 2000). For instance, to be nomologically necessary is to be metaphysically necessary given the actual laws of nature. One should feel hope for a more principled and general understanding of lexical causal claims. Unfortunately, as we will now see, those hopes cannot come to fruition.

## Intensionalism Directly Causes Inconsistency

As a warm-up, let us first show that (11') is inconsistent with the background metaphysical principles that necessarily equivalent propositions are identical (‘intensionalism’), that anything which exists necessarily exists (‘necessitism’), and that there necessarily are at least two things (which also follows from necessitism and the fact that there are at least two things, given the necessity of distinctness, a principle that allows us to move to the last line—but we're already done before then, too).

Pick any _a_. By necessitism, it is a necessary truth that there is something which is _a_. As there are necessarily at least two things, it is also a necessary truth that there is something which is not a. By intensionalism, since there is only one necessary truth, these truths are identical. That is, we can substitute ∃_x_(_x_ = _a_) and ∃_x_(_x_ ≠ _a_) for one another _salva veritate_.

But then, given (11') as well, it is easy to see that the following are equivalent.

 * ⊤
 * a = a
 * a ▷ ∃x(x ≠ a)
 * a ▷ ∃x(x ≠ a)
 * a ≠ a
 * ⊥

That is, every impossibility is a necessary truth. Clearly, this trivialises the logic. Now, friends of intensionalism and necessitism—like Bacon and Dorr (2024) and Williamson (2014)—may be content to stop here: after all, we have just learned that direct causation is inconsistent given what we know about propositional identity and existence.

As we saw in (16), the direct causation schema (11') need not be restricted such that the direct cause must be an individual (of type e); indeed, direct causes may be _propositions_ (of type _t_), like the proposition that some man is dead.{% include sidenote.html content = "Perhaps this is the wrong way to think about _that_-clauses in English; but, given the resources of higher order logic, and the orthodoxy of the thought that propositions or events are causes, it is independently worth exploring. Of course, that inconsistency results at _any_ type is also a negative sign." %} Let’s focus on this special case. Of course, this means that the logic with which we characterised the direct causation schema (11') had better be able to quantify into sentence position (intuitively, to quantify over propositions). Once we’re in a higher-order language, we can dispense with the schematic presentation as well, and put the direct causation schema as a single sentence which quantifies explicitly into sentence position and operator position (specifically, monadic operators of type ⟨_t_, _t_⟩, like ‘¬’). Finally, we may as well rewrite ‘⇔’ explicitly as necessary equivalence. Note that ‘▷’, as it appears below, is of type ⟨_t_,⟨_t_, _t_⟩⟩, like the operator ‘∧’. Making these changes, we have the following propositional direct causation formula (PDC).{% include sidenote.html content = "For an introduction to higher order languages of this sort as applied to metaphysics, see the exposition in, e.g., Williamson (2014) or Bacon and Dorr (2024)." %}

> (PDC) ∀_φ_∀_p_□((_p_ ▷ ∃_q φq_) ↔ _φp_)

In English, read: ‘_p_ directly causes there to be a _φ_ just in case _p_ is a _φ_’.

Note also that this formula follows from the generalisation across all types (which, to be a sentence rather than a schema, requires quantifying over types; see generally Wilhelm 2025).

> (DC) **∀**_σ_ ∀<sub>_⟨σ, t⟩_</sub>_φ_ ∀<sub>_σ_</sub>_x_ □((_x_ ▷<sub>⟨_x_, _t_⟩</sub> ∃<sub>_σ_</sub>_q φq_) ↔ _φp_)

This is the natural way to (implicitly) define direct causation by anything of
any type. But, given intensionalism and necessitism, (DC) is false. Indeed,
since our above argument generalised to any type for which there are—loosely
speaking—at least two things of that type, (DC) is false for every such type.
For instance, at type _t_, we have ⊤ (the necessary truth) and ⊥ (the impossibility). We can formulate our discovery as follows.

> (NDC) **∀**_σ_ (∃<sub>_σ_</sub>_x_ ∃<sub>_σ_</sub>_y_ (_x_ ≠ _y_) → ¬∃<sub>⟨_σ_,⟨_t_, _t_⟩⟩</sub> ∆ ∀<sub>⟨_σ_, _t_⟩</sub>_φ_ ∀<sub>_σ_</sub>_x_ □((_x∆_∃<sub>_σ_</sub>_q φq_) ↔ _φp_))

This is a theorem of any logic expressive enough to quantify over types and strong enough to prove intensionalism for propositions and necessitism at all types. The schematic version of (NDC) is provable, of course, without quantifying over types. Either (NDC) or a schematic version thereof applies to individuals (including events) and to propositions, and in particular shows that there cannot be direct causation by individuals (including events) or propositions. Indeed, there cannot be direct causation by any type of which there is more than one instance.

## Propositions Directly Cause Contradiction

The preceding discussion assumed necessitism and intensionalism, two somewhat controversial theses. But, in the propositional case, we can do better. On the negation of intensionalism, it is easy to fall into the trap of the Russell-Myhill paradox: one must ensure it cannot be that, given any propositions, there is a proposition that uniquely corresponds to them. For instance, Fritz (2021) shows that (natural interpretations of) the metaphysical relation of strict immediate partial ground which are inconsistent with intensionalism are also outright inconsistent, because they can be used to construct an injective map from pluralities of propositions to single propositions.

We can show the same of any relation (PDC). Here is the proof. Pick any two pluralities of propositions—call them ‘_pp_’ and ‘_qq_’—and consider the properties of being among the _pp_ and of being among the _qq_.{% include sidenote.html content = "One can, of course, think in terms of sets or classes instead." %} Formally, we substitute λ _x_.(_x_ ≺ _pp_) and λ _x_.(_x_ ≺ _qq_) for _φ_ in (PDC), yielding the following (we now use the variables _x_ and _y_ to avoid confusion).

> (19) ∀_x_ □ ((_x_ ▷ ∃_y_(_y_ ≺ _pp_)) ↔ (_x_ ≺ _pp_))

> (20) ∀_x_ □ ((_x_ ▷ ∃_y_(_y_ ≺ _qq_)) ↔ (_x_ ≺ _qq_))

Now, suppose that ‘∃_y_(_y_ ≺ _pp_)’ and ‘∃_y_(_y_ ≺ _qq_)’ express one and the same proposition, and so can be substituted for one another _salva veritate_. Then, by (19), by assumption, and by (20) respectively, the following are (necessarily) equivalent, for any _x_.

 * _x_ ≺ _pp_
 * _x_ ▷ ∃_y_(_y_ ≺ _pp_)
 * _x_ ▷ ∃_y_(_y_ ≺ _qq_)
 * _x_ ≺ _qq_

So, the pluralities _pp_ and _qq_ are (necessarily) coextensive, and so identical.{% include sidenote.html content = "We need not assume that there are no merely possible propositions: pluralities are modally rigid." %} Thus, the mapping _f_: _pp_ ↦ ∃_y_(_y_ ≺ _pp_) is injective: if _f_(_qq_)—that is, ∃_y_(_y_ ≺ _qq_)—and _f_(_pp_)—that is, ∃_y_(_y_ ≺ _pp_)—are the same proposition, then (by the above) _pp_ and _qq_ are the same plurality of propositions.

Thus yields the Russell-Myhill paradox. Let us give a quick derivation. Consider the plurality _nn_ of precisely the propositions _m_ that are not included in any plurality _mm_ with _f_(_mm_) = _m_. Consider the proposition _f_(_nn_). Is it among the _nn_?

Suppose that _f_(_nn_) is not among the _nn_. Then _f_(_nn_) cannot be in any plurality _mm_ with _f_(_mm_) = _o_: by the injectivity of _f_, the only such plurality _mm_ is _nn_. So, by definition of _nn_, _f_(_nn_) must be among the _nn_. What we’ve just shown is that if _f_(_nn_) is not among the _nn_, then it is among the _nn_.

Now, suppose that _f_(_nn_) is among the _nn_. Then _f_(_nn_) is included in a plurality _mm_ with _f_(_mm_) = _f_(_nn_): after all, _nn_ is such a plurality, and by assumption _f_(_nn_) is included in it. So, by definition of _nn_, _f_(_nn_) cannot be among the _nn_. What we’ve just shown is that if _f_(_nn_) is among the _nn_, then it is not among the _nn_.

Putting these together, we’ve shown that _f_(_nn_) is among the _nn_ if and only if it’s not among the _nn_—a contradiction!

Backing up, we have just argued the following: if there existed a relation of direct causation which obeyed the PDC formula (for instance, because it obeyed the more general DC formula), then it could be used to construct an injective map from pluralities of propositions to individual propositions, which could be used to construct a plurality which maps to one of its own propositions if and only if it doesn’t map to one of its own propositions. Since this is clearly impossible, we know that no relation can obey (PDC).

## No Escape

Now, of course, one might worry that the problem lies with our higher-order logical system. But the argument can be given in English as well—indeed, it can be given against Byrne’s original schema. Say that a proposition _manifests_ some propositions just in case it is one of those propositions, and that some propositions manifest just in case some proposition manifests them. (This is just a way of pronouncing ‘≺’ in English with a natural intransitive form.) Recall Byrne’s schema (6), reproduced here.

> (6) _a_ **makes** _b_ _ϕ_<sub>i</sub> ⇔ _a_ _ϕ_<sub>t</sub> _b_

Before preceding, bear in mind that under the plausible assumption that necessary equivalence suffices for propositional identity, then ‘the necessary truths manifest’ and ‘the impossibilities manifest’ both express necessary truths and so express the same proposition; one should therefore not expect synonymy between ‘the _pp_ manifest’ and ‘the _qq_ manifest’ to require that the _pp_ are the _qq_, because the necessary truths are certainly not the impossibilities.

However, by (6), we have just such a requirement. Consider ‘the _pp_ manifest’ and ‘the _qq_ manifest’. If the propositions expressed by these two fragments are the same, then _a_ **makes** one just in case it **makes** the other. So, by (6), the following are equivalent:

 * _a_ manifests the _pp_
 * _a_ **makes** the _pp_ manifest
 * _a_ **makes** the _qq_ manifest
 * _a_ manifests the _qq_

As this holds (necessarily) for any proposition _a_, the _pp_ must be the _qq_. But then the map from any plurality _pp_ to the proposition that the _pp_ manifest is injective, and we have a contradiction as before. So, there cannot be a relation **makes** which holds between propositions and satisfies even Byrne’s schema (6). An identical argument can be made for events. (Indeed, if there is an event of some plurality of events having at least one instance, the formal version of the argument goes through as well, by letting the existential claim in the formula express such an event.{% include sidenote.html content = "For instance, Paul Elbourne (p.c.) has mentioned using individuals and events as the ‘base type’ entities for this project of eliminating syntactic categories and replacing them by semantic types." %})

Now, one could certainly react by just restricting Byrne’s schema so as to bar direct causation by propositions. But this looks artificial. Instances of Byrne’s schema like (21) and (22), if interpreted as expressing direct causation by propositions (or events), must be manually quarantined. On the left hand side, read ‘worry’ and ‘anger’ as in ‘A lack of sleep makes (her worry / him anger) easily’:

> (21) That it’s midnight **makes** her worry ⇔ That it’s midnight worries her

> (22) That it’s cheap **makes** him anger ⇔ That it’s cheap angers him

One could instead make the more surgical move of blocking just the usage of ‘manifest’ introduced above, and all similar devices. But this looks even more obviously gerrymandered. One could imagine higher-order metaphysicians beginning to talk in this way; what would be wrong with their jargon?

This investigation can also be conducted formally. The relation of direct causation is so strong as to be inconsistent. Are there any natural weakenings? There is one obvious candidate: _x_ directly causes it to be such that _p_ just in case, for some _q_, _x_ is _q_ and _p_ is identical to the fact that something is _q_. In effect, we make _φx_ a sufficient but no longer necessary condition for _x_ to directly cause ∃_xφx_. This actually yields an explicit characterisation of direct causation by any type.

> (DC') **∀**_σ_ (▷<sub>⟨_σ_,⟨_t_,_t_⟩⟩</sub> = λ _x_<sub>_σ_</sub> . λ _p_<sub>_t_</sub> . ∃<sub>⟨_σ_,_t_⟩</sub>_φ_(_φx_ ∧ (_p_ = ∃<sub>_σ_</sub>_y_ _φy_)))

It is worth emphasising that, in a natural sense, (DC') is the least drastic weakening of (DC). Unfortunately, upon inspection, (DC') is so weak as to be useless. In particular, consider _φ_ = λ _x_._p_ (that is, _φ_ is a property that everything of the relevant type has if _p_ is true, and otherwise nothing has). Assuming that _p_ is true, then, we have that _φx_ and that _p_ = ∃_yφx_. So, every truth is directly caused by everything of every type! (Meanwhile, if _p_ is false, we do clearly have that nothing of any type directly causes it: if _p_ is false, then nothing has _φ_, and so in particular _x_ is not.)

We conclude, then, that the schema (6), as intuitive as it first appears, cannot be salvaged. Let us try an alternative way to characterise direct causation, and then see how close it is as a metaphysical counterpart to the metalinguistic relation of witnessing.

## Revising Ab Initio Causal Sufficiency

Fabienne Martin (2018) gives the following condition for _X_ to directly cause _Y_. Here, _X_, _Y_, and _W_<sub>_X_</sub> are understood as events (which, heuristically, we may understand as intrinsic properties of spacetime regions). _W_<sub>_X_</sub> is the world history up to the beginning of the event _X_.

> (23) ℙ(_Y_ \| _X_ ∧ _W_<sub>_X_</sub>) = 1

Martin calls this condition ‘_ab initio_ causal sufficiency’. But there are some general metaphysical worries about this condition. Firstly, and most straightforwardly: full probability is technically a weaker notion than sufficiency. For instance, the probability of getting at least one head in infinitely many tosses of a fair coin is exactly 1; nevertheless, strictly speaking, tossing it infinitely many times is not sufficient for getting at least one head because it is possible that every coin lands tails. Making this amendment, we have the following, where (heuristically speaking) the accessible worlds in (24) are precisely the outcomes in the domain of the probability measure in (23).

> (24) □(_X_ ∧ _W_<sub>_X_</sub> → _Y_)

Here, ‘□’ is a local necessity operator: its scope is presumably determined by context so as to, at least by default, rule out possibilities like a freak meteor strike (or, better, some near-impossible quantum disaster) following _X_ which prevents _Y_. Such possibilities had better be ruled out, even though they are not captured by _W_<sub>_X_</sub>, or else one risks there being no nontrivial direct causation (say, between Ann’s throwing a baseball and the resultant shattering of a vase): there always could have been some freak quantum disaster. One way of ruling out such possibilities without appealing to conditions not captured by _W_<sub>_X_</sub> is to note that _W_<sub>_X_</sub> is the full world history up to the start of _X_, and so—assuming something like determinism—it automatically rules out those odd possibilities (assuming they do not actually occur). But this move risks trivialising the account, because then (24) would hold for any pair of events _X_ and _Y_: _W_<sub>_X_</sub> will always include the initial state of the universe, which suffices for every event, including _Y_ in particular.

Further, context dependence helps explain the puzzle with (5), reproduced here.

> (5) # The sunlight **made** the snow melt, but didn’t melt the snow.

To our ear, (5) actually sounds pretty bad. It seems to invite the reply, ‘Wait, so did the snow melt or not?’. The variants (25) and (26) are even worse.

> (25) # The sunlight **made** the snow melt, but failed to melt the snow.

> (26) # The sunlight **made** the snow melt without melting the snow.

However, the variant (27) sounds—if not totally fine—notably better.

> (27) ? The sunlight didn’t melt the snow, but did **make** the snow melt.

Such a pattern is explicable if causal claims are context-dependent, and it is harder to narrow which possibilities are contextually relevant than to broaden which possibilities are so. Similar patterns hold with counterfactual claims, as with (reverse) Sobel sequences. (Compare Williamson 2020.)

Next, we note that direct causation should be able to iterate, as was exhibited in (16). If we read the box as ‘in all contextually relevant worlds’, then (24) iterates without issue, so long as the context is held fixed. By contrast, if we read the box as applying some fixed margin of error, such iteration would be catastrophic. (Compare the effect of the KK principle for invariantists and some contextualists.)

Further, the operation of modifiers like ‘eventually’ might be explained as having a contextual effect, by encouraging the space of relevant possibilities to shift charitably. For instance, in the situation where the sunlight charges solar panels that power a heated driveway that melts the snow, (28) might sound false out of the blue, while (29) sounds much better (compare Martin 2018).

> (28) # It was the sunlight that melted the snow.

> (28') (Eventually / At the end of the day / All things considered / If you really think about it), it was the sunlight that melted the snow.

Martin herself takes such examples to not count as direct causation. However, recall that our north star as to direct causation was that all lexical causal claims express direct causation. Indeed, such examples like (28') seem easy to assimilate to a revised version of Martin’s condition once we explicitly consider the contextual effects on the domain of Martin’s probability measure.

Now for a further revision to Martin’s condition. Note, first, that (29) entails our revised version of Martin’s condition whenever _W_<sub>_X_</sub> entails _C_.

> (29) □(_X_ ∧ _C_ → _Y_)

Indeed, we might want to strengthen Martin’s condition to (29) if we are worried about trivialisation from determinism. But what exactly should _C_ be? A natural answer is that, since we are already determining the space of relevant possibilities from context, we may as well determine _C_ from context too. That is, the relevant facts about what happens before the start of _X_ are simply part of what’s fixed by context. Thus, we can simplify the condition further to (31).

> (31) □(_X_ → _Y_)

With this, we’ve done away with any reference to the times of the events. So, we can eschew the ideology of events, and work directly with the corresponding facts (understood simply as true propositions).

> (31) _p_ ∧ _q_ ∧ □(_p_ → _q_)

Note that the conjunct _q_ is redundant, since (32) entails it anyway; (32) is therefore equivalent to (31).

> (32) _p_ ∧ □(_p_ → _q_)

In English, say: ‘the fact that _p_ suffices in context for _q_’.

## Sufficiency-in-Context Suffices

Now, this account of direct causation should be reminiscent of Williamson’s (2020) account of counterfactual conditionals. As a rough gloss, the idea is that ‘if _p_, _q_’ means that □(_p_ → _q_), and ‘would _p_’ means □_p_ in the sense above (roughly, ‘_p_ in all relevant worlds’). Since counterfactual conditionals like ‘if it were that _p_, it would be that _q_’ are in effect the result of composing ‘would(if _p_, _q_)’, they have the logical form (33).

> (33) □(_p_ → _q_)

One peculiar feature of counterfactual conditionals is that they are oddly asserted when their antecedents are in the common ground: they seem to implicate the falsity of their antecedents.

> (34) ?? It’s raining, and if were raining, it would be cold.

But clearly, something like (33) is useful as well when it is known that _p_, because it enables us to infer that _q_. We should therefore expect that natural languages furnish us with some way to smoothly assert counterfactuals with known antecedents.

Now, it looks like direct causal claims of the form (32) are precisely _online_ versions of counterfactual knowledge of the form (33). Or, moving the other way, counterfactual knowledge is simply the _offline_ version of causal knowledge, in that it does not require the cause to really obtain (this observation is due to Kodsi p.c.). This is reassuring, given the tight link between causal and counterfactual knowledge: recall our opening discussion of eating berries versus eating pebbles. If I know that these berries nourish (directly cause one to be nourished), and I’ve eaten these berries, then I can infer that I’ll be nourished. I can also reason hypothetically: what would happen if I were to eat these berries? I can then deploy my causal knowledge against my eating those berries merely in my imagination, and infer that I would be nourished; this may make me decide to eat those berries. More generally, counterfactual reasoning looks precisely how we should expect causal reasoning to look if deployed against causes that occur only in the imagination. The combination of (32) and (33) delivers this.

We gain further reassurance about (32) as an account of direct causation when we reconsider the analogy with witnessing: natural paraphrases of ‘witnesses’ include ‘suffices for’ and ‘ensures that’, which can naturally be understood along the lines of (32). For instance, the following all seem equivalent.

 * The sunlight melted the snow.
 * The sunlight sufficed for the snow to melt.
 * The sunlight ensured that the snow would melt.
 * In all contextually relevant worlds where there was sunlight, as there is, the snow melted.

Of course, the sunlight is not a proposition; we can create a proxy proposition for it _ad hoc_, though. A candidate that works well for definite descriptions ‘the _F_’ is ‘there is an _F_’. However, for rigid names, the analogue is trivial, assuming necessitism for individuals.

This hypothesis (32) is notably austere, especially compared to extant accounts of causation. Simplicity is a general theoretical virtue. The simplicity of (32)—in particular, the weakness of its right-hand side—also makes direct causal knowledge well-suited to be central to our practical reasoning: it should be easy to get, and easy to use. On (32), direct causal cognition is also generally sound. For instance, from ‘_p_’ and ‘_p_ directly causes _q_’, it is natural to infer ‘_q_’; and from ‘Suppose action _a_ were taken’ and ‘_a_ would cause _b_’, it is natural to infer ‘If action _a_ were taken, _b_ would obtain’. On (32), these inferences are safe enough in most contexts to yield knowledge.

However, (32) contradicts strongly-felt judgments about direct causation, both about its general features and about whether it obtains in particular cases. If such judgments are fully reliable, then these features or cases constitute counterexamples to (32). We conjecture that such judgments are artefacts of generally reliable heuristics which break down in some situations, including the ones which make trouble for (32).

For instance, consider the candidate requirement that direct causes precede their effects: this might be an artefact of the fact that counterfactual knowledge that rolls forward in time, primarily enabling prediction, is generally more useful than counterfactual knowledge that rolls backward in time, primarily enabling retrodiction.

As another example, consider the candidate requirement that causes are necessary for their effects: this might be an artefact of the fact that necessary causes are those with the broadest antecedents, and so are the easiest to generalise because conditions similar to their antecedents are the likeliest to come about.

Yet another example is the candidate requirement that direct causes are agents: this might be an artefact of the fact that agents are those best positioned to act as is required to bring about their goals, and so are best positioned to ensure that some effect occurs (compare Martin 2018).

Of course, the above are merely promissory notes for more detailed error theories. We give slightly more depth, although by no means a conclusive discussion, about a candidate requirement on direct causation that seems to emerge implicitly in the discussion of Byrne (2021): namely, that no agents can be intermediate between a direct cause and its effect. For instance, for the king to kill his nephew—to directly cause his nephew to be killed—he must do it himself, rather than hiring a hitman. If the king causes his nephew to be killed by hiring a hitman, it seems as though the king did not directly cause his nephew to be killed.

However, there seem to be outright counterexamples, like (35) (Kodsi 2022).

> (35) By hiring an elite wealth management company, the businesswoman increased her wealth.

Here, it seems clear that the businesswoman very well could have increased her wealth—that is, directly caused her wealth to increase—despite doing so through an intermediate agent.

However, some examples do cut very strongly in the other direction, like (36).

> (36) # By tossing it to the dog, the child ate his broccoli.

We can recapture data like (36) without imposing a general ban on intermediate agents. For instance, it seems that a hallmark of modelling something as an agent is to consider that there is always some relevant possibility of it acting in a way different that how it actually does. For instance, there is a possibility—even if very small—that the dog in (36) would not eat the broccoli, and so the child’s tossing the broccoli to the dog did not suffice for the broccoli being eaten. Meanwhile, the wealth management company hired by the businesswoman in (35) is not modelled as an agent in this sense, because there is no relevant possibility of them acting other than so as to successfully increase the businesswoman’s wealth.

A less conciliatory diagnosis is that we judge whether some relation holds by comparing to prototypes of that relation. Our prototypes of eating all involve putting food into one’s own mouth, so the cases like (36) would not seem like eating (even if they were). Meanwhile, our prototypes of increasing one’s wealth are varied, and have no analogous common feature making intermediate agents seem odd.

However, these responses do not seem to shake the judgement that (36) is genuinely distinct from (37). No parents would accept feeding broccoli to the dog as their child having eaten the broccoli.

> (37) By tossing it to the dog, the child directly caused his broccoli to be eaten.

It is worth remembering at this point that the schemas which motivated the equivalence between (36) and (37) turned out to be inconsistent. It should be no surprise, then, if there turn out to be genuine counterexamples, such as (36) and (37). One way forward is to suggest that, even though direct causation is not salvageable, one can still consider sufficiency in context as an account of causation more generally. After all, it is hard to see, if (32) represents direct causation, what indirect causation is supposed to be. Indeed, Kodsi and Kaiserman (manuscript) defend sufficiency in context as an account of causation generally.{% include sidenote.html content = "Officially, they articulate it as a necessary condition for causation, rather than a necessary and sufficient condition." %} The preceding discussion, then, can be seen as an alternate route to their account, from trying to approximate the inconsistent relation of direct causation using a recent (and luckily, consistent) account from the semantics literature.

## Conclusion

Let us now recap. We have supposed that there is a privileged relationship of direct causation, which is the relationship expressed by lexical causal statements. We saw an initial regimentation of this idea from Byrne (2021):

> (6) _a_ **makes** _b_ _ϕ_<sub>i</sub> ⇔ _a_ _ϕ_<sub>t</sub> _b_

But we’ve noticed that it was artificially restricted to operators that exhibited passive intransitive forms. By replacing the intransitive in Byrne’s formulation with a generic passive, we arrived at the following more general schema:

> (11) _a_ **makes** (it such that) ∃_x_(_xϕb_) ⇔ _aϕb_

This schema looked initially very promising, promising to do for the metaphysics of causation what characterisations of knowledge as the broadest factive stative attitude did for epistemology, of metaphysical possibility as the broadest objective possibility did for modal metaphysics, and of absolutely universal quantification as the broadest restricted universal did for the logic of universal quantification. However, we proved that, in any suitably expressive and strong logic, there is no relation of direct causation for any type with more than one instance:

> (NDC) **∀**_σ_ (∃<sub>_σ_</sub>_x_ ∃<sub>_σ_</sub>_y_ (_x_ ≠ _y_) → ¬∃<sub>⟨_σ_,⟨_t_, _t_⟩⟩</sub> ∆ ∀<sub>⟨_σ_, _t_⟩</sub>_φ_ ∀<sub>_σ_</sub>_x_ □((_x∆_∃<sub>_σ_</sub>_q φq_) ↔ _φp_))

Even without such logical strength, we were able to prove that there is no relation of direct causation by propositions, due to the Russell-Myhill paradox: interpreting (11) with ‘_a_’ as a proposition leads to contradiction. We also noted that this result generalised to events, and that the argument could be given in English against Byrne’s restricted formulation. We saw that weakening the characterisation of direct causation looked obviously gerrymandered while still being susceptible to (NDC); and, indeed, a formal weakening trivialised the relation of direct causation so that all facts are directly caused by anything of any type.

We then considered Martin’s (2018) account of direct causation as _ab initio_ causal sufficiency. We made some revisions, motivated by metaphysical worries, that resulted in its convergence to sufficiency in context.

> (32) _p_ ∧ □(_p_ → _q_)

We saw that sufficiency in context perfectly fit the epistemological requirements given in our opening discussion of causal cognition, meshing well with Williamson’s (2020) account of counterfactuals and indeed being a version of the view of causation defended by Kodsi and Kaiserman (manuscript).

## References

* Bacon, A., & Dorr, C. (2024). Classicism. In P. Fritz & N. K. Jones (Eds.), _Higher-order metaphysics_ (pp. 109-190). Oxford University Press.
* Byrne, T. (2021). Making metaphysics. _Philosophers’ Imprint_, 21(20).
* Byrne, T. (2023). Legal causation. _Jurisprudence_, 14(1), 55-75.
* Byrne, T. (forthcoming). Saving and letting live. _Philosophy and Phenomenological Research_.
* Fritz, P. (2021). Ground and grain. _Philosophy and Phenomenological Research_, 105(2), 299-330.
* Kment, B. (2010). Causation: Determination and difference-making. _Noûs_, 44(1), 80-111.
* Kodsi, D. (2022). On byrne's making metaphysics.
* Martin, F. (2018). Time in probabilistic causation: Direct vs. indirect uses of lexical causative verbs. _ZAS Papers in Linguistics_, 61(1), 107-124.
* Strawson, P. F. (1959). _Individuals_. Routledge.
* Williamson, T. (2000). _Knowledge and its limits_. Oxford University Press.
* Williamson, T. (2003). Everything. _Philosophical Perspectives_, 17(1), 415-465.
* Williamson, T. (2013). _Modal logic as metaphysics_. Oxford University Press.
* Williamson, T. (2016). Modal science. _Canadian Journal of Philosophy_, 46(4-5), 453-492.
* Williamson, T. (2020). _Suppose and tell: The semantics and heuristics of conditionals_. Oxford University Press.
