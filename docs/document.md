# Chapter One: Introduction
## 1.1 Understand the Problem Background and Define the Exact Problem
### 1.1.1 Background of the Problem

Choosing a suitable career is an important decision for students, graduates, and job seekers. However, many people face difficulties identifying career paths that match their interests, skills, educational backgrounds, and future goals.

Career information can be scattered across different sources, making it difficult for users to find reliable guidance, understand job market requirements, and learn from people with relevant experience. Traditional career guidance may also be limited in availability, accessibility, or personalization.

A Community-Driven Career Navigation Platform aims to address these challenges by creating a shared digital environment where users can access career information, exchange experiences, receive guidance from community members and professionals, and explore suitable career opportunities.

### 1.1.2 Understanding the Real Environment

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

2. Limited career guidance: Some students and graduates have limited access to qualified career advisors and mentors. Research on selected schools in Addis Ababa has identified shortages of counselors and other barriers to career guidance.&#x20;

   [image](https://www.google.com/s2/favicons?domain=https://etd.aau.edu.et\&sz=32)

   AAU ETD+1

3. Lack of awareness: Users may not fully understand the range of career paths available to them.

4. Skills and job-market information gaps: Users may struggle to identify the skills, qualifications, and practical experience required for different careers.&#x20;

   [image](https://www.google.com/s2/favicons?domain=https://www.skillsforemployment.org\&sz=32)

   International Labour Organization+1

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

### 1.1.5. Define the Exact Problem

The exact problem this project aims to solve is the lack of an accessible, centralized, and community-supported system that helps students, graduates, and job seekers discover suitable career paths, obtain reliable career information, connect with experienced professionals, and understand the skills needed to achieve their career goals.

The proposed Community-Driven Career Navigation Platform will address this problem by bringing career resources, community discussions, mentorship, career exploration, and relevant opportunity information together in one digital platform.

- Summary

Problem

Career information and guidance can be fragmented, difficult to access, and insufficiently personalized.

Target users

Students, graduates, job seekers, professionals, mentors, and educational institutions.

Proposed solution

A community-driven platform that combines career information, peer support, professional mentorship, and career exploration.

Expected outcome

Help users make more informed career decisions and develop clearer plans for their professional futures.

Important for your project report: Treat these points as an initial problem analysis. Before finalizing it, gather feedback from your intended users to confirm which problems they experience most frequently and whether your proposed platform addresses their actual needs.

## 1.2. Statement of the Problem

Baamlk's Note
## 1.3. Objectives of the project
### 1.3.1. General objective

Baamlk's Note
### 1.3.2. Specific objectives

Baamlk's Note
## 1.4. Methodologies
### 1.4.1. Requirement Elicitation Methodology

Honelign's Note
### 1.4.2. Requirement analysis and Modeling

Honelign's Note
### 1.4.3. Software Process Model and Management Strategy

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
## 1.5. Scope and Limitation of the Project
### 1.5.1. Project Scope
 
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
### 1.5.2. Limitatio

Bamlak's Note
## 1.6. Domain Vocabulary and Glossary
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
## 1.7 Reusable Components and Existing Solutions

Helen's Note
## 1.8. Development Tools

- Frontend - Html, CSS, and Javascirpt
- Backend  - PHP
- Database - MySQl
- Documention - VS Code
## 1.9. Team Organization

- Minase Mnegesha  - Project Management & Documentation
- MILLION MERKINE  - Backend Development & API
- Helen Eshetu     - Database Design & Management
- Honelign Tekele  - Frontend Development & UI Testing
- Merihun Meshesha - Integration, Deployment & System Testing
- Bamlak Tadesse   - System Design & Modeling

### 1.10. Project Cost and Resource Estimation

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