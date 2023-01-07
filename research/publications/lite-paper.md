---
category: paper
title: 'Lite Paper: Pulzaar - Trustless block segment auctions for the Interchain'
teaser: Pulzaar is an open marketplace for interchain block segments which allows participants to express their execution preferences in a more nuanced way than is currently possible.
published: 2023-01-09
authors:
  - brapse
  - patternmachine
  - xla
---

## Scope

The objective for the lite paper is the accurate contextualisation and identification of the problem posed by a lack of explicit MEV facilities in the Interchain. And surfacing the trajectory in the solution space towards an open and efficient blockspace market.

## Intro

Blockchains are timestamping/ordering services first and foremost, that is, consensus on the content and the order of blobs of data. Tendermint does this for Cosmos SDK applications. The blobs of data are messages inside transactions inside blocks. The consensus layer has no understanding of the application, ie it does not care about the meaning of the blob of data, and in most cases the application is built without awareness of the consensus layer. This lack of awareness of abstraction layers can be exploited for gain, which is quantified via MEV (maximum extractable value). The existence of these different layers that are unaware of each other is not just constrained to single networks but also works between and across multiple sovereign zones. We believe that systems need to be designed to minimize these mismatches and internalize them to be economically secure. Against this backdrop we introduce Pulzaar, our first building block for a practical Interchain scheduler.

Pulzaar is an open auction house for Interchain block segments. It allows builders to efficiently coordinate execution across multiple chains and offer their customers value add services with the segments they bought, e.g. execution gurantees. Only they will be able to efficiently navigate the increasingly complex landscape formed by a growing number of sovereign appchains and interaction between them.

Chains can sell continuous segments of blocks to maximize revenue while retaining the option to include their own transactions to not compromise on censorship risk. With the help of modules targeting Cosmos SDK, CosmWasm and other execution environments any chain can opt-in to integrate with Pulzaar and bring builders into the domain of governance.

**Making Pulzaar permissionless, efficient and aligned with the Cosmos vision of sovereign zones are our main objectives.**

## Motivation

