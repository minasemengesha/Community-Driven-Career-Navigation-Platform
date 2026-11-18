# Chapter One: Introduction
## 1.1 Understanding the Problem Background and Knowing the Exact Problem
### 1.1.1 Background of the Problem

Choosing a suitable career is an important decision for students, graduates, and job seekers. However, many people face difficulties identifying career paths that match their interests, skills, educational backgrounds, and future goals.

Career information can be scattered across different sources, making it difficult for users to find reliable guidance, understand job market requirements, and learn from people with relevant experience. Traditional career guidance may also be limited in availability, accessibility, or personalization.

A Community-Driven Career Navigation Platform aims to address these challenges by creating a shared digital environment where users can access career information, exchange experiences, receive guidance from community members and professionals, and explore suitable career opportunities.

### 1.1.2. The Real Environment

The project focuses on the environment in which students, graduates, job seekers, and professionals interact with career information.

- Students need guidance to identify career paths that match their interests and abilities.
- Graduates need information about employment opportunities and the skills required by employers.
- Job seekers need help understanding career options and improving their professional development.
- Professionals and mentors can share their experiences, knowledge, and advice.
- Educational institutions and career advisors can provide relevant career information and guidance.

The platform would provide a common place for these users to communicate, share knowledge, ask questions, and learn from one another.

### 1.1.3. Root Causes of the Problem

The main causes that may contribute to career navigation difficulties include:

1. Lack of centralized information: Career information is spread across different websites, institutions, and social networks.

2. Limited career guidance: Some students and graduates have limited access to qualified career advisors and mentors. Research on selected schools in Addis Ababa has identified shortages of counselors and other barriers to career guidance.

3. Lack of awareness: Users may not fully understand the range of career paths available to them.

4. Skills and job-market information gaps: Users may struggle to identify the skills, qualifications, and practical experience required for different careers.

5. Limited professional networking: Students and graduates may have difficulty connecting with experienced professionals who can provide practical advice.

6. Lack of personalized guidance: General career information may not adequately consider an individual's interests, abilities, educational background, and goals.

### 1.1.4. Impact on Target Users

These challenges can affect different users in several ways:

- Students: Difficulty choosing an appropriate field of study or future career.
- Graduates: Difficulty identifying career opportunities and preparing for employment.
- Job seekers: Difficulty understanding job requirements and planning skill development.
- Professionals: Fewer opportunities to share knowledge and mentor people entering their fields.
- Educational institutions: Difficulty providing consistent career guidance and connecting students with relevant professional information.

As a result, users may experience confusion when making career decisions, spend more time searching for information, develop skills that do not match their intended career, or miss relevant opportunities.

### 1.1.5. The Exact Problem

The exact problem this project aims to solve is the lack of an accessible, centralized, and community-supported system that helps students, graduates, and job seekers discover suitable career paths, obtain reliable career information, connect with experienced professionals, and understand the skills needed to achieve their career goals.

The proposed Community-Driven Career Navigation Platform will address this problem by bringing career resources, community discussions, mentorship, career exploration, and relevant opportunity information together in one digital platform.

## 1.2. Objectives of the project
### 1.2.1. General objective

To design and develop a web-based, community-driven career navigation platform that facilitates the collaborative curation, ranking, and discovery of high-quality educational resources, while implementing a frictionless lazy-authentication system, a creator point-reward mechanism, and a transparent manual monetization workflow.

### 1.2.2. Specific objectives

- To Implement Flexible Authentication & Access Control: Develop a secure role-based architecture supporting public registration for creators and promoters, pre-configured staff logins for administrators, support agents, and owners, and on-demand guestTokens for anonymous visitors.

- To Enable Dual-Track Content Discovery & Search: Build dynamic browsing and keyword/URL search features that automatically detect duplicate resource submissions and encourage community voting over redundant entries.

- To Establish Community Participation & Point Systems: Implement a secure voting mechanism (restricted to one vote per user or guestToken) alongside a point accumulation and redemption system that rewards approved creator contributions with free promotions.

- To Support Transparent Monetization & Verification: Provide a structured ad-submission pipeline where promoters can request tiered placements, upload payment screenshots, and track statuses, backed by a manual verification interface for customer support agents.

