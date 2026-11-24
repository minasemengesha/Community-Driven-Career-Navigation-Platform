# Wachemo University 
## Department of Software Engineering

## Acknowledgement

First and foremost, we give thanks to God for granting us the strength, patience, and wisdom to undertake and complete this project. We would also like to express our sincere gratitude to our Web Programming course instructor for assigning this project and providing the academic guidance necessary to carry it out. Finally, we recognize the dedicated collaboration, effort, and commitment of all six team members who worked together throughout every stage of the system's planning, design, and development.

## Table of Contents


## Executive Summary

RightGuide is a community-driven web platform built with pure HTML, CSS, JavaScript, PHP, and MySQL that helps learners discover reliable websites and YouTube channels for learning specific programming languages—starting with more than five core languages—through peer recommendations and community voting. Instead of struggling with scattered search results and unverified links, users simply select a target programming language to view curated free and paid learning sources ranked by community feedback. To encourage active participation and trustworthy curation, registered contributors earn reward points for approved recommendations—unlocking promotional placements upon reaching a 20-point threshold—while promoters can submit paid promotion requests verified manually by support agents, and administrators moderate submissions to prevent duplicates and maintain content quality.

## Chapter One: Introduction
### 1.1 Understanding the Problem Background and Knowing the Exact Problem
#### 1.1.1. Background of the Problem

Learning a programming language requires dependable tutorials, structured documentation, and clear video instruction. While thousands of educational websites and YouTube channels exist online, beginners and self-learners often struggle to identify trustworthy, up-to-date learning materials amid an overwhelming volume of unverified search results.

#### 1.1.2. The Real Environment

Currently, students and self-learners discover programming resources through general search engines, standalone YouTube searches, or informal recommendations shared in peer chat groups. In this fragmented environment, learners must manually open and evaluate dozens of links without knowing whether a source is beginner-friendly, free or paid, or preferred by experienced peers, while quality content creators lack a dedicated channel to gain visibility for helpful educational resources.

#### 1.1.3. Root Causes of the Problem

The difficulty in finding reliable programming learning resources stems from four primary causes:

- Fragmented Resource Distribution: Quality websites and instructional YouTube channels are spread across disconnected platforms with no centralized directory organized by programming language.
- Absence of Community Validation: General search rankings prioritize popularity or search optimization rather than verified learner feedback, making it hard to judge educational quality or discover better alternatives.
- Lack of Cost and Format Clarity: Links shared across search results and social groups rarely indicate upfront whether a resource is free, paid, or structured for beginners.
- Unstructured and Duplicate Sharing: Recommendations exchanged in informal forums or messaging groups are unmoderated, frequently duplicated, and quickly buried.

#### 1.1.4. Impact on Target Users

These limitations directly affect key participants in the programming learning ecosystem:

- Students and Beginners: Waste study time browsing low-quality or outdated tutorials and struggle to find a clear starting point for a chosen programming language.
- Self-Learners: Face decision fatigue comparing scattered websites and YouTube channels without peer ratings or transparent free-versus-paid labels.
- Content Creators and Educators: Struggle to reach learners actively studying a specific programming language without relying on paid advertising algorithms.

#### 1.1.5. The Exact Problem

The exact problem this project addresses is the absence of a centralized, community-validated web directory where learners can select a specific programming language—starting with more than five core languages—and immediately discover trustworthy, peer-ranked websites and YouTube channels. RightGuide solves this problem by combining language-specific resource categorization, duplicate-checked user submissions, community voting, and administrator moderation in a single platform.

### 1.2. Objectives of the project
#### 1.2.1. General objective

To design and develop RightGuide, a web-based, community-driven programming resource discovery platform built with pure HTML, CSS, JavaScript, PHP, and MySQL that enables learners to select from more than five programming languages and discover peer-recommended websites and YouTube channels, supported by on-demand guest authentication (guestToken), duplicate-checked submissions, a creator point-reward system, and a manual payment-verification workflow for promotions.

#### 1.2.2. Specific objectives

- To Implement Role-Based Authentication & On-Demand Guest Access: Develop a secure access-control system supporting public registration for registered users/content creators and promoters, pre-configured staff logins for administrators, customer support agents, and the system owner, and automatic on-demand guestToken assignment for anonymous visitors.

- To Build Language-Based Discovery & Duplicate-Checked Search: Enable learners to select from five core programming languages to browse curated websites and YouTube channels, supported by keyword and URL lookup that detects duplicate links and prompts users to vote on existing entries rather than creating redundant submissions.

- To Establish Community Voting & Referral/Creator Point Rewards: Implement a one-vote-per-user/token voting mechanism alongside a point system where registered users earn reward points from administrator-approved referrals (with guest referrals excluded and internal notifications sent upon approval) and verified resource submissions—unlocking free promotional placements upon reaching the 20-point threshold.

- To Enable New Language & Topic Requests: Provide a structured request workflow allowing users to suggest additional programming languages or learning topics beyond the initial five core languages for administrative review and platform expansion.

- To Support Transparent Bank-Transfer Promotion & Manual Verification: Build a promotion submission workflow where users request placements, submit bank transfer payment proof (such as a screenshot) or redeem earned points, and track real-time statuses, backed by a manual verification interface for customer support agents.

- To Deliver Internal Notifications & Asynchronous Support: Implement an automated internal notification system that alerts users and promoters of account, referral, recommendation, and payment status updates, paired with a structured support ticket workflow for user inquiries.

- To Provide Content Moderation, Announcements & Owner Analytics: Create an administrative dashboard to review submissions, group identical URLs with combined recommendation counts, verify free-versus-paid source rules, publish platform-wide popup announcements, and enable the system owner to generate platform performance and financial reports.

### 1.3. Methodologies
#### 1.3.1. Requirement Elicitation Methodology

To define and deliver RightGuide within a strict 60-day academic timeline, a lightweight, user-centric requirement elicitation methodology is employed using four complementary techniques:

- Document & Constraint Analysis: Reviewing project guidelines and technical boundaries—specifically the vanilla web stack (HTML, CSS, JavaScript, PHP, MySQL), manual bank-transfer payment verification, manual referral review, and internal notifications—to establish clear system constraints.
- Stakeholder & Role Profiling: Analyzing the needs and access boundaries of all six system actors (Unregistered Guests, Registered Users/Creators, Promoters, Customer Support Agents, Administrators, and the System Owner) to map out precise permissions and dashboard views.
- Workflow & Rule Modeling: Translating core user journeys—such as selecting from five core programming languages, on-demand guest tokenization (guestToken), duplicate URL detection, and manual verification pipelines—into structured use cases and business rules.
- Design-First Iterative Prototyping: Building static HTML and CSS layouts with mock data first to validate interface flows and align the 6-member team before writing PHP and MySQL backend logic.

#### 1.3.2. Requirement analysis and Modeling

1. Requirement AnalysisRightGuide is designed to systematically curate, rank, and recommend programming learning resources (websites and YouTube channels) across five core programming languages through community participation while balancing frictionless browsing with strict quality control.

The functional scope is organized across five core subsystems:

- Authentication & Access Control: Supports public registration for Registered Users/Creators and Promoters, pre-configured logins for internal staff (Customer Support, Administrator, System Owner), password recovery, and on-demand guestToken generation triggered strictly when an anonymous visitor votes or submits a resource.

- Content Discovery & Interaction: Enables browsing by selecting one of five core programming languages, keyword/URL search with duplicate-entry voting prompts, dual-track resource submissions (Guest vs. Registered Creator), single-vote enforcement per resource, new language/topic requests, and public announcements.

- Points, Referrals & Rewards: Credits reward points to registered users upon administrator approval of referrals (excluding guest referrals) or verified resource recommendations, sending internal notifications and unlocking free promotional placements at the 20-point threshold.

- Monetization & Support: Facilitates promotion requests backed by bank transfer payment proof (screenshot uploads) or point redemption, real-time status tracking, manual verification by Customer Support Agents, and asynchronous support ticketing.

- Administration & Reporting: Enables Administrators to moderate submissions, group identical URLs with combined vote/recommendation counts, review referrals, and publish popup announcements, while granting the System Owner exclusive access to platform and financial reports.

2. System Modeling
The system architecture translates functional requirements into modular Object-Oriented PHP classes and a normalized MySQL schema:

- Behavioral Modeling (6 Actors & Core Use Cases): Enforces clear separation of concerns—public actors interact with discovery, voting, referral, and promotion flows, while internal staff govern verification, curation, and reporting.