The current state of the Cosmos ecosystem is best summarized as “it is complicated”. We are faced with principal agent problems by infrastructure providers (e.g. validators, wallets) due to a lack of mechanisms to properly align incentives. These providers have [strong monetary incentives](https://meka.tech/writing/analysing-the-atomic-arbitrage-space-in-osmosis-9fc75742-09e7-4352-8145-176ad47049cc) to vertically integrate as many layers of the stack to capture MEV. Without an open market this is a strong centralizing force as these entities manage to capture monetary value[^1] that less sophisticated entities cannot capture. The additional revenue can then be used to increase their stake to capture more revenue.

The problems are caused by technical decisions of the Tendermint/Cosmos SDK stack:

**Temporal transaction ordering**: The ordering of transaction is not part of consensus, ie validators can order transactions as they please—though recently Cosmos SDK introduced a primitive fee market[^23]. But, a default Cosmos SDK app will order transactions in a fifo manner. Although that ordering is considered to be fair by many, it comes with a host of unwanted side-effects.

1. For an open distributed system it is non-trivial to know which one of any two transactions occurred first without having an explicit consensus instance for this problem and even then it is a questionable endeavor
2. If the ordering of transactions is not part of consensus then rational validators should sell that right to the highest bidder off-chain, which makes the system less transparent
3. The lack of tools for agents to explicitly express execution preferences means that they will either try to go with 2. or have to compete in latency games akin to HFT[^9]. These games pose a higher barrier to entry (rent extraction of validators by selling colocation), are zero-sum and can also negatively impact network health by causing congestion at times when blockspace is the most valuable—e.g. during the Luna crash in May 2022 many people were unable to repay their loans because blocks were congested by bots trying to arbitrage DEX pools and running liquidations[^28].

These lead to an externalization of revenue and less community oversight due to off-chain agreements.

**ABCI**: The Cosmos SDK is flexible enough to enable many applications that do not concern themselves with consensus, but the recent past has shown us that ignoring the reality of how consensus works has a very real influence on the security and viability of applications. Unfortunately ABCI is not general enough to let applications hook into and change how blocks are processed. That makes it impossible for the Cosmos SDK to have any insight on what happens on the consensus level without maintaining a fork of the Cosmos SDK.

The reoccurring theme is a lack of separation of concerns, which makes it hard to incentives specialized actors to compete in a manner that is not detrimental to the network. Along with the missing open infrastructure for users to express execution preferences it leaves us in a suboptimal situation.

This is especially pertinent to cross chain MEV which will most likely dwarf the MEV available on any single chain and present massive incentives for large validators who are active on many chains to capture this value. Without an open market, these validators will most likely favor bilateral agreements with other actors which are opaque and further entrench their power.

## State of the solution space

The problems outlined in the previous section are not exclusive to the Interchain ecosystem and in this section we want to give a non-exhaustive overview of other solutions before describing ours.

Resolving principal agent problems in the context of blockchains is generally done via two approaches, or a mix of them:

1. Internalizing externalities and unbundling the power of the agent.
2. Removing power and replacing it with randomness

For example, the ordering of transactions is currently not part of Tendermint consensus, which means that validators can order them freely. With approach 1. validators might no longer build blocks but only concern themselves with consensus and outsource the block building to specialized builders who compete in an open market to produce optimal blocks.

Most of the following techniques can be mixed and matched to produce systems that make different assumptions about execution guarantees.

### Proposer-builder separation

**mev-geth/mev-relay:** The Flash Boys 2.0 paper[^2] was the first comprehensive review of bot activity in the Ethereum mempool. Bots were observed competing for opportunities via (priority) gas auctions (PGA), i.e. bidding via gas prices to be included before or after a target transaction because miners typically ordered transaction by gas price. By the end of 2020 the spam caused by this behaviour had gotten so severe that a newly formed research collective named Flashbots introduced mev-geth and mev-relay[^3]. mev-geth is a modified version of the geth software run by all miners which connects to the mev-relay. By running this patch miners allow outsiders to submit bundles of transactions via the mev-relay. The mev-relay runs a sealed bid auctions and only the winning bundles of this auction lands on chain, reducing spam previously caused by searchers. Another upside for searchers is the better execution guarantee because a bundle is only included if the transactions contained succeed. The first bundle was included in a block on 2020-12-29[^4] and by 2021-05 more than 90% of Ethereum hash rate participated[^5]. Flashbots offered a crucial service in time of need but it is also important to mention that the system was fully based on trust and reputation and any organization with less integrity could’ve wrecked a lot of havoc. On the Tendermint side, there are [Skip](https://github.com/skip-mev/mev-tendermint) and [Zenith](https://meka.tech/zenith) which offer similar services as flashbots do.

**mev-boost**: While wildly successful, mev-geth/mev-relay was always intended to be a temporary solution until an in-protocol mechanism is ready for production. With Ethereum’s transition from PoW to PoS mev-geth got an upgrade to mev-boost. Before, Flashbots acted as the single builder of blocks for mev-geth operators. mev-boost[^6] allows validators (block proposers) to not just use Flashbots but connect their node to many relays which aggregate many competing builders. mev-boost was made possible by collaboration of many Ethereum ecosystem participants who produced a unified interface for block builders[^7]. This is still not an in-protocol solution but starts removing Flashbot from its privileged position as the sole block builder while the slower moving Ethereum base layer tries to land a protocol native solution.

**PBS**: The proposer-builder-separation[8] design proposed by Vitalik Buterin as an in-protocol solution is the foundation for most efforts in the Ethereum ecosystem with the goal to remove as many trust assumptions as possible between proposer and builder to enable a more open market. For example, with the current mev-relay block builders have to trust the relay to not steal their bundles, which would make that the establishment of some off-chain reputation registry for both proposers and builders very likely, in turn making the system less open.

These three systems represent one approach to dealing with execution guarantees/mev, that is, as something that needs to be internalized and made legible to the consensus system because it allows better alignment of incentives for all parties involved and reduces trust assumptions. There are teams working on similar systems for other blockchains[^10][^14]. This is the approach that we believe to be the best.

### Fair sequencing

Another class of systems tries to focus on “fairness” achieved by establishing a canonical temporal ordering for transactions, which is probably impossible in an open adversarial setting and none of these systems have seen any open deployments to put these claims to test.

**Bullshark/Tusk**: These rely on secure, reliable broadcast systems and their main insights is the decoupling of mempool (dissemination of transactions) and consensus on just metadata to achieve high throughput. To make the system work, transactions are placed into a DAG which can then be used to establish a temporal order.

**Chainlink FSS**: The Fair Sequencing Service[^12] that Chainlink wants to offer is based on the Aequitas protocol[^11] and can best be described as an additional round of consensus on the order of transactions observed by consensus nodes.

### Cryptography

Next, we consider cryptographic means, with the goal of preventing “bad” behaviour, eg front running, by hiding transaction content.

**Threshold Encryption**: Using threshold encryption schemes for transactions or blocks is conceptually the same as commit-reveal schemes, though they differ in mechanics. Both achieve frontrunning resistance in return for added latency. One recent example is Ferveo[^13], which details one such system and integrates it tightly into Tendermint consensus to end up with a fairly efficient system, that provides transaction hiding as long as 2/3 of the stake is not colluding, though the system can not prove collusion.

**SGX/TEE**: Secret network[^15] uses keys held inside trusted hardware to allow operations on encrypted transactions and state. A user encrypts their transaction to one of the keys held inside the secure enclaves in theory protecting them from front running. Intel SGX or TEEs in general are very enticing for protocol designers because if we assume trusted hardware exists, ie an execution environment that is opaque to the host machine, then many protocol designs can be much simpler—unfortunately, it’s been a flawed assumption thus far[^27].

### Auctions

All previous systems try to be generic to work with any application but applications can be designed in a way to minimize their externalities or internalize as much of it as possible.

**PFOF**: Payment for order flow is one tool that can easily be adopted at an application level to internalize some externalities. This should be of particular interest for appchains because they are already running custom software that could easily be modified to include this functionality, e.g. on Osmosis automatic backrunning could be implemented that way. One live product with this focus is Rook[^16].

**Batch auctions**: The high frequency trading arms race observed since the early 2000s prompted Budish et al[^20] to suggest replacing the continuous order book with batch auctions to remove the necessity for zero sum latency games. Batch auctions being a fit for blockchains with blocks being the natural choice of batch was an early insight[^19] but the mechanism never really took off, although CowSwap seems to be gaining traction on EVM networks while Penumbra[^18] is going to launch a zone utilizing batch auctions and cryptography to minimize front running.

## Solution

Over the course of 2022 we sketched out different designs for systems that would:

- improve execution quality for users
- better align incentives by properly attributing and sharing value created across involved parties
- provide execution across multiple chains
- be governable by participating chains

The designs were informed by the realization that the commodity of execution is blockspace[^21]. We operate under the assumption that many of the dynamics from other commodity markets apply, e.g. validators and searchers will want to hedge via futures because commodities prices are typically very volatile.

A related assumption is the abundance of blockspace which implies that blockspace itself is worth very little but execution guarantees are worth a lot, that is the privilege to change some state at a desired point in time.

Our discussions with external stakeholders informed the formulation of the interchain scheduler[^26] while our internal discussions converged on similar concepts and we believe the idea provides a solid foundation for what we need.

To get there we are going to produce:

- segment builder API specification: open standard to be used for communication between builders and proposers
- segment builder module: lightweight module allowing validators to interact with builders
- auction module: verify commitments to buy block segments, these commitments can originate locally (builder api) or remotely (pulzaar)
- Pulzaar: IBC connected Tendermint chain, that chains use to auction off block segments to builders, acting as a point of coordination to produce and enforce commitments

The service Pulzaar will provide is a market place for interchain block segments. Block segments are contiguous blockspace which can be positioned reliably and verified on chain and provide a censorship resistance stepping stone towards a scheduler for the interchain[^26] and ultimately better execution guarantees.

On the supply side we have validators/proposers, who are the monopoly producers of block space and want to sell continuous segments of blocks. On the demand side are block builders, who can buy these segments from validators and fill them with transactions.

This market place should have the following high level properties:

- opt-in: every chain can choose to participate
- governable: if chains opt-in they have power over block space its validators sell
- low implementation complexity
- censorship resistance: it should be costly or even impossible for a builder to censor
- community owned and operated

Proposers are already known entities for Tendermint/Cosmos SDK protocols, that is they have explicit identities and roles enforced by the protocols.

- do the same for builders, giving them identities and therefore reputation
- also means to make them legible to governance, ie gov might only allow certain builders to be active on their chain
- once we have the market participants (proposer/builder) legible we can introduce credible commitments[^25] for both sides
  - without commitments marketplace would have to be atomic
  - proposers commit to selling block segment at given height
  - builders commit to paying for the segments they have bought
  - commitments from all sides allows the parties to be paid appropriately

## Trajectory - Escalating Odds

Finally, we want to setup a trajectory for our work given our current understanding described in the previous section.

To start out we are developing and operating a trusted block builder service, Zenith, for a few selected chains. This is the quickest way to provide value to validators and users, while minimizing outside dependencies on the Tendermint/Cosmos SDK code bases, which have a high bar for changes to ensure quality and community alignment.

Our goal is to offer protocol level integrations for a diverse set of Cosmos chains, but to do that we need the applications to be aware of the consensus layer and modify the rules of block production. Unfortunalety ABCI is not powerful enough to offer that capability. We could maintain forks of Tendermint and the Comsos SDK allowing applications to have more control over the block building process but that would come with many downsides and little upside. Instead we want to help getting ABCI1.0[^17] deployed. ABCI1.0 was first proposed in early 2020 but has not made it into production by 2022-12. It extends ABCI to allow apps to hook into the lifecycle of block proposing, giving us the flexibility we need. Celestia[^22] is one prominent system that also leans heavily on ABCI1.0 and we want to help to finally get it into production.

The segment builder and auction modules can only be deployed once chains enable ABCI1.0 but we plan on making them available as early as possible to give protocol developers plenty of time for community feedback, integration and testing.

Together with the modules we will also be proposing an API specification for the communication between proposers and builders.

Pulzaar will be developed in parallel with all of the above as a series of public testnets and in collaboration with stakeholders from different chains.

## Conclusion

In this paper we outline some problems the Interchain ecosystem faces and what a market based solution can look like.

Future works will formalize the specification of Pulzaar, research robust incentive mechanisms, proof systems and governance of these markets. Beyond that we want to extend Pulzaar to not just provide a supply of blockspace to builders but also allow it to be an aggregator for user preferences, which in turn should enable better incentive alignment between all parties involved.

If those sound interesting and you want to collaborate, please reach out to [connect@pulzaar.zone](mailto:connect@pulzaar.zone).

---

## refs

[^1]: [https://hackmd.io/@flashbots/mev-in-eth2#validator-reward-economics](https://hackmd.io/@flashbots/mev-in-eth2#validator-reward-economics)
[^2]: Daian, Philip, et al. "Flash boys 2.0: Frontrunning, transaction reordering, and consensus instability in decentralized exchanges." *arXiv preprint arXiv:1904.05234* (2019).
[^3]: [https://ethresear.ch/t/flashbots-frontrunning-the-mev-crisis/8251](https://ethresear.ch/t/flashbots-frontrunning-the-mev-crisis/8251)
[^4]: [https://medium.com/flashbots/flashbots-transparency-report-january-2021-922514de8b8a](https://medium.com/flashbots/flashbots-transparency-report-january-2021-922514de8b8a)
[^5]: Weintraub, Ben, et al. "A Flash (bot) in the Pan: Measuring Maximal Extractable Value in Private Pools." *arXiv preprint arXiv:2206.04185* (2022).
[^6]: [https://boost.flashbots.net](https://boost.flashbots.net/)
[^7]: [https://github.com/ethereum/builder-specs](https://github.com/ethereum/builder-specs)
[^8]: [https://ethresear.ch/t/proposer-block-builder-separation-friendly-fee-market-designs/9725](https://ethresear.ch/t/proposer-block-builder-separation-friendly-fee-market-designs/9725)
[^9]: Budish, Eric, Robin S. Lee, and John J. Shim. *Will the market fix the market?: A theory of stock exchange competition and innovati*. Cambridge: National Bureau of Economic Research, 2019.
[^10]: [https://www.jito.wtf/](https://www.jito.wtf/)
[^11]: Kelkar, Mahimna, et al. "Order-fairness for byzantine consensus." *Annual International Cryptology Conference*. Springer, Cham, 2020.
[^12]: [https://blog.chain.link/chainlink-fair-sequencing-services-enabling-a-provably-fair-defi-ecosystem/](https://blog.chain.link/chainlink-fair-sequencing-services-enabling-a-provably-fair-defi-ecosystem/)
[^13]: Bebel, Joseph, and Dev Ojha. "Ferveo: Threshold Decryption for Mempool Privacy in BFT networks." *Cryptology ePrint Archive* (2022).
[^14]: [https://github.com/marlinprotocol/mev-bor](https://github.com/marlinprotocol/mev-bor)
[^15]: [https://scrt.network](http://scrt.network)
[^16]: [https://www.rook.fi/](https://www.rook.fi/)
[^17]: [https://github.com/tendermint/tendermint/tree/master/spec/abci%2B%2B](https://github.com/tendermint/tendermint/tree/master/spec/abci%2B%2B)
[^18]: [https://penumbra.zone/](https://penumbra.zone/technology/swap)
[^19]: [https://archive.devcon.org/archive/watch/1/liquidity-on-blockchains/?tab=YouTube](https://archive.devcon.org/archive/watch/1/liquidity-on-blockchains/?tab=YouTube)
[^20]:
    Budish, Eric, Peter Cramton, and John Shim. "The high-frequency trading arms race: Frequent batch auctions as a market design response." *The Quarterly Journal of Economics*
    130.4 (2015): 1547-1621.

[^21]: [https://www.aniccaresearch.tech/blog/consensus-capital-markets](https://www.aniccaresearch.tech/blog/consensus-capital-markets)
[^22]: [https://celestia.org](https://celestia.org/)
[^23]: [https://github.com/tendermint/tendermint/blob/master/docs/architecture/adr-067-mempool-refactor.md](https://github.com/tendermint/tendermint/blob/master/docs/architecture/adr-067-mempool-refactor.md)
[^24]: [https://mirror.xyz/0x03c29504CEcCa30B93FF5774183a1358D41fbeB1/CPYI91s98cp9zKFkanKs_qotYzw09kWvouaAa9GXBrQ](https://mirror.xyz/0x03c29504CEcCa30B93FF5774183a1358D41fbeB1/CPYI91s98cp9zKFkanKs_qotYzw09kWvouaAa9GXBrQ)
[^25]: [https://github.com/flashbots/mev-research/blob/main/FRPs/active/FRP-26.md](https://github.com/flashbots/mev-research/blob/main/FRPs/active/FRP-26.md)
[^26]: [https://informal.systems/2022/10/24/interchain-scheduler-design-update](https://informal.systems/2022/10/24/interchain-scheduler-design-update)
[^27]: [https://sgx.fail/](https://sgx.fail/)
[^28]: [https://twitter.com/flipsidecrypto/status/1524550290447343617](https://twitter.com/flipsidecrypto/status/1524550290447343617)

- [http://arxiv.org/abs/2102.03347](http://arxiv.org/abs/2102.03347) — Frontrunner Jones and the Raiders of the Dark Forest: An Empirical Study of Frontrunning on the Ethereum Blockchain
- [http://arxiv.org/abs/2101.05511](http://arxiv.org/abs/2101.05511) — Quantifying Blockchain Extractable Value: How dark is the forest?
- [https://flashbots.notion.site/Relay-API-Spec-5fb0819366954962bc02e81cb33840f5](https://www.notion.so/5fb0819366954962bc02e81cb33840f5)
- [https://notes.ethereum.org/@vbuterin/pbs_censorship_resistance](https://notes.ethereum.org/@vbuterin/pbs_censorship_resistance)
- narwhal/tusk
  - [https://arxiv.org/pdf/2105.11827.pdf](https://arxiv.org/pdf/2105.11827.pdf)
