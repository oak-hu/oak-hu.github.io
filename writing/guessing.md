---
layout: default
title: "Guessing"
date: 2024-08-13
tag: "2024 Summer Project"
---

# Corollary that Guessing Entails Truth

> This was reworked from my first tutorial essay for general philosophy with Bernhard Salow, who provided lots of helpful guidance and encouraged me to submit the end result to *JPhil*. It made it past the desk screening and went out for review, but the journal (correctly!) went instead with Haziza's much better reply, 'How Knowledge Entails Truth'. My thinking about the place of deduction in philosophy has changed a lot since writing, thanks to Tim Williamson (on abduction) and Daniel Kodsi (on inconsistency as self-disagreement). I learned a lot through the process of writing this, and mostly stand behind it.

**Abstract:** _Brent Kyle’s “Proof that Knowledge Entails Truth” gives an unorthodox proof for one of the most orthodox claims in epistemology: a proposition must be true to be known. I give a parallel proof for the claim that a proposition must be true to be guessed. The clear flaws in the parallel proof illuminate analogous problems in Kyle’s original proof: if his opponents grant his first premise, they incur no marginal cost in denying his second premise (and vice versa). So, Kyle’s proof fails to do any dialectical work._

A valid argument compels one to accept its conclusion or deny a premise. If those who deny the conclusion are embarrassed by denying a premise, then their views become that much costlier. To do any such dialectical work, it must be that no (essential) premise can be easily denied by those who deny the conclusion. So, contra Kyle, it is not enough that each premise “can be rationally accepted” by those who deny the conclusion.{% include sidenote.html content="Nor is it required that those who deny the conclusion can rationally accept all premises together at once: if the argument is valid, such a combination is inconsistent." %} Consider:

> (1)
> 
> (i) Snow is white, or all ravens are black.
> 
> (ii) Snow is white, or not all ravens are black.
> 
> (iii) Snow is white.

Both (i) and (ii) can be rationally accepted by those who deny (iii), since each has a rationally acceptable second disjunct. But (1) is clearly uncompelling for those who deny (iii): if they affirm (i), they easily deny (ii), and vice versa.

Like (1), Kyle’s proof fails to make costlier the views of his opponents, who can easily deny crucial premises. To show this, I put us in the position of Kyle’s opponents using a parallel version of his proof (§I). It has the same structure as the original proof, but its structural flaws are easier to see (§II). This illuminates the same flaws in Kyle’s proof (§IV): the proofs are “companions in guilt”.{% include sidenote.html content="By proof, I just mean a deductively valid argument; proofs need not be sound or compelling." %}

To begin, I set up the views that each proof attacks. Let *φ* be an attitude (e.g., knowledge, guessing) held by individuals *s* towards propositions *p* or polar questions *?p* (i.e., whether or not *p*). Let (V), for veridical, be the claim that if one holds *φ* towards some proposition *p*, then *p* is true:{% include sidenote.html content="Throughout, principles stated with <em>s</em> and <em>p</em> free are understood to be bound by ∀<em>s</em>∀<em>p</em>." %}

> (V) *sφp* → *p*

Kyle’s proof concludes that (V) is true for knowledge, while my parallel proof concludes that (V) is true for guessing. Let (Link) be the claim that if one holds *φ* towards *p*, then one holds *φ* towards the polar question about *p*:

> (Link) *sφp* → *sφ?p*

For both knowledge and guessing, one’s strategy for resisting the proof of (V) depends on whether one affirms or denies (Link).

My parallel proof must fail somewhere, because (V) is false for guessing. Consider:

> (2) Sydney wins if she guesses whether or not the coin will land Heads. She guesses that it will, but loses (as it lands Tails).

In (2), Sydney holds the attitude of guessing towards the false proposition that the coin would land Heads. So, (V) is false for guessing. Call (2) a strict counterexample to (V), since Sydney did not also correctly guess that the coin would land Tails.{% include sidenote.html content="Let there be a strict counterexample to (V) for <em>φ</em> when ◇∃<em>s</em>∃<em>p</em>(¬<em>p</em> ∧ <em>sφp</em> ∧ ¬<em>sφ</em>¬<em>p</em>)." %}