- Structural Modeling (Object Hierarchy):

  - User Hierarchy: An abstract User base class branches into GuestUser (managing guestToken sessions) and RegisteredUser (managing authentication, voting, referrals, and points), which further specializes into Promoter, CustomerSupport, Admin, and Owner.

  - Content Hierarchy: An abstract Content base class unifies shared attributes across Resource (language-categorized websites and YouTube channels) and Announcement (platform-wide notices).

  - Transactional & Operational Classes: Dedicated classes—Vote, Recommendation, Referral, TitleRequest, Promotion, Payment, SupportTicket, Notification, and StaticPage—decouple business logic and map directly to normalized MySQL tables supporting nullable dual-identity keys (userId and guestToken).

#### 1.3.3. Software Process Model and Management Strategy

To manage our 6-member team across the 60-day schedule, we selected a Hybrid Agile Process Model combining a Kanban Workflow with Phased Milestones.

1. Justification of the Process Model

- Accommodating Variable Team Pace: Because team members have varying levels of backend experience, a visual Kanban board (To Do, In Progress, Testing/Review, Done) allows faster members to pull new cards continuously while others progress steadily without rigid sprint bottlenecks.

- Phased Technical Progression: Organizing work into milestone phases enables the team to master and complete static HTML/CSS interfaces first before transitioning into MySQL schema design and PHP integration.

- Controlled Adaptability: Evolving requirements and edge cases (such as duplicate URL grouping and manual referral checks) can be added cleanly to the backlog without disrupting active work.

- Integrated Documentation & Testing: Diagrams, business rules, and manual test cases are updated alongside each completed feature card so documentation stays synchronized with code.

2. Project Execution Phases (60-Day Schedule)

Phase 1: Foundation, Analysis & Frontend Prototyping (Days 1–20)

- Focus: Finalizing system requirements, UML diagrams, static HTML/CSS layouts for the five core programming languages, and client-side JavaScript validation.
- Kanban Flow: UI and documentation tasks are broken into granular cards and pulled based on member availability.

Phase 2: Database & Core Backend Integration (Days 21–40)

- Focus: Implementing the normalized MySQL database, user registration/login, guestToken session handling, language-filtered browsing, and duplicate-checked search in PHP.
- Kanban Flow: Cards move from To Do to In Progress as members build and verify PHP modules on local Apache/MySQL environments.

Phase 3: Advanced Workflows, Testing & Final Delivery (Days 41–60)

- Focus: Implementing one-per-user voting, administrator referral/resource approval, the 20-point reward threshold, bank-transfer promotion verification, internal notifications, owner analytics, and final report compilation.
- Kanban Flow: Every card must pass peer code review and functional verification in the Testing/Review column before moving to Done by Day 60.

### 1.4. Scope and Limitation of the Project
#### 1.4.1. Project Scope

The scope of the Community-Driven Career Navigation Platform defines the functional boundaries, core workflows, and technical constraints to be delivered within a 2-month (60-day) timeframe by our 6-member team.

What the System Will Do:
 - Authentication & Access Control: Role-based access for 6 actors (Guest, User/Creator, Promoter, Support Agent, Admin, Owner). Guests can browse and recommend, while login/registration is required for creators, promoters, and staff.
 - Content Discovery & Smart Search: Categorized educational resources (YouTube/websites) ranked by community validation. Smart search includes automatic duplicate detection—prompting users to vote if a resource already exists.
 - Recommendations & Voting: Dual recommendation tracks (User and Creator). Creators earn points for valid submissions. Includes custom topic requests (RequestTitle) and grouped admin views displaying total counts (e.g., website.com (3 users)). Users are restricted to a one-time vote per resource.
 - Points & Free Promotions: Users accumulate points via valid recommendations and can redeem them for free promotional placements upon reaching a set threshold (e.g., 20 points).
 - Monetization & Support Workflow: Paid promotion via account transfers, transaction screenshot uploads, and manual verification by Support Agents. Support chat is restricted to troubleshooting promotion status. Promoted products are manually placed on main pages based on payment tiers.
 - Administration & Reporting: Admin content moderation (ManageContent), duplicate organization, and Owner reporting (Report) on revenue and top recommendations.
 - Static Pages & UI Elements: About, Help, Contact pages, main page popup notifications, and featured top-tier resource displays.
 - Deployment & Tech Stack: Local development using standalone Apache, MySQL, and VS Code extensions; deployed to InfinityFree hosting. 

#### 1.4.2. Limitation

While the Community-Driven Career Navigation Platform is strategically structured to balance academic requirements with functional efficiency, several implementation boundaries and project limitations should be noted:

- Time and Resource Constraints: The platform is developed within a strict 60-day academic timeline by a 6-member student team, requiring an incremental phased development model managed alongside university final exams.

- Manual Processing Limits: To ensure technical manageability within student constraints, payment processing relies on manual transaction screenshot verification by customer support agents rather than an automated third-party payment gateway.

- Communication and Notification Boundaries: The system intentionally omits real-time live chat and external automated email dispatching, utilizing structured ticketing and internal system alerts instead.

- Authentication Scope: Unregistered guest interactions are restricted to on-demand, temporary tokenization exclusively for voting and recommendations, leaving general content browsing entirely stateless.

### 1.5. Domain Vocabulary and Glossary

| No. |     Domain Term       | Definition |
|-----|-----------------------|------------|
| 1   | Learning Topic        | A subject or area of knowledge for which the platform provides educational resources, such as HTML or another learning subject. |
| 2   | Learning Resource     | An educational YouTube channel or website listed on the platform to help users study a particular topic. |
| 3   | Resource Directory    | An organized collection of educational resources made available to users through the platform. |
| 4   | Resource Category     | A classification that groups learning resources according to their subject or area of study. |
| 5   | YouTube Channel       | A YouTube account that provides educational content relevant to one or more learning topics. |
| 6   | Educational Website   | A website that provides educational materials, courses, or learning opportunities. |
| 7   | Topic Request         | A suggestion submitted by a user asking the platform to include an additional learning topic. |

 ### 2. Recommendations and Evaluation

| No. |     Domain Term         | Definition |
|-----|-------------------------|------------|
| 8   | Resource Recommendation | A suggestion submitted to the platform identifying an educational resource that may be suitable for inclusion in its directory. |
| 9   | User Recommendation     | A recommendation submitted through the general recommendation option, which does not require the visitor to register or log in. |
| 10  | Creator Recommendation  | A recommendation submitted through the creator recommendation option by a registered and authenticated user. |
| 11  | Recommendation Count    | The recorded number of times a particular educational resource has been recommended. |
| 12  | Duplicate Recommendation| A recommendation referring to the same educational resource as an existing recommendation. |
| 13  |Recommendation Aggregation| The process of grouping recommendations for the same educational resource while retaining the total recommendation count. |
| 14  | Resource Evaluation     | The manual examination of a recommended educational resource by an administrator before deciding whether to include it in the directory. |
| 15  | Evaluation Criteria     | The standards used by an administrator to assess the suitability and quality of recommended educational resources. |
| 16  | Resource Approval      | The administrator's decision to accept an evaluated educational resource for inclusion in the platform's directory. |
| 17  | Resource Ranking       | The relative position assigned by an administrator to an educational resource within a list. |
| 18  | Recommendation Status  | The current processing condition of a recommendation, such as awaiting review, accepted, or rejected. |

 ### 3. Users and Administration

| No. |     Domain Term       | Definition |
|-----|-----------------------|------------|
| 19  | General Visitor       | A person who accesses the platform to view learning resources and submit general recommendations without being required to register or log in. |
| 20  | Registered Creator    | A registered and authenticated user who can submit creator recommendations and become eligible for contributor points. |
| 21  | Administrator         | An authorized system user responsible for reviewing recommended resources, applying evaluation criteria, determining rankings, and awarding eligible contributor points. |
| 22  | Customer Support Agent| An authorized staff member responsible for manually confirming submitted payments, communicating payment outcomes, and addressing promotion-related complaints. |
| 23  | User Registration     | The process through which a person creates an account to access functions requiring a registered identity. |
| 24  | User Authentication   | The process of verifying a registered user's identity when accessing account-protected functions. |
| 25  | User Account          | A registered identity that allows a user to access functions associated with their assigned role. |
| 26  | User Role             | A classification that identifies a system user's responsibilities and permitted activities. |

### 4. Promotion and Payment

