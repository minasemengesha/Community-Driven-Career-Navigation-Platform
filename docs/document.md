# Wachemo University 
## Department of Software Engineering

## Acknowledgement


## Table of Contents


## Acronym


## Executive Summary


## Chapter One: Introduction
### 1.1 Understanding the Problem Background and Knowing the Exact Problem
#### 1.1.1. Background of the Problem

Choosing a suitable career is an important decision for students, graduates, and job seekers. However, many people face difficulties identifying career paths that match their interests, skills, educational backgrounds, and future goals.

Career information can be scattered across different sources, making it difficult for users to find reliable guidance, understand job market requirements, and learn from people with relevant experience. Traditional career guidance may also be limited in availability, accessibility, or personalization.

A Community-Driven Career Navigation Platform aims to address these challenges by creating a shared digital environment where users can access career information, exchange experiences, receive guidance from community members and professionals, and explore suitable career opportunities.

#### 1.1.2. The Real Environment

The project focuses on the environment in which students, graduates, job seekers, and professionals interact with career information.

- Students need guidance to identify career paths that match their interests and abilities.
- Graduates need information about employment opportunities and the skills required by employers.
- Job seekers need help understanding career options and improving their professional development.
- Professionals and mentors can share their experiences, knowledge, and advice.
- Educational institutions and career advisors can provide relevant career information and guidance.

The platform would provide a common place for these users to communicate, share knowledge, ask questions, and learn from one another.

#### 1.1.3. Root Causes of the Problem

The main causes that may contribute to career navigation difficulties include:

1. Lack of centralized information: Career information is spread across different websites, institutions, and social networks.

2. Limited career guidance: Some students and graduates have limited access to qualified career advisors and mentors. Research on selected schools in Addis Ababa has identified shortages of counselors and other barriers to career guidance.

3. Lack of awareness: Users may not fully understand the range of career paths available to them.

4. Skills and job-market information gaps: Users may struggle to identify the skills, qualifications, and practical experience required for different careers.

5. Limited professional networking: Students and graduates may have difficulty connecting with experienced professionals who can provide practical advice.

6. Lack of personalized guidance: General career information may not adequately consider an individual's interests, abilities, educational background, and goals.

#### 1.1.4. Impact on Target Users

These challenges can affect different users in several ways:

- Students: Difficulty choosing an appropriate field of study or future career.
- Graduates: Difficulty identifying career opportunities and preparing for employment.
- Job seekers: Difficulty understanding job requirements and planning skill development.
- Professionals: Fewer opportunities to share knowledge and mentor people entering their fields.
- Educational institutions: Difficulty providing consistent career guidance and connecting students with relevant professional information.

As a result, users may experience confusion when making career decisions, spend more time searching for information, develop skills that do not match their intended career, or miss relevant opportunities.

#### 1.1.5. The Exact Problem

The exact problem this project aims to solve is the lack of an accessible, centralized, and community-supported system that helps students, graduates, and job seekers discover suitable career paths, obtain reliable career information, connect with experienced professionals, and understand the skills needed to achieve their career goals.

The proposed Community-Driven Career Navigation Platform will address this problem by bringing career resources, community discussions, mentorship, career exploration, and relevant opportunity information together in one digital platform.

### 1.2. Objectives of the project
#### 1.2.1. General objective

To design and develop a web-based, community-driven career navigation platform that facilitates the collaborative curation, ranking, and discovery of high-quality educational resources, while implementing a frictionless lazy-authentication system, a creator point-reward mechanism, and a transparent manual monetization workflow.

#### 1.2.2. Specific objectives

- To Implement Flexible Authentication & Access Control: Develop a secure role-based architecture supporting public registration for creators and promoters, pre-configured staff logins for administrators, support agents, and owners, and on-demand guestTokens for anonymous visitors.

- To Enable Dual-Track Content Discovery & Search: Build dynamic browsing and keyword/URL search features that automatically detect duplicate resource submissions and encourage community voting over redundant entries.

- To Establish Community Participation & Point Systems: Implement a secure voting mechanism (restricted to one vote per user or guestToken) alongside a point accumulation and redemption system that rewards approved creator contributions with free promotions.

- To Support Transparent Monetization & Verification: Provide a structured ad-submission pipeline where promoters can request tiered placements, upload payment screenshots, and track statuses, backed by a manual verification interface for customer support agents.

- To Provide Comprehensive Administration & Reporting: Create a robust management dashboard enabling administrators to moderate content, group duplicate recommendations, manage announcements, and allow the system owner to generate performance and financial analytical reports.