- To Provide Comprehensive Administration & Reporting: Create a robust management dashboard enabling administrators to moderate content, group duplicate recommendations, manage announcements, and allow the system owner to generate performance and financial analytical reports.

## 1.3. Methodologies
### 1.3. Requirement Elicitation Methodology

In these document we are mainly going to define the requirement elicitation approach,Identify the stakeholders and information sources, determine what requirements need to be collected, and select appropriate requirements elicitation techniques, such as interviews, questionnaires, observation, or document analysis.

Introduction

Requirements elicitation is the disciplined process of discovering and clarifying stakeholder needs, expectations,
constraints, and business rules for a system. For this project, elicitation must establish what learners, resource
contributors, administrators, customer-support staff, the project owner and other stakeholders need from a platform that helps people discover
educational resources and supports community recommendations and paid promotion.

This platform includes educational resource listings (for example, YouTube channels and websites), topic-based
discovery, quality review and ranking, guest recommendations, authenticated creator recommendations, recommendation
counts, contribution points, possible free-promotion rewards, paid promotion, manual payment-evidence review,announcements, feature requests, and About, Help, and Contact pages. This plan focuses on validating those features
rather than assuming every initial idea is already a final requirement.

Objectives.

• Identify stakeholders and reliable direct and indirect information sources.

• Understand user problems when finding, comparing, and evaluating learning resources.

• Clarify submission, duplicate handling, moderation, ranking, promotion, payment review, support, and reward rules.

• Identify functional, non-functional, data, security, usability, and operational requirements.

• Resolve ambiguity and conflicts, prioritize requirements, and document decisions that can be checked and tested.

Stakeholders.

Stakeholder| Thieir role
Guest or ordinary visitors| Browse resources, may submit recommendations with out an account.
Registered content creators| Submit creator recommendations and may seek promotion or rewards.
Administrator| Review submission, datermine quality based ranking and other system level jobs.
Customer support agent| Manually checks payment evidence and handles promotion complaints.
Development and testing team| Builds, tests and maintains the platform.
System owner or project sponsor| Defines purpose,business policies and success measures.
External resource providers (where relevant)| own or operate listed websites,channels or courses.

Information sources

Direct sources

Potential learners and students who search for tutorials,coarses and certificate also the stakeholders alluded above on the table.

Indirect sourses

. Any reusable documents,existing diagrams,notes and what ever reusable materials.

• Course materials and reputable software-engineering references about requirements quality and elicitation.

Requirements to Collect Functional requirements and business rules.

Resource catalogue (Which categories and topics are needed? What fields are required for a resource (name, URL,description, category, provider, certificate availability/type, cost, language, last-checked date)?
Which fields are optional?)

Discovery and browsing(Can visitors search, filter, sort, and browse without registration? Which filters are most useful?
How are unavailable or outdated links handled?)

User recommendations(What data can a guest submit? Is a URL required? How are invalid, duplicate, spam, or abusive submissions handled? Can a visitor edit or withdraw a submission?)

Creator recommendations(What registration and login rules apply? What fields must creators submit? Can creators view submission status or their points? How are creator submissions distinguished from guest submissions?)

### 1.3.2. Requirement analysis and Modeling

1. Requirement Analysis
The Community-Driven Career Navigation Platform is designed to systematically curate, rank, and recommend educational resources through community participation while balancing frictionless accessibility with strict spam control.
Core Functional Scope (20 Requirements across 5 Subsystems):
- Authentication & Access Control: Supports public registration for Creators and Promoters, pre-configured login for internal staff (Customer Support, Admin, Owner), password recovery, and On-Demand Guest Authentication (guestToken generated strictly when an unauthenticated visitor initiates a vote or recommendation, keeping general browsing stateless).   
- Content Discovery & Interaction: Enables unauthenticated browsing, smart keyword/URL search with duplicate-entry voting prompts, dual-track recommendations (Guest vs. Creator), single-vote enforcement per resource, topic requests, and public static/announcement views.   
- Points & Rewards: Credits reward points to registered creators upon administrative approval of their submissions, unlocking free promotional placement once defined thresholds are reached.   
- Monetization & Support: Facilitates tiered ad requests backed by manual payment screenshot uploads, real-time status tracking, Customer Support verification, and structured support ticketing.   
- Administration & Reporting: Empowers Admins to moderate content, auto-group duplicate URLs with submission counts, and dispatch alerts, while granting the Owner exclusive access to financial and platform analytics.   
Key Business Rules & Constraints:
- Strict single-vote and duplicate-submission prevention tied to either userId or guestToken.   
- Zero financial activation without manual screenshot verification by Customer Support.   
- System constraints exclude automated email dispatchers, real-time chat modules, and payment gateway APIs to ensure reliable delivery within a standard PHP/MySQL stack.
2. System Modeling
The architectural model translates functional needs into clean, modular abstractions ready for Object-Oriented PHP and relational MySQL implementation:
Behavioral Modeling (18 Use Cases & 6 Actors):
- Maps distinct workflows across Guest User, Registered User/Creator, Promoter, Customer Support Agent, Administrator, and System Owner.   
- Enforces separation of concerns: public actors interact with discovery, voting, and promotion flows, while pre-configured administrative actors govern verification, curation, and reporting.
   
