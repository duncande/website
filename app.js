/**
 * Professor Denvil R. Duncan - Academic Portfolio Interactive Engine
 * Official Published Research Dataset (31 Publications) & Working Papers
 */

// Dataset: 31 Published Papers (Peer-Reviewed Articles & Policy Publications)
const publicationsData = [
  {
    id: "doerrenberg-2025-taxevasion",
    title: "How Does Firm Tax Evasion Affect Prices?",
    authors: "Denvil Duncan, Philipp Doerrenberg",
    journal: "National Tax Journal (Accepted / Forthcoming)",
    year: 2025,
    category: "tax-policy",
    abstract: "We use two experiments to examine how tax evasion opportunities affect market prices. In both experiments, buyers and sellers trade a fictitious good subject to a per-unit seller tax. We show in the first experiment that equilibrium prices fall when evasion is possible, reflecting a lower effective tax burden. We hold the effective tax burden constant in the second experiment and find that markets with evasion opportunities tend to trade at higher prices than markets without evasion opportunities. The effect size exceeds half the effective tax rate and one standard deviation of mean prices, highlighting meaningful price and incidence implications.",
    status: "Accepted / Forthcoming",
    link: "http://papers.denvilrduncan.com/paper_write_20190522.pdf"
  },
  {
    id: "duncan-2025-airbnb",
    title: "Air BNB Expansion and Housing Prices: Evidence from a Celestial Lottery",
    authors: "Denvil Duncan, Justin M. Ross",
    journal: "Journal of Regional Science (Accepted / Forthcoming)",
    year: 2025,
    category: "housing-public",
    abstract: "This study exploits the 2017 solar eclipse as a natural experiment to estimate the causal impact of Airbnb activity on housing prices. The eclipse created a temporary demand shock that induced a persistent increase in Airbnb supply. Using an IV/2SLS framework, we find that a 1% increase in Airbnb listings raises housing prices by 0.037–0.043%, a magnitude consistent with prior studies. We find no evidence of a displacement effect, suggesting that the price response is driven by the capitalization of rental income from utilizing excess housing capacity. Our findings suggest that partial bans on investor listings may have limited efficacy in improving affordability in areas where the capitalization effect is strong.",
    status: "Accepted / Forthcoming",
    link: null
  },
  {
    id: "duncan-2025-tax",
    title: "Decentralization, privatization, and firm tax compliance",
    authors: "Denvil Duncan, Yongzheng Liu, Hailun Wei",
    journal: "International Tax and Public Finance (Available online)",
    year: 2025,
    category: "tax-policy",
    abstract: "This study examines the tax compliance effect of changing the ownership structure of state-owned enterprises (SOEs) using a large dataset of Chinese industrial firms. We exploit the variation in SOEs ownership—oversight authority shifted from one level of government to either a lower one (i.e., decentralization) or to the private sector (i.e., privatization), in a difference-in-differences framework to find that both decentralization and privatization causes an increase in tax compliance as measured by effective tax rate. Additionally, we find evidence that while the decentralization results are driven by the reduced distance between a decentralized SOE and its oversight government, the privatization results appear to be driven by greater tax-scrutiny. Decentralization and privatization are often seen as strategies to improve efficiency in the affected markets. Our results suggest that changes in firm ownership strengthened the state’s capacity to raise revenues in the post-SOE reform period, which partially explains the country’s success in economic transition.",
    status: "Published",
    link: "https://doi.org/10.1007/s10797-025-09909-5"
  },
  {
    id: "duncan-2025-food",
    title: "The role of charitable food assistance during times of crisis",
    authors: "Denvil Duncan, Luis Navarro, Shellye Suttles",
    journal: "Journal of the Agricultural and Applied Economics Association, 4(1): 118-134",
    year: 2025,
    category: "housing-public",
    abstract: "We examine the role of charitable food assistance during periods of economic distress by looking at donations to a large Midwestern food bank. We explore the determinants of in-kind food provisions and financial donations during the COVID-19 pandemic and find that both types of assistance dramatically increased at the onset of the pandemic. However, these increases were not persistent. We argue that this is evidence that the charitable food system serves a critical role in facilitating the transmission of federal provisions and charitable donations to households in need during times of crisis.",
    status: "Published",
    link: "https://doi.org/10.1002/jaa2.70006"
  },
  {
    id: "duncan-2025-budget",
    title: "Does the Federal Budget Process Promote Fiscal Sustainability? Evidence from the Budget Enforcement Act of 1990",
    authors: "Denvil Duncan, Justin M. Ross, John L. Mikesell",
    journal: "Public Finance Review, 53(1): 29-61",
    year: 2025,
    category: "tax-policy",
    abstract: "The Budgetary Enforcement Act of 1990 (BEA90), in effect from 1992 to 2002, is frequently held up as an example of a congressional control that constrained U.S. federal spending. This paper provides a formal test of this conventional wisdom using synthetic control on federal non-defense discretionary expenditures, which is the category of spending BEA90 was considered the most binding. A BEA90-retaining Synthetic United States generated from a lasso regression on a large panel of donors high-income national economic and government finance indicators ultimately reach 2006 at about the same level as the actual United States despite temporarily showing some more restraint immediately upon expiration. We conclude that BEA90 effect on federal non-defense discretionary spending was small, short-lived, statistically likely to have emerged from chance, and more generally did not bend the curve of federal expenditure growth.",
    status: "Published",
    link: "https://doi.org/10.1177/10911421241273374"
  },
  {
    id: "doerrenberg-2024-invisible",
    title: "The (in)visible hand: role of race and sex in job selection decisions",
    authors: "Philipp Doerrenberg, Denvil Duncan, Danyang Li",
    journal: "Journal of Public Economics, 231 (March)",
    year: 2024,
    category: "labor-supply",
    abstract: "Although a large literature has studied discrimination in the labor market, there is little evidence on sex- and race-based discrimination of workers against (potential) employers. We implement a randomized experiment in an online labor market to contribute to this gap in the literature. In our experiment, workers make labor-supply decisions after we randomly expose them to signals about the race and sex of the employer. Our empirical analysis provides fairly strong evidence that workers discriminate against black employers when making labor effort decisions. Race-based discrimination is driven primarily by white workers against black male employers. We find weaker and less conclusive evidence of a favorable sex gap toward female employers. An additional survey with randomized components suggests that perceived differences in the likelihood that an employer honors the labor contract does not differ by employer race or sex.",
    status: "Published",
    link: "https://doi.org/10.1016/j.jpubeco.2024.105065"
  },
  {
    id: "doerrenberg-2023-asymmetric",
    title: "Asymmetric labor-supply responses to wage-rate changes: Evidence from a field experiment",
    authors: "Philipp Doerrenberg, Denvil Duncan, Max Loeffler",
    journal: "Labour Economics, 81 (April)",
    year: 2023,
    category: "labor-supply",
    abstract: "We test whether labor supply responds symmetrically to wage increases and decreases using a randomized real effort online experiment. The results show that wage increases have smaller effects on labor supply than wage decreases of equal magnitude, especially on the extensive margin where the response to a wage decrease is twice that to a wage increase. This finding suggests that labor-supply responses to wage changes are asymmetric. We discuss the potential mechanisms behind our results including standard models of labor supply, reference dependence in consumption and reciprocity.",
    status: "Published",
    link: "https://doi.org/10.1016/j.labeco.2022.102305"
  },
  {
    id: "duncan-2020-mileage",
    title: "Tax Rate Structure and Support for Road Mileage User Taxes in the US",
    authors: "Denvil Duncan, Danyang Li, John Graham",
    journal: "Transport Policy, 93 (July): 17-26",
    year: 2020,
    category: "transportation",
    abstract: "Road mileage user-fees (MUFs) remain an unpopular financing option to replace fuel taxes at the state level despite being viewed favorably by some policy experts and policymakers. We investigate the extent to which tax-rate design can be used to boost support to the point where policymakers might feel comfortable moving ahead with replacing their fuel taxes with MUFs. Using data from four experimental surveys, we show that while tax-rate design can be used to increase public support for MUFs, the effect is likely too small to convince policymakers to adopt MUFs.",
    status: "Published",
    link: "https://doi.org/10.1016/j.tranpol.2020.04.017"
  },
  {
    id: "battiston-2020-audit",
    title: "Audit publicity and tax compliance: a natural experiment",
    authors: "Pietro Battiston, Denvil Duncan, Simona Gamba, Alessandro Santoro",
    journal: "Scandinavian Journal of Economics, 122(1): 81-108",
    year: 2020,
    category: "tax-policy",
    abstract: "We use confidential data on value-added tax payments at the sector level, in two large Italian cities, to estimate the effect of audit publicity on the tax compliance of local sellers. By employing a difference-in-differences identification strategy, we find that such publicity has a positive effect on fiscal declarations made shortly thereafter. The results suggest that increasing awareness on future audits via the media can be an important instrument in the hands of tax authorities.",
    status: "Published",
    link: "https://onlinelibrary.wiley.com/doi/abs/10.1111/sjoe.12330"
  },
  {
    id: "carley-2019-ev",
    title: "Overcoming the Shortcomings of U.S. Plug-in Electric Vehicle Policies",
    authors: "Sanya Carley, Denvil Duncan, John D. Graham, Saba Siddiki, Nikos Zirogiannis",
    journal: "Renewable & Sustainable Energy Reviews, 113 (October): 109291",
    year: 2019,
    category: "transportation",
    abstract: "We evaluate plug-in electric vehicle (PEV) policies currently implemented across the U.S. and the potential for these policies to facilitate widespread PEV diffusion. We examine the relationship between overlapping regulatory and fiscal policies at the federal and state levels of government. We argue that the current suite of policies is not as effective as it could be, and potentially more expensive. Our analysis suggests the existence of a tradeoff between the goals of increasing the market penetration of PEVs and that of limiting greenhouse gas emissions from the light-duty vehicle fleet. The way federal and state policies interact puts those two goals at odds, at least in the short-term. Drawing from the policy and economics literatures, we summarize a series of recommendations and incentives that could deliver a more balanced approach to the achievement of those two policy goals. We conclude with some research suggestions.",
    status: "Published",
    link: "https://www.sciencedirect.com/science/article/abs/pii/S136403211930499X"
  },
  {
    id: "carley-2019-macro",
    title: "The macroeconomic effects of 2017-2025 federal fuel economy and greenhouse gas emissions standards",
    authors: "Sanya Carley, Nikolaos Zirogiannis, Denvil Duncan, Saba Siddiki, John D. Graham",
    journal: "Journal of Policy Analysis and Management, 38(3): 732-763",
    year: 2019,
    category: "transportation",
    abstract: "In the absence of a national carbon price, the federal Corporate Average Fuel Economy standards and the related greenhouse gas emissions (GHG) standards are the primary mechanisms through which the U.S. reduces transportation GHG emissions. In 2012, these standards were set to rise for light-duty vehicles between 2017 and 2025, eventually achieving a target of 54.5 miles per gallon in 2025. Since 2012, conditions have changed: forecasts of future gasoline prices have dropped dramatically, consumers have demanded larger vehicles, and the cost of compliance appears to be larger than previously thought. In this article, we analyze the possible macroeconomic effects of the standards with both 2012 inputs and updated inputs to reflect these new market developments. The results reveal that the short-term effects of the federal standards will be negative, but the long-term effects will be positive, using both 2012 and updated inputs. The transition from annual negative employment impacts to positive impacts occurs between 2023 and 2026, depending on which set of assumptions are used. Possible revisions to the standards that freeze them at 2020 levels or decrease their stringency reduce short-term negative impacts but also reduce long-term positive impacts. We conclude with a discussion of policy implications as they relate to the current energy and climate policy conditions.",
    status: "Published",
    link: "https://onlinelibrary.wiley.com/doi/full/10.1002/pam.22132"
  },
  {
    id: "zirogiannis-2019-cafe",
    title: "The Effect of CAFE standards on vehicle sales projections: A Total Cost of Ownership approach",
    authors: "Nikolaos Zirogiannis, Denvil Duncan, Sanya Carley, Saba Siddiki, John D. Graham",
    journal: "Transport Policy, 75 (March): 70-87",
    year: 2019,
    category: "transportation",
    abstract: "We conduct a Total Cost of Ownership analysis to estimate the impacts that the 2017–2025 Corporate Average Fuel Economy (CAFE) standards will have on sales of light duty vehicles (cars and light trucks). Vehicle sales are an important macroeconomic indicator that can impact both the economic outlook of the automobile industry as well as the efficacy of the CAFE standards. Our analysis focuses on the relative impacts of three determinants of the net premium consumers' face when deciding whether to purchase a new vehicle, namely: 1) consumers' valuation of fuel savings, 2) fuel price variation over time, and 3) gross price premium of the vehicle due to the Federal Standards. We find that uncertainty about consumers’ valuation of fuel savings leads to greater variation in estimated vehicle sales impacts than uncertainty about the gross price premium or fuel prices. Specifically, the estimated sales impacts for model year 2025 range from −7% to +3% and −4% to +5% for cars and light trucks, respectively, when we vary assumptions about valuation of fuel savings. The range of estimates is −6% to −2% and −2% to 0.5% for cars and light trucks, respectively, when we vary the gross price premium and −4% to +1% and −1% to +3% for cars and light trucks, respectively, when we vary fuel prices for model year 2025. These percentages are computed relative to a baseline scenario where CAFE standards remain fixed at 2016 levels. Our findings highlight the importance of more carefully examining the uncertainty introduced through consumer valuation of fuel economy in the mid-term reviews of the CAFE standards.",
    status: "Published",
    link: "https://www.sciencedirect.com/science/article/pii/S0967070X18302798"
  },
  {
    id: "jenn-2019-zev",
    title: "Cost implications for automaker compliance with Zero Emissions Vehicle requirements",
    authors: "Alan Jenn, Scott Hardman, Sanya Carley, Nikolaos Zirogiannis, Denvil Duncan, John Graham",
    journal: "Environmental Science and Technology, 53(2): 564-574",
    year: 2019,
    category: "transportation",
    abstract: "While there are many automotive regulations in the United States, few studies in the literature examine the interaction between different rules. We investigate the cost implications of enforcing the national Corporate Average Fuel Economy (CAFE) and greenhouse gas (GHG) emissions standards and the Zero Emissions Vehicle (ZEV) requirements simultaneously. We construct a new “Cost Optimization Modeling for Efficiency Technologies” (COMET) to understand how vehicle manufacturers implement fuel economy technologies to comply with multiple regulations. We consider a variety of scenarios to measure the interaction between regulations and how they may lead to changes in technology costs. In 2025, unit costs reach $1,600 per vehicle on average to comply with CAFE/GHG and increase to $2,000 per vehicle on average to comply with both CAFE/GHG and ZEV. Unit costs for both regulations are less than the sum of the two because vehicles produced to comply with the ZEV program count toward compliance with the CAFE.",
    status: "Published",
    link: "https://pubs.acs.org/doi/10.1021/acs.est.8b03635"
  },
  {
    id: "duncan-2019-hybrids",
    title: "Most Consumers Don't Buy Hybrids: Is Rational Choice a Sufficient Explanation?",
    authors: "Denvil Duncan, Arthur Liu, Alyssa Julian, Sanya Carley, Saba Siddiki, Nikolaos Zirogiannis, John D. Graham",
    journal: "Journal of Benefit-Cost Analysis, 10(1): 1-38",
    year: 2019,
    category: "transportation",
    abstract: "Although federal regulation of vehicle fuel economy is often seen as environmental policy, over 70% of the estimated benefits of the 2017–2025 federal standards are savings in consumer expenditures on gasoline. Rational-choice economists question the counting of these benefits since studies show that the fuel efficiency of a car is reflected in its price at sale and resale. We contribute to this debate by exploring why most consumers in the United States do not purchase a proven fuel-saving innovation: the hybrid-electric vehicle (HEV). A database of 110 vehicle pairs is assembled where a consumer can choose a hybrid or gasoline version of virtually the same vehicle. Few choose the HEV. A total cost of ownership model is used to estimate payback periods for the price premiums associated with the HEV choice. In a majority of cases, a rational-choice explanation is sufficient to understand consumer disinterest in the HEV. However, in a significant minority of cases, a rational-choice explanation is not readily apparent, even when non-pecuniary attributes (e.g., performance and cargo space) are considered. Future research should examine, from a behavioral economics perspective, why consumers do not choose HEVs when pricing and payback periods appear to be favorable.",
    status: "Published",
    link: "https://doi.org/10.1017/bca.2018.24"
  },
  {
    id: "siddiki-2018-federalism",
    title: "Does Dynamic Federalism Yield Compatible Policies? A Study of Federal and State Vehicles Standards",
    authors: "Saba Siddiki, Sanya Carley, Nikolaos Zirogiannis, Denvil Duncan, John D. Graham",
    journal: "Policy Design and Practice, 1(3): 215-232",
    year: 2018,
    category: "transportation",
    abstract: "Governance systems that allow jurisdictions housed at different levels to develop policies pertaining to common issues can foster the development of innovative and contextually appropriate solutions. Sometimes, however, the policies that emerge from different levels of government with overlapping policy jurisdiction can offer mixed, even contradictory, messages to policy targets. In such cases, the potential to achieve goals that are common among different policies may be compromised. This potentiality prompts questions about the extent to which policies developed at different levels of government relating to the same issue are mutually reinforcing, or compatible. In this paper, we investigate compatibility among a set of federal and state vehicle environmental performance standards in terms of policy goals, instruments, and incentives. The study entails a descriptive, qualitative analysis of federal fuel economy and vehicle greenhouse gas standards, and policies contained in California’s Advanced Clear Car Program.",
    status: "Published",
    link: "https://doi.org/10.1080/25741292.2018.1505186"
  },
  {
    id: "duncan-2018-liar",
    title: "Liar Liar: Experimental evidence on the effect of confirmation-reports on dishonesty",
    authors: "Denvil Duncan, Danyang Li",
    journal: "Southern Economic Journal, 84(3): 742-770",
    year: 2018,
    category: "tax-policy",
    abstract: "We identify the effect of confirmation-reports on dishonesty using data from an experiment where subjects are asked to roll a die and report its outcome using either a self-report or confirmation-report mechanism. We find that relative to self-reports, confirmation-reports have a positive effect on the share of subjects who report honestly. The effect on the magnitude of lies told depends greatly on the accuracy of the prefilled information on the confirmation-report. We argue that these results are driven by changes in the intrinsic costs of lying induced by the confirmation report.",
    status: "Published",
    link: "https://doi.org/10.1002/soej.12244"
  },
  {
    id: "duncan-2017-mileage",
    title: "The Road Mileage User Fee: Level, Intensity, and Predictors of Public Support",
    authors: "Denvil Duncan, Venkata Nadella, John Graham, Ashley Bowers, Stacey Giroux",
    journal: "Transport Policy, 53: 70-78",
    year: 2017,
    category: "transportation",
    abstract: "The road mileage user-fee is viewed as a promising alternative to the fuel tax, which in recent years has proven to be an inadequate means of financing road infrastructure. Public opposition is often thought to be a barrier to the political feasibility of the road mileage user-fee. We use a nationally representative public opinion survey to investigate the level and intensity of support for replacing the fuel tax with a general mileage user-fee and with three specific modes of administration of the fee. Our results confirm that public opposition to the adoption of mileage user-fees to address the growing revenue inadequacy of fuel taxes is high, with the number of opponents exceeding the number of supporters by a ratio of 4-1. Furthermore, public support is somewhat sensitive to respondents' belief in the user-pays principle and perceptions of the characteristics of the mode of administration. Additionally, relative to supporters, those who oppose the mileage user-fee are more likely to state that they are willing to take political action against the adoption of mileage user-fees.",
    status: "Published",
    link: "https://www.sciencedirect.com/science/article/abs/pii/S0967070X16305893"
  },
  {
    id: "duncan-2016-tolerable",
    title: "Searching For A Tolerable Tax: Public Attitudes Toward Roadway Financing Alternatives",
    authors: "Denvil Duncan, Venkata Nadella, Stacey Giroux, Ashley Bowers, John Graham",
    journal: "Public Finance Review, 45(5): 678-700",
    year: 2016,
    category: "transportation",
    abstract: "A growing number of states are pursuing strategies to combat declining fuel tax revenue and fund road construction and maintenance, including the use of sales taxes, income taxes, and tolls; raising fuel tax rates; and adopting road mileage user fees. We use data from a nationally representative survey to compare public acceptability of a mileage user fee with each of these alternative revenue mechanisms. We find that support for the revenue options varies from 13.4 percent for income taxes to 33.8 percent for tolls, with higher gasoline tax rates, mileage user fees, and sales taxes in the middle. The evidence also points to stronger intensity of opposition than intensity of support across all alternatives. Finally, we find that, conditional on opposition to the mileage user fee, public acceptability is highest for tolls, followed by higher fuel taxes, sales taxes, and income taxes. Policy implications are discussed.",
    status: "Published",
    link: "https://doi.org/10.1177/1091142116653818"
  },
  {
    id: "duncan-2016-inequality",
    title: "Unequal Inequalities: Do Progressive Taxes Reduce Income Inequality?",
    authors: "Denvil Duncan, Klara Sabirianova Peter",
    journal: "International Tax and Public Finance, 23(4): 762-783",
    year: 2016,
    category: "tax-policy",
    abstract: "This paper analyzes the effect of changes in the structural progressivity of national income tax systems on observed and actual income inequality. Using several unique measures of progressivity over the 1981–2005 period for a large panel of countries, we find that progressivity reduces inequality in observed income, but has a significantly smaller impact on actual inequality, approximated by consumption-based Ginis. An empirical comparative analysis shows that the differential effect on observed versus actual inequality is much larger in countries with weaker legal institutions. We also find that structural progressivity has a greater equalizing effect in environments that support pro-poor redistribution. Substantial differences in inequality response to changes in top versus bottom rates are also uncovered.",
    status: "Published",
    link: "https://link.springer.com/article/10.1007/s10797-016-9412-5"
  },
  {
    id: "doerrenberg-2015-risk",
    title: "Circumstantial Risk: Impact of future tax evasion and labor supply opportunities on risk exposure",
    authors: "Philipp Doerrenberg, Denvil Duncan, Christopher Zeppenfeld",
    journal: "Journal of Economic Behavior and Organization, 109 (January): 85-100",
    year: 2015,
    category: "labor-supply",
    abstract: "This paper examines whether investment in a risky asset depends on future circumstances. We conduct a laboratory experiment where subjects have the opportunity to invest earned income in a risky asset and, depending on randomly assigned treatment states, have the opportunity to respond to the outcome of the investment through extra labor effort and/or tax evasion. We find evidence that ex-post access to labor opportunities decreases ex-ante risk-taking, while access to tax evasion has no effect. Having both opportunities leads to lower risk-taking, but this effect is not statistically significant. We explore the channels behind these results with two additional treatments and find that our results are driven by background risk rather than flexibility.",
    status: "Published",
    link: "http://dx.doi.org/10.1016/j.jebo.2014.11.005"
  },
  {
    id: "doerrenberg-2014-laborsupply",
    title: "Experimental Evidence on the Relationship between Tax Evasion Opportunities and Labor Supply",
    authors: "Philipp Doerrenberg, Denvil Duncan",
    journal: "European Economic Review, 68 (May): 48-70",
    year: 2014,
    category: "labor-supply",
    abstract: "Motivated by the observation that access to evasion opportunities is distributed heterogeneously across the labor market, this paper examines the extent to which labor supply elasticities with respect to tax rates depend on such evasion opportunities. We first discuss the channels through which access to evasion affects labor supply responses and then set up a laboratory experiment (N=205) in which all participants undertake a real-effort task over several rounds. Subjects face a tax rate that varies across rounds and are required to pay taxes on earned income. The treatment group is given the opportunity to underreport income, while the control group is not. We find evidence that participants in the treatment group respond differently to changes in the net-of-tax rate than participants in the control group. The effect is more prevalent when tax rates fall. Additionally, the direction of the treatment effect is dependent on the evolution of tax rates across rounds.",
    status: "Published",
    link: "http://www.sciencedirect.com/science/article/pii/S0014292114000294"
  },
  {
    id: "duncan-2014-bumpy",
    title: "Bumpy Designs: Impact of Privacy and Technology Costs on Support for Road Mileage User Fees",
    authors: "Denvil Duncan, Venkata Nadella, Ashley Bowers, Stacey Giroux, John Graham",
    journal: "National Tax Journal, 67(3): 505-530",
    year: 2014,
    category: "transportation",
    abstract: "The mileage user fee is a promising alternative to the fuel tax but public opposition is a barrier to implementation. We use a nationally representative survey with an embedded experimental design to determine the extent to which technology costs and perceived invasion of privacy influence public opinion regarding the adoption of mileage user fees. We find that the ratio of opponents to supporters is about four to one, and that public opposition can be attenuated by insulating motorists from a new one-time cost for GPS technology to measure mileage, and by providing safeguards that eliminate or minimize perceived invasions of privacy.",
    status: "Published",
    link: "https://www.journals.uchicago.edu/doi/10.17310/ntj.2014.3.01"
  },
  {
    id: "duncan-2014-lights",
    title: "Switching on the lights: Do higher income taxes push economic activity into the shade?",
    authors: "Denvil Duncan, Klara Sabirianova Peter",
    journal: "National Tax Journal, 67(2): 321-350",
    year: 2014,
    category: "tax-policy",
    abstract: "This paper examines the effect of corporate income tax (CIT) rates on shadow economic activity. The paper revives the electricity consumption approach to measuring such activity with a new functional form, a larger sample of countries, a longer time span of 25 years, and the use of instrumental variables. We find that a 1 percentage point increase in the CIT rate increases the size of the shadow economy by 2.3 percent, which implies a tax elasticity of shadow economic activity of 0.78 at the mean CIT rate. This result suggests that efforts to reduce budget deficits with corporate tax rate increases may be offset by an increase in shadow economic activity.",
    status: "Published",
    link: "https://www.journals.uchicago.edu/doi/abs/10.17310/ntj.2014.2.02"
  },
  {
    id: "duncan-2014-mimicry",
    title: "Personal Income Tax Mimicry: Evidence from International Panel Data",
    authors: "Denvil Duncan, Ed Gerrish",
    journal: "International Tax and Public Finance, 21(1): 119-152",
    year: 2014,
    category: "tax-policy",
    abstract: "This paper investigates personal income tax (PIT) mimicry at the international level. It is the first to empirically investigate the extent to which PIT mimicry varies along the tax schedule and the first to include nations which are not part of the OECD. We use data on international personal income tax schedules from the world tax indicators to estimate marginal and average tax rates at various multiples of per capita gross domestic product (GDP). These tax rates are then used to estimate the extent to which countries respond to their neighbors’ PIT policy. We find evidence of PIT mimicry using a balanced panel of 53 countries over 24 years. This finding is strongest for tax rates at lower multiples of per capita GDP and survives several robustness checks.",
    status: "Published",
    link: "http://link.springer.com/article/10.1007%2Fs10797-012-9261-9"
  },
  {
    id: "alm-2014-agency",
    title: "An International Comparison of Tax Agency Efficiency",
    authors: "James Alm, Denvil Duncan",
    journal: "Public Budgeting and Finance, 34(3): 90-110",
    year: 2014,
    category: "tax-policy",
    abstract: "A key variable of interest to policy makers is the efficiency with which a tax agency's production process works. Until recently, the absence of comparable data across countries on tax administration has made the comparative analysis of tax agencies impossible. The recent compilation of data by the Organisation of Economic Co-operation and Development on administrative performance across countries has now provided this information. This article uses these data for the years 2007–2011, together with a novel three-step estimation strategy that utilizes data envelopment analysis (DEA) and stochastic frontier analysis (SFA), to determine the relative efficiency of tax agencies in their use of inputs. Our third stage results indicate that 13 of the 28 countries in our sample are relatively efficient at collecting any of the three types of tax revenues (personal income, corporate income, and value-added taxes). Overall, the average efficiency scores indicate that countries should be able to collect their current level of revenues with approximately 10–16 percent less inputs.",
    status: "Published",
    link: "http://onlinelibrary.wiley.com/doi/10.1111/pbaf.12043/abstract"
  },
  {
    id: "duncan-2014-demand",
    title: "Demand for Benefit Taxation: Evidence from Public Opinion on Road Financing",
    authors: "Denvil Duncan, Venkata Nadella, Ashley Bowers, Stacey Giroux, John Graham",
    journal: "Public Budgeting and Finance, 34(4): 120-142",
    year: 2014,
    category: "transportation",
    abstract: "Rising fuel economy standards for motor vehicles and higher road construction costs, coupled with infrequent adjustments to fuel taxes, have eroded the revenue base for road construction and repairs. We use survey data to determine whether the revenue-enhancement measures being used by policy makers to address the revenue shortfall reflect the public's preferences regarding the distribution of road financing costs. In particular, we explore whether there is public support for the idea that road financing costs should be distributed in proportion to benefits received from roads; that is, the benefit principle. We find that public support for the benefit-principle ranges from a low of 5 percent to a high of 34 percent, depending on the definition used. We also find evidence that people who support benefit-principle financing are more likely to agree that the road mileage user-fee is fair and also more likely to support revenue sources that satisfy the benefit principle. These findings suggest that a mix of revenue sources that vary in the extent to which they satisfy the benefit principle is a responsive political strategy. They also suggest that the low level of support for benefit-principle financing is partly responsible for the unpopularity of mileage user-fees. Policy makers who wish to pursue mileage user-fees as a replacement for fuel taxes should make an effort to educate voters on the advantages of benefit-based revenue sources.",
    status: "Published",
    link: "http://onlinelibrary.wiley.com/doi/10.1111/pbaf.12046/abstract"
  },
  {
    id: "duncan-2014-flattax",
    title: "Behavioral Responses and the Distributional Effects of The Russian 'Flat' Tax",
    authors: "Denvil Duncan",
    journal: "Journal of Policy Modeling, 36(2): 226-240",
    year: 2014,
    category: "tax-policy",
    abstract: "This paper simulates the distributional impact of the Russian personal income tax (PIT) following the flat tax reform of 2001 using data from the Russian Longitudinal Monitoring Survey. I decompose the change in the distribution of net income into a direct (tax) effect and an indirect effect. The indirect effect is further decomposed into evasion and productivity effects using existing estimates of these respective elasticities. As expected, the direct tax effect increased net income inequality. Changes in the pre-tax distribution (indirect effect), on the other hand, had a large negative impact on inequality thus leading to an overall decline in net income inequality. I also find that the tax-induced evasion response increased reported net income inequality while reducing consumption inequality. To the extent that consumption approximates actual income, these results demonstrate that the flat tax reform had a much smaller effect on actual income inequality than on reported income inequality. More importantly, relative to non-tax factor, the reform had little overall effect on income inequality. This suggests that objection to flatter tax schedules on the grounds of income inequality is mostly misguided, especially in transitional countries with high levels of evasion.",
    status: "Published",
    link: "http://www.sciencedirect.com/science/article/pii/S0161893814000222"
  },
  {
    id: "doerrenberg-2014-distributional",
    title: "Distributional Implications of Tax Evasion: Evidence from the Lab",
    authors: "Philipp Doerrenberg, Denvil Duncan",
    journal: "Public Finance Review, 42(6): 720-744",
    year: 2014,
    category: "tax-policy",
    abstract: "We study the differential effects of tax reforms on actual and observed net income inequality in a laboratory experiment where participants first supply effort and then make a tax reporting decision. We show that for a group with relatively homogeneous levels of true gross income, higher taxes increase both actual and observed inequality but have a larger effect on actual inequality. We decompose the effect of tax rates into a mechanical tax effect and two behavioral (effort and evasion) effects. Our results indicate that the mechanical and effort effects on actual inequality are larger than on observed inequality while the evasion effect is generally larger on observed inequality. We also find that the size of the effects, relative to each other, depends on the measure of income.",
    status: "Published",
    link: "https://journals.sagepub.com/doi/10.1177/1091142113499398"
  },
  {
    id: "doerrenberg-2013-niceguys",
    title: "Nice Guys Finish Last: Do Ethical Taxpayers Face Higher Tax Rates?",
    authors: "Philipp Doerrenberg, Denvil Duncan, Clemens Fuest, Andreas Peichl",
    journal: "Kyklos, 67(1): 29-53",
    year: 2013,
    category: "tax-policy",
    abstract: "This paper examines the relationship between ‘tax morale’ and tax policy. Using a unique cross-country data set based on the World Values Survey and the World Tax Indicators, we find that income groups with high tax morale face higher average and marginal tax rates. We propose three possible mechanisms which could help to explain our results: i) an inverse elasticity argument where governments seek to minimize distortions, ii) a political economy argument where governments take voting behavior into account, and iii) an administrative costs argument where taxing high morale groups is more cost efficient.",
    status: "Published",
    link: "https://onlinelibrary.wiley.com/doi/full/10.1111/kykl.12042"
  },
  {
    id: "duncan-2013-roaduser",
    title: "Road User Fees Instead of Fuel Taxes: The Quest for Political Acceptability",
    authors: "Denvil Duncan, John Graham",
    journal: "Public Administration Review, 73(3): 415-426",
    year: 2013,
    category: "transportation",
    abstract: "In light of recent regulatory changes in federal fuel economy standards for cars and trucks, the consensus forecast is that motor fuel taxes will not be an adequate source of dedicated funding for roadway maintenance and construction. This article accepts the notion that mileage fees are a prominent replacement for the fuel tax and considers steps that might be taken to enhance the political acceptability of such a reform. The authors argue that simple, low-tech ways of implementing mileage fees are possible in the near term and should be complemented by a well-developed audit mechanism. Current trends in the automotive and auto insurance industries as well as social media are likely to reduce opposition to more technologically advanced mileage taxes in the long run.",
    status: "Published",
    link: "http://onlinelibrary.wiley.com/doi/10.1111/puar.12045/abstract"
  },
  {
    id: "peter-2010-global",
    title: "Global Reform of Personal Income Taxation, 1981-2005: Evidence from 189 Countries",
    authors: "Klara Sabirianova Peter, Steven Buttrick, Denvil Duncan",
    journal: "National Tax Journal, 63(3): 447-478",
    year: 2010,
    category: "tax-policy",
    abstract: "We use a panel of 189 countries to describe trends in national personal income tax systems between the years 1981 and 2005. Using complete national income tax schedules, we show that tax rates at higher income levels, structural progressivity and the complexity of national tax systems have declined significantly; however, the degree of these changes varies considerably across countries. We also find that the relationship between tax rates and revenue is positive for high income countries but declines with weaker institutions and lower levels of economic development.",
    status: "Published",
    link: "https://www.journals.uchicago.edu/doi/abs/10.17310/ntj.2010.3.03"
  },
  {
    id: "duncan-2010-labour",
    title: "Does Labor Supply Respond to a Flat Tax: Evidence from the Russian Flat Tax Reform?",
    authors: "Denvil Duncan, Klara Sabirianova Peter",
    journal: "Economics of Transition, 18(2): 365-404",
    year: 2010,
    category: "labor-supply",
    abstract: "We exploit the exogenous change in marginal tax rates created by the Russian flat tax reform of 2001 to identify the effect of taxes on the labour supply of men and women. We apply a weighted difference-in-difference regression approach and instrumental variables to estimate labour supply functions using a panel dataset. The mean regression results indicate that the tax reform led to a statistically significant increase in hours of work for men but had no effect on work hours for women. However, we find a positive response to tax changes in both tails of the female work hour distribution. We also find that the reform increased the probability of finding a job among both men and women. Despite significant variation in individual responses, the aggregate labour supply elasticities are trivial. This suggests that reform-induced changes in labour supply are an unlikely explanation for the amplified personal income tax revenues that followed the reform.",
    status: "Published",
    link: "http://onlinelibrary.wiley.com/doi/10.1111/j.1468-0351.2009.00383.x/abstract"
  },
  {
    id: "duncan-2004-banking",
    title: "Testing for Competition in the Jamaican Banking Sector: Evidence from Bank Level Data",
    authors: "Denvil Duncan, Brian Langrin",
    journal: "Southwestern Journal of Economics, 6(1)",
    year: 2004,
    category: "housing-public",
    abstract: "This paper presents an empirical assessment of the market structure of the Jamaican banking sector over the last thirteen years. This exercise is especially relevant given the significant consolidation trend in the banking sector following a financial crisis during this period. The increase in market concentration has significant implications for the level of competition as well as the welfare of the customers in the banking sector. In contrast to the structural model of competition, the non-structural model does not support the hypothesis of a significant positive impact of financial liberalization on bank competition. However, both models strongly reject the hypotheses of monopoly/perfect collusion and perfect competition/contestable market in favour of monopolistic behaviour (albeit declining competition) over the sample period.",
    status: "Published",
    link: "papers_pamphlets_testing_for_competition_in_the_jamaican_banking_sector_-_evidence_from_bank_level_data.pdf"
  },
  {
    id: "duncan-2014-spea-mileage",
    title: "Mileage-Based Road User Fees: Do Americans Support or Oppose Them?",
    authors: "Denvil Duncan, John Graham",
    journal: "SPEA Insights, January issue",
    year: 2014,
    category: "transportation",
    abstract: "Policy brief synthesizing national public opinion findings on vehicle mileage tax feasibility.",
    status: "Published (Policy Brief)",
    link: null
  },
  {
    id: "ross-2013-nta",
    title: "Controversies in Property Assessment",
    authors: "Justin Ross, Denvil Duncan",
    journal: "National Tax Association Proceedings",
    year: 2013,
    category: "tax-policy",
    abstract: "We evaluate controversies in local property tax assessment, analyzing appraisal inaccuracies, vertical and horizontal inequities, and procedural reform options for local tax administration.",
    status: "Published (Proceedings)",
    link: "https://ntanet.org/wp-content/uploads/proceedings/2012/014-ross-controversies-property-assessment-2012-nta-proceedings.pdf"
  },
  {
    id: "duncan-2013-ripon",
    title: "Replacing the Gasoline Tax with a Road User Fee",
    authors: "Denvil Duncan, John Graham",
    journal: "The Ripon Forum, 47(3)",
    year: 2013,
    category: "transportation",
    abstract: "Policy essay outlining revenue erosion in the Federal Highway Trust Fund and advocating for a transition to vehicle miles traveled fees.",
    status: "Published (Policy Essay)",
    link: null
  },
  {
    id: "duncan-2012-spea-flat",
    title: "Economic Impact of a 'Flat' Tax. What have we learned from the Russian Experience?",
    authors: "Denvil Duncan",
    journal: "SPEA Insights, February issue",
    year: 2012,
    category: "tax-policy",
    abstract: "Policy brief summarizing empirical findings on tax evasion, revenue yield, and compliance after Russia's 13% flat tax reform.",
    status: "Published (Policy Brief)",
    link: null
  }
];