| No. |     Domain Term       | Definition |
|-----|-----------------------|------------|
| 27  | Paid Promotion        | A service through which a person pays to obtain increased visibility or preferred placement for an eligible resource on the platform. |
| 28  | Promotion Request     | A submission requesting additional visibility or preferential placement for a resource through the platform's promotion service. |
| 29  | Promotion Fee         | The amount of money required for a specified promotional service or placement. |
| 30  | Payment Page          | The section of the platform that provides payment information and allows customers to upload evidence of payment. |
| 31  | Payment Evidence      | A screenshot uploaded by a customer to support a claim that the required payment has been transferred. |
| 32  | Payment Verification  | The manual process through which a customer support agent checks and confirms a submitted payment. |
| 33  | Payment Status        | The result or current condition of payment verification, including whether the payment has been confirmed as successful or unsuccessful. |
| 34  | Promoted Resource     | An educational website, YouTube channel, or other eligible resource receiving additional visibility through an approved promotional arrangement. |
| 35  | Promotion Placement  | The position or display location assigned to a promoted resource, including placement influenced by the amount paid. |
| 36  | Promotion Complaint  | A concern or dissatisfaction reported by a customer regarding a promotional service. |
| 37  | Homepage Advertisement | Promotional or announcement content displayed within a designated area or popup on the platform's main pages. |

 ### 5. Contributor Points and Rewards

| No. |     Domain Term       | Definition |
|-----|-----------------------|------------|
| 38  | Contributor Points    | Reward points awarded by an administrator to a registered creator for recommendations accepted as valid. |
| 39  | Point Allocation      | The process through which an administrator assigns contributor points to an eligible registered creator. |
| 40  | Valid Recommendation  | A submitted resource recommendation that has been examined and accepted by an administrator according to the applicable criteria. |
| 41  | Contributor Reward    | A benefit offered to an eligible registered creator in recognition of qualifying recommendations. |
| 42  | Free Promotion Reward | An opportunity for an eligible contributor to receive a promotional service without paying the normal promotion fee. |
| 43  | Contributor           | A registered creator who submits recommendations that may qualify for points and promotional rewards. |

### 6. Platform Information and Support

| No. |     Domain Term       | Definition |
|-----|-----------------------|------------|
| 44  | Featured Resource     | A selected educational resource displayed prominently on the platform, particularly on its main pages. |
| 45  | Homepage              | The platform's main entry page, where visitors can view selected educational resources and promotional content. |
| 46  | About Page            | A page that provides general information about the platform and its purpose. |
| 47  | Help Page             | A page containing guidance and information about how users can obtain assistance while using the platform. |
| 48  | Contact Page          | A page providing ways to contact the platform team and find information about its other websites. |
| 49  | Customer Support      | Assistance provided to customers or users concerning platform services, including promotion-related questions and complaints. |

#### Note:- 
Within the scope of RightGuide, 'career navigation' refers specifically to guiding learners toward structured technical skill acquisition by helping them select a programming language (starting with 5+ core languages) and discover community-verified websites and YouTube channels to learn it.

### 1.6. Development Tools

- Frontend - Html, CSS, and Javascirpt
- Backend  - PHP
- Database - MySQl
- Documention - VS Code

### 1.7. Team Organization

- Minase Megesha   - Project Management & Documentation
- MILLION MERKINE  - Backend Development & API
- Helen Eshetu     - Database Design & Management
- Honelign Tekele  - Frontend Development & UI Testing
- Merihun Meshesha - Integration, Deployment & System Testing
- Bamlak Tadesse   - System Design & Design Modeling
###### Note: 
  Requirement Gathering, Analyis and Aanlyis Modeling is all members task, we don't perform solely.

### 1.8. Project Cost and Resource Estimation

For our Community-Driven Career Navigation Platform, developed as part of our university web programming course, we have structured our cost and resource estimation keeping our academic scope, less than 60-day timeline, and 6-member team in mind.
Since this is an academic student project utilizing professional standalone tools and free deployment tiers, our direct financial expenditure is minimal, primarily covering documentation printing and binding.

1. Direct Out-of-Pocket Expenses (Actual Cost)
- Software & Development Tools: Standalone Apache server, MySQL server, and VS Code with PHP, HTML, CSS, and JavaScript extensions - 0.00 (Free / Open-source)
- Hosting & Deployment: InfinityFree free web hosting tier for online deployment and local testing via our individual local environments - 0.00 (Free)
- Documentation Printing & Binding: Printing final project reports and presentation materials - Minimal (Covering physical printing only)
- Team Communication & Internet: Online coordination and resource research - Covered by personal student packages
- Total Actual Financial Cost: Restricted strictly to physical documentation printing - Minimal

2. Resource Labor Estimation (Commercial Value Perspective)
To maintain a professional software engineering documentation standard, we also look at the resource allocation of our team:
- Team Size: 6 team members.
- Development Duration: 60 days (2 month).
- Development Approach & Infrastructure: Professional modular setup using standalone Apache, MySQL, and VS Code extensions handled collaboratively using an Hybrid Agile Software Process Model utilizing Kanban Methodology combined with Phased Milestones.
- Commercial Equivalent: While our project is executed with a zero-budget infrastructure using free tools and volunteer student labor, a commercial equivalent of this platform would factor in standard developer man-hours and commercial hosting infrastructure fees.
- Summary:
Our project operates on a zero-budget software infrastructure, relying entirely on free, open-source development tools (Standalone Apache, MySQL, and VS Code extensions), free cloud hosting (InfinityFree), and our internal team collaboration, with financial expenses occurring only for final documentation and printing needs.


## Chapter Two: Requirement Analysis and Specifications
### 2.1. Description of the Current System

Currently, learners and users seeking educational and career-related information rely on scattered, ad-hoc web searches, unverified links, and informal recommendations across disconnected websites and video platforms without a centralized, structured directory. This fragmented approach makes discovering reliable learning materials time-consuming and disorganized, leaving users uncertain about whether higher-quality or more relevant resources exist elsewhere and unsure of how to systematically locate better alternatives.

### 2.2. Reusable Components and Existing Solutions
#### 2.2.1. Reusable UI & Functional Components

To keep the interface consistent across pages and reduce repetitive code as the team builds with HTML, CSS, JavaScript, PHP, and MySQL, the following modular components are defined for reuse across RightGuide:

- Registration Form: Enables public users (Content Creators / Registered Users and Promoters) to create accounts with unique email addresses and validated fields.
- Login Form: Enables registered users and pre-configured staff roles (Customer Support Agent, Administrator, and System Owner) to sign in and access their role-specific dashboards.
- Interest Selection: Allows users to choose or filter preferred learning topics and career categories so resource discovery stays relevant.
- Recommendation Cards: Standardized card components (built with shared .rg-* styles) that display recommended websites and YouTube channels, descriptions, category tags, source/access indicators, action links, and vote counts.
- Voting Component: Interactive control that allows guests (via temporary guestToken) and registered users to cast up to one vote per resource and view updated vote totals.
- Recommendation Form: Structured submission form allowing unregistered guests and registered creators to submit new learning resource links (including websites and YouTube channels) with validation and duplicate checks.

#### 2.2.2. Existing Solutions & Browser Capabilities

- Existing solutions and built-in platform capabilities refer to pre-existing tools, APIs, or browser features that provide helpful functionality without building everything from scratch—while still respecting your project's rule against heavy external frameworks:
- YouTube Data API v3 (Optional / Reference Integration): An external service from YouTube that can help search or retrieve metadata for YouTube videos and channels (such as titles, channel details, or descriptions) when curating video resources, provided it fits your scope and API key/quota constraints without introducing external UI frameworks.

Browser localStorage (Vanilla Web Storage API): A built-in browser storage feature accessed via plain JavaScript (localStorage) that stores lightweight client-side data locally in the user's browser—useful during early static/mock UI prototyping or temporary client-side state (such as UI preferences or draft/guest state), while MySQL remains the authoritative database for persisted platform records.

### 2.3. Proposed System
#### 2.3.1. Overview

A community-driven career exploration platform is a structured web-based learning hub designed to systematically collect, rate, and recommend high-quality learning resources through community engagement. It features a frictionless lazy verification method for guests, dual-track recommendations supported by a creative point-reward system, and transparent tiered free promotion processes supported by manual verification workflows. Combining intelligent duplicate detection, robust content moderation and dedicated administrative controls, the platform provides a reliable, secure and user-centric ecosystem for effective career exploration.

#### 2.3.2. Business Rule