Structural Modeling (18-Class Object Hierarchy):
- User Inheritance Hierarchy: An abstract User base class branches into GuestUser (managing on-demand session tokens) and RegisteredUser (handling authentication, voting, and points), which further specializes into Admin, Promoter, CustomerSupport, and Owner.   
- Content Inheritance Hierarchy: An abstract Content base class unifies shared metadata across Resource (categorized, votable learning links) and Announcement (time-bound platform notices).
- Transactional & Operational Classes: Standalone classes—Vote, Recommendation, TitleRequest, Promotion, Payment, SupportTicket, Notification, and StaticPage—decouple business logic and map directly to normalized MySQL tables supporting nullable dual-identity keys (userId and guestToken).

### 1.3.3. Software Process Model and Management Strategy

For our Community-Driven Career Navigation Platform, we have chosen a Hybrid Agile Software Process Model utilizing Kanban Methodology combined with Phased Milestones. This section outlines why this model was selected and how we will manage our 60-day project lifecycle with a 6-member team.
1. Selection and Justification of the Software Process Model
We selected this hybrid approach after carefully evaluating our team dynamics, technical constraints, and academic goals for the following reasons:
- Handling Variable Team Performance: Our 6-member team has diverse skill levels and paces. Kanban relies on a visual task board (such as GitHub Projects or Trello) where tasks are broken down into granular cards. This allows faster members to pull additional tasks seamlessly while slower or learning members can focus on completing their assigned cards without feeling overwhelmed by rigid, time-boxed deadlines.
- Gradual Technical Learning Curve via Phased Milestones: Since our team members are actively learning PHP and backend development, a strict sequential model would cause bottlenecks. By blending Kanban with structured phases, we can separate tasks logically-focusing initially on frontend layouts before smoothly transitioning into database integration and PHP backend logic as our skills develop.
- Evolving Requirements: Because not all stakeholders or final edge cases are fully known at day one, our flexible workflow gives us the adaptability to continuously add new tasks to the backlog without disrupting the overall project execution.
- Balanced Documentation and Testing: To ensure a high-quality academic report without getting bogged down by heavy enterprise testing overhead, this model keeps our workflow lean and transparent, ensuring that documentation of our architecture and code progresses hand-in-hand with development.
2. Project Management and Execution Strategy
To manage our 60-day timeline effectively, we will execute our hybrid Kanban workflow across three structured operational phases:
Phase 1: Foundation and Frontend (Days 1-10)
 - Focus: UI/UX design, static pages (About, Help, Contact), and foundational HTML, CSS, and JavaScript layouts.
 - Kanban Management: All frontend layout tasks are placed in the backlog and pulled by team members based on availability.
Phase 2: Core Logic and Backend Integration (Days 11-20)
 - Focus: Setting up the MySQL database, implementing user registration, login, session management, and search functionalities using PHP.
 - Kanban Management: Tasks transition from "To Do" to "In Progress" as team members finish learning and testing basic backend scripts on their local Apache servers.
Phase 3: Advanced Features, Polish, and Final Submission (Days 21-30)
  - Focus: Integrating voting, recommendations, point systems, promotions, payment verification, and finalizing the project report.
  - Kanban Management: Strict code reviews and manual testing columns are utilized before moving cards to "Done," ensuring a polished product and complete documentation by day 60.
