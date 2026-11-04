## Abstract Classes
1. ​User «abstract» 
​Attributes:
- userId: int, 
- status: String,
- role: String
​Methods: 
- login(): boolean, 
- recoverPassword(): void
2. ​Content «abstract» 
​Attributes: 
- contentId: int, 
- title: String, 
- description: String, 
- createdAt: Date
​Methods: 
- displayContent(): void
## User Subclasses
3. ​GuestUser extends User
​Attributes: 
- sessionId: String, 
- guestToken: String
​Methods: 
- onDemandAuthentication(): boolean
4. ​RegisteredUser extends User 
​Attributes: 
- username: String, 
- email: String, 
- passwordHash: String, 
- points: int
​Methods: 
- register(): boolean, 
- vote(): void, 
- recommend(): void, 
- requestTitle(): void
5. ​Admin extends RegisteredUser 
​Methods: 
- manageContent(): void, 
- organizeRecommendations(): void, 
- notifyUsers(): void
6. ​Promoter extends RegisteredUser 
​Methods: 
- createPromotion(): void, 
- trackPromotionStatus(): void
7. ​CustomerSupport extends RegisteredUser 
​Methods: 
- verifyPayment(): boolean, 
- handleSupportTicket(): void
8. ​Owner extends RegisteredUser 
​Methods: 
- generateFinancialReport(): void
## Content Subclasses
9. ​Resource extends Content 
​Attributes: 
- resourceType: String, 
- resourceUrl: String, 
- category: String, 
- submittedBy: int, 
- voteCount: int
​Methods: 
- searchResource(): List<Resource>, 
- incrementVote(): void
10. ​Announcement extends Content 
​Attributes: 
- announcementDate: Date, 
- expiryDate: Date
​Methods: 
- publishAnnouncement(): void
## Normal Classes
11. ​StaticPage 
​Attributes: 
- pageId: int, 
- pageTitle: String, 
- pageContent: String
​Methods: 
- viewStaticPages(): void
12. ​Recommendation 
​Attributes: 
- recommendationId: int, 
- userId: int, 
- linkUrl: String, 
- status: String
​Methods: 
- submitRecommendation(): void, 
- checkDuplicate(): boolean
13. ​TitleRequest 
​Attributes: 
- requestId: int, 
- requestTitle: String, 
- requestedBy: int, 
- requestStatus: String
​Methods: 
- submitTitleRequest(): void
14. ​Promotion 
​Attributes: 
- promotionId: int, 
- promoterId: int, 
- resourceId: int, 
- status: String
​Methods: 
- submitAdRequest(): void, 
- updateStatus(): void
15. ​Payment 
​Attributes: 
- paymentId: int, 
- promotionId: int, 
- amount: double, 
- screenshotPath: String, 
- verificationStatus: String
​Methods: 
- uploadScreenshot(): boolean, 
- verifyPaymentByAgent(): boolean
16. ​Notification 
​Attributes: 
- notificationId: int, 
- userId: int, 
- message: String, 
- isRead: boolean
​Methods: 
- sendNotification(): void
17. ​SupportTicket
​Attributes: 
- ticketId: int, 
- promotionId: int, 
- senderId: int, 
- message: String
​Methods: 
- sendMessage(): void, 
- getConversation(): List<SupportTicket>