// Dataset: Working Papers & Manuscripts Under Review
const workingPapersData = [
  {
    title: "Do Budget Narratives Matter? Evidence From A Focal-Budget Experiment with Human and AI Respondents",
    authors: "Denvil Duncan, Justin M. Ross, Whitney Afonso",
    status: "Under Review",
    statusClass: "under-review",
    abstract: "Examines how narrative framing in municipal budget presentations influences spending preferences across human voters and large language model policy simulations.",
    year: "2026"
  },
  {
    title: "Financing the development of low-income housing: insights from a microeconomic framework",
    authors: "Denvil Duncan",
    status: "Revision Requested",
    statusClass: "revision-requested",
    abstract: "This essay uses a microeconomic theoretical framework to examine one demand-side and three supply-side affordable housing initiatives of the National Housing Trust (NHT) in Jamaica. The analysis shows that policy effectiveness depends on targeting efficiency and the price elasticity of housing supply.",
    year: "2024"
  },
  {
    title: "Consumer responses to the electric VAT",
    authors: "Denvil Duncan",
    status: "Work-in-Progress",
    statusClass: "wip",
    abstract: "Analyzing household electricity consumption elasticity and compliance responses to changes in value-added tax structures on utility bills.",
    year: "2023"
  },
  {
    title: "Cost of Living Adjustments and Public Workforce Turnover",
    authors: "Denvil Duncan, Thomas Spreen, John Stavick",
    status: "Work-in-Progress",
    statusClass: "wip",
    abstract: "Examines state government workforce retention across macroeconomic inflation shocks and regional cost-of-living adjustments.",
    year: "2024"
  },
  {
    title: "Wage Discrimination in Public Sector Workforces: Evidence from U.S. States",
    authors: "Denvil Duncan, Thomas Spreen, John Stavick",
    status: "Work-in-Progress",
    statusClass: "wip",
    abstract: "Investigates wage disparities, gender/racial equity, and compensation structures across public sector employee databases in U.S. state governments.",
    year: "2024"
  },
  {
    title: "Motor fuel taxation in the US",
    authors: "Denvil Duncan, Lady Ikea, Bahawal Shahryar, Jingzhao Yao",
    status: "Work-in-Progress",
    statusClass: "wip",
    abstract: "Assessing long-term highway trust fund revenues amidst electric vehicle adoption and alternative fuel tax models.",
    year: "2024"
  },
  {
    title: "Community Compass: Improving Food Security through Navigating Charitable Food Assistance with Smart Technology",
    authors: "Denvil Duncan, Shellye Suttles, Christina Chung, Alberto Ortega, Kate Howe",
    status: "Work-in-Progress",
    statusClass: "wip",
    abstract: "Evaluates a mobile smart technology navigation platform designed to optimize food pantry access and reduce food insecurity in vulnerable communities.",
    year: "2023"
  }
];