Further, merely guessing (incorrectly) that the coin would land Heads was insufficient for Sydney to win. At least at first pass, this suggests that (Link) is false for guessing. To maintain (Link), one might hold that (2) is misdescribed. Perhaps its first sentence only suggests pragmatically that a correct guess is required: if taken literally, Sydney should have won.

Alternatively, one might hold that *guess* is ambiguous: (V) is true for a *strong* reading (roughly, ‘make a correct guess’) but false for a *weak* reading (roughly, ‘make a guess’).{% include sidenote.html content="E.g., Spector & Egré (2015), Mayr (2019). Chinese, French, or German would lexicalize the strong reading as <cjk>猜到</cjk>, <em>deviner</em>, or <em>erraten</em>, and the weak reading as <cjk>猜</cjk>, <em>predire</em>, or <em>raten</em>." %} Perhaps (2) uses strong *guess* in its first sentence and weak *guess* in its second sentence. Even if (Link) is false when it equivocates between the two readings of *guess*, it may still be true for each reading individually. To maintain this ambiguity view, on which (V) is false for a weak reading of *guess*, one must resist the proof of (V) with each occurrence of *sφp* read using weak *guess*. My (Link) affirming strategy applies when each occurrence of ⌈*sφ?p*⌉ is also read using weak *guess*, whereas my (Link) denying strategy applies when these are instead read using strong *guess*.{% include sidenote.html content="The (Link) denying strategy applies instead if one denies (Link) for some other reason: e.g., if weak <em>guess</em> cannot be held towards polar interrogatives." %} Analogous remarks apply if one holds that *know* is likewise ambiguous.{% include sidenote.html content="E.g., Tsohatzidis (2012), Dahlman (2017); the latter, for Italian <em>sapere</em>, argues that interrogative complements force the strong reading, thus denying (Link) for weak <em>sapere</em>." %}

Although their motivations vary, I assume for now that Kyle’s opponents hold that (V) has strict counterexamples, and either affirm or deny (Link).

## I. The parallel proof

I reconstruct Kyle’s proof with a generic attitude *φ* in place of knowledge.{% include sidenote.html content="With Kyle’s labels, (V) is (KT), (Link) is (TW), (V<sub>?</sub>) is (WT), (Strict) is (Consistency), (Link<sup>↔</sup>) is (DEF1), (Link<sup>∀φ</sup>) is (Modified-That-to-Whether), (V<sub>?</sub><sup>∀Q</sup>) is (Reductive View), and (V<sub>?</sub><sup>↔</sup>) is (DEF2)." %} To read this as a proof about guessing, read ⌈*sφp*⌉ as ⌈*s* guesses that *p*⌉ and read ⌈*sφ?p*⌉ as ⌈*s* guesses whether or not *p*⌉.

> (Link) *sφp* → *sφ?p*
> 
> ‘Guessing that *p* entails guessing whether or not *p*.’
>
> (V<sub>?</sub>) (¬*p* ∧ *sφ?p*) → *sφ*¬*p*
>
> ‘Given ¬*p*, guessing whether or not *p* entails guessing that ¬*p*.’
>
> (Strict) *sφp* → ¬*sφ*¬*p*
> 
> ‘Guessing that *p* rules out guessing that ¬*p*.’
>
> (V) *sφp* → *p*
> 
> ‘Guessing that *p* entails *p*.‘

The argument is valid.{% include sidenote.html content="Suppose <em>sφp</em>. By (Strict), we have ¬<em>sφ</em>¬<em>p</em>. By (Link), we have <em>sφ?p</em>. Assume ¬<em>p</em> for sake of contradiction. Then, since we have <em>sφ?p</em>, by (V<sub>?</sub>) we would have <em>sφ</em>¬<em>p</em>, contradicting ¬<em>sφ</em>¬<em>p</em>. Thus, we have <em>p</em>. The fact that our initial supposition entails <em>p</em> is (V)." %} Here is a rough intuitive gloss: guessing-that requires guessing-whether, which requires guessing correctly. So, if one guesses that *p*, then *p* must be correct.{% include sidenote.html content="Note that this gloss fails for an attitude like <em>being fifty-fifty</em>." %}