- BR-01 — User Registration Rule (FR-01, FR-02): Public users (Content Creators / Registered Users and Promoters) register with unique email addresses and valid credentials, whereas staff roles (Customer Support Agent, Administrator, and System Owner) are pre-configured by the system and do not use public registration.
- BR-02 — User Login & Session Rule (FR-02, FR-03, NFR-03, NFR-10): All registered and pre-configured users must authenticate with valid credentials to access their role-specific dashboard and permitted actions.
- BR-03 — Password Recovery Rule (FR-04): Registered account holders can initiate password recovery through their registered email address without exposing sensitive account data.
- BR-04 — Public Browsing & Static Pages Rule (FR-06, FR-11, NFR-08, NFR-14): Unauthenticated visitors may freely browse curated educational resources and view static informational pages (such as About, Help/Support, and Contact) as well as public announcements/pop-ups.
- BR-05 — Smart Search & Duplicate Prevention Rule (FR-07, FR-17): Searching by keyword or URL encourages users to vote on existing matching entries rather than submitting duplicate resources, while duplicate URL submissions are grouped in the Administrator dashboard with total recommendation counts.
- BR-06 — On-Demand Guest Authentication Rule (FR-05, FR-08, FR-09): A temporary guestToken is generated automatically only when an unregistered guest initiates a vote or recommendation action, preventing repeated spam submissions while keeping general browsing frictionless.
- BR-07 — Single-Vote Enforcement Rule (FR-09, NFR-09): Both guests (via guestToken) and authenticated users are restricted to a maximum of one vote per resource.
- BR-08 — Dual-Track Recommendation Rule (FR-08, FR-12): Both unregistered guests and registered content creators can recommend resource links, but only approved submissions made by registered creators earn reward points.
- BR-09 — Topic Request Rule (FR-10, NFR-12): Registered users can submit requests for new technical learning topics to expand platform categories over time.
- BR-10 — Points Accumulation & 20-Point Promotion Qualification Rule (FR-12, NFR-09): Approved creator recommendations accrue points; a minimum threshold of 20 points is required to qualify for promotional opportunities. Points below 20 cannot be redeemed for promotions.
- BR-11 — Promotion Submission & Payment Methods Rule (FR-12, FR-13, FR-14, NFR-15): Promoters and eligible users (with at least 20 points) may request promotional placements by uploading valid payment transfer screenshots (subject to file type/size validation) or redeeming qualifying points (minimum 20 points). Promoters can track real-time promotion status, and authorized support/admin staff manually verify payment screenshots and update statuses.
- BR-12 — Support & Ticketing Rule (FR-14, FR-15, NFR-04): Users and promoters use structured support channels/ticketing for account, resource, and promotion inquiries without sharing passwords, full card numbers, CVVs/security codes, or one-time verification codes.
- BR-13 — Content Moderation & Ranking Rule (FR-16, FR-17, NFR-18, NFR-09): Administrators review, edit, approve, reject, rank, organize, or remove resource links and manage main-page announcements/featured placements, with key moderation and approval actions logged for accountability.
- BR-14 — Internal Notifications Rule (FR-17, FR-19, NFR-18): The system delivers internal alerts/notifications for content approvals/rejections, point milestones (including reaching the 20-point promotion threshold), topic updates, and promotion/payment verification outcomes.
- BR-15 — System Owner Analytics & Reporting Rule (FR-20, NFR-10, NFR-18): Only the System Owner can access comprehensive analytical reports covering platform revenue, performance metrics, user growth, and top-recommended resources.
- BR-16 — Verification of the Promoter's Source (FR-13, FR-15, FR-16, NFR-04, NFR-15, NFR-16)
Before a promoted placement goes live, the promoted source and accompanying payment proof must pass verification:
    - Sub-points:
        - Promoted Target / Source Check: Verify the destination URL or channel being promoted is reachable, safe, and aligned with educational/career navigation standards.
        - Payment & Point Eligibility Check: Confirm either (a) the uploaded payment screenshot is valid, legible, and matches the required fee/amount, or (b) the user holds at least 20 points for point-based promotion eligibility.
        - Status & Audit Decision: Approve, reject, or mark unsuccessful with clear status tracking and activity records.
        - Key Criteria: Valid non-broken link; safe/appropriate content; accurate payment proof (or $\ge 20$ points); clear file format/size compliance; no sensitive financial credentials exposed.
- BR-17 — Verification of the Source Referred by a User (FR-07, FR-08, FR-12, FR-16, FR-17, NFR-09)
Before a user- or creator-submitted resource is published or rewarded with points, moderators verify the referred source:
    - Sub-points:
        - Uniqueness & Duplicate Check: Check whether the URL or resource already exists or matches a grouped duplicate entry in the moderation queue.
        - Relevance & Quality Check: Confirm the resource provides genuine educational or career-navigation value matching its selected topic/category.
        - Creator Point Eligibility: Award points only if the submission came from a registered creator track, met quality rules, and was approved by an administrator.
        - Key Criteria: Active, accessible URL/channel; no malware, spam, or misleading clickbait; accurate category/topic match; non-duplicate (or properly consolidated).
- BR-18 — Policy Governing Verification of Any Source (FR-06, FR-08, FR-13, FR-16, NFR-09, NFR-14)
All sources—whether organically recommended or submitted for promotion—are governed by a uniform verification policy across every supported source category:
    - Supported Source Categories:
        - Free Educational Sites (open courses, documentation, tutorials, and free learning platforms)
        - Paid Educational Sites (subscription platforms, paid courses, or paid bootcamps—clearly labeled as paid/access-restricted where applicable)
        - Websites Providing Such Content (curated hubs, blogs, portals, or reference sites offering educational or career guidance materials)
        - Free Video-Based YouTube Channels (publicly accessible educational/career YouTube channels without paid membership requirements)
        - Paid Video-Based YouTube Channels (YouTube channels relying on paid memberships, paid courses, or gated video content)
        - Createfite YouTube Channel (verified/official Createfite YouTube channel content, subject to standard accuracy, relevance, and policy checks)
    - Sub-points:
        - Safety, Legality & Accuracy Baseline: Every source must be free of harmful/illegal material, deceptive redirects, or blatantly false instructional claims.- Access & Cost Transparency: Clearly distinguish free vs. paid/subscription resources so learners know what to expect before clicking.
        - Category & Format Alignment: Ensure web vs. video/YouTube sources are tagged accurately and organized cleanly for discovery.
        - Key Criteria: Reachable destination; safe and ethical content; clear free/paid labeling; accurate topic/channel classification; consistent enforcement across all six source categories.

#### 2.3.3. Functional Requirements

1. Authentication & Access Control Subsystem

- FR-01: User Registration
The system shall allow public users (Registered User/Content Creator and Promoter) to create accounts.

- FR-02: Pre-configured Staff & Administrative Access
The system shall provide secure system access for pre-configured administrative roles (Customer Support Agent, Administrator, and System Owner) through direct authentication (Login) without requiring public registration.

- FR-03: System User Authentication
The system shall authenticate registered actors (Registered User, Promoter, Customer Support Agent, Administrator, and System Owner) using secure session management and password verification (Login).

- FR-04: Password Recovery
The system shall allow registered account holders to recover access to their accounts via password reset (RecoverPassword).

- FR-05: On-Demand Guest Authentication
The system shall automatically generate a temporary guestToken (Guest_Authentication) only when an unregistered guest initiates a Vote or Recommend action, preventing multiple submissions while keeping general browsing unauthenticated.

2. Content Discovery & Interaction Subsystem

- FR-06: Dynamic Resource Browsing
The system shall allow Guest Users and Registered Users to browse curated lists of educational resources (Browse).

- FR-07: Smart Resource Search
The system shall allow users to search for educational resources by keywords or links (SearchResource) and prompt users to vote on existing entries to prevent duplicates.

- FR-08: Resource Recommendation
The system shall allow unregistered guests (via Guest_Authentication) and registered content creators to submit new resource links (Recommend).

- FR-09: Community Voting
The system shall allow guests and registered users to vote on resources (Vote), enforcing a maximum of one vote per resource per user or guestToken.

- FR-10: Topic Request Submission
The system shall allow registered users to submit requests for new technical learning topics (Request_Title).

- FR-11: Static Page Navigation
The system shall display informational pages including About, Help, and Contact (View_Static_Pages) to all platform visitors.

3. Points & Reward Subsystem

- FR-12: Points Management & Rewards
The system shall calculate, award, and manage reward points (Manage_Points) for registered creators upon approval of their recommendations, unlocking options for free promotion redemption.

4. Monetization & Support Subsystem

- FR-13: Paid Promotion Submission
The system shall allow promoters to submit ad placement requests and upload payment transfer screenshots (Promote).

- FR-14: Promotion Tracking
The system shall allow promoters to track the real-time review status of their ad submissions (Track_Promotion).