// State variables
let currentCategory = "all";
let searchQuery = "";
let wpSearchQuery = "";

// DOM Elements
document.addEventListener("DOMContentLoaded", () => {
  setActiveNavHighlight();
  renderPublications();
  renderWorkingPapers();
  initThemeToggle();
  initSearch();
  initFilterTabs();
});

// Auto-highlight active link based on current filename
function setActiveNavHighlight() {
  const path = window.location.pathname;
  const page = path.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (href === page || (page === "" && href === "index.html") || (page === "index.html" && href === "index.html")) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

// Render Publications
function renderPublications() {
  const container = document.getElementById("publicationsContainer");
  if (!container) return;

  const filtered = publicationsData.filter(pub => {
    const matchesCategory = currentCategory === "all" || pub.category === currentCategory;
    const matchesSearch = searchQuery === "" || 
      pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.authors.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.journal.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 40px; color: var(--text-muted);">
        <p style="font-size: 1.1rem;">No publications found matching your criteria.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(pub => `
    <div class="paper-card" id="${pub.id}">
      <div class="paper-header">
        <h3 class="paper-title">${pub.title}</h3>
        <span class="paper-year-badge">${pub.year}</span>
      </div>
      <p class="paper-authors">${highlightAuthor(pub.authors)}</p>
      <p class="paper-journal">${pub.journal}</p>
      <div class="paper-actions">
        <details class="abstract-details">
          <summary class="btn-icon-link">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>
            Abstract <span class="dropdown-arrow">▾</span>
          </summary>
          <div class="abstract-content-box">
            <p>${pub.abstract}</p>
          </div>
        </details>
        ${pub.link ? `
          <a href="${pub.link}" target="_blank" rel="noopener" class="btn-icon-link">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            Article Link
          </a>
        ` : ''}
        <button onclick="openBibtexModal('${pub.id}')" class="btn-icon-link">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>
          BibTeX Citation
        </button>
      </div>
    </div>
  `).join("");
}

// Render Working Papers
function renderWorkingPapers() {
  const container = document.getElementById("workingPapersContainer");
  if (!container) return;

  const filtered = workingPapersData.filter(wp => {
    return wpSearchQuery === "" || 
      wp.title.toLowerCase().includes(wpSearchQuery.toLowerCase()) ||
      wp.authors.toLowerCase().includes(wpSearchQuery.toLowerCase()) ||
      wp.abstract.toLowerCase().includes(wpSearchQuery.toLowerCase());
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 40px; color: var(--text-muted);">
        <p style="font-size: 1.1rem;">No working papers found matching your query.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(wp => `
    <div class="paper-card">
      <div class="paper-header">
        <h3 class="paper-title">${wp.title}</h3>
        <span class="paper-year-badge">${wp.year}</span>
      </div>
      <p class="paper-authors">${highlightAuthor(wp.authors)}</p>
      <span class="status-badge ${wp.statusClass}">${wp.status}</span>
      <div class="paper-actions">
        <details class="abstract-details">
          <summary class="btn-icon-link">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>
            Abstract <span class="dropdown-arrow">▾</span>
          </summary>
          <div class="abstract-content-box">
            <p>${wp.abstract}</p>
          </div>
        </details>
        ${wp.link ? `
          <a href="${wp.link}" target="_blank" rel="noopener" class="btn-icon-link">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            Working Paper Manuscript (PDF)
          </a>
        ` : ''}
      </div>
    </div>
  `).join("");
}

function highlightAuthor(authors) {
  return authors.replace(/Denvil Duncan/g, "<strong>Denvil Duncan</strong>");
}

// Filter Tabs
function initFilterTabs() {
  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.getAttribute("data-category");
      renderPublications();
    });
  });
}

// Real-time Search
function initSearch() {
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.trim();
      renderPublications();
    });
  }

  const wpSearchInput = document.getElementById("wpSearchInput");
  if (wpSearchInput) {
    wpSearchInput.addEventListener("input", (e) => {
      wpSearchQuery = e.target.value.trim();
      renderWorkingPapers();
    });
  }
}

