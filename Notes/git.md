## Introduction

Here are my notes for the Foundations course: Section - Prerequisites - Git. These notes are based on the website, [Learn Git Branching](https://learngitbranching.js.org/).

---
## Contents

### Git
1. [Introduction](#git-intro)
2. [Moving around Git](#git-moveingit)
3. [Moving Work Around](#git-movework)
4. [A Mixed Bag](#git-mixedbag)

---

<a id="git-intro"></a>
### Introduction
| Topic | Notes |
|-------|-------|
| git commit | Snapshot of all tracked files in dir. |
| git branch <BRANCH_NAME> | Pointers to a specific commit; include work of this commit and all parent commits. No storage/ mem overhead. |
| git checkout <BRANCH_NAME> | Branch that we are curr working on. |
| git checkout -b <BRANCH_NAME> | Create new branch and check out. |
 git merge <BRANCH_NAME> | Creates a commit that has 2 unique parents; combine work from 2 different branches together. Merge <BRANCH_NAME> to current branch. |
| git rebase <BRANCH_NAME> | Rebase onto <BRANCH_NAME>; copies set of commits and plops them onto <BRANCH_NAME> in a new commit. E.g. On branch bugFix, rebase onto Main, checkout to main, rebase onto bugFix = Will just shift Main to bugFix.|

<a id="git-moveingit"></a>
### Moving around in Git
#### Moving through commit tree.
| Topic | Notes |
|-------|-------|
| HEAD | Name for currently checked out commit; the commit we are curr working on. |
| To detach head: git checkout <CURR_COMMIT_NO> | Attach HEAD to commit instead of branch. HEAD usually points to a branch. When we check out a branch, HEAD points to the branch. Then we can detach it by checking out the commit no. |
| ^ | Move upwards one commit at a time. E.g. git checkout main^ = Shift HEAD to commit above main, main^^, git checkout HEAD^ |
| ~<NUM> | Move upwards a number of times. E.g. git checkout HEAD~4|
| git branch -f main HEAD~3 | To reassign a branch to a commit. Moves main branch to 3 parents behind HEAD by force. |
| git reset HEAD~1 | Undo changes in git in local repo. Move branch backwards as if commit didn't happen in the first place. |
| git revert HEAD | Undo changes in git in remote repo. Creates a new commit that introduces changes to reverse the last commit. |

<a id="git-movework"></a>
### Moving Work Around
| Topic | Notes |
|-------|-------|
| git cherry-pick <COMMIT_NO1> <COMMIT_NO2> .. | Copy a series of commit to below current location (HEAD). |
| git rebase -i HEAD~4 or git rebase -i <COMMIT_NO>| Interactive rebase to commit specified. Rearrange or drop any commits from current head/ COMMIT_NO to commit specified. |
| 

<a id="git-amixedbag"></a>
### A Mixed Bag
| Topic | Notes |
|-------|-------|
| To grab only one commit | <ul><li>git rebase -i</li><li>git cherry-pick</li></ul> |
| To make changes in commit way back in history | <ul><li>Commit order: newImage > caption. Want to make changes to newImage.</li><li>How? (1) Reorder commits so the one we want to change (newImage) is on top with git rebase -i. (2) Make slight modifications with git commit --amend. (3) Reorder commits back to how they were prev before. (4) Move main to updated part of 3.</li><li> OR use git cherry-pick: (1) git checkout to branch/ commit where you want to start again from. (2) git cherry-pick commit. (3) git commit --amend to make changes to that coommit. (4) git cherry-pick the next commit after tt. |
|  git tag <TAG_NAME> <COMMIT_NO>| To permanently mark historical points in project's history. Never move as more commits are created, cannot be checked out/ cannot commit directly on a tag and hence, it will have to be a detached HEAD and not a branch that can be moved to the commit. If leave out COMMIT_NO, it will just tag the where HEAD is at. if you checkout a tag, it will be the detached head pointing to it. |
| git describe <ref> | If ref not specified, then git uses where you're checked out right now (HEAD). Output = <tag = closest ancestor tag in history>_<numCommits = how many commits away tt tag is>_g<hash = Of commit being described.>