- FR-15: Manual Payment Verification
The system shall allow Customer Support Agents to inspect payment screenshots and verify transactions (Verify_Payment).

5. Administration, Moderation & Reporting Subsystem

- FR-16: Content Moderation
The system shall allow Administrators to review, edit, approve, reject, rank, or delete submitted resource links (Manage_Content).

- FR-17: Recommendation Organization
The system shall group duplicate URL submissions in the Admin dashboard and display total user recommendation counts (Organize_Recommendations).

- FR-18: Announcement Management
The system shall allow Administrators to publish and manage popup announcements and featured promotions on main pages (Announcement).

- FR-19: System Notifications
The system shall dispatch internal alerts and updates (Notify) regarding payment approvals, content status, or account actions.

- FR-20: System Owner Reporting
The system shall provide the System Owner with analytical reports summarizing platform revenue, performance metrics, user growth, and top recommendations (Report).

#### 2.3.4. Non-Functional Requirements

1. Performance: The system should load pages within 3 seconds under normal usage and display search results within 5 seconds.

2. Usability: The system should provide a simple and user-friendly interface so users can easily browse, search, vote, and recommend educational resources.

3. Security: The system should protect user accounts by storing passwords in encrypted/hashed form and preventing unauthorized access.

4. Privacy: The system should protect users' personal information, payment details, and uploaded payment screenshots from unauthorized users.

5. Reliability: The system should process user requests correctly and display clear success or failure messages.

6. Availability: The system should be accessible whenever the hosting server is operating and should display an appropriate message during service interruptions.

7. Compatibility: The system should work properly on commonly used browsers such as Google Chrome, Firefox, and Microsoft Edge.

8. Responsiveness: The system should adjust its layout to work properly on desktop computers, tablets, and mobile phones.

9. Data Integrity: The system should maintain accurate information about educational resources, votes, reviews, rankings, and reward points.

10. Access Control: The system should provide different access permissions for normal users, administrators, and customer support agents.

11. Maintainability: The system should be organized into manageable modules so developers can easily fix errors and update system features.

12. Scalability: The system should allow additional users, learning topics, educational resources, and recommendations as the platform grows.

13. Backup and Recovery: The system should support regular database backups and allow stored information to be restored when data is lost.

14. Accessibility: The system should use readable fonts, appropriate color contrast, clear labels, and easy navigation.

15. File Upload Validation: The system should validate uploaded payment screenshots by checking their file formats and file sizes.

16. Payment Verification Security: Only authorized administrators or support agents should be allowed to verify payments and update payment statuses.

17. Notification Reliability: The system should correctly display announcements and notifications when new topics, payment updates, or promotion updates occur.

18. Activity Tracking: The system should maintain records of important administrative activities, including content management, payment verification, and promotion approval.

#### 2.3.5. Actor and Use case Identification

1. Actor Identification
- Guest User: An unregistered visitor who can freely browse and search the platform; the system automatically generates a temporary guestToken only when they initiate a vote or resource recommendation.

- Registered User / Content Creator: An authenticated user who can register, log in, vote, submit resource recommendations, request new topics, and accumulate reward points.

- Promoter: An authenticated user who submits paid promotion requests and uploads transaction confirmation screenshots.

- Customer Support Agent: A pre-configured staff member who logs in to inspect uploaded payment screenshots and manually verify transactions.

- Administrator: A pre-configured staff member responsible for moderating content, organizing recommendations, managing announcements, and dispatching notifications.

- System Owner: A high-level stakeholder who logs in exclusively to view analytical reports covering platform revenue, user growth, and performance metrics.

2. Use Case Identification
Authentication & Access Subsystem:

- Register: Allows public users and promoters to create new accounts.
- Login: Authenticates registered users, promoters, and pre-configured staff roles.
- Recover Password: Enables account recovery via email verification.
- Guest Authentication: Automatically assigns a temporary token on-demand to prevent spam during guest voting and recommendations.

Content Discovery & Interaction Subsystem:

- Browse: Public exploration of categorized educational resources.
- Search Resource: Keyword and link-based lookup with duplicate-prevention prompts.
- Recommend: Dual-track submission of new learning links by guests and registered creators.
- Vote: Community voting restricted to one vote per user or guestToken per resource.
- Request Title: Submission of user suggestions for new learning topics.
- View Static Pages: Access to informational pages (About, Help, Contact) and announcement popups.

Monetization & Support Subsystem:

- Promote: Submission of ad placement requests and payment screenshots.
- Track Promotion: Real-time monitoring of promotion request statuses.
- Verify Payment: Manual inspection and approval of payment proof by support agents.

Administration & Reporting Subsystem:

- Manage Content: Review, editing, approval, and deletion of submitted educational links.
- Organize Recommendations: Automated grouping of identical URLs with total user recommendation counts.
- Manage Points: Calculation and tracking of reward points for verified creator contributions.
- Notify: Internal alert generation for account and transaction updates.
- Announcement: Publishing of platform-wide popup announcements and featured promotions.
- Report: Generation of comprehensive financial and performance analytics for the system owner.

#### 2.3.6. System Model
##### 2.3.6.1. Use case Model

![Use Case](image/diagrams/use-case.png)

##### 2.3.6.2. Activity Diagrams


##### 2.3.6.3. Class Diagram

![Class Diagram](image/diagrams/class-diagram.png)


## Chapter Three: Database Design

# 3.1 Conceptual Database Design of The new System

This task has four deliverables.

| Section | What you need to produce |
|---|---|
| 3.1.1 Entities identification and Description | Identify database entities and explain them. |
| 3.1.2 Attributes identification and description | Identify the properties belonging to each entity. |
| 3.1.3 Relationship identification and description | Explain how entities relate to one another. |
| 3.1.4 ER Diagrams | Create the Entity Relationship Diagram |

## 3.1.1 Entities identification and Description

### A. User and identification entities

| Entity | Description |
|---|---|
| User | Stores information about registered users of the platform. Public registration covers Registered Users/Content Creators and Promoters ; staff roles (Customer Support Agent, Administrator, System Owner) are pre-configured accounts, not publicly registered. |
| Role | Defines the roles assignable to registered users: Content Creator, Promoter, Administrator, Customer Support Agent, and System Owner. Roles are permissions, not account types — one user may hold more than one role. |
| GuestIdentifier | Stores the automatically generated guestToken assigned to an unregistered guest on demand — only when the guest initiates a vote or recommendation , keeping plain browsing stateless. The token is "temporary" in the sense that it is not an account and involves no registration or login — it is guest identification, not authentication. The identifier is stored persistently so the system can recognize the same guest across visits and prevent repeated recommendations of, or votes on, the same resource. |
| User_Role (associative entity, for the logical design) | Resolves the M:N User–Role relationship into a relational form. Listed here so the mapping in 3.2.1 is not a surprise. |

**Why these four?** The platform has registered and unregistered participants. Account information, role permissions, and guest identification must be stored separately. Promoter, Administrator, and Content Creator are roles, not different kinds of accounts — a single User table with role assignments is the agreed design.

### B. Learning resource entities

| Entity | Description |
|---|---|
| LearningTopic | Stores learning topics available on the platform, such as Web Development and Networking. New topics can originate from approved TopicRequest submissions |
| ResourceCategory | Stores categories used to organize educational resources. |
| Resource | Stores information about educational resources (titles, descriptions, URLs). A Resource can be a YouTube channel, educational website, or other learning resource. Each resource carries a free/paid access label and can carry an administrator-assigned rank and featured flag. |

A Resource can represent a YouTube channel, educational website or another relevant learning resource

### C. Recommendation and community entities

| Entity | Description |
|---|---|
| Recommendation | Records educational resource recommendations submitted by guests or registered creators. |
| Vote | Records votes submitted by users on educational resources. |
| TopicRequest | Stores requests from users for new learning topics |

### D. Promotion and payment entities

| Entity | Description |
|---|---|
| PromotionRequest | Stores requests submitted by promoters for paid or eligible promotional services. |
| PaymentEvidence | Stores references to transaction screenshots uploaded by promoters. |
| PaymentVerification | Records the manual verification decision made by a Customer Support Agent. |
| PromotionPlacement | Records the placement of approved promoted resources on the platform. |
| PromotionComplaint | Stores complaints related to promotion services and their status. |

### E. Contributor points and rewards entities

| Entity | Description |
|---|---|
| PointTransaction | Records points allocated to registered creators for valid recommendations. |
| RewardRedemption | Records the redemption of eligible contributor points for free promotion rewards. |

### F. Platform communication entities

| Entity | Description |
|---|---|
| Notification | Stores internal notifications generated for relevant platform activities. |
| Announcement | Stores announcements managed by authorized administrators and displayed on the platform. |