// Theme Switcher
function initThemeToggle() {
  const toggleBtn = document.getElementById("themeToggleBtn");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const storedTheme = localStorage.getItem("theme");

  if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
    document.documentElement.setAttribute("data-theme", "dark");
    if (toggleBtn) toggleBtn.innerHTML = "☀️";
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    if (toggleBtn) toggleBtn.innerHTML = "🌙";
  }

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme");
      const next = current === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
      toggleBtn.innerHTML = next === "dark" ? "☀️" : "🌙";
    });
  }
}

// BibTeX Modal Logic
function openBibtexModal(pubId) {
  const pub = publicationsData.find(p => p.id === pubId);
  if (!pub) return;

  const bibtexText = `@article{${pub.id.replace(/-/g, '_')},
  title = {${pub.title}},
  author = {${pub.authors}},
  journal = {${pub.journal}},
  year = {${pub.year}},
  url = {${pub.link}}
}`;

  const modalOverlay = document.getElementById("bibtexModal");
  const bibtexCodeEl = document.getElementById("bibtexCode");
  
  if (modalOverlay && bibtexCodeEl) {
    bibtexCodeEl.textContent = bibtexText;
    modalOverlay.classList.add("active");
  }
}

function closeBibtexModal() {
  const modalOverlay = document.getElementById("bibtexModal");
  if (modalOverlay) {
    modalOverlay.classList.remove("active");
  }
}

function copyBibtex() {
  const bibtexCodeEl = document.getElementById("bibtexCode");
  if (bibtexCodeEl) {
    navigator.clipboard.writeText(bibtexCodeEl.textContent).then(() => {
      alert("BibTeX citation copied to clipboard!");
    });
  }
}
