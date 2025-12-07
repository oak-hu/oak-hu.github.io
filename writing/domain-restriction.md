---
layout: default
title: "Domain Restriction"
date: 2025-11-18
tag: "Philosophy of Language (Week 6)"
---

# Domain Restriction

> The following is a tutorial essay for Philosophy of Logic and Language with James Kirkpatrick. In effect, it is a quick agenda for an hour-long discussion on a guiding question, which for this week was ‘What does “Every bottle is in the fridge” mean? How does your answer explain how we commonly use that sentence?’ A free-standing and much more readable version of some of the material may eventually go up on my [Substack](https://offhandquibbles.substack.com).

Consider the sentence (1).

> (1) Every bottle is in the fridge.

Given the Russellian analysis of definite descriptions defended in Week 1, (1) has the structure made explicit in (2).

> (2) ∃*y*<sub>1</sub>∀*y*<sub>2</sub>((*y*<sub>1</sub> = *y*<sub>2</sub> ↔ *Fy*<sub>2</sub>) ∧ ∀*z*(*Bz* → *Iy*<sub>2</sub>*z*))

In (2), the predicate ‘*F*’ denotes (λ*x*. *x* is a fridge), ‘*B*’ denotes (λ*x*. *x* is a bottle), and ‘*I*’ denotes (λ*x*<sub>1</sub>*x*<sub>2</sub>. *x*<sub>1</sub> is in *x*<sub>2</sub>). In English, we might read (2) as (3).

> (3) There is something, such that *it*<sub>1</sub> and only *it*<sub>1</sub> is fridge, and if something<sub>2</sub> is a bottle then *it*<sub>2</sub> is in *it*<sub>1</sub>

Now, consider the sentence (4).

> (4) Every bottle in England is in the fridge.

As above, (4) has the structure made explicit in (5).

> (5) ∃*y*<sub>1</sub>∀*y*<sub>2</sub>((*y*<sub>1</sub> = *y*<sub>2</sub> ↔ *Fy*<sub>2</sub>) ∧ ∀*z*(*Iez* → (*Bz* → *Iy*<sub>2</sub>*z*)))

In (5), the constant ‘*e*’ denotes England. If all the other symbols, including the logical constants, in (5) mean what they do in (2), then (2) entails (5). That is, it cannot be that (2) is true unless (5) is true as well. If the translation from (1) into (2) and from (4) into (5) is good, then it cannot be that (1) is true unless (4) is true as well.

But suppose that every bottle that we own is in the fridge, yet there are some bottles in England—of course, not ones that we own—which are not in the fridge. In this case, it is natural to judge that (1) is true but (4) is false. How can this be?

One place not to look for problems is the particular translations of (1) into (2) and (4) into (5). For although the translations enable us to use formal resources to deduce the entailment from (2) to (5), such a deduction can be carried out in natural language as well. If every bottle is in the fridge, then _a fortiori_—every one of them that is in England is in the fridge. That is, if every bottle is in the fridge, then every bottle in England is in the fridge. Such reasoning is clearly sound in other cases: if every shirt is in the drawer, then _a fortiori_—every one of them that is red is in the drawer.

A tempting answer is that, when we judge that (1) is true in the situation, we do not really mean that every bottle is in the fridge. Instead, we mean something like (6).

> (6) Every bottle of ours is in the fridge.

As above, (6) has the structure made explicit in (7).

> (7) ∃*y*<sub>1</sub>∀*y*<sub>2</sub>((*y*<sub>1</sub> = *y*<sub>2</sub> ↔ *Fy*<sub>2</sub>) ∧ ∀*z*(*Oz* → (*Bz* → *Iy*<sub>2</sub>*z*)))

In (7), the predicate ‘*O*’ denotes (λ*x*. *x* is ours). Now, (7) does not entail (5), logically or otherwise. If we are, for some reason or other, indeed substituting (6) for (1) when judging it, then this seems to explain why we assent to (1) but not to (4) in the given situation. Indeed, upon considering (4) and (6), we are tempted to revise our assessment of (1). Consider also the following dialogue.

> (8)
>
> A: Every bottle is in the fridge.
>
> B: I threw out a bottle last week—you dug it out of the trash to put back in the fridge? That’s disgusting.
>
> A: Obviously not! I meant that every bottle that we still have is in the fridge.

Notably, even though (1) can be thus interpreted as something like (6), (4) cannot be interpreted as something like (9).

> (9) Every bottle of ours in England is in the fridge.

As above, (9) has the structure made explicit in (10).

> (10) ∃*y*<sub>1</sub>∀*y*<sub>2</sub>((*y*<sub>1</sub> = *y*<sub>2</sub> ↔ *Fy*<sub>2</sub>) ∧ ∀*z*(*Oz* → (*Iez* → (*Bz* → *Iy*<sub>2</sub>*z*))))

Of course, (7) entails (10); so, if both (1) and (4) could be reinterpreted as (6) and (9) respectively, then the inference from (1) to (4) should go through. But it does not. Even though we were tempted to revise our assessment of (1), we are not at all tempted to revise our assessment of (4). It simply is not true that every bottle in England is in the fridge.

My explanation of this pattern is simple. The sentence (1) literally means that there is exactly one fridge (unrestrictedly), and that every bottle (unrestrictedly) is in it. In every remotely realistic situation, this is obviously false. So, assuming that your conversation partner is being cooperative, you may infer that they mean ‘all the bottles that are such-and-such are in the fridge that is so-and-so’, for some way of filling out ‘such-and-such’ and ‘so-and-so’. Crucially, since you can easily infer what they mean, it would be actively uncooperative (and maybe even impossible) for them to laboriously spell out the precise conditions. Perhaps the best they can do is to say (11).

> (11) Every relevant bottle is in the relevant fridge.

Further, it is almost impossible for someone’s utterance of (6) to be cooperative. If you were meant to substitute in its place (9), which is presumably equivalent to (11), then why would they bother adding ‘in England’? If one really tries, one can get a cooperative reading: the utterer is hyperbolically pointing out that there are many bottles in the fridge.

Given (11), it is tempting to hold that the word ‘relevant’ is elided in typical utterances of (1), or that the word ‘every’ is semantically equivalent to ‘every relevant’. But why should there no longer be a ‘relevant’ when ‘in England’ is added? It certainly is not that only one domain restriction fits, for (12) is perfectly well-formed, and the ‘relevant’ doesn’t disappear in (13).

> (12) Every relevant bottle in England is in the relevant fridge.

> (13) Every milk bottle is in the fridge.

It seems naive to hope for an exact specification of which restrictors (‘milk’ but not ‘in England’) affect the hidden ‘relevant’. One might think for instance that there is a list of attributes (location, color, and so on) that are filled in either explicitly or by context, and the context cannot fill something in if it is already filled in explicitly. But ‘that we own’ seems to be a perfectly good implicit restriction; it need not be ‘in our house’.

The best hope for such theories is to rule out the substitution of (9) for (4), which they must allow if they are not to vastly overcomplicate the syntax or semantics, is to rule it out pragmatically as we have done. But once we are appealing to pragmatics to rule out some substitution, why not also simply allow the pragmatics to generate the relevant substitutions?

One sketch of an answer on behalf of our opponent is that the reading of (4) is not accessible in the context because mentioning bottles in England makes all sorts of them relevant in context. Compare, for instance, theories like Williamson (2020) of the counterfactual conditional on which (14) is true just in case (15) is true.

> (14) If the underdog wins, they won’t win by a lot.

> (15) If the underdog wins by a lot, they won’t win.

There are two things to say in response here. First, for some speakers, a true reading of (15) is accessible upon reflection: roughly, it means that it is impossible that the underdog wins by a lot. Compare (16).

> (16) If he’s rich, then pigs can fly.

Further, it seems plausible that (15) introduces possibilities wherein the antecedent occurs into the context, perhaps by pragmatic means: when someone utters a counterfactual conditional, they often indicate that the possibility of the antecedent is in some sense worth consideration.

By contrast, there is no comparably accessible true reading of (4) in the given situation. Further, the same mechanism of domain expansion cannot be at play: every relevant beer is already a beer in England. Any modified mechanism—say, that a representative group of bottles must be considered relevant—struggles to explain why (13) has an accessible true reading: it should also make relevant all sorts of milk bottles, including ones that are not in the fridge.

## II. ‘Every’ versus ‘all’

One challenge for the view sketched above is that it seems to overgenerate. For instance, suppose that there are some cats in the room, each of which is orange. My above theory seems to predict that (14) and (15) mean the same.

> (17) Every cat is orange.

> (18) # All cats are orange.

However, intuitively, an utterance of (14) is true but an utterance of (15) is false. But my theory predicts that (14) is assessed as (16), while (15) is assessed as (17).

> (19) Every animal here is orange.

> (20) All animals here are orange.

However, (15) is clearly not assessed as (17), at least under many of the normal circumstances in which (14) is indeed assessed as (16). One candidate diagnosis is that this indicates a difference between the semantics of ‘every’ and the semantics of ‘all’.

On my view, however, we can handle this as follows: (18) is clunkier than (14), but (19) is no clunkier than (15)—indeed, it is arguably more natural.

> (21) Every one of the animals (there) is orange.

> (22) All the animals (there) are orange.

The explicit alternatives to (14) are much less natural than it: the explicit ‘here’ in (16) feels in some sense substantive, and the ‘one of the’ in (18) is a somewhat long phrase. By contrast, although the explicit ‘here’ in (17) feels in some sense substantive, the ‘the’ in (18) is a very short and natural addition. And (19) without ‘there’ is substituted with (19) with ‘there’. So, the problem with (15) is that it markedly omits the ‘the’ in (19); this suggests that the speaker did not want to say (19) and have the ‘there’ (or whatever) inserted. The best explanation for why the speaker did this is that they literally meant that all animals are orange.

## III. Elbourne’s argument from binding

Elbourne notes that pragmatic repair should work equally for (23) and (24). The context is that John is taking care of many of Mary’s cats.

> (23) John fed no cat of Mary’s before the cat of Mary’s was bathed.

> (24) ? John fed no cat of Mary’s before Mary’s cat was bathed.

Firstly, though, there is a situation in which the sentence (24) does sound much better. Suppose that John is taking care of many of Mary’s cats as well as many of Ann’s cats; John fed all of Ann’s cats immediately, because they did not need bathing, but did bathe each of Mary’s cats before feeding them.

> (25) John (fed all Ann’s cats immediately, but) fed no cat of Mary’s before Mary’s cat was bathed.

So, contra Elbourne, it is possible for whatever mechanism makes (23) acceptable to make (24) acceptable. However, it is still true that (24) is much harder to make acceptable than (23).
