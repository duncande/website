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
    abstract: "How do firms' avoidance and evasion opportunities affect market prices? We investigate the causal link between tax-evasion opportunities and prices in a situation where firms remit sales taxes and have access to tax-evasion possibilities. We design a controlled experiment in which buyers and sellers trade a fictitious good in competitive markets.",
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
    abstract: "We use an IV/2SLS methodology with exposure to the 2017 solar eclipse as an instrument for Airbnb expansion to estimate the causal effect of Airbnb on local housing prices. Results indicate an eclipse-induced expansion led to a 0.08% increase in housing prices, driven by first-time hosts listing part of their home.",
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
    abstract: "We examine how fiscal decentralization and state enterprise privatization shape corporate tax compliance dynamics in developing economies.",
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
    abstract: "Investigates food assistance safety nets during economic disruptions and evaluates efficiency across charitable logistics networks.",
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
    abstract: "Evaluates long-term impacts of statutory budget rules on fiscal deficits and federal expenditure trajectories in the US.",
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
    abstract: "Conducted a large-scale field experiment assessing implicit bias and systemic barriers in employment matching and labor market entry.",
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
    abstract: "Demonstrates that wage decreases elicit significantly stronger reductions in labor effort than equal-sized wage increases, particularly on the extensive margin.",
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
    abstract: "Analyzes public willingness-to-pay for mileage-based taxation options compared to traditional motor fuel taxes.",
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
    abstract: "Explores how media announcements of tax audit blitzes influence broader tax declaration behavior among sole proprietors.",
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
    abstract: "Comprehensive policy appraisal of EV buyer incentives, charging infrastructure subsidies, and automaker mandates.",
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
    abstract: "Evaluates macro employment, auto sales, and environmental trade-offs resulting from federal fuel efficiency mandates.",
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
    abstract: "Applies a Total Cost of Ownership framework to project consumer vehicle purchasing shifts under Corporate Average Fuel Economy regulations.",
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
    abstract: "Estimates compliance costs and credit trading dynamics for automobile manufacturers meeting state ZEV mandates.",
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
    abstract: "Investigates whether consumer under-adoption of fuel-efficient hybrid vehicles reflects payback period calculations or behavioral biases.",
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
    abstract: "Examines policy alignment and regulatory overlap between federal vehicle emissions standards and state-level mandates.",
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
    abstract: "Tests how third-party information reporting alters individual truth-telling and evasion incentives in controlled laboratory settings.",
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
    abstract: "Analyzes public opinion survey data to identify key socio-demographic and political drivers of support for mileage-based highway user fees.",
    status: "Published",
    link: "http://papers.denvilrduncan.com/Mileageuserfee_overview_2016.pdf"
  },
  {
    id: "duncan-2016-tolerable",
    title: "Searching For A Tolerable Tax: Public Attitudes Toward Roadway Financing Alternatives",
    authors: "Denvil Duncan, Venkata Nadella, Stacey Giroux, Ashley Bowers, John Graham",
    journal: "Public Finance Review, 45(5): 678-700",
    year: 2016,
    category: "transportation",
    abstract: "Compares voter acceptability across gas taxes, mileage fees, sales taxes, and tolls as sustainable revenue alternatives.",
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
    abstract: "Utilizes panel data across 100+ countries to establish whether statutory personal income tax progressivity effectively mitigates net inequality.",
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
    abstract: "Analyzes how future income generation and tax evasion opportunities alter baseline portfolio risk exposure.",
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
    abstract: "Finds that the availability of tax evasion opportunities alters real-effort labor supply, highlighting key real-economic spillovers.",
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
    abstract: "Evaluates how privacy protection guarantees and GPS tracking technology costs influence voter approval of mileage user fees.",
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
    abstract: "Investigates how marginal income tax rates influence the size of the shadow economy using satellite night-light data and cross-country panels.",
    status: "Published",
    link: "http://www.jstor.org/stable/24370423"
  },
  {
    id: "duncan-2014-mimicry",
    title: "Personal Income Tax Mimicry: Evidence from International Panel Data",
    authors: "Denvil Duncan, Ed Gerrish",
    journal: "International Tax and Public Finance, 21(1): 119-152",
    year: 2014,
    category: "tax-policy",
    abstract: "Tests strategic tax competition and policy mimicry in personal income tax structures across national borders.",
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
    abstract: "Applies stochastic frontier analysis to measure operational efficiency across national revenue collection agencies.",
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
    abstract: "Examines voter preferences for benefit-principle taxation versus general revenue financing in transportation infrastructure.",
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
    abstract: "Simulates distributional shifts and behavioral adjustments resulting from Russia's transition to a single-rate personal income tax.",
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
    abstract: "Laboratory experimental investigation measuring how tax evasion opportunities distort post-tax income distribution.",
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
    abstract: "Tests whether governments strategically impose higher tax burdens on demographic groups exhibiting high baseline tax morale.",
    status: "Published",
    link: "http://onlinelibrary.wiley.com/doi/10.1111/kykl.12042/pdf"
  },
  {
    id: "duncan-2013-roaduser",
    title: "Road User Fees Instead of Fuel Taxes: The Quest for Political Acceptability",
    authors: "Denvil Duncan, John Graham",
    journal: "Public Administration Review, 73(3): 415-426",
    year: 2013,
    category: "transportation",
    abstract: "Appraises public administration strategies and communications frameworks necessary to overcome political resistance to mileage fees.",
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
    abstract: "Introduces a groundbreaking global panel database measuring structural tax progressivity and flat-tax adoption worldwide.",
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
    abstract: "Estimates labor supply responses to Russia's 2001 flat tax reform using micro-level panel data.",
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
    abstract: "Applies the Panzar-Rosse econometric model to evaluate market structure and competitive behavior among commercial banks in Jamaica.",
    status: "Published",
    link: null
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
    abstract: "Conference paper evaluating assessment uniformity, appraisal errors, and equity in local property taxation.",
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
      <p class="paper-abstract">${pub.abstract}</p>
      <div class="paper-actions">
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
      <p class="paper-abstract">${wp.abstract}</p>
      ${wp.link ? `
        <div class="paper-actions">
          <a href="${wp.link}" target="_blank" rel="noopener" class="btn-icon-link">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            Working Paper Manuscript (PDF)
          </a>
        </div>
      ` : ''}
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
