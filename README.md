This project is demo about Git
git init : add git to project
git status : show status of git
git add : add file to git
    git add . : add some file
git commit -m <String> : add a String label for file when added this file

git log : show log by Id
git show : show log property by use id
git diff : show difference of file, before and after change this file

git checkout : remove file in working directory
git reset : remove change in staging are

git checkout -b <A> : add branch A to git
git checkout <A> : switch to branch A
git branch : show all branch
git merge <B> : add change from A to B
git branch -D <A> : delete branch A from workspace

git reset --soft : undo change to staging area
git reset --mixed : undo change to work directory
git reset --hard : undo change from file

git revert : add new commit override old commit & remove code

<<<<<<< HEAD
Pull request : work with team
    git checkout -b <_branch> : add new branch
    git push origin <_branch> : push code of branch to github
    create a pull request on Github
    review code:
        review code online
        fetch branch into local to set offline (optional)
        approve the pull request
    merge to master
=======
git clone
git pull

Pull request : work with team use Github
    1. git checkout -b <feature/_branch>
    2. git push origin <branch>
    3. create pull request on Github
    4. review code
    5. merge to master
>>>>>>> feature/horse-class

Resolve conflicts
When will conflicts happen?
    1 Changing the same file + same line
    2 A deleted file X, but B modified file X
Method 1
    1 Using 'git rebase'
    2 Resolve conflicts 
    3 Push again with -f
Method 2
    1 Merge updated master to feature branch
    2 Resolve conflict
    3 Commit and push
<!-- -------- -->
working directory : file don't  modified
staging are : file has modified
repository : about commits