Now, I depart from Kyle’s proof. One might worry about counterexamples to (Strict): perhaps I can know an approximate truth while knowing it to be strictly false,{% include sidenote.html content="As Kyle notes, Schaffer (2021) argues that this is a problem for Buckwalter & Turri (2020)." %} or perhaps I can guess contradictory outcomes in an arbitrage bet. Whereas Kyle counters such worries with supporting arguments for (Strict), I argue that such worries are irrelevant. One cannot escape the proof by rejecting only (Strict), because a weaker premise suffices for the proof:{% include sidenote.html content="It is weaker: taking ¬<em>p</em> ∧ <em>s</em><sub>1</sub><em>φp</em> ∧ ¬<em>s</em><sub>1</sub><em>φ</em>¬<em>p</em> and ∀<em>p</em>(<em>s</em><sub>2</sub><em>φp</em> → <em>p</em>) makes (Strict*) true but (Strict) false; meanwhile, (Strict) makes (Strict*)’s antecedent immediately entail its consequent. It suffices: assuming <em>sφp</em> and ¬<em>p</em>, we have <em>sφ?p</em> by (Link) and so <em>sφ</em>¬<em>p</em> by (V<sub>?</sub>); this entailment is the negation of (Strict*)’s consequent, so we have the negation of (Strict*)’s antecedent, which is (V)." %}

> (Strict\*) ◇∃*s*∃*p*(¬*p* ∧ *sφp*) → ◇∃*s*∃*p*(¬*p* ∧ *sφp* ∧ ¬*sφ*¬*p*)
> 
> ‘If there are false guesses, some of them do not involve a true guess.’

Whereas Kyle’s (Strict) requires *all* of (V)’s counterexamples to be strict, my (Strict*) only requires *some* of them to be strict (if there are any at all). (Strict*) is false of some attitudes, such as *being fifty-fifty*.{% include sidenote.html content="Notice that (Link) and (V<sub>?</sub>) are true while (V) is false for <em>being fifty-fifty</em>; the falsity of (Strict*) is actually what prevents the proof from going through for this attitude." %} However, it seems difficult to deny (Strict*) for knowledge or guessing: (V) affirmers deny (Strict*)’s antecedent; by assumption, (V) deniers accept (Strict*)’s consequent. So, the proof of (V) for both knowledge and guessing hinges on (Link) and (V<sub>?</sub>).

Luckily, Kyle gives two supporting arguments for (Link) and three for (V<sub>?</sub>). These rely on some specific features of knowledge. But as we will see, guessing has all of the relevant features. The one exception is (V) itself: we can overcome the supporting arguments just by denying (V) for guessing. But Kyle’s opponents deny (V) for knowledge, and so can just as easily overcome the supporting arguments in the case of knowledge.

Here is the first argument (Arg-1.1) supporting (Link). First, (Link) is intuitively compelling: it does seem like whenever I guess that *p*, I have thereby taken a guess as to whether or not *p*! Consider the following definition, applied to guessing-whether:

> (Link<sup>↔</sup>) *sφ?p* ↔ (*sφp* ∨ *sφ*¬*p*)
> 
> ‘Guessing whether or not *p* is just either guessing *p* or ¬*p*.’

This is also intuitively compelling. If my sister asks me to guess whether or not she got the promotion, I fulfill her request just by making either a guess that she did or a guess that she did not. Now, the right-to-left direction of (Link<sup>↔</sup>) clearly entails (Link). Meanwhile, (Link<sup>↔</sup>) does not by itself entail (V). So, Kyle reasons that “the mere refusal to accept [(V)] provides no grounds for resisting [(Link)].”

Here is the second argument (Arg-1.2) supporting (Link). Plausibly, *whether* turns declarative complements into logically weaker polar interrogative complements by the following principle:

> (Link<sup>∀φ</sup>) “For any verb *V*, if *V* takes both *that*- and *whether-or-not* complements, then *s V that p* entails *s V whether or not p* unless *s V that p* is synonymous with a negation.”{% include sidenote.html content="The last clause rules out (fictitious verbs synonymous with) predicates like <em>never said</em>." %}

Kyle says that this seems empirically well-supported, and reasons that it applies to all verbs (and so to the verb at issue) if it follows from the meaning of *whether*.

Now, here is the first argument (Arg-2.1) supporting (V<sub>?</sub>). First, (V<sub>?</sub>) is intuitively compelling: it does seem like whenever ¬*p*, *managing* to guess whether or not *p* requires guessing that ¬*p*. Consider the following definition, applied to guessing-whether:

