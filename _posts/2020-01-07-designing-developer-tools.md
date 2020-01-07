---
Layout:
Title: designing developer tools
Date: 2020-01-07
categories:
---

### Balance the CLI and UI
There’s an art to ensuring that information presented in the UI is complementary to what the user is accomplishing in the CLI. If you don’t get the balance right, your tool can end up being a workflow impediment rather than a benefit.

Let’s walk through an example I dealt with recently: someone signing in to Serverless.

If the user has logged in before, it’s probably best for them to type sls login into the CLI and bam—they’re in. But what if the user is logging in for the first time? You could definitely handle this flow with in-line CLI prompts, but this ends up being clunky and can take ages. By funneling the user through a UI, you’ll have way more control over making it a great experience and getting them to the “Ah HA!” moment as quickly as possible.

Another thing to never forget as a dev-tools designer: in the CLI, an engineer will use shortcuts for everything. No need to take the scenic route to what they’re looking for; using shortcuts is like snapping your fingers outside a hotel lobby and being teleported straight to the comfy sofa in Room 202 where you’re watching Fixer Upper on HGTV. Magical.

From a design perspective, this means that as long as the core commands still work, the entire structure of the application can change and engineers might not even notice or care. All they need to know is that a finger snap puts them on their comfy sofa.

Of course, a UI takes a wholly different approach, providing progressive context and waypoints to craft a user journey.

Continuing with the hotel example: users start in the lobby, walk past the concierge, see the signs for the elevators, smell fresh-baked cookies wafting from the continental breakfast... All these cues help users orient themselves. Remove or move too many of them and the overall experience can be ruined.

Tl;dr: be careful about changing the UI. The CLI doesn’t matter as much.

### Open source vs. focus
One of the things that drew me into Serverless from day one was the passionate developer community. We wouldn’t be where we are today without all those issues and PRs.

Having said that, being open source adds an interesting aspect to the product development process: where a typical engineering planning meeting might involve going through maybe a couple handfuls of active issues and open PRs - we have dozens. And being responsible product owners, we make sure to review and reply to all of them, all of which takes time.

The (positive) flip side is that many suggestions end up actually informing the direction of our product. Honestly—we frequently discuss user-submitted issues that uncover things we either hadn’t planned for or hadn’t realized were so important. It makes for some pretty lively development to say the least :)