## 1.4. Scope and Limitation of the Project
### 1.4.1. Project Scope
 
The scope of the Community-Driven Career Navigation Platform defines the functional boundaries, core workflows, and technical constraints to be delivered within a 2-month (60-day) timeframe by our 6-member team.
1. In-Scope (What the System Will Do)
 - Authentication & Access Control: Role-based access for 6 actors (Guest, User/Creator, Promoter, Support Agent, Admin, Owner). Guests can browse and recommend, while login/registration is required for creators, promoters, and staff.
 - Content Discovery & Smart Search: Categorized educational resources (YouTube/websites) ranked by community validation. Smart search includes automatic duplicate detection—prompting users to vote if a resource already exists.
 - Recommendations & Voting: Dual recommendation tracks (User and Creator). Creators earn points for valid submissions. Includes custom topic requests (RequestTitle) and grouped admin views displaying total counts (e.g., website.com (3 users)). Users are restricted to a one-time vote per resource.
 - Points & Free Promotions: Users accumulate points via valid recommendations and can redeem them for free promotional placements upon reaching a set threshold (e.g., 20 points).
 - Monetization & Support Workflow: Paid promotion via account transfers, transaction screenshot uploads, and manual verification by Support Agents. Support chat is restricted to troubleshooting promotion status. Promoted products are manually placed on main pages based on payment tiers.
 - Administration & Reporting: Admin content moderation (ManageContent), duplicate organization, and Owner reporting (Report) on revenue and top recommendations.
 - Static Pages & UI Elements: About, Help, Contact pages, main page popup notifications, and featured top-tier resource displays.
 - Deployment & Tech Stack: Local development using standalone Apache, MySQL, and VS Code extensions; deployed to InfinityFree hosting.
2. Out-of-Scope (What the System Will NOT Do)
To ensure delivery within the 60-day schedule, the following features are excluded:
 - Automated Payment Gateways: Third-party payment APIs (Stripe, PayPal, Chapa) are excluded; all payments use manual screenshot and account transfer verification.
 - Advanced AI Recommendations: Complex machine learning recommendation algorithms are excluded in favor of keyword search, voting, and manual curation.
 - Real-Time Live Chat: WebSockets-based live chat is excluded; support messaging is handled via structured database workflows.
 - Automated Email Dispatching: External SMTP server emails are out-of-scope; notifications are handled via internal system alerts.
### 1.4.2. Limitation

While the Community-Driven Career Navigation Platform is strategically structured to balance academic requirements with functional efficiency, several implementation boundaries and project limitations should be noted:

- Time and Resource Constraints: The platform is developed within a strict 60-day academic timeline by a 6-member student team, requiring an incremental phased development model managed alongside university final exams.

- Manual Processing Limits: To ensure technical manageability within student constraints, payment processing relies on manual transaction screenshot verification by customer support agents rather than an automated third-party payment gateway.

- Communication and Notification Boundaries: The system intentionally omits real-time live chat and external automated email dispatching, utilizing structured ticketing and internal system alerts instead.

- Authentication Scope: Unregistered guest interactions are restricted to on-demand, temporary tokenization exclusively for voting and recommendations, leaving general content browsing entirely stateless.

## 1.5. Domain Vocabulary and Glossary
 ### 1. Learning Resources and Discovery

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
### 1.6 Reusable Components and Existing Solutions

The following reusable components are identified for the Right Guide project:

1. Registration Form: Allows users to create accounts.
2. Login Form: Allows registered users to access their accounts.
3. Interest Selection: Allows users to select their preferred learning categories.
4. Recommendation Cards: Display recommended websites and YouTube channels with their descriptions and links.
5. Voting Component: Allows users to vote for recommended resources.
6. Recommendation Form: Allows users to submit new websites and YouTube channels.

- Existing solutions are already-developed systems, tools, libraries, or services that provide functionality similar to what you need.

1. YouTube Data API v3 :Searches YouTube videos and channels.  
2. JavaScript LocalStorage  Stores data in the browser.

## 1.7. Development Tools

- Frontend - Html, CSS, and Javascirpt
- Backend  - PHP
- Database - MySQl
- Documention - VS Code
## 1.8. Team Organization