## 3.1.2 Attributes Identification and Description

### A. User and identification entities

#### 1. User

| Attribute | Description |
|---|---|
| user_id (PK) | Unique identifier for each registered user. |
| full_name | Full name of the registered user. |
| email | Email address used by the user. |
| password_hash | Securely hashed user password. |
| account_status | Current status of the user's account. |
| created_at | Date and time the account was created. |

#### 2. Role

| Attribute | Description |
|---|---|
| role_id (PK) | Unique identifier for each role. |
| role_name | Name of the role, such as Administrator or Promoter. |
| description | Description of the responsibilities associated with the role. |

#### 3. GuestIdentifier

| Attribute | Description |
|---|---|
| guest_id (PK) | Unique identifier for an unregistered guest. |
| identifier_value | The automatically generated random guestToken assigned on demand |
| created_at | Date and time the identifier was first generated. |
| last_seen_at | Date and time of the guest's most recent recorded interaction. |

### B. Learning resource entities

#### 4. LearningTopic

| Attribute | Description |
|---|---|
| topic_id (PK) | Unique identifier for each learning topic. |
| topic_name | Name of the learning topic. |
| description | Description of the learning topic. |
| created_at | Date and time the topic was created. |

#### 5. ResourceCategory

| Attribute | Description |
|---|---|
| category_id (PK) | Unique identifier for each resource category. |
| category_name | Name of the resource category. |
| description | Description of the category. |

#### 6. Resource

| Attribute | Description |
|---|---|
| resource_id (PK) | Unique identifier for each educational resource. |
| title | Title or name of the educational resource. |
| description | Description of the educational resource. |
| resource_url | Web address of the educational resource. |
| resource_type | Type of resource, such as YouTube channel or educational website. |
| status | Current approval or publication status. |
| category_id (FK) | Identifies the category associated with the resource. |
| topic_id (FK) | Identifies the associated learning topic. |
| Created_at | Date and time the resource was added. |
| access_type | Whether the resource is Free or Paid/subscription |
| resource_rank | Administrator-assigned relative position of the resource within a listing |
| is_featured | Whether the resource is selected for prominent display on main pages |

### C. Recommendation and community entities

#### 7. Recommendation

| Attribute | Description |
|---|---|
| recommendation_id (PK) | Unique identifier for each recommendation. |
| resource_id (FK) | Identifies the resource being recommended, where an existing resource has been matched. |
| user_id (FK) | Identifies the registered creator who submitted the recommendation, if applicable. |
| guest_id (FK) | Identifies the unregistered guest who submitted the recommendation, if applicable. |
| submitted_title | Title of the recommended resource. |
| submitted_url | URL of the recommended resource. |
| description | Additional information about the recommendation. |
| status | Current review status of the recommendation. |
| submitted_at | Date and time the recommendation was submitted. |

#### 8. Vote

| Attribute | Description |
|---|---|
| vote_id (PK) | Unique identifier for each vote. |
| resource_id (FK) | Identifies the educational resource receiving the vote. |
| user_id (FK) | Identifies the registered user who voted, if applicable. |
| guest_id (FK) | Identifies the unregistered guest who voted, if applicable. |
| voted_at | Date and time the vote was submitted. |

#### 9. TopicRequest

| Attribute | Description |
|---|---|
| request_id (PK) | Unique identifier for each topic request. |
| topic_name | Name of the requested learning topic. |
| description | Explanation of the requested topic. |
| user_id (FK) | Identifies the registered user submitting the request. |
| status | Current status of the topic request. |
| submitted_at | Date and time the request was submitted. |

### D. Promotion and Payment Entities

#### 10. PromotionRequest

Stores promotion requests submitted by promoters who want their resources to be advertised on the platform.

| Attribute | Description |
|---|---|
| promotion_request_id (PK) | Unique identifier for each promotion request. |
| user_id (FK) | Identifies the promoter who submitted the request. |
| resource_id (FK) | Identifies the resource requested for promotion. |
| promotion_tier | Indicates the selected promotion package or tier. |
| requested_at | Date and time the promotion request was submitted. |
| Status | Current status, such as Pending, Approved or Rejected. |
| fee_amount | The promotion fee for the selected tier; the data source for the Owner's revenue reports |
| promotion_type | Whether the promotion is Paid (money) or Points-Based (free reward redemption) — keeps paid and point-redemption promotions distinguishable |

#### 11. PaymentEvidence

Stores references to transaction screenshots or other payment evidence uploaded by promoters.

| Attribute | Description |
|---|---|
| evidence_id (PK) | Unique identifier for each payment evidence record. |
| promotion_request_id (FK) | Identifies the promotion request associated with the payment. |
| file_path | Stores the location or path of the uploaded transaction screenshot. |
| uploaded_at | Date and time the payment evidence was uploaded. |

#### 12. PaymentVerification

Records the manual payment verification decisions made by Customer Support Agents.

| Attribute | Description |
|---|---|
| verification_id (PK) | Unique identifier for each verification record. |
| evidence_id (FK) | Identifies the payment evidence being reviewed. |
| agent_id (FK) | Identifies the Customer Support Agent who performs the verification. |
| verification_status | Indicates whether the payment is Pending, Verified or Rejected. |
| verification_note | Stores comments or reasons related to the verification decision. |
| verified_at | Date and time the verification decision was made. |

#### 13. PromotionPlacement

Records where and when an approved promoted resource is displayed on the platform.

| Attribute | Description |
|---|---|
| placement_id (PK) | Unique identifier for each promotion placement. |
| promotion_request_id (FK) | Identifies the approved promotion request. |
| placement_location | Indicates where the promoted resource appears, such as the homepage. |
| start_date | Date when the promotion placement begins. |
| end_date | Date when the promotion placement ends. |
| placement_status | Indicates the current status of the placement. |

#### 14. PromotionComplaint

Stores complaints submitted concerning promotion services.

| Attribute | Description |
|---|---|
| complaint_id (PK) | Unique identifier for each promotion complaint. |
| promotion_request_id (FK) | Identifies the promotion request related to the complaint. |
| user_id (FK) | Identifies the user who submitted the complaint. |
| complaint_description | Describes the issue or complaint. |
| status | Indicates the current complaint status. |
| submitted_at | Date and time the complaint was submitted. |

### E. Contributor Points and Rewards Entities

#### 15. PointTransaction

Records points allocated to registered creators for valid recommendations and other eligible contribution activities.

| Attribute | Description |
|---|---|
| transaction_id (PK) | Unique identifier for each point transaction. |
| user_id (FK) | Identifies the registered creator receiving the points. |
| recommendation_id (FK) | Identifies the valid recommendation associated with the points. |
| points | Number of points allocated. |
| transaction_type | Indicates whether points are awarded or deducted. |
| description | Explains the reason for the point transaction. |
| created_at | Date and time the point transaction occurred. |

#### 16. RewardRedemption

Records when registered creators redeem eligible contributor points for free promotional placement.

| Attribute | Description |
|---|---|
| redemption_id (PK) | Unique identifier for each reward redemption. |
| user_id (FK) | Identifies the creator redeeming the points. |
| promotion_request_id (FK) | Identifies the promotion request associated with the free promotion reward. |
| points_used | Number of points used for the redemption. |
| redemption_status | Indicates whether the redemption is Pending, Approved or Rejected. |
| redeemed_at | Date and time the reward was requested |

### F. Platform Communication Entities

#### 17. Notification

Stores internal notifications generated by the platform to inform users about relevant activities and updates.

| Attribute | Description |
|---|---|
| notification_id (PK) | Unique identifier for each notification. |
| user_id (FK) | Identifies the registered user receiving the notification. |
| title | Title or subject of the notification. |
| message | Main notification content. |
| is_read | Indicates whether the notification has been read. |
| created_at | Date and time the notification was generated. |

#### 18. Announcement

Stores announcements created by authorized administrators and displayed on the platform.

| Attribute | Description |
|---|---|
| announcement_id (PK) | Unique identifier for each announcement. |
| admin_id (FK) | Identifies the administrator who created the announcement. |
| title | Title of the announcement. |
| content | Main announcement message. |
| published_at | Date and time the announcement was published. |
| status | Indicates whether the announcement is Draft, Published or Archived. |

## 3.1.3 Relationship Identification and Description

### A. User and Identification Relationships

