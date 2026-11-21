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
#### 1.2.2. Specific objectives
### 1.3. Methodologies
#### 1.3.1. Requirement Elicitation Methodology
#### 1.3.2. Requirement analysis and Modeling
#### 1.3.3. Software Process Model and Management Strategy
### 1.4. Scope and Limitation of the Project
#### 1.4.1. Project Scope
#### 1.4.2. Limitation
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