- Minase Megesha   - Project Management & Documentation
- MILLION MERKINE  - Backend Development & API
- Helen Eshetu     - Database Design & Management
- Honelign Tekele  - Frontend Development & UI Testing
- Merihun Meshesha - Integration, Deployment & System Testing
- Bamlak Tadesse   - System Design & Design Modeling
##### Note: 
  Requirement Gathering, Analyis and Aanlyis Modeling is all members task, we don't perform solely.

### 1.9. Project Cost and Resource Estimation

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
# Chapter Two: Requirement Analysis and Specifications
## 2.1. Overview

A community-driven career exploration platform is a structured web-based learning hub designed to systematically collect, rate, and recommend high-quality learning resources through community engagement. It features a frictionless lazy verification method for guests, dual-track recommendations supported by a creative point-reward system, and transparent tiered free promotion processes supported by manual verification workflows. Combining intelligent duplicate detection, robust content moderation and dedicated administrative controls, the platform provides a reliable, secure and user-centric ecosystem for effective career exploration.

## 2.2. Business Rule

- BR-01-User Registration Rule: Creators and promoters register with unique emails; staff roles are pre-configured.   
- BR-02-User Login Rule: All users log in with valid credentials for role-based dashboard access.   
- BR-03-Password Recovery Rule: Registered users can reset forgotten passwords via their email.   
- BR-04-Browse Resources Rule: Visitors freely browse categorized educational resources without logging in.   
- BR-05-Search Resource Rule: Keyword searches prompt users to vote on existing matches rather than creating duplicates.   
- BR-06-On-Demand Guest Authentication Rule: Temporary guestTokens are auto-generated only when guests vote or recommend, blocking spam without forcing registration.
- BR-07-Voting Rule: Guests and registered users are strictly limited to one vote per resource.   
- BR-08-Dual-Track Recommendation Rule: Unregistered guests and registered creators submit recommendations; only creator track submissions earn points.
- BR-09-Request Title Rule: Users can submit suggestions for new learning topics to be added.   
- BR-10-Static Pages & Announcements Rule: Public access to static info pages and main-page popup announcements is open to all.   
- BR-11-Points Management & Redemption Rule: Verified creator contributions accumulate points, unlocking free promotions upon reaching thresholds (e.g., 20 points).   
- BR-12-Paid Promotion Rule: Promoters secure tiered placements by uploading payment screenshots or redeeming points.   
- BR-13-Promotion Tracking Rule: Promoters can monitor the real-time review status of their ad requests.   
- BR-14-Manual Payment Verification Rule: Support agents manually inspect payment screenshots to activate promotions.   
- BR-15-Promoter Support Rule: Promoters use ticketing for support inquiries while financial transfers remain direct.   
- BR-16-Content Management & Ranking Rule: Administrators exclusively moderate, rank, and curate platform resources.   
- BR-17-Recommendation Organization Rule: Identical links are auto-grouped with total user counts on the admin dashboard.   
- BR-18-Notification Rule: System alerts notify users of status updates, point awards, and verification outcomes.   
- BR-19-Owner Reporting Rule: Owners have exclusive access to comprehensive financial and performance analytics.

## 2.3. Functional Requirements

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

## 2.4. Non-Functional Requirements

- Performance & Speed: The system shall load public static pages and search results efficiently with minimal server overhead to ensure rapid content discovery.

- Security & Access Control: The system shall secure user credentials using robust password-hashing techniques and enforce strict role-based access control for administrative and staff dashboards.

- Data Integrity & Anti-Abuse: The system shall enforce unique email constraints for registrations and prevent duplicate votes or recommendations per user account or temporary guestToken.

- Usability & Experience: The system shall provide a frictionless, "lazy authentication" experience, allowing guests to browse freely and trigger on-demand tokenization only when voting or recommending.

- Reliability & Tracking: The system shall reliably log promotional details, payment statuses, and user point balances to support manual customer support verification workflows.

- Maintainability & Modularity: The system shall maintain a clean, modular code structure across its frontend and backend components to facilitate collaborative development and maintenance within the project deadline.

## 2.4. Actor and Use case Identification

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

## 2.5. System Model
### 2.5.1. Use case Model

![Use Case](docs/image/diagrams/use-case.png)

### 2.5.2. Class Diagram

![Class Diagram](docs/image/diagrams/class-diagram.png)