| No. | Entities | Cardinality | Description |
|---|---|---|---|
| R1 | User — Role | M:N | A user can have one or more roles, and a role can be assigned to multiple users. |
| R2 | GuestIdentifier — Recommendation | 1:N | One guest identifier can be associated with multiple recommendations submitted by the same guest. |
| R3 | GuestIdentifier — Vote | 1:N | One guest identifier can be associated with multiple votes submitted by the same guest. |
| R4 | User — Recommendation | 1:N | One registered user can submit multiple recommendations. |
| R5 | User — Vote | 1:N | One registered user can submit multiple votes on different resources. |
| R6 | User — TopicRequest | 1:N | One registered user can submit multiple topic requests. |

### B. Learning Resource Relationships

| No. | Entities | Cardinality | Description |
|---|---|---|---|
| R7 | LearningTopic — Resource | 1:N | One learning topic can contain multiple resources. |
| R8 | ResourceCategory — Resource | 1:N | One category can organize multiple resources. |
| R9 | Resource — Recommendation | 1:N | One resource can be associated with multiple recommendations. |
| R10 | Resource — Vote | 1:N | One resource can receive multiple votes. |

### C. Promotion and Payment Relationships

| Entities | Cardinality | Description |
|---|---|---|
| User — PromotionRequest | 1:N | One promoter can submit multiple promotion requests. |
| Resource — PromotionRequest | 1:N | One resource can be associated with multiple promotion requests over time. |
| PromotionRequest — PaymentEvidence | 1:N | One promotion request may have multiple uploaded payment evidence records. |
| PaymentEvidence — PaymentVerification | 1:N | One payment evidence record may have multiple verification records, for example when reviewed again. |
| User — PaymentVerification | 1:N | One Customer Support Agent can perform multiple payment verifications. |
| PromotionRequest — PromotionPlacement | 1:N | One promotion request may have multiple placement records. |
| PromotionRequest — PromotionComplaint | 1:N | One promotion request may receive multiple complaints. |
| User — PromotionComplaint | 1:N | One user can submit multiple promotion complaints. |

### D. Contributor Points and Rewards Relationships

| No. | Entities | Cardinality | Description |
|---|---|---|---|
| R19 | User — PointTransaction | 1:N | One registered creator can have multiple point transactions. |
| R20 | Recommendation — PointTransaction | 1:N | One valid recommendation may be associated with a point transaction. |
| R21 | User — RewardRedemption | 1:N | One registered creator can make multiple reward redemption requests. |
| R22 | PromotionRequest — RewardRedemption | 1:0..1 | A promotion request may be associated with one reward redemption when it is a free promotion. |

### E. Platform Communication Relationships

| No. | Entities | Cardinality | Description |
|---|---|---|---|
| R23 | User — Notification | 1:N | One registered user can receive multiple notifications. |
| R24 | User — Announcement | 1:N | One administrator can create multiple announcements. |

#### 3.1.4. ER Diagrams


### 3.2. Logical Database Design of the New System 
#### 3.2.1. ER to Table Mapping 


#### 3.2.2. Validate Model using Normalization  
##### 3.2.2.1. First Normal Form (1NF)  


##### 3.2.2.2. Second Normal Form (2NF) 


##### 3.2.2.3. Third Normal form (3NF)  


#### 3.2.3. Relational Schema with Referential Integrity after normalization 

 

## Chapter Four: System Design
### 4.1. Introduction


### 4.2. Software Architecture


#### 4.2.1. Subsystem Decomposition


#### 4.2.2. Component Diagram 


### 4.3. Design, Engineering, and Execution Standards
#### 4.3.1. Visual Design Tokens and UI Components
##### Visual Design Tokens

Visual Design Tokens are named, reusable design choices—such as colors, font sizes, spacing steps, corner roundness, and subtle shadows—that define how RightGuide looks and feels. Instead of typing raw values like #1E3A8A or 16px repeatedly across different pages and stylesheets, the team gives each choice a clear, meaningful name (a token). When a token is updated in one central place, every screen that references it stays visually aligned.

- Why They Matter for RightGuide: With multiple team members building pages and features across HTML, CSS, JavaScript, PHP, and MySQL, tokens prevent visual drift and make global adjustments fast and predictable.

- Practical Working Model: Start with a small, essential set of tokens in a shared stylesheet layer (colors, typography scale, spacing increments, and border/status styles) so static pages, mock data views, and later dynamic templates all draw from the same single source of truth.

##### UI Components

UI Components are self-contained, reusable building blocks of the user interface—such as navigation bars, resource cards, vote controls, forms, badges, modals, and dashboard panels—assembled from visual design tokens and semantic structure. Rather than crafting each screen from scratch, team members assemble pages out of proven components that share predictable behavior and appearance.

- Why They Matter for RightGuide: Reusable components keep learning resource listings, recommendation and voting interactions, promotion and payment verification views, and role-based dashboards consistent while reducing duplicate markup and styling effort.

- Practical Working Model: Build clean, modular component patterns during static HTML/CSS work with consistent class names and clear states (default, hover/active, disabled, and feedback/status states). That way, when JavaScript, PHP, and MySQL are wired in later, dynamic data drops right into existing components without rewriting the interface.

#### 4.3.2. Page Structure and Layout Conventions

Page structure and layout conventions define how every screen on RightGuide is organized from top to bottom so users always know where to look, and teammates can build distinct pages without inventing conflicting layouts.

1. Standard Document & Page Skeleton
- Every page across RightGuide follows a predictable semantic hierarchy so assistive tools, CSS rules, and future PHP/JavaScript templates behave consistently:

- Top Navigation Bar (.rg-navbar): Sticky top bar containing the RightGuide brand link, primary navigation links, and account/role entry controls.

- Page Header / Context Band: Concise page title (header one), one-sentence purpose summary, and optional status badge or back/action link.

- Main Content Region (main tag): Houses the primary page workflow (resource directory, search/filter controls, recommendation/promotion forms, or role dashboard).

- Footer (.rg-footer): Contains platform copyright, key static/policy links (Terms, Privacy, Contact, Support), and a return link to the main hub.

2. Layout Modes by Page Type
Rather than forcing every screen into a single mold, RightGuide uses three clear layout patterns:

- Discovery & Feed Layout (Home / Browse / Search):

  - Top navigation + search/filter bar + optional duplicate-match prompt banner.

  - Responsive card grid (1 column on small screens, 2 columns on tablets, 3 columns on desktop) for learning websites and YouTube channels, with featured/promoted cards clearly distinguished.

- Task & Form Layout (Recommend / Request Topic / Promote / Auth):

  - Focused single-column container (max-width: 680px–760px) centered in the viewport to minimize distractions during data entry, duplicate checks, or payment screenshot uploads.

- Role Dashboard Layout (Creator, Promoter, Support, Admin, Owner):

  - Clear summary metrics or internal notification/ticket/moderation queues paired with structured tables or card lists and status badges (Pending, Approved, Unsuccessful)—using internal dashboard views rather than external email or live chat.

3. Container Width, Grid & Responsive Rules
Max Content Width: Constrain main content wrappers to --container-max (1200px) with horizontal side padding (--space-4 on mobile, --space-6 on wider screens) so lines and cards remain easy to scan.

Spacing Rhythm: Separate major page sections with consistent vertical gaps (--space-6 to --space-8) and internal card/form spacing using --space-3 and --space-4.

Responsive Breakpoints: Design mobile-first so navigation wraps or stacks cleanly on narrow screens and grids expand smoothly on tablet (≥ 768px) and desktop (≥ 1024px) viewports without horizontal overflow.

Lightweight & Scannable: Keep page sections clean, avoid heavy visual clutter, and keep layouts straightforward so pages load fast and stay easy to maintain as JavaScript, PHP, and MySQL are layered in.

4. Handoff Rules for Static-to-Dynamic Transition
Keep Layout Wrappers Stable: Teammates building static HTML/CSS should name layout containers clearly (for example, layout-pages.css for page-level grids and shells) while keeping .rg-* components from tokens.css untouched.

Design for Dynamic Injection: Leave clean parent containers (such as a card grid wrapper or list body) where JavaScript mock data or PHP loops can render items without changing outer page structure.

Guard Relative Paths: Keep folder names clean and consistent across subdirectories (such as pages/static-pages/, pages/authentication-pages/, pages/resources-pages/, and pages/controller-pages/) so relative asset and page links do not break when files move or when PHP includes are introduced.

#### 4.3.3. Language, Terminology, and Label Standards

Clear, consistent language keeps RightGuide easy to read for users and prevents confusion among team members writing HTML, JavaScript, PHP, and MySQL. When multiple people build different pages and workflows under a tight timeline, inconsistent wording—such as calling the same status Pending on one page and In Review on another—creates unnecessary bugs and rework.