> (V<sub>?</sub><sup>↔</sup>) *sφ?p* ↔ ((*p* → *sφp*) ∧ (¬*p* → *sφ*¬*p*))
>
> ‘Guessing whether or not *p* is just guessing *p* if *p*, and ¬*p* if ¬*p*.’

This is also intuitively compelling. If an early civilization managed to guess whether or not the Earth was round, this just means that they managed to guess correctly; any who thought that the Earth was flat thereby failed to guess whether or not it was round. Now, the left-to-right direction of (V<sub>?</sub><sup>↔</sup>) clearly entails (V<sub>?</sub>). Meanwhile, (V<sub>?</sub>) does not immediately entail (V). So, Kyle reasons that this argument “should thus be amenable to those who do not already accept [(V)].”

Here is the second argument (Arg-2.2) supporting (V<sub>?</sub>). Plausibly, the meaning of *guess* with interrogative complements is related to its meaning with declarative complements by the following principle. Let *Q* be a (possibly non-polar) question, and let *aQ* be the true answer to *Q*:

> (V<sub>?</sub><sup>∀Q</sup>) ⌈*sφQ*⌉ ↔ ⌈*sφaQ*⌉
> Guessing towards a question is just guessing the true answer.

The left-to-right direction of (V<sub>?</sub><sup>∀Q</sup>) clearly entails (V<sub>?</sub>), with *Q* as *?p*. One might worry that this argument question-begs against those who deny (V<sub>?</sub>), but Kyle reasons that “those who doubt the condition can rest assured that [(V<sub>?</sub>)] will soon be supported by a third argument, which is independent of [(V<sub>?</sub><sup>∀Q</sup>)].”

Here is the third argument (Arg-2.3) supporting (V<sub>?</sub>). Let *ψ* be divination: read ⌈*sψp*⌉ as ⌈*s* divines that *p*⌉ and ⌈*sψ?p*⌉ as ⌈*s* divines whether or not *p*⌉.

> (P1) (¬*p* ∧ *sψ?p*) → *sψ*¬*p*
>
> ‘Given ¬*p*, divining whether or not *p* entails divining that ¬*p*.’
>
> (P2) *sψp* → *sφp*
>
> ‘Divining *p* entails guessing *p*.’
>
> (P3) □∀*s*∀*p*((¬*p* ∧ *sφ?p*) → *sφ*¬*p*) → ◇∃*s*∃*p*(¬*p* ∧ *sψ?p* ∧ ¬*sφ*¬*p*)
>
> ‘If [(V<sub>?</sub>)] is false, then it has a possible counterexample where the subject [guesses] via [divination].’{% include sidenote.html content="My translation of (P3) captures only the load-bearing part of Kyle’s term <em>via</em>." %}

These three premises jointly entail (V<sub>?</sub>) for *φ*.{% include sidenote.html content="Assume ¬(V<sub>?</sub>) for <em>φ</em> for sake of contradiction. Then by (P3) we would have a possible <em>s</em> and <em>p</em> such that ¬<em>p</em> ∧ <em>sψ?p</em> ∧ ¬<em>sφ</em>¬<em>p</em>. By (P1), our first two conjuncts would yield <em>sψ</em>¬<em>p</em>, which by (P2) would yield <em>sφ</em>¬<em>p</em>, contradicting our third conjunct. Thus (V<sub>?</sub>) is true for <em>φ</em>." %} Stipulating that divination is some way of guessing correctly yields (P1) and (P2).{% include sidenote.html content="(P1) just says that (V<sub>?</sub>) is true for <em>ψ</em>. Kyle’s original argument makes reference to the idea that many attitudes can serve as <em>ψ</em> when <em>φ</em> is knowledge: the chosen attitude (seeing) can be replaced, and challenging this argument for all of these attitudes is supposed to be more difficult." %} As for (P3), Kyle reasons that “there is absolutely no reason to reject” it:

