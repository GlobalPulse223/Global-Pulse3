# Security Specification for Global Pulse

## Data Invariants
1. Articles: Any user can read, but only admins can create/update.
2. Comments: Any authenticated user can create a comment if they are verified. Users can delete their own comments.
3. Alerts: Only admins can create alerts. Anyone can read.
4. Users: Users can only read/update their own profile.

## The "Dirty Dozen" Payloads
*(Examples that should be blocked)*
1. Unauthenticated user trying to read/write restricted collections.
2. Anonymous user trying to comment.
3. Non-admin user trying to create/edit an article.
4. User trying to update another user's profile.
5. User trying to update their own 'subscriptionTier' to 'premium' without admin check.
6. User trying to inject a 1MB string into 'title'.
7. User trying to create a comment with an invalid articleId.
8. User trying to create an alert.
9. User trying to delete someone else's comment.
10. User trying to create an article with an invalid imageUrl.
11. Admin trying to update an article that is already 'published' (if we added status).
12. User trying to create a user with a non-matching userId.