1. Primary Language and Tone
- Primary Interface Language: Standardize the UI, labels, messages, and documentation in clear, plain English (lang="en"), keeping localization out of the current scope unless future expansion justifies it.
- Tone and Clarity: Use direct, supportive, and easy-to-scan wording. Keep instructions concise, avoid jargon in user-facing text, and state security boundaries clearly (such as never asking users to share passwords or sensitive financial details).

2. Standardized Terminology Across Code and Docs
- Platform & Content Terms: Refer to the system consistently as RightGuide (full name: Community-Driven Career Navigation Platform), and refer to curated items consistently as career resources or learning resources (covering websites and YouTube channels).
- Roles & Access Terms: Use exact, consistent names for user roles and access states across UI labels, documentation, and code—such as Guest (including temporary guest token actions), Registered User, Creator, Promoter, Support, Admin, and Owner.
- Workflow & System Terms: Keep workflow labels aligned with system behavior—such as internal notifications (dashboard alerts rather than external automated emails) and support tickets / inquiries (asynchronous requests rather than live chat).

3. Status Badges, Buttons, and Navigation Labels
- Standardized Status Terms: Use uniform status labels across badges, tables, and dashboards—such as Pending, Approved, and Unsuccessful (or Rejected where already defined in your rules)—paired with matching semantic badge classes (.rg-badge--warning, .rg-badge--success, .rg-badge--danger, .rg-badge--info).
- Action & Navigation Labels: Keep button and link labels action-oriented and consistent across pages (for example, Browse, Recommend, Promotions, Support, Sign In, Vote, and Submit).
- Capitalization & Formatting: Use Sentence case for headings, labels, alerts, and buttons (e.g., Frequently asked questions, Contact support, Return to RightGuide home) rather than mixing random title casing and all-caps across screens.

4. Practical Rules for the Team
- Match UI Labels to Data Values: Keep display text and underlying status/category values predictable so JavaScript and PHP templates do not need awkward translation maps.
- Check Copy Before Merging: During page reviews, verify that new buttons, badges, and headings use existing RightGuide terms instead of inventing synonyms.

#### 4.3.4. Shared Data Schema, Naming Conventions, and Access Permissions

Agreeing on a shared data structure, naming rules, and permission boundaries before full parallel development prevents mismatched fields, broken links, and unauthorized actions across RightGuide. When multiple teammates build frontend views, JavaScript mock logic, PHP endpoints, and MySQL tables under a tight timeline, consistency in these three areas keeps integration predictable.   

1. Shared Data Model & Schema Alignment
- Core Entities & Identifiers: Align entity and field names across documentation, mock data, and MySQL tables—such as users/roles, career resources (websites and YouTube channels), votes, recommendations/topic requests, promotions/payment proofs, internal notifications, and support tickets—using clear primary and foreign keys.
- Guest Token & State Tracking: Clearly separate passive browsing from token-based guest actions (such as temporary guest tokens used for voting or recommending without forcing full registration) and record explicit workflow states (such as Pending, Approved, and Unsuccessful) rather than leaving statuses implicit.
- Duplicate Handling & Validation: Define unique identifiers or normalization checks (such as matching URLs or normalized titles) and enforce server-side validation so duplicate resources or incomplete submissions are caught cleanly.

2. Naming Conventions Across Code and Files
- Files & Folders: Use lowercase kebab-case for files and folders (for example, tokens.css, layout-pages.css, support.html, and static-pages/), and keep directory names free of typos so relative paths stay reliable.
- CSS & Markup: Keep shared design-token variables and reusable component classes prefixed cleanly (such as --color-*, --space-*, and .rg-*), and use data-* attributes or dedicated JS hooks rather than tying JavaScript logic directly to visual layout classes.
- Database, PHP & JS Identifiers: Use consistent, descriptive names (snake_case for MySQL columns/tables and consistent field names across JSON/JS/PHP payloads) so the same concept is never named three different ways across layers.

3. Role-Based Access Permissions & Auditability
- Least-Privilege Access: Explicitly define what each role—Guest, Registered User, Creator, Promoter, Support, Admin, and Owner—can view, create, update, or approve, and enforce authorization checks on the server rather than relying only on hiding UI buttons.
- Scope-Aligned Workflows: Keep permissions aligned with project rules—such as internal dashboard notifications (rather than external automated email), asynchronous support tickets (rather than live chat), and manual payment screenshot verification by authorized staff.
- Basic Auditability: Track key state changes—such as who approved or rejected a promotion, ticket, or resource, and when—so reviews and accountability remain clear without overcomplicating the system.

#### 4.3.5. Delivery Sequence, MVP Scope, and Quality Assurance Rules

A clear delivery sequence, bounded MVP scope, and practical quality assurance rules keep the RightGuide team focused on shipping a reliable, cohesive platform on schedule. Working incrementally—building static HTML/CSS pages first before layering in JavaScript, PHP, and MySQL—reduces integration risk and keeps everyone aligned across both documentation and code.

1. Staged Delivery Sequence
- Stage 1 — Static UI & Shared Styling: Build core pages and shared stylesheets (tokens.css and layout-pages.css) using .rg-* components and mobile-first responsive layouts.
- Stage 2 — Mock Interactivity & Screen Flows: Layer in client-side mock data and interactive UI behaviors (such as search/filter views, voting/recommendation flows, duplicate prompts, and role dashboard layouts) while keeping markup and class names stable.
- Stage 3 — Backend Integration (PHP & MySQL): Connect forms, authentication/role workflows, promotion/payment proof uploads, internal notifications, and support tickets to PHP endpoints and the MySQL schema defined in 1.10.4.
- Stage 4 — End-to-End Verification & Polish: Consolidate fixes, verify cross-page navigation and permissions, and finalize documentation alignment ahead of deadlines.

2. MVP Scope Discipline
- Prioritize Core Value First: Focus MVP effort on browsing and discovering career resources (websites and YouTube channels), core voting/recommendation and topic-request workflows, essential authentication/role views, and core promotion/support flows.
- Guard Against Scope Creep: Defer non-essential enhancements or extra visual polish until core flows work end-to-end, and keep interactions aligned with project rules (such as internal notifications rather than external email automation, and asynchronous support requests rather than live chat).
- Maintain Single-Source Consistency: Ensure new screens or adjustments update tokens.css, layout-pages.css, terminology, and data/permission rules together rather than introducing one-off exceptions.

3. Quality Assurance & Testing Rules
- Visual & Responsive Checks: Verify pages across mobile, tablet, and desktop widths for layout alignment, readable contrast, working relative paths (../../css/, ../...), and consistent .rg-* component styling.
- Functional & Role Boundary Checks: Test form validation, duplicate resource checks, guest token vs. authenticated role actions, status transitions (Pending, Approved, Unsuccessful), and server-side permission enforcement.
- Pre-Merge Review Checklist: Confirm clean folder/file naming (kebab-case, no typos), no hardcoded style values bypassing design tokens, and clear error/empty states before merging changes into the shared repository.

### 4.4. Backend Route / Endpoint & Folder Map

Note: list of PHP files/endpoints and parameters

### 4.5. Security & Input Validation Rules

Note: validation, prepared statements, output escaping, upload checks

### 4.6. Traceability Matrix
#### 4.6.1. Role-Based Access Matrix

A Traceability Matrix is a tracking table that connects every system requirement directly to its corresponding UI page, backend PHP endpoint, MySQL table, and test case so nothing is forgotten or left untested during development.
Example: 
- Req ID	Feature / Requirement	Use Case / Rule	Frontend Page	Backend Endpoint (PHP)	Database Table(s)	Test ID & Status
- FR-01	Browse & filter career resources	UC-01, BR-01	index.html	/backend/actions/fetch_resources.php	resources, categories	TC-01 (Planned)

- Quick Guide for Your Team
Req ID & Feature: Identifies what we are building (matching 2.3.3 Functional Requirements).
Use Case / Rule: Points to the exact behavior and validation rules (2.3.2 & 2.3.6.1).
Frontend Page: Tells UI developers where the screen lives (frontend/...).
Backend Endpoint (PHP): Tells backend developers which PHP file processes the request (backend/...).
Database Table(s): Shows which MySQL tables are read or updated (Chapter 3).
Test ID & Status: Confirms how and when the feature is verified before final submission (Chapter 5).


## Chapter Five: Implementation and Testing 
### 5.1. Test Procedure


### 5.2. User Manual Preparation



## Chapter Six: Conclusion and Recommendation 
### 6.1. Conclusion 


### 6.2. Recommendation