> Clearly, it is possible to [guess] via [divination]. [(P3)] merely combines this possibility with [this tautology: ¬□∀*s*∀*p*((¬*p* ∧ *sφ?p*) → *sφ*¬*p*) → ◇∃*s*∃*p*(¬*p* ∧ *sφ?p* ∧ ¬*sφ*¬*p*)]. And there is nothing in [the tautology] that would forbid such a combination. If there is a possible counterexample to [(V<sub>?</sub>)], we surely do not render it impossible by stipulating that the subject [guesses] via [divination].

The premise “is thus unassailable”.

This completes the proof of (V), with supporting arguments for both contentious premises. To resist it, we must (as Kyle reasons) “reject a premise of the main argument, along with every supporting argument for that premise. This is an onerous path.”

## II. Resisting the parallel proof

I now show that the proof of (V) for guessing is uncompelling. In particular, if we accept the first premise (Link), then we can costlessly deny the second premise (V<sub>?</sub>) and vice versa.

First, suppose we accept (V<sub>?</sub>). Then we naturally deny (Link): if guessing-whether requires guessing correctly, then merely making a guess does not suffice for guessing-whether. More carefully: (V<sub>?</sub>) says that *φ* towards some *?p* requires *φ* towards the true answer, if this is ¬*p*. In (V)’s strict counterexamples, one has *φ* towards *p* but lacks *φ* towards the true answer ¬*p* of *?p*, and so by (V<sub>?</sub>) lacks *φ* towards *?p*. This contradicts (Link), which says that *φ* towards *p* entails *φ* towards *?p*. Arguments from (Link) question-beg against those who deny (V) but affirm (V<sub>?</sub>).

(Arg-1.1) relies on (Link<sup>↔</sup>), which likewise conflicts with (V<sub>?</sub>). The intuitive plausibility of (Link<sup>↔</sup>) also disappears if we accept (V<sub>?</sub>) since we regard *φ* as more demanding for polar interrogatives than for propositions.

(Arg-1.2) relies on (Link<sup>∀φ</sup>), which likewise conflicts with (V<sub>?</sub>). Further, our position on *φ* makes us more comfortable with taking the same position in other cases. So, we can cite data like (3), which defeasibly support denying both (V) and (Link) for each verb, while also undermining (Link<sup>∀φ</sup>):

> (3) If Claude had *x* whether or not it would rain, we would have watered the plants. We did not, since he actually *x* wrongly that it would rain.

with *x* as *announced, confirmed, concluded, considered, contemplated, decided, declared, established, explained, guessed, heard, indicated, inferred, predicted, reported, told us*, etc.{% include sidenote.html content="List of verbs from Mayr (2019)." %} (Link<sup>∀φ</sup>) seems to judge wrongly that (3) is unacceptable: it says that Claude’s announcement that it would rain entails an announcement as to whether or not it would rain, which (3) says was absent.

So, (Link), (Link<sup>↔</sup>) and (Link<sup>∀φ</sup>) seem clearly false if we accept (V<sub>?</sub>). The intuitive support for (Link<sup>↔</sup>) drops away, and we may similarly undermine the trend supporting (Link<sup>∀φ</sup>).

Now, suppose we accept (Link). Then we naturally deny (V<sub>?</sub>): if guessing *p* entails guessing *?p* then incorrectly guessing *p* entails incorrectly guessing *?p*. More carefully: in (V)’s strict counterexamples, one holds *φ* towards some false *p* without also holding *φ* towards ¬*p*. By (Link), this is sufficient for holding *φ* towards *?p*. This contradicts (V<sub>?</sub>), which says that holding *φ* towards *?p* requires holding *φ* towards ¬*p*. Arguments from (V<sub>?</sub>) question-beg against those who deny (V) but affirm (Link).

(Arg-2.1) and (Arg-2.2) rely on (V<sub>?</sub><sup>↔</sup>) and (V<sub>?</sub><sup>∀Q</sup>), which likewise conflict with (Link). The intuitive plausibility of (V<sub>?</sub><sup>↔</sup>) and (V<sub>?</sub><sup>∀Q</sup>) might come from a default tendency for *φ* towards *?p* to imply *φ* towards its true answer.{% include sidenote.html content="E.g., Mayr 2019." %} However, by denying (V<sub>?</sub>), we deny that this default tendency always prevails. Consider:

> (4) I asked three people to guess whether or not I would win; one refused, while the two who did both got it wrong.

So, the initial pull of (V<sub>?</sub>) and its generalizations does not ultimately give us reason to accept these principles.

