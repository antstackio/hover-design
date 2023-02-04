---
description: Hover Design - Git Playbook
---

# Git Playbook

[Fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks) the repository. This creates a copy of Hover Design’s codebase into your own profile and allows you to freely work on the codebase.

## Branch Naming Convention

Use the naming convention for simple identification of purpose

```jsx
components / list / tests;
```

The basic structure goes as

```jsx
{type of feature}/{specific component name}/{additional details}
```

Overall Only {type of feature} is strict it can be

| components | Branches relating to components and adding to the main library. Can be tests,code,docs or as it is if its everything. Eg: components/button/docs adds docs for the button component |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| tooling    | Branches that add dev tooling. Eg: tooling/ci-cd/husky adds husky hooks for easing CI                                                                                               |
| example    | Adds example code Eg: example/usage-with-next has example of using hover with nextjs                                                                                                |
| bugfix     | These branches focus on bugfixing and take top priority when reviewing PRs                                                                                                          |

## Commiting code

Have a initial check of the code you are commiting, make sure you branch is upto date with the latest main branch. Add crisp, concise messages. No `first commit` type of commits. Keep Commits small and readable as someone has to review your PR anything more than 180 lines of code is a big commit. A good commit message is: `adds hollow and primary variants of button`

Always commit and push code with a WIP in the description if changes are not yet final but keep an habit of committing code at EOD.

When pair programming add a co-author, to add a co-author write your message like this

```jsx
git commit -m "**commit title

Commit body

Co-authored-by: name <additional-dev-1@example.com>
Co-authored-by: name <additional-dev-2@example.com>**"
```

Helps to know the people who have contributed to a specific piece of code and can help with context switch and KT

Do not commit editor specific files and always make sure your Linter and Formatter isn’t overriding the project’s linter.

## Reviews take top priority

When a PR is up for review it will be reviewed so that no one is blocked on review. also at a time one developer should work on 1 issue unless it’s blocked.

## Use squash and merge for PR’s to main

Helps keep a clean commit history for main

## Delete Branches after merge

You can deal with your own forks post merge.

## Keep PR Body detailed

A blank description PR is bad, add images, what has been introduced, any communication to the reviewer or any deployment link should be there.

Reviews should be clear too, raising nitpicks and possible questions that you may have as a reviewer should be put up, questions you have looking at someone’s code can come from others too.

## Never mix tasks in one PR

Its always better to raise 2 different PRs if you think that you are covering more than one concise feature. Eg: you modify the way padding is applied throughout the app while making a navbar, separate the padding calculation into a different PR so that its clear.

## Always link the proper milestone and project

Always link your PR and also use [keywords](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue) to link the issue with which its associated

## There should be no PR without a linked issue

even if the task is ad-hoc, create a issue first
