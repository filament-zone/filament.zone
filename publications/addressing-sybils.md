---
category: article
title: 'Addressing Sybils'
teaser:
    Filament introduces a novel approach to Sybil-resistant airdrops by leveraging the power of staked delegates incentivized by robust metrics.
published: 2024-10-09
authors:
  - brapse
state: published
---
TL;DR: Filament introduces a novel approach to Sybil-resistant airdrops by leveraging the power of staked delegates incentivized by robust metrics. This system aggregates subjective judgments about user authenticity while incentivizing delegates based on objective economic metrics, creating a more adaptive, nuanced, and efficient mechanism for token distribution.

Airdrops have become a cornerstone of token distribution strategies, but they're plagued by a persistent problem: the Sybils. At its core, Sybils are one entity masquerading as many, aiming to claim an outsized portion of tokens. Simple in concept, fiendishly difficult in practice.

### I Know You Are But What Am I

![image.png](/publications/addressing-sybils/sybils.png)

Consider Alice, a power user who maintains separate wallets for DeFi, NFTs, and day-to-day transactions across multiple chains. From one angle, she looks like a Sybil. From another, she's the exact type of engaged user many projects want to reward.

Or take Bob, who makes a single large trade on a DEX every month, versus Charlie, who makes daily micro-transactions. Who's more valuable to the ecosystem? Who's more likely to be a Sybil?

These aren't just theoretical questions. They represent real challenges that have led to an endless game of cat-and-mouse between airdrop designers and farmers.

## Existing Solutions

Faced with the Sybil challenge, many projects have turned to increasingly complex eligibility criteria and sophisticated detection mechanisms. Two recent high-profile airdrops - Wormhole's and EigenLayer's - illustrate both the ingenuity and challenges of these approaches.