(Arg-2.3) relies on (P3), which we should reject. Recall that (P3) says that if (V<sub>?</sub>) has counterexamples, then some of them involve *φ* via *ψ*. But, contra Kyle, one does “render [a counterexample] impossible by stipulating that [*φ* obtains via *ψ*]”. I can *φ* incorrectly, and I can *φ* via some correct method, but I cannot do both at once.{% include sidenote.html content="Or: if a counterexample to (V<sub>?</sub>) for <em>φ</em> is via <em>ψ</em>, it would also be a counterexample to (V<sub>?</sub>) for <em>ψ</em>, i.e., (P1)." %} More carefully: if *φ* towards *?p* obtains via *ψ*, then by (P1) there is *ψ* towards the true answer and so by (P2) there is *φ* towards the true answer. But in any counterexample to (V<sub>?</sub>), there must not be *φ* towards the true answer of *?p*. The class of situations which falsify (V<sub>?</sub>) is disjoint from the class of situations which involve *φ* obtaining via *ψ*, since these are subclasses of complementary classes (namely, the class of situations which do not involve *φ* towards the true answer of a polar question vs. the class of situations which do). This is so even if both of these classes are nonempty: one cannot “merely combine” two possibilities when they are incompossible.

So, (V<sub>?</sub>), (V<sub>?</sub><sup>↔</sup>), and (V<sub>?</sub><sup>∀Q</sup>) seem clearly false if we accept (Link). Any lingering intuitive support can be explained by a strong default trend. Meanwhile, it is absolutely untenable to accept (P3) nonvacuously.

Since we deny (V), the proof of (V) presents us with a trilemma: we must deny (Link), (V<sub>?</sub>), or (Strict*). If all three options are costly, then the trilemma makes denying (V) that much harder. But the first two options are both costless, so the proof fails to do any dialectical work.

## III. Objections

Kyle considers two objections against (Link) and three objections against (V<sub>?</sub>). The two against (Link) are dissimilar from the problems that I raise here, and I accept that they ultimately fail. However, the three against (V<sub>?</sub>) are similar to the problems that I raise here, so I must address Kyle’s responses.

The first objection:

> [(V<sub>?</sub>)] says that [guessing]-whether-or-not-p requires one to [guess] the truth and [we] take issue with the latter.

Kyle’s response:

> This worry is confused. Those who deny [(V)] can and do allow for the possibility of [guessing] truths. Compare: we all deny that belief entails truth, but can still allow for the possibility of believing truths.

Kyle is correct here. This objection should make clear that it targets the requirement of *only ever* guessing truths,{% include sidenote.html content="At least when the truth is a negative answer to the polar question." %} not the possibility of *sometimes* guessing truths. With such a clarification, this objection rightly complains that (V<sub>?</sub>) question-begs against (V) deniers who accept (Link) and so deny (V<sub>?</sub>).

The second objection:

> It is possible for a subject to [guess] that p even though ¬*p*. This entails that the subject [guesses] whether or not *p*. It also entails that she does not [guess] ¬*p*. All together, these claims supply a counterexample to [(V<sub>?</sub>)].

Kyle’s response:

> Does this approach work? No. It overlooks the fact that there are two other ways to overturn the main argument. First, one could derive ¬[(Strict)] from [(V<sub>?</sub>)], [(Link)], and ¬[(V)]. And second, one could derive ¬[(Link)] from [(V<sub>?</sub>)], [(Strict)], and ¬[(V)]. This raises a problem: if one of these three strategies is sound, then the other two are unsound. And we have seen no reason to think [your] targeting of [(V<sub>?</sub>)] is not one of the unsound attempts.

Kyle is right that this objection gives the original proof’s proponent no reason to think that the reverse proof is sound. But the proponent must accept all of the original premises and the validity of the reverse proof. So, this complaint is just that the proponent is given no reason to think that their original conclusion is false. But a reversal can defend from the proponent’s proof without also attacking the proponent’s position. A reversal points out that one is happier to deny a premise than to accept the original conclusion, and so will not be convinced by the original proof. (However, to the extent that denying a premise is costly, then the original proof may still do dialectical work.)

