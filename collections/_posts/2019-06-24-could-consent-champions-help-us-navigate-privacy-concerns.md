---
layout: post
title: >-
  Could consent champions help us navigate privacy concerns?
date: 2019-06-24 14:33:22 +0100
description: >-
  
image: /assets/images/featured/consent-champion-featured.png
hero-image: /assets/images/featured/consent-champion-featured.png
hero-classes: seven00
authors:
  - anouk-ruhaak
  - josh-mckenty
categories: 
  - privacy
  - consent
---

“If no one reads the terms and conditions, how can they continue to be the backbone of the internet?” asks the New York Times editorial board in an article titled [‘How Silicon Valley puts the ‘con’ in consent’](https://www.nytimes.com/2019/02/02/opinion/internet-facebook-google-consent.html). Despite data protection laws becoming commonplace, we have yet to find consent models beyond those that rely on individual users blindly clicking ‘Agree’ or opting into cookies they hardly understand. Online consent is severely broken and the wreckage extends beyond the impossible-to-navigate cookie banners. [Helen Nissenbaum](https://www.amacad.org/publication/contextual-approach-privacy-online) argues that the model of notice-and-consent is inherently flawed as we can never fully understand the repercussions of data about us being used in different contexts:

“Proposals to improve and fortify notice-and-consent, such as clearer privacy policies and fairer information practices, will not overcome a fundamental flaw in the model, namely, its assumption that individuals can understand all facts relevant to true choice at the moment of pair-wise contracting between individuals and data gatherers.”

![xkcd.com/2432](/assets/images/featured/xkcd-consent.jpeg)

One of the underlying problems, Nissenbaum observes, is that consent is not meaningful when we cannot trust the system in place to protect our rights. We can, for example, meaningfully consent to have a surgeon operate on our kidneys; not because we have a perfect understanding of what such an operation might entail, but because we trust the medical system works and protects us. The only decisions left for us are not the specific way we want to surgeon to cut our kidney, but whether we have any problems with blood transfusions or resuscitation. Decisions that depend on our norms and beliefs; things we understand.

“Choosing is not mere picking but requires that the subject understands that to which he or she is consenting”. Especially when considering raw data, like the number of keystrokes, or seconds spend staring at a screen, context is missing. The data lacks sufficient meaning to allow us to understand possible privacy implications of sharing such data. Only once we think through specific use cases and combinations of data do we start to understand how sharing it could help or hinder us. Such an analysis, however, requires extensive time and domain knowledge.

But we should not have to be experts to make decisions about how data about us is collected and shared. Likewise, we should not have to trust Facebook to make those decisions for us. One solution is to play safe, and severely limit the data that is collected about us. This is the approach taken by the General Data Protection Regulation (GDPR) that came into force in Europe last year. Whilst an improvement, this defensive attitude towards data sharing does not help us in circumstances where we might want to share more data about ourselves: where doing so is in both our personal and collective interests.

## Consent proxies
Enter consent proxies: organisations to suggest default data sharing decisions that you can opt into. These could be any organisation you trust to make these decisions on specific types of data about you. For instance, someone infected with HIV might have specific privacy preferences, ranging from a desire to keep this information private, to wishes to help research towards better treatments. HIV advocacy bodies would potentially be well-suited to understand the context necessary to navigate these concerns, which are both complex and interlinked. In a similar vein, trade unions could be well-positioned to create consent profiles that would specifically deal with data collection and sharing relating to future employment, or wage calculations.

Consent proxies, therefore, are organisations that hold expertise in specific domains (e.g. health, mobility, human rights) and use that expertise to draft consent profiles regarding data collection and usage that individuals can adopt as their own. These profiles reflect the ethical considerations and risk assessments performed by the consent proxies, as well as the values and norms the proxy stands for. The trust placed in consent proxies is founded in their proven capacity for understanding the specific norms, values, needs and expectations of a specific demographic, given a specific context.

Requirements for effective consent proxies
In order for a consent proxy to effectively address the problems laid out above, it needs to fulfill a number of roles and requirements:

- **Consent profiles should be usable.**

The user should be presented with a menu of possible consent profiles. The consent profiles should provide an easy overview of the main norms, functions and goals that underlies them, as well as a clear overview of the types of data the consent profile cover. It thereby replaces the spider web of choices users are currently faced with (for instance in the form of Facebook’s privacy settings). Underneath this easy-to-navigate profile sits a fine-grained set of rules that govern the relationship between the platform users and those collecting, using and sharing data about them.

- **Variety of consent**

To reflect the fact that human beings hold many identities that are subject to change, we should be able to a) choose from a wide range of consent proxies and b) elect different consent proxies to govern different types of data, as well as different types of concerns. For instance, we might want to have health data about us governed by both our GP and the Diabetes Foundation. As such, different profiles could end up governing the same piece of data. In those cases it makes sense for the most stringent privacy preferences to become the default, unless otherwise stipulated. In order to automatically negotiate the differences between various profiles, their rules should be available in a computer readable format. The result of these various compatible data proxies and profiles, working in concert is a set of API rules dictating what data can and cannot be collected, stored and used by data users, and under what conditions.

- **Low barriers of entry and exit**

As our values and circumstances are subject to change, we should be able to switch between consent proxies easily. This, in addition, allows us to vote with our feet.

## Would consent proxies work in the wild?
At this point, the careful reader will wonder why any platform or service would agree to have their activities curtailed by consent profiles, when at the moment they have free rein. Fair question. For the moment, consent profiles are likely most relevant to services that rely on their users trusting them with data about them. It could, for instance, be a solution for companies that allow users to make data about them available to third parties. What if citizens would like to make location data about them available to local governments to improve flow of traffic? Or perhaps salaried workers would like their salary data available for research into gender disparities? A consent proxy could be a great way to help them better share data about themselves, while ensuring the way this data is used corresponds with their values and privacy expectations.

But to make consent proxies work for the average internet user, the creation of profiles alone will not be enough. Consent proxies would be toothless without ways to enforce the profiles they create. Their power relative to, for instance, a social media platform depends on their ability to steer individuals away from platforms that do not comply with their consent profiles. At the moment that is unlikely to be the case. We may not want to hand over data about us to Facebook, but we are equally unwilling to give up our social network. This problem will not be solved by a consent proxy, but will instead require true data portability - the ability to take data about us from one platform to the next.

A number of solutions to level the playing field have already been proposed, ranging from decentralized web technologies (e.g. Solid, Holochain, MaidSafe) to data trusts. While still in their infancy, these technologies and infrastructures promise to shift the power from the creators of closed platforms, back to the consumers of those platforms. Once the playing field is sufficiently leveled, a consent proxy - or consortium of consent proxies - would hold enough collective bargaining power to alter the behavior of data collectors and users. Equally, consent proxies could meaningfully advise against using a platform that fails to adopt any of its profiles.

## To conclude
Consent proxies will not be a magic bullet, but rather part of a range of infrastructural solutions that together pave the way for better data sharing while safeguarding individual and collective privacy. Of course, there are a number of remaining questions to work out. Who would cover the costs of setting up the consent proxies and creating the consent profiles? How do we ensure that the organisations we trust to become these proxies have enough understanding of data (in addition to their understanding of their specific domain)?

One of the great failures in the current data and privacy debate is the users who are routinely set up to fail; expected to fend for themselves and make wise data choices with too little information, even if they have the understanding. Much like we do not need to ask whether the water we drink is clean, everytime we take a sip, we should not have to evaluate a wide range of privacy concerns everytime we log into an app. Trusted consent proxies, with area-relevant expertise, would be one way to relieve this burden.