### Wormwhole
Wormhole, a cross-chain messaging protocol, implemented a [comprehensive airdrop strategy](https://wormhole.com/blog/from-eligibility-to-sybil-detection-a-deep-dive-into-wormholes-multichain) that included:

- Ownership Graph Analysis: Constructing a map of wallet clusters to identify potential Sybils.
- Source of Funds Analysis: Examining historical data to detect suspicious funding patterns.
- Behavioral Clustering: Applying the Louvain Community Detection Algorithm to identify similar transaction patterns across wallets.
- Transaction Spam Detection: Flagging rapid, identical transactions across multiple chains.

While impressive in scope, Wormhole's approach faced [several challenges](https://unchainedcrypto.com/whats-going-on-with-wormholes-airdrop/):

- **Complexity:** The multi-faceted system was resource-intensive and difficult to explain to users.
- **False Positives:** Some legitimate users reported being excluded due to normal cross-chain activity being flagged as suspicious.
- **Delays:** The intricate analysis led to a prolonged period between snapshot and distribution, causing community frustration.

### EigenLayer
EigenLayer, a restaking protocol, took a different tack with a tiered eligibility system:

- On-chain Activity: Rewarding users based on their interactions with EigenLayer's smart contracts.
- Community Engagement: Allocating tokens to active Discord members and contributors.
- Ecosystem Participation: Including users of related protocols like Eigenpods.

However, EigenLayer's airdrop also [encountered issues](https://unchainedcrypto.com/5-reasons-e-beggars-are-not-happy-with-eigenlayers-airdrop/):

- Farming Vulnerability: The publicized criteria led to a surge in "last-minute" activity from potential airdrop farmers.
- Community Discontent: Many long-term supporters felt under rewarded compared to recent, high-volume users.

Both projects employed advanced criteria for bootstrapping their initial token distribution and yet faced significant challenges. Wormhole's approach, while thorough, risked excluding legitimate users and created distribution delays. EigenLayer's criteria, although diverse, were still vulnerable to targeted farming and community backlash.

These examples demonstrate that deterministic solutions often fail to fully capture the complexities of user intent. The rigid application of opaque criteria with arbitrary thresholds will  inevitably create edges that can be gamed or lead to false exclusions.

Moreover, both airdrops faced a common criticism: the difficulty for average users to understand or predict their eligibility. The criteria involves arbitrary thresholds that determine who benefits and who doesn’t. This lack of transparency can lead to community frustration and reduced engagement - the opposite of how initial token distributions should work.

These cases underscore the need for a more transparent, diverse approach to Sybil resistance - one that can evolve with new attack vectors and capture the subjective nature of user activity. This is what Filament does.

## How Filament Addresses Sybils

Filament introduces a new feedback loop that rewards a decentralized set of agents called delegates to identify Sybils based their subjective perspective while being rewarded for objective results. These delegates, whether human or AI, operate with public (though pseudo-anonymous) identities. Their actions are fully transparent and visible to the community, ensuring accountability. Here’s how it works in detail

1. Define Objective Metric: Campaigners (people running airdrops), define a clear, measurable economic metric that’s hard to game (e.g., total fees generated over 30 days).
2. Criteria: Delegates propose and vote on criteria for distributing tokens, weighted by their stake
3. Distribution: Tokens are distributed to users based on the aggregated criteria from delegate votes.
4. Measuring Impact: The system calculates each delegate's marginal contribution to the economic metric by comparing the outcome with and without their input.
5. Commission: Delegates receive commissions proportional to their marginal contributions, incentivizing them to vote for criteria that genuinely improve the economic outcome.

![programmable incentives.feedback.png](/publications/addressing-sybils/programmable_incentives.feedback.png)

The approach aligns the distribution of airdrops with metrics that are hard to game ensuring productive distribution and durable community formation.  The key is to find a balance between the subjective nature of sybils in permissionless systems and objective measure of productivity aligned with community goals.

- Subjectivity: Delegates use their judgment and expertise to propose nuanced criteria for identifying valuable users and detecting Sybils. Delegates are incentivized to maxim
- Objectivity: The mechanism rewards delegates based on the measurable economic impact of their decisions, not just their voting power or reputation.

### Benefits
Why is this approach powerful? Let's break it down:

**Adaptability**: As new Sybil tactics emerge, delegates can quickly adjust their voting strategies without requiring protocol-level changes. The rewards ensure these adaptations are driven by real economic improvements.

**Privacy-Preservation:** Delegates can use private data sets to inform decisions without exposing sensitive information. Different credential systems can be integrated without enforcing public unified identities. The mechanism focuses on outcomes, not the specific data used.

**Scalability:** The delegate network can grow and specialize, potentially creating experts in Sybil detection for specific ecosystems or attack vectors. The  rewards naturally allocate more influence to the most effective delegates.

**Economic Alignment:** By tying rewards directly to economic outcomes, the system ensures that delegates are motivated to make decisions that genuinely benefit the ecosystem, not just maximize their short-term gains.

### In Practice
Imagine a new DeFi protocol, $FOO, using Filament for their token distribution. They might have:

- Delegates analyzing on-chain transaction patterns across multiple chains
- Human delegates with expertise in social graph analysis
- Specialized delegates focusing on specific ecosystems (e.g., Cosmos, Ethereum, Solana)

Each delegate would propose and vote on distribution criteria. The mechanism would then reward delegates based on how their criteria contributed to increasing trading volume or liquidity in $FOO pools.

For example, if a delegate's proposed criteria led to a significant increase in genuine user activity and fees generated, they would receive a larger commission. Conversely, if their criteria allowed Sybils to claim tokens without contributing to economic activity, their reward would be minimal.

This creates a self-correcting system where the most effective Sybil-detection strategies naturally rise to the top, driven by real economic metrics rather than just stake or popularity.

### Challenges
There are several challenges that come with this approach. Here is we are looking forward to covering in future blogposts

**Defining Appropriate Economic Metrics:** Choosing the right economic metrics to drive the  rewards is crucial. These metrics must align with the long-term health of the ecosystem, not just short-term gains.

**Governance Overhead:** Introducing a governance layer can create new challenges, including slowing down time-to-market. Filament addresses this with a novel voting approach that ensures swift conclusion of campaigns, which we'll detail in follow-up articles. 

**Data Integrity:** Malicious actors might attempt to manipulate the underlying data to inflate their contributions or undermine competitors.  Filament must hold data providers accountable for the accuracy of their measurements and have mechanisms in place to incentivize data providers participate in a way that aligns with the other participants.

## Wrapping Up

Filament's approach, enhanced by a reward mechanism, represents a significant evolution in token distribution strategies. By combining the nuanced judgments of diverse delegates with objective economic incentives, it creates a system that is both adaptable to new Sybil tactics and grounded in real-world impact.

This balanced approach to subjectivity and objectivity offers a promising path forward for fairer, more effective token distributions. As the crypto ecosystem continues to evolve, systems like Filament that capture collective intelligence while maintaining economic alignment will be crucial for sustainable growth and genuine community engagement.