The third objection makes a more sophisticated appeal to the connection between (V<sub>?</sub>) and (V). It argues that no relevant attitudes make (V<sub>?</sub>) true and (V) false.{% include sidenote.html content="See §6.4 of Theiler et al. 2018." %} In other words, (V<sub>?</sub>) and the principles supporting it are actually parasitic on (V): if one denies (V), one must deny those principles as well. This is a very natural line for (V) deniers to adopt.{% include sidenote.html content="Although it is closed to those committed to (V<sub>?</sub>), e.g., Dahlman (2017), and is more difficult for those who deny (Strict*) (see Theiler et al. 2018; note that Fact 6 can be strengthened using (Strict*)’s obvious analogue in place of (Strict)’s analogue, the choice property." %} Kyle’s response to this objection relies on (P3) from (Arg-2.3). But as shown (§II), anyone who does not accept (P3) vacuously must reject it, and does so with no difficulty.

## IV. Resisting the original proof

One might have noticed that §II and §III made no essential reference guessing: *know* can be easily substituted throughout. Thus, the replies can be directly read off in response to Kyle’s original proof about knowledge, with two exceptions.

The first exception is that Kyle’s original (Arg-2.3) makes an additional point, which I did not adapt and so did not address: when *φ* is knowledge, there are many candidate *ψ* (seeing, hearing, etc., not just divination). This versatility is supposed to make the argument more robust: if just a single *ψ* succeeds, Kyle’s opponent is in trouble. However, since we have seen why (P3) is inherently flawed for any *ψ*, this does not actually help.

The second exception is that the intuitive support for (V<sub>?</sub>), (V<sub>?</sub><sup>↔</sup>), and (V<sub>?</sub><sup>∀Q</sup>) seems more robust for knowledge than for guessing. It is harder to argue that our intuitions tracks a default tendency which sometimes fails, if we cannot exhibit such failures. However, this is neither a new problem nor an increase in the severity of an old problem. (V) deniers already reject the vast intuitive support for (V); this makes it much cheaper for them to reject the intuitive support for (V<sub>?</sub>) and its generalizations. This conflict is fully expected and causes no additional embarrassment, especially if one adopts the line (SIII) that (V<sub>?</sub>) and its generalizations are ultimately parasitic on (V). But even if I am wrong to dismiss this exception as unproblematic, it would turn out that Kyle’s proof ultimately relies on linguistic intuitions that (V) deniers might have trouble explaining away. This would still be a problem for Kyle, who frames his proof is “a new argument in favor of [(V)]. By contrast to standard arguments, the present one does not posit [(V)] as an explanation of how the word ‘knows’ is used”.

So far, I have assumed that all (V) deniers hold that (V) has strict counterexamples. However, some (V) deniers might deny that this. Perhaps they hold that the only exceptions to (V) obtain when one knows an approximate truth while being aware of its strict falsity. They must contend with Kyle’s supporting arguments for (Strict), which entails (Strict*). They also could not appeal to my points about question-begging, which assumed (Strict*). The analogue of their views seems untenable for guessing, while attitudes (such as *being 50/50*) which make the analogous views plausible seem so different from knowledge that the replies available for these attitudes may be unavailable for knowledge. So, the “companions in guilt” strategy may not help. Although Kyle suggests that at least some of his opponents might respond by rejecting (Strict), this line may actually have the most trouble: it must also reject the weaker and so more plausible (Strict*), and it gets no help from a “companions in guilt” strategy.

I have also assumed that (V) deniers either affirm or deny (V<sub>?</sub>). If one is instead undecided, there initially seems to be room for Kyle’s proof to do some dialectical work. Imagine the following sequence: (Link) seems intuitively plausible, and so it seems implausible to deny (Link) while denying (V); meanwhile, (V<sub>?</sub>) also seems intuitively plausible, and since (V<sub>?</sub>) entails the denial of (Link), it also seems implausible to affirm (Link) while denying (V<sub>?</sub>). Then, the only plausible option left is to accept (V). But this sequence seems deeply unlikely. Undecided (V) deniers very naturally accept (Link) and so deny (V<sub>?</sub>): as noted (SIII), (V<sub>?</sub>) might be parasitic on (V). Many (V) deniers for knowledge who do not explicitly address (V<sub>?</sub>) involve knowledge toward polar interrogatives in their arguments, and so seem to implicitly take (V<sub>?</sub>) to fall with (V).{% include sidenote.html content="E.g., Hazlett (2010), Bricker (2018)." %} These (V) deniers would likely find (V<sub>?</sub>) immediately suspicious: if one can falsely know-that, surely one can falsely know-whether! Even if some do find (V<sub>?</sub>) intuitively plausible, they may disregard this intuition just as they already disregard the intuitions supporting (V).