### 1.3. Methodologies
#### 1.3.1. Requirement Elicitation Methodology

To successfully define and build the Community-Driven Career Navigation Platform within a strict 60-day university timeline, a structured, lightweight, and user-centric requirement elicitation methodology is employed. Given the project's academic constraints and defined feature scope, the elicitation process combines four core techniques:

- Document & Project Constraint Analysis: Reviewing academic guidelines, project briefs, and technical boundaries (e.g., manual payment verification, no real-time chat, no automated email dispatching) to establish baseline system constraints.

- Stakeholder & Actor Profiling: Identifying and analyzing distinct system roles—unregistered guests, registered creators, promoters, customer support agents, administrators, and the system owner—to map out precise permissions and dashboard requirements.

- Use-Case & Workflow Modeling: Translating core functional goals into structured use cases and business rules, specifically designing complex workflows like "Lazy Authentication" (on-demand guest tokenization), dual-track recommendations, and duplicate detection.

Iterative Prototyping (Design-First Approach): Utilizing static HTML/CSS layouts and mock data structures as visual prototypes to validate interface flows, ensure team alignment, and refine system logic before full backend (PHP/MySQL) implementation.

#### 1.3.2. Requirement analysis and Modeling

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

#### 1.3.3. Software Process Model and Management Strategy

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

### 1.4. Scope and Limitation of the Project
#### 1.4.1. Project Scope

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

#### 1.4.2. Limitation

While the Community-Driven Career Navigation Platform is strategically structured to balance academic requirements with functional efficiency, several implementation boundaries and project limitations should be noted:

- Time and Resource Constraints: The platform is developed within a strict 60-day academic timeline by a 6-member student team, requiring an incremental phased development model managed alongside university final exams.

- Manual Processing Limits: To ensure technical manageability within student constraints, payment processing relies on manual transaction screenshot verification by customer support agents rather than an automated third-party payment gateway.

- Communication and Notification Boundaries: The system intentionally omits real-time live chat and external automated email dispatching, utilizing structured ticketing and internal system alerts instead.

- Authentication Scope: Unregistered guest interactions are restricted to on-demand, temporary tokenization exclusively for voting and recommendations, leaving general content browsing entirely stateless.

### 1.5. Domain Vocabulary and Glossary
### 1.6. Development Tools
### 1.7. Team Organization
### 1.8. Project Cost and Resource Estimation
## Chapter Two: Requirement Analysis and Specifications
### 2.1. Description of the Current System
### 2.2. Reusable Components and Existing Solutions
### 2.3. Proposed System
#### 2.3.1. Overview
#### 2.3.2. Business Rule
#### 2.3.3. Functional Requirements
#### 2.3.4. Non-Functional Requirements
#### 2.3.5. Actor and Use case Identification
#### 2.3.6. System Model
##### 2.3.6.1. Use case Model
###### 2.3.6.1.1. Use Case Description
##### 2.3.6.2. Activity Diagrams
##### 2.3.6.3. Class Diagram
## Chapter Three: Database Design
### 3.1. Conceptual Database Design of the New System 
#### 3.1.1. Entities identification and Description 
#### 3.1.2. Attributes identification and description 
#### 3.1.3. Relationship identification and description 
#### 3.1.4. ER Diagrams
### 3.2. Logical Database Design of the New System 
#### 3.2.1. ER to Table Mapping 
#### 3.2.2. Validate Model using Normalization    
##### 3.2.2.1. First Normal Form (1NF)  
##### 3.2.2.2. Second Normal Form (2NF) 
##### 3.2.2.3. Third Normal form (3NF)  
#### 3.2.3. Relational Schema with Referential Integrity after normalization 
### 3.3. Physical Database Design of the New System 
#### 3.3.1. Physical Design Strategy 
## Chapter Four: System Design 
### 4.1. Introduction
### 4.2. Software Architecture
#### 4.2.1. Subsystem Decomposition
#### 4.2.2. Component Diagram 
### 4.3. Design, Engineering, and Execution Standards
#### 4.3.1. Visual Design Tokens and UI Components
#### 4.3.2. Page Structure and Layout Conventions
#### 4.3.3. Language, Terminology, and Label Standards
#### 4.3.4. Shared Data Schema, Naming Conventions, and Access Permissions
#### 4.3.5. Delivery Sequence, MVP Scope, and Quality Assurance Rules
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
