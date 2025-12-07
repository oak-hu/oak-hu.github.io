---
layout: default
title: "Meaning"
date: 2025-11-04
tag: "Philosophy of Language (Week 4)"
---

# Meaning

> The following is a tutorial essay for Philosophy of Logic and Language with James Kirkpatrick. In effect, it is a quick agenda for an hour-long discussion on a guiding question, which for this week was ‘It is no good expecting the meaning of “Hello” to be the same kind of thing as the meaning of “Snow is white”. So we should be pluralists about meaning. Is that right?’. A free-standing and much more readable version of some of the material may eventually go up on my [Substack](https://offhandquibbles.substack.com).

The meaning (in particular, the semantic content) of ‘Snow is white’ is a proposition. We should expect for general theoretical reasons—namely, the simplicity and strength of the associated framework—that the content of ‘Hello’ is likewise a proposition; the same goes for ‘Go away!’ and ‘Are ghosts real?’. It is premature to give up hope for a propositional account for the semantics of such expressives, imperatives, and interrogatives.

## I. Descriptives (‘Snow is white’)

The category of propositions naturally generalises the category of facts: while facts must be true, propositions may also be false. A proposition is the meaning of a declarative sentence like ‘Snow is white’ (which, for simplicity, we shall analyse as the sentence ‘All snow is white’ with the ‘all’ elided).

The propositions form a Boolean algebra, which (by Stone’s representation theorem) may always be represented as a family *t* of subsets of some set *w* which obeys the following rules:

1.  The empty set is a member of the family.
2.  The complement (relative to *w*) of any family member is a family member.
3.  The intersection of any two family members is a family member.
<br><br>

By writing ‘*a*: *x* → *y*’, we note as an aside that *a* is a function that maps each member of *x* to a member of *y*—set theoretically, that *a* is an element of the Cartesian product of *x* and *y*. Now, our usual propositional connectives can now be identified with set theoretic functions. For instance, ¬: *t* → *t* is relative complement, and ∧: *t* → (*t* → *t*) is intersection; the other operators can be built from these in the usual way. To mention a few, the proposition ⊥: *t* is *p* ∧ ¬*p* for any proposition *p* (say, the empty set), which is (also) the empty set; thus ⊤: *t*, which is ¬⊥, is the whole set *w*. Further, the operator ∨: *t* → (*t* → *t*) (λ*xy*. ¬(¬*x* ∧ ¬*y*))—that is, *p* ∨ *q* is ¬(¬*p* ∧ ¬*q*) for any propositions *p* and *q*—happens to be set theoretic union.

We can add to our logical language the operators for identity and necessity. The function =: *t* → (*t* → *t*) yields ⊤ if given the same input twice, and ⊥ otherwise; the function □: *t* → *t* yields ⊤ if given ⊤, and ⊥ otherwise.

Next, we can model the individuals as being the members of a set *e*. Now, the types are as follows: *e* and *t* are types, and for any two types *σ* and *τ*, *σ* → *τ* is a type. We assume that every term in a language has a type, which means that its content has that type (belongs to the corresponding set, as defined above). Further, complex terms—binary trees of terms—have content which is calculated from their simple terms by functional application: if a node *a* has daughter nodes *b*: *σ* and *c*: *σ* → *τ*, then *a* has type *τ* and in particular has as its content the output of *c* applied to *b*.

For instance, consider the sentence ‘snow is white’, which we can analyse as a complex term with ‘snow’ and ‘is white’ as daughter nodes. We might treat ‘snow’ as a term of type *e* (perhaps its content is the fusion of all snow), and ‘is white’ as a term of type *e* → *t* which maps each individual to the proposition that it is white. Then the content of ‘snow is white’ is the proposition that snow is white. Naturally, it is not easy to express the content of ‘snow is white’ in other terms: at best, we might give synonymous sentences in other natural languages, or stipulate that some symbol—say, ‘*p*’—means that snow is white. (Note that this analysis of ‘snow is white’ just serves to illustrate the framework; the real semantics might be much more complicated.)

This framework is fairly simple and strong: it enables intensional semantics without even mentioning possible worlds (indeed, for all that has been said, the Boolean algebra may be atomless, such that there are no consistent propositions that entail every proposition or its negation), preserving the simplicity of an extensional semantics. In this framework, a monadic property (say, the content of ‘is white’) is a function from individuals to propositions, rather than a function from possible worlds (or less specific situations) backwards to either sets of individuals (or the characteristic functions of these sets). It also has strong metaphysical implications that have been defended on other grounds, including that necessarily equivalent propositions are identical and the equivalence of there possibly being some individual with some particular property and of there being some individual which possibly has that property. In particular, it meshes well with recent work in the literature on higher-order metaphysics (Williamson 2013). More generally, and importantly to semantics, it seems to enable a unified treatment of declarative sentences, enabling the calculation of the content of complex terms by compositionality, and in particular simply by functional application. Accommodating other types of language by adding complications to the framework should be only a last resort.

## II. Interrogatives and imperatives

There are some anomalies for the framework sketched above; for instance, one might be driven to posit combination rules other than functional application (for instance, a rule of predicate modification). But perhaps the most severe anomaly is non-declarative sentences: interrogatives, imperatives, and expressives.

There is a reading of ‘and’ where it behaves like ‘∧’ as defined above: the content of ‘Snow is white and snow is white’ is the proposition which is the intersection of the proposition that snow is white and itself, which also happens to be the proposition that snow is white. Similarly for ‘but’, which also carries some implication of contrast between the sentences it joins. This reading of ‘but’ seems operative in the following (said in reaction to a ghost claiming that snow is white).

* Snow is white, but yikes!
* Snow is white, but are ghosts real?
* Snow is white, but go away!
<br><br>

In particular, ‘but’ seems to take two propositions as input and yield a third. But it can take expressive, interrogative, and imperative sentences as input. Nevertheless, the use of these terms seems to involve more than the declarative content. One hypothesis for interrogatives and imperatives is that these moods conventionalise what can in principle be calculated “from scratch” pragmatically. For example, it seems tenable to hold that the following are equivalent:

* Ghosts are real or ghosts are not real.
* Are ghosts real or are ghosts not real?
* Are ghosts real?
<br><br>

Suppose someone utters ‘ghosts are real or not real’. If they were being cooperative, we should by default expect that they would utter either ‘ghosts are real’ or ‘ghosts are not real’, depending on which they knew to be true. So, by uttering ‘ghosts are real or not real’, the speaker reveals that they do not know which is true. Similarly, it seems tenable to hold that ‘Is the ghost in the attic or is the ghost in the basement?’ is a surface variant of ‘The ghost in the attic or the ghost is in the basement’. Now, the conventional interrogative form might serve to short-circuit this calculation, by indicating in a more obvious way the result of the calculation (namely, that the speaker does not know which). Similarly, ‘Where is it?’ might be interpreted as ‘It is where(ever it is)’; this might express a very specific proposition, which is maximally specific about the object’s location (but is still expressed in a manner which implies a desire for knowledge under a better guise), or it might express the generalisation that it is somewhere just in case it is there. In any case, the content that questions seem to presuppose can be taken as its semantic content; if we do not buy that false presuppositions make for meaninglessness, then we should leave the distinction between presupposed and asserted content to the theory of speech acts.

A similar story goes for imperatives. It seems tenable to hold that the following are equivalent.

* You will go away.
* You will go away!
* Go away!
<br><br>

Notably, there is precedent for the subject being elided: a similar thing seems to be going on with ‘I want to go’: it is naturally interpreted as ‘I want me to go’ (read like ‘I want him/her/them/it/you to go’). In any case, suppose that someone utters ‘You will go away’. They will speak truly just in case you go away; and they will speak knowledgeably typically only if they have some authority or control over you. Thus, in order for you to cooperatively make true their utterance, you must go. The conventional imperative form might serve to short-circuit this calculation, by indicating in a more obvious way the result of the calculation (namely, that conversational cooperation requires that you go).

We know how to analyse the declarative sentences ‘Ghosts are real’ and ‘You go away’, and so we know how to evaluate the interrogative and imperative variants above (as marked by punctuation): after all, they should by default be expected to have the same content, even though they may have different conversational functions.

## III. Expressives

However, if ‘yikes’ is of type *t*, it is unlike usual sentences of type *t*—a simple term. Thus, ‘yikes’ is true if and only if yikes. Although we could analyse complex interrogatives and declaratives, the best we can do for ‘yikes’ and other expressives is to give some declarative sentences with roughly the same content. David Kaplan’s (1999) toy examples include the following (slightly modified):

* ‘Ouch’ has the same content as ‘that’s painful’
* ‘Oops’ has the same content as ‘that’s a minor mishap’
* ‘Goodbye’ has the same content as ‘Our interaction is ending’
<br><br>

We can similarly suggest that ‘Yikes’ has the same content as ‘That’s scary’ and that ‘Hello’ has the same content as ‘Our interaction is starting’. These pairings predict false usages of the expressives: one can follow ‘Ouch!’ with ‘Actually, that’s wrong, it didn’t hurt at all’. Similarly, replying ‘I know’ to ‘Ouch!’ seems to mean ‘I know that that is painful’.

However, it’s not clear that such expressives are completely simple, having type *t*. Rather, they seem to allow for type *e* → *t* uses:

* Yes, it’s very yikes.
* That fact is a big ouch.
* It’s more than an oops!
* We had a quick hello.
* The goodbye took forever.
<br><br>

But such expressions allow uses with unpronounced subjects, in the same way that someone might reply ‘Painful!’ or ‘Scary!’ upon being provided with the description of some medical procedure. Similarly, someone may say ‘Greetings!’ or ‘Good morning!’ instead of ‘Hello!’. And in other languages, the equivalent of ‘Hello’ is straightforwardly meaningful (for instance, the Chinese translates literally to ‘You good’). So, it may be better to hold that, for instance, that ‘ouch’ means the same as ‘painful’, that ‘yikes’ means the same as ‘scary’, and that ‘hello’ means the same as ‘greeting(s)’.

With this view, we do indeed have that the content of ‘hello’ is different from the content of ‘snow is white’. The former is an expression of type *e* → *t* and so expresses a property, while the latter is an expression of type *t* and so expresses a proposition. But ‘Hello’, like ‘Good morning’, can be used with a preceding ‘This is a’ left implicit, to give an expression of type *t*. Further, that ‘hello’ has a content which is not the same sort of thing as the content of ‘Snow is white’ is no reason to endorse pluralism about meaning over the unified framework presented here, for exactly the same is true of ‘is white’.
