## Release 2: Basic Git Commands
Define the following commands and describe how they work/what they do.  


#### add

> Add file contents to the index. In essence it stages the changes you have made which you can eventually save or commit. To use the command you use: **$ git add [path/filename]** or recursively with **$ git add .** .

#### branch

> List, create or delete branches. It’s a general branch management tool that can typically be used as such: **$ git branch** lists your available branches, **$ git branch [branchname]** to create a new branch, **$ git branch -v** to view the last commit on each branch or **$ git branch -d [branchname]** to delete a branch.

#### checkout

> Checkout a branch or paths to the working tree. A command that can typically be used as such: **$ git checkout [branch]** to switch from your current branch to the branch specified or  **$ git checkout -b [branchname] to both create and then switch to a branch.

#### clone

> Clone a repository into a new directory. Used to get a copy of a repo to use locally or collaborate on a project. Used as such: **$ git clone [url]** which copies the directory which be named as the project listed in the url by default.

#### commit

> Record changes to the repository. Once items and changes have been staged, they need to be committed to record a snapshot. Most commonly used as such: **$ git commit -m “commit message”** which both commits and add a message for easier tracking or as **$ git commit -am “commit message”** which automatically adds or stages then commits with an added message. 

#### fetch

> Download objects or refs from another repository. It helps you synchronize with another repo by pulling do whatever changes you don’t have. Used as such: **$ git fetch [alias or master repo]** which pulls down the changes and create remote branches that can be used to merge with your local repo. 

#### log

> Show commit logs. It can be used to show all the commit messages up to your current snapshot. Used as such: **$ git log** which shows a detailed list of commits and related info, **$ git log —oneline** which is a more simplified view or **$ git log —oneline —graph** which gives the simplified view plus a graphical representation that’s useful when multiple branches have been used. 

#### merge

> Join two or more development histories together. Used to incorporate the work on a branch into that of another or the master branch. Used as such **$ git merge [branch]** which merges the branch referenced with the master. Can also be used as: **$ git merge [alias] [branch]** which can be used to merge items fetched from the alias into a branch.

#### pull

> Fetch from and integrate with another repository or a local branch. In essence, combining the fetch command and the merge command into one unified command. Used as such **$ git pull origin master** which fetched from the the remote master repo and merges with the local branch you’re in.

#### push

> Update remote refs along with associated objects. In essence, used to send the commits made locally to the remote repo such as on Github. Used as such **$ git push [alias] [branch]** or **$ git push origin master** which makes your [branch] the new [branch] on the [alias] remote.

#### reset

> Reset current HEAD to the specified state. Can be used as such: **$ git reset HEAD — [file]** which will unstage the file referenced or as **$ git reset —soft** which undoes the last commit while leaving the files staged. More permanently, **$ git reset —hard** which upstages the files and returns them to their state at the most reset commit. 

#### rm

> Remove files from the working tree and from the index. Like reset, it can be used to remove files from the stage but it goes farther in that it also deletes them from the index. Used as such: **$ git rm [file]** which removed the file specified. 

#### status

> Show the working tree status. Can be used to see what has been modified or staged. Typically used as such: **$ git status** which lists whats going on as well as provides suggestions for next steps or **$ git status -s** which is simplified or condensed. 


## Release 4: Git Workflow

- Push files to a remote repository

	- Add files or make changes to files in the desired repository.
	- Using the command line and cd, navigate to the that desired repo.
	- **git status** to ensure your changes are recognized.
	- **git add [filename]** or **git add .** to stage the changes.
	- **git commit -m “[commit message]”** to commit and create snapshot.
	- Finally, **git push origin master** to sync the commit with the remote repo on Github.

- Fetch changes

	- You will need to check the current remote using **git remote -v** then if needed, use **git remote add upstream [url from where you want to fetch]** to add a new remote. 
	- Repeat step one to verify new remote.
	- **git fetch upstream** to pull the changes you want into a new local branch you use to merge with you branch.
	- Ensure you on your master branch with **git branch** and checkout if you need to switch to it. 
	- **git merge upstream/master** to merge the fetched branch with your master branch.
	- **git commit -m “[commit message]”** to commit the added changes and finally **git push origin master** to sync with the remote repo.

- Commit locally

	- Once files have been staged, use **git commit -m “[commit message]”** to save and snapshot the changes. 
	- When able, you then **git push origin master** to sync the commits you’ve made to the remote repo.


## Release 5: Reflection

> This challenge was fairly straight forward although as little time consuming. I felt I was familiar with git but made a point of exploring the links shared in the challenge for deeper learning. I had been exclusively using the Github GUI application that we downloaded two weeks. It felt rather easy to use but I wondered if I wasn't missing out on experiencing or knowing how to achieve same goals using the command line. 

> As fate would have it, I ran into some issues with GUI app last week and needed to switch to the command line to compete my work. I felt a little lost but was able to pair with a fellow boot who provided a great hours long intro course into git for command line. That learning was invaluable and set me up nicely for this first challenge.

> Puru, the boot that I paired with, also suggested I check out [Git Immersion](http://gitimmersion.com/). He found it a useful git tutorial and one that I bookmarked and will be referring back to as needed.