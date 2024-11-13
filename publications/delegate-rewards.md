---
category: article
title: 'Delegate Rewards'
teaser:
    Filament introduces a novel mechanism to align delegates and campaigners to ensure airdrops create real value
published: 2024-11-13
authors:
  - brapse
state: published
---
Want to earn for helping crypto projects distribute tokens effectively? Filament’s delegate system might be your next move. Let’s break down how delegates shape token distributions and—more importantly—how they get paid for their work.

## Being a Delegate

As a delegate, your job is to vote on how tokens should be distributed in airdrops (called “campaigns” in Filament). But here’s the key difference from other systems: you’re not just voting based on what feels right. Instead, you’re incentivized to vote for distribution criteria that will generate real economic value for the project running the campaign.

### How Do Delegates Earn Commissions?

At its core, Filament rewards delegates who make valuable contributions to campaigns. The better your voting decisions lead to successful outcomes for the project, the more you earn. It’s not just about participating; it’s about making a positive impact.

Imagine you and other delegates are deciding on criteria for a token airdrop. The criteria could be things like transaction volume, consistency of activity, or other measures that indicate valuable engagement with the project.

Your votes influence which criteria are prioritized. If the criteria you support lead to more genuine user engagement and economic value for the project, you’ll earn higher commissions.

### The Incentive Structure

Filament uses an incentive system that aligns your rewards with the success you help create. This means:

1. **Effective Voting**: By voting for criteria that attract valuable users to the project, you contribute to its growth.
2. **Earn More When You Contribute More**: Your commission increases when your input has a larger positive impact on the campaign’s success.
3. **Shared Success**: As the project benefits from better user acquisition, more campaigns are likely to run, creating more opportunities for you to earn.

### Why Alignment Matters

The beauty of this system is that it encourages delegates to think strategically about their votes. Since your earnings are tied to the campaign’s success, you have a vested interest in making choices that will genuinely benefit the project.

By consistently making smart voting decisions:

- **You earn higher commissions** from current campaigns.
- **More projects will want to run campaigns**, knowing they can rely on delegates to help them succeed.
- **Your reputation grows**, potentially increasing your voting power as more people delegate to you.

### The Bottom Line

Filament’s delegate system turns token distribution from a simple giveaway into a strategic tool for driving real value. As a delegate, you’re rewarded not just for participating, but for making decisions that contribute to the project’s success.

Ready to put your token distribution ideas to the test? Your insights could lead to significant rewards.

## The Technical Breakdown

While the basic idea behind Filament’s delegate rewards is simple—vote well, earn more—the actual mechanics involve a sophisticated system known as the [Vickrey-Clarke-Groves](https://www.wikiwand.com/en/articles/Vickrey%E2%80%93Clarke%E2%80%93Groves_mechanism) (VCG) mechanism. Let’s delve into how delegates earn commissions through this method.

### The Commission Formula

The commission for each delegate is calculated using this formula:

$R_d = R_{\text{median}} \times M \times \frac{V_d}{V_{\text{total}}} \times \frac{\Delta V_{G_d}}{\Delta V_{G_{\text{max}}}}$

Where:

- $R_d$ : Reward for delegate $d$
- $R_{\text{median}}$ : Median reward given to users in the distribution.
- $M$: A base multiplier set by campaigner to scale rewards
- $V_d$: Voting power of delegate $d$
- $V_{\text{total}}$: Total voting power in the system.
- $\Delta V_{G_d}$: Marginal contribution of delegate to the campaign’s objective.
- $\Delta V_{G_{\text{max}}}$ : Highest marginal contribution among all delegates.

This formula ensures that the commission scales with both the size of the distribution ($R_{\text{median}}$) and the delegate’s effectiveness ($\Delta V_{G_d}$), while being weighted by their voting power ($V_d$).

### Understanding Marginal Contribution

The marginal contribution measures how much value each delegate’s vote added to the campaign. It’s calculated as:

$\Delta V_{G_d} = V_G(w) - V_G(w_{-d})$

Where:

- $V_G(w)$: Value generated using the final weighted criteria.
- $V_G(w_{-d})$: Value that would have been generated without delegate ’s vote.
- $w$: Weighted criteria vector after aggregating all votes.
- $w_{-d}$: Weighted criteria vector excluding delegate ’s vote.

The weighted criteria vector is calculated as:

$w = \sum_{d \in D} \frac{V_d}{V_{\text{total}}} \times w_d$

Where:

- $D$ : Set of all delegates.
- $w_d$ : Delegate  $d$ ’s vote (a vector of weights for each criterion).

### A Concrete Example

Consider a campaign with two delegates:

#### Delegate A
- **Voting Power (** $V_A$ **)**: 60,000 (60% of total).
- **Vote (** $w_A$ **)**: $[0.7, 0.3]$ (favoring transaction volume).

#### Delegate B
- **Voting Power (** $V_B$ **)**: 40,000 (40% of total).
- **Vote (** $w_B$ **)**: $[0.3, 0.7]$ (favoring consistency of activity).

### Calculating the Final Weighted Criteria

$w = \frac{60,000}{100,000} \times [0.7, 0.3] + \frac{40,000}{100,000} \times [0.3, 0.7] \
= 0.6 \times [0.7, 0.3] + 0.4 \times [0.3, 0.7] \
= [0.54, 0.46]$

Let’s assume this criteria leads to $V_G(w) = \$2,000,000$ in transaction fees.

### Without Delegate A

- **Criteria Without A**: $w_{-A} = [0.3, 0.7]$
- **Generated Value**: $V_G(w_{-A}) = \$1,800,000$
- **Marginal Contribution**:

$\Delta V_{G_A} = V_G(w) - V_G(w_{-A}) = \$2,000,000 - \$1,800,000 = \$200,000$

### Without Delegate B

- **Criteria Without B**: $w_{-B} = [0.7, 0.3]$
- **Generated Value**: $V_G(w_{-B}) = \$1,900,000$
- **Marginal Contribution**:

$\Delta V_{G_B} = V_G(w) - V_G(w_{-B}) =\$2,000,000 - \$1,900,000 = \$100,000.$

### Calculating the Commissions

Given:
- $R_{\text{median}}$ : 100 FILA
- $M$: 3
- $\Delta V_{G_{\text{max}}}$ : $200,000 (from Delegate A)

**Delegate A’s Commission**:
$R_A = 100 \times 3 \times \frac{60,000}{100,000} \times \frac{\$200,000}{\$200,000} = 180 \text{ FILA}$

**Delegate B’s Commission**:
$R_B = 100 \times 3 \times \frac{40,000}{100,000} \times \frac{\$100,000}{\$200,000} = 60 \text{ FILA}$

### Alignment is Everything

This system creates a virtuous cycle:

1. **Better Criteria Selection** → More economic value generated.
2. **More Economic Value** → More projects want to run campaigns.
3. **More Campaigns** → More commission opportunities for delegates.

Your success as a delegate is directly tied to the success of the campaigns you help shape. By consistently voting for criteria that lead to valuable user acquisition, you’ll:

- **Earn higher commissions** from current campaigns.
- **Attract more projects** as word spreads about successful campaigns.
- **Build a strong reputation**, attracting more delegation and increasing your voting power.

Ready to dive deeper into the mechanics or start participating as a delegate? The system is designed to reward those who contribute to meaningful growth. Your strategic decisions can make a significant difference—not just for your earnings, but for the success of the entire project.