However, I grant that the sequence imagined here is at least theoretically possible. But if that is enough for Kyle’s proof to be successful, then the proof about guessing is successful as well. The sequence is also possible for the proof about guessing, since both (Link) and (V<sub>?</sub>) for guessing can seem intuitively plausible (SI).{% include sidenote.html content="One diagnosis is that (Link) sounds plausible with weak <em>guess</em>, while (V<sub>?</sub>) sounds plausible with strong <em>guess</em>. A similar line is open for those who take <em>know</em> to be likewise ambiguous." %} Rather than “companions in guilt”, the proofs would be “companions in innocence”. Unfortunately, this imaginary success does not actually make the proof of (V) successful. The proof provides no compelling reason for its opponent to accept either (Link) or (V<sub>?</sub>).

## V. Conclusion

Suppose that a mathematician attempts to prove a widely-believed conjecture about ℝ<sup>2</sup>. Without realizing it, she essentially relies upon just a few properties of ℝ<sup>2</sup>, ones held in common with all ℝ<sup>n</sup>. The purported proof then generalizes easily; it is stronger than it first appears. Usually, this would be a welcome discovery. But if the conjecture is false for, say, ℝ<sup>4</sup>, then the original proof about ℝ<sup>2</sup> must have been flawed. The attempted proof should do nothing to convince those who doubt the widely-believed conjecture.

Kyle’s proof that knowledge entails truth essentially relies upon just a few properties of knowledge, ones held in common with some other attitudes. So, Kyle’s proof generalizes easily; it is stronger than it first appears. Usually, this would be a welcome discovery. But if (V) is false for one of these other attitudes, then the original proof about knowledge must have been flawed. Kyle’s proof should do nothing to convince those who doubt that knowledge entails truth.

In this note, I have argued that guessing is such an attitude. The essential elements of Kyle’s proof can be fully adapted into a parallel proof about guessing (SI). But (V) is false for guessing. Further, our response (§II) to the parallel proof relied upon only properties shared by both guessing and knowledge (SIV). So, these responses are equally available to Kyle’s opponents. Although Kyle hopes that his proof “should hold sway with those who do not already accept [(V) for knowledge]”, it unfortunately fails to impose any meaningful cost on his opponents’ views. If (V) for knowledge is an open question, it is not resolved by Kyle’s proof.

## References

* Bricker, A. M. (2018). *Visuomotor noise and the non-factive analysis of knowledge* [Doctoral dissertation, University of Edinburgh]. The University of Edinburgh.
* Buckwalter, W., & Turri, J. (2020). Knowledge and truth: A skeptical challenge. *Pacific Philosophical Quarterly*, 101(1), 93-101.
* Dahlman, R. C., & van de Weijer, J. (2019). Testing factivity in italian. experimental evidence for the hypothesis that italian sapere is ambiguous. *Language Sciences*, 72, 93-103.
* Hazlett, A. (2010). The myth of factive verbs. *Philosophy and Phenomenological Research*, 80(3), 497-522.
* Kyle, B. G. (n.d.). Proof that knowledge entails truth.
* Mayr, C. (2019). Triviality and interrogative embedding: Context sensitivity, factivity, and neg-raising. *Natural Language Semantics*, 27, 227-278.
* Shaffer, M. J. (2021). Can knowledge really be non-factive? *Logos and Episteme: An International Journal of Epistemology*, 12(2), 215-226.
* Spector, B., & Egré, P. (2015). A uniform semantics for embedded interrogatives: An answer, not necessarily the answer. *Synthese*, 192, 1729-1784.
* Theiler, N., Roelofsen, F., & Aloni, M. (2018). A uniform semantics for declarative and interrogative complements. *Journal of Semantics*, 35(3), 409-466.
* Tsohatzidis, S. L. (2012). How to forget that “know” is factive. *Acta Analytica*, 27, 